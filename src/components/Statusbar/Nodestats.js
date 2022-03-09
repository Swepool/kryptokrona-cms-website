import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import Countdown from "./Countdown";
import {color} from "../../theme/colors";

const Section = styled.div`
  background-color: ${color.background};
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
    padding: 0 20px;
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

    const [nodes, setNodes] = useState('Loading...')
    const [height, setHeight] = useState('Loading...')
    const [hashrate, setHashrate] = useState('Loading...')

    useEffect(() => {
        fetch("https://blocksum.org/api/getinfo")
            .then(res => {
                if (!res.ok) {
                    throw Error('could fetch blocksum')
                } else return res.json()
            })
            .then(data => {
                setHashrate(`${(data.hashrate / 1000000).toFixed(2)} MH/s`)
                setHeight(data.height)
                setNodes(data.grey_peerlist_size)
            }).catch(err => {
            console.log(err)
            fetch('https://swenode.org/api/getinfo')
                .then(res => res.json())
                .then(data => {
                    setHashrate(`${((data.hashrate / 1000000).toFixed2)} MH/s`)
                    setHeight(data.height)
                    setNodes(data.grey_peerlist_size)
                })
        })
    })

    return (
        <Section>
            <Wrapper>
                <Countdown/>
                <ItemWrapper>
                    <Item>
                        <Title>Height</Title>
                        <Text>{height}</Text>
                    </Item>
                    <Item>
                        <Title>Hashrate</Title>
                        <Text>{hashrate}</Text>
                    </Item>
                    <Item>
                        <Title>Nodes</Title>
                        <Text>{nodes}</Text>
                    </Item>
                </ItemWrapper>
            </Wrapper>
        </Section>
    )
}

export default Nodestats