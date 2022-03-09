import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: transparent;
  height: 180px;
  width: 30%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }


  @media screen and (max-width: 1000px) {
    width: 46%;
  }

  @media screen and (max-width: 629px) {
    width: 100%;
    height: 180px;
  }
`

const CardContent = styled.div`
  padding: 20px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-weight: 200;
  color: #fff;
`


const ItalicTitle = styled.h3`
  font-style: 'italic'
  margin: 0;
  font-weight: 200;
  color: #fff;
`

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgb(151, 151, 151);
  font-weight: 400;
`

const AboutCards = () => {

    useEffect(() => {
        async function getSupply() {
            let xkrSupply

            //add commas to numbers
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            //Get supply from CoinPaprika
            await fetch("https://blocksum.org/api/v1/supply")
                .then(res => {
                    if(!res.ok) {
                        throw Error("Couldn't fetch CoinPaprika")
                    } return res.json()
                })
                .then(data => {
                    xkrSupply = (data.supply.current)
                })
                .catch(err => console.log(err))
            document.getElementById("circ-supply").textContent = `${numberWithCommas(xkrSupply)} XKR`
        }
        getSupply()
    });

    return (


        <Section>
            <Wrapper>

                <Card>
                    <CardContent>
                        <CardTitle>🪙 Max supply</CardTitle>
                        <Text>1,000,000,000 XKR</Text>
                        <CardTitle>🔃 Circulating</CardTitle>
                        <Text id="circ-supply">-</Text>
                    </CardContent>

                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>⛏️ GPU Mining Algorithm</CardTitle>
                        <Text>We currently running on CryptoNight-Pico, which is a fairer algo than Bitcoin's SHA256 and can even be competently mined on ARM based phones!</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>⏲️ Blocktime</CardTitle>
                        <Text>Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>🕵 Untraceable</CardTitle>
                        <Text>XKR transactions make use of ring signatures and stealth addresses to keep prying eyes off of your private transactions!</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>🍄 Fungible</CardTitle>
                        <Text>Kryptokrona's untracable transactions make coins fungible, meaning that they don't carry any unnecessary baggage.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>📈 Drama-free emission curve </CardTitle>
                        <Text>Our network reduces the amount of new coins minted with every block, making for a drama-free emission.</Text>
                    </CardContent>
                </Card>

            </Wrapper>
        </Section>
    )
}

export default AboutCards
