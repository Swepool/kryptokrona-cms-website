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
            await fetch("https://api.coinpaprika.com/v1/tickers/xkr-kryptokrona")
                .then(res => {
                    if(!res.ok) {
                        throw Error("Couldn't fetch CoinPaprika")
                    } return res.json()
                })
                .then(data => {
                    xkrSupply = (data.total_supply)
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
                        <CardTitle> Max supply</CardTitle>
                        <Text>1,000,000,000 XKR</Text>
                        <CardTitle> Circulating</CardTitle>
                        <Text id="circ-supply">300,000,000</Text>
                    </CardContent>

                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Algorithm</CardTitle>
                        <Text>We currently running on CryptoNight-Turtle (CN-Pico), which originated from ByteCoin.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Blocktime</CardTitle>
                        <Text>Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Lorem</CardTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Lorem</CardTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Lorem</CardTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                    </CardContent>
                </Card>

            </Wrapper>
        </Section>
    )
}

export default AboutCards