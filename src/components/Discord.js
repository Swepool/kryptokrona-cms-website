import * as React from 'react'
import {useEffect} from "react";
import styled from "@emotion/styled";
import DiscordLogo from '/src/images/discord.png'
import {color} from "../theme/colors";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  padding: 0 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`

const Wrapper = styled.a`
  box-sizing: border-box;
  max-width: 1320px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 40px;
  border-radius: 10px;
  border: 1px solid ${color.white60};
  justify-content: space-between;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    border: 1px solid ${color.white80};
  }

  @media screen and (max-width: 579px) {
    padding: 10px 20px;
  }
  
`

const RoundButton = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${color.white60};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms;
  color: ${color.white};

  &:hover {
    background-color: ${color.white};
    cursor: pointer;
  }
`

const Title = styled.p`
    font-family: "Roboto Mono";
  color: white;
`

const Discord = () => {
    useEffect(() =>{
        async function getDiscord() {
            const response = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
            const data = await response.json()
            console.log(data.presence_count)
            document.getElementById('online').innerHTML += ` ${data.presence_count} online`
        }
        getDiscord()
    })

    return(
        <Section>
            <Wrapper href="https://discord.gg/kryptokrona">
                <>
                <img src={DiscordLogo} height="40px"/>
                <Title id="online"><span className="rgbText" style={{fontSize: "1.2rem"}}>•</span></Title>
                </>
                <RoundButton href='https://discord.gg/kryptokrona'>⮕</RoundButton>
            </Wrapper>
        </Section>
    )
}

export default Discord