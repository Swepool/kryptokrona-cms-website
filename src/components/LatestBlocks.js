import * as React from 'react'
import {useEffect, useState} from "react";
import moment from "moment";
import styled from "@emotion/styled";

const Section = styled.div`
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
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }

`

const Title = styled.h2`
  padding: 10px;
  color: #fff;
`

const Time = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;

  @media screen and (max-width: 1265px) {
    display: none;
  }
`
const Hash = styled.td`
  font-family: "Roboto Mono";
  color: #32e178;
  overflow: hidden;
  max-width: 100px;
  text-overflow: ellipsis;
`

const Diff = styled.td`

  @media screen and (max-width: 1265px) {
    display: none;
  }
`
const Tx = styled.td`
  @media screen and (max-width: 1265px) {
    display: none;
  }
`
const Reward = styled.td`
  @media screen and (max-width: 1265px) {
    text-align: end;
  }
`

const TimeTh = styled.th`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;

  @media screen and (max-width: 1265px) {
    display: none;
  }
`


const DiffTh = styled.th`

  @media screen and (max-width: 1265px) {
    display: none;
  }
`
const TxTh = styled.th`
  @media screen and (max-width: 1265px) {
    display: none;
  }
`

const RewardTh = styled.th`
  @media screen and (max-width: 1265px) {
    text-align: end;
  }
`


const LatestBlocks = () => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [blocks, setBlocks] = useState([])

    useEffect( () => {

        fetch('https://blocksum.org/api/v1/blocks')
            .then(res => res.json())
            .then(data => {
                setBlocks(data.blocks.slice(0, 10))
            })

        const interval = setInterval(() => {
            fetch('https://blocksum.org/api/v1/blocks')
                .then(res => res.json())
                .then(data => {
                    setBlocks(data.blocks.slice(0, 5))
                })
        },5000)
        return () => clearInterval(interval);
    },[])

    const elements = blocks.map(block => {
        return(
            <tr key={block.height}>
                <td>{numberWithCommas(block.height)}</td>
                <Diff>{(block.diff / 1000000).toFixed(0)} M</Diff>
                <Hash>{block.hash}</Hash>
                <Tx>{block.transactions}</Tx>
                <Reward>{(block.reward / 100000).toFixed(2)} XKR</Reward>
                <Time>{moment(block.time * 1000).fromNow()}</Time>
            </tr>
        )
    })
    return(
        <Section>
            <Container>
                <Title>Latest blocks</Title>
                <table>
                    <thead>
                    <tr>
                        <th>Height</th>
                        <DiffTh>Diff</DiffTh>
                        <th>Hash</th>
                        <TxTh>TX's</TxTh>
                        <RewardTh>Reward</RewardTh>
                        <TimeTh>Time</TimeTh>
                    </tr>
                    </thead>
                    <tbody>
                    {elements}
                    </tbody>
                </table>
            </Container>
        </Section>
    )
}

export default LatestBlocks