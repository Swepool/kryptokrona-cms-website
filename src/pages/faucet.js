import * as React from 'react'
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";

const Recaptcha = require('react-recaptcha');

const Section = styled.div`
  margin-top: 80px;
  height: 40vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1d1d1d;

  @media screen and (max-width: 1000px) {
    padding-top: 8em;
    padding-bottom: 6em;
  }
`

const Container = styled.div`
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px 0 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-right: none;
  background-color: transparent;
  color: #fff;
  margin-bottom: 40px;

  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  color: white;
  border-left: none;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  margin: 0;
  transition: 250ms ease-in-out all;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #5ff281;
  }

  &:focus {
    outline: none;
  }
`

const Faucet = (props) => {

    const search = props.location.search;
    const params = new URLSearchParams(search);
    const inComingUrl = params.get('address');


    //handle state and change
    const [status, setStatus] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [inputValue, setInputValue] = useState(inComingUrl)
    const [disableSubmit, setDisableSubmit] = useState(true);


    function handleChange(event) {
        setInputValue(event.target.value)
    }

    useEffect(() => {
        fetch('https://blocksum.org/faucet/balance')
            .then(res => res.json())
            .then(data => {
                data.balance ? document.getElementById('balance').textContent = "Funds available 🥳" : document.getElementById('balance').textContent = 'No funds available 😭'
            })
    })

    function submitForm(e) {
        e.preventDefault()

        const value = {
            "address": inputValue,
            "captcha": captcha
        }
        const json = JSON.stringify(value)

        fetch("https://blocksum.org/faucet/send", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.msg === "recent") {
                    setStatus('Someone recently claimed, please wait a few seconds 🚨')
                    document.getElementById('status').style.color = '#ff2f40'
                } else if (data.msg === "claimed") {
                    setStatus(`You've already claimed 🚨`)
                    document.getElementById('status').style.color = '#ff2f40'
                } else if (data.msg === "sent") {
                    setStatus(`Sent ✅ ${data.tx}`)
                    document.getElementById('status').style.color = '#2fff6a'
                } else if (data.msg === "error") {
                    setStatus(data.errorMsg)
                    document.getElementById('status').style.color = '#ff2f40'
                }

            })
    }

    return (
        <Layout>
            <Seo title="Faucet"/>
            <Section>
                <Container>
                    <Wrapper>
                        <div className="tear rgb"></div>
                        <h1>Faucet</h1>
                        <form>
                            <Input
                                id={'input'}
                                placeholder={'Enter address'}
                                value={inputValue}
                                onChange={handleChange}
                            />
                            <Button
                                type={"submit"}
                                onClick={submitForm}
                                disabled={disableSubmit}
                            >Claim</Button>
                        </form>
                        <Recaptcha
                            sitekey="6LeuuboeAAAAALFj2PEADpIc2jZwLYQOa3R3iiCR"
                            theme="dark"
                            render="explicit"
                            onloadCallback={() => console.log('Captcha rendered')}
                            verifyCallback={() => {
                                setCaptcha(document.getElementById('g-recaptcha-response').value)
                                setDisableSubmit(false)
                            }}
                        />
                        <p id="balance"></p>
                        <p id="status">{status}</p>
                    </Wrapper>
                </Container>
            </Section>

        </Layout>
    )

}

export default Faucet