import * as React from 'react'
import styled from "@emotion/styled";
import {FaDiscord, FaTelegram, FaTwitter} from 'react-icons/fa'
import analytics from '../../images/Analytics.png'
import {color} from "../../theme/colors";

const Section = styled.footer`
  border-top: 1px solid ${color.divide};
  width: 100%;
  background-color: ${color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 1400px;
  padding: 40px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 579px) {
    flex-direction: column;
    padding: 60px 20px;

  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media screen and (max-width: 580px) {
    justify-content: space-evenly;
    gap: 50px
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 580px) {
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: end;
  margin: 20px 0;

  @media screen and (max-width: 580px) {
    justify-content: center;
  }
`

const NavList = styled.ul`
  padding: 0;
  margin-top: 0;
`

const NavTitle = styled.h3`
  color: ${color.white};
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0;
`

const ListItem = styled.h3`
  color: ${color.white60};
  font-weight: 200;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    color: ${color.white};
    cursor: pointer;
  }
`

const SubTitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: ${color.white60};
  font-weight: 200;
  margin: 0;
  text-align: end;

  @media screen and (max-width: 579px) {
    text-align: center;
  }
`


const Footer = () => {
    return (
        <Section>
            <Container>
                <ListWrapper>
                    <NavList>
                        <NavTitle>Kryptokrona</NavTitle>
                        <a href="https://explorer.kryptokrona.se"><ListItem>Explorer</ListItem></a>
                        <a href="https://kryptokrona.se/Proposal_for_a_New_Nordic_Digital_Currency.pdf"><ListItem>Litepaper</ListItem></a>
                        <a href="/blog/"><ListItem>Blog</ListItem></a>
                        <a href="/guides/"><ListItem>Guides</ListItem></a>
                    </NavList>
                    <NavList>
                        <NavTitle>Hugin</NavTitle>
                        <a href="https://hugin.chat"><ListItem>Website</ListItem></a>
                        <a href="https://kryptokrona.se/Hugin_Whitepaper.pdf"><ListItem>Whitepaper</ListItem></a>
                        <a href="https://github.com/kryptokrona"><ListItem>Github</ListItem></a>
                    </NavList>
                </ListWrapper>
                <ContentWrapper>
                    <div>
                        <SubTitle>Developed by Kryptokrona</SubTitle>
                        <SocialsWrapper>
                            <a href="https://twitter.com/kryptokrona"><FaTwitter aria-label="Twitter" size="1.5em" color="#FFFFFF87"/></a>
                            <a href="https://chat.kryptokrona.se"><FaDiscord aria-label="Discord" size="1.5em" color="#FFFFFF87"/></a>
                            <a href="https://t.me/xkrofficial"><FaTelegram aria-label="Telegram" size="1.5em" color="#FFFFFF87"/></a>
                        </SocialsWrapper>
                    </div>
                    <img alt="Netlify-status" height="20px" src="https://api.netlify.com/api/v1/badges/f7391b45-466e-4665-b428-d96cb549a52a/deploy-status"/>
                    <a href="https://plausible.io/kryptokrona.org"><img alt="Plausible-logo" height="20px" src={analytics}/></a>
                </ContentWrapper>
            </Container>
        </Section>
    )
}

export default Footer