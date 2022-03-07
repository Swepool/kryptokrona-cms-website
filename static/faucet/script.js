let input = document.getElementById('address')
let submit = document.getElementById('btn')

function enableBtn() {
    submit.disabled = false;
    submit.classList.add('enabled')
}

fetch('https://blocksum.org/faucet/balance')
    .then(res => res.json())
    .then(data => {
            if(data.balance) {
                document.getElementById('balance').textContent = "Funds available 🥳"
            } else document.getElementById('balance').textContent = "No funds available 😭"
    })

submit.addEventListener('click', async e => {
    e.preventDefault()
    let captcha = document.getElementById('g-recaptcha-response').value
    let value = {
        "address": input.value,
        "captcha": captcha
    }
    let json = JSON.stringify(value)
    await fetch("https://blocksum.org/faucet/send", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json
    })
        .then(res => res.json())
        .then(data => {

            console.log(data)

            if(data.msg ==="recent") {
                document.getElementById('status').style.color = '#ff2f40'
                document.getElementById('status').textContent = "Someone recently claimed, please wait a few seconds 🚨"
            } else if (data.msg === "claimed") {
                document.getElementById('status').style.color = '#ff2f40'
                document.getElementById('status').textContent = `You've already claimed 🚨`
            } else if (data.msg === "sent") {
                document.getElementById('status').style.color = '#2fff6a'
                document.getElementById('status').textContent = `Sent ✅ ${data.tx}`
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } else if(data.msg === "error") {
                document.getElementById('status').style.color = '#ff2f40'
                document.getElementById('status').textContent = data.errorMsg
            }

        })

})