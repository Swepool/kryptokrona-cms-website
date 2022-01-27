import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";
import Countdown from "./Countdown";

const Section = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;
  
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
        fetch("https://swenode.org/api/getinfo")
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
        fetch("https://api.coingecko.com/api/v3/coins/kryptokrona")
            .then((response) => response.json())
            .then((data) => {
                const Price = data.market_data.current_price.btc;
                document.getElementById("price").innerHTML = Price * 100000000 + " Sats";
            });
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