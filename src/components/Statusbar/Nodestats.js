import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";
import Countdown from "./Countdown";
import {color} from "../../theme/colors";

const Section = styled.div`
  background-color:  ${color.background};
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  width: 100%;
  padding: 40px 40px;
  
  @media screen and (max-width: 579px) {
    padding: 0 40px;
  }
`

const ItemWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  max-width: 1400px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  
  @media screen and (max-width: 579px) {
    width: 33%;
    align-items: center;
  }

  @media screen and (max-width: 379px) {
    width: 100%;
  }
`

const Title = styled.h3`
  font-weight: 400;
  margin: 0;
`

const Text = styled.p`
  margin: 0;
`

const Nodestats = () => {

    useEffect(() => {
        fetch("/.netlify/functions/get-node")
            .then((res) => res.json())
            .then(async (data) => {
                const Hashrate = data.hashrate;
                const Height = data.height;
                const Nodes = data.grey_peerlist_size;
                document.getElementById("hashrate").innerHTML =
                    (Hashrate / 1000000).toFixed(2) + " MH/s";
                document.getElementById("height").innerHTML = Height;
                document.getElementById("nodes").innerHTML = Nodes;
            });
        async function calcPrice() {
            let xkrPrice
            //get price of xkr on CoinPaprika
            await fetch("/.netlify/functions/get-coinpaprika")
                .then(res => {
                    if(!res.ok) {
                        throw Error("Couldn't fetch CoinPaprika")
                    } return res.json()
                })
                .then(data => {
                    xkrPrice = (data.quotes.USD.price).toFixed(5)

                })
                .catch(err => console.log(err))
            document.getElementById("price").innerHTML = xkrPrice + " USD"
        }
        calcPrice()
    });

    return(
        <Section>
            <Wrapper>
                <Countdown/>
                <ItemWrapper>
                    <Item>
                        <Title>Height</Title>
                        <Text id="height"></Text>
                    </Item>
                    <Item>
                        <Title>Hashrate</Title>
                        <Text id="hashrate"></Text>
                    </Item>
                    <Item>
                        <Title>Nodes</Title>
                        <Text id="nodes"></Text>
                    </Item>
                    <Item>
                        <Title>Price</Title>
                        <Text id="price"></Text>
                    </Item>
                </ItemWrapper>
            </Wrapper>
        </Section>
    )
}

export default Nodestats