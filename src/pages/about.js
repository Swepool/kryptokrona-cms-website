import * as React from 'react'
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import AboutCards from "../page-components/AboutCards";
import Nodestats from "../components/Statusbar/Nodestats";
import Seo from "../components/Seo";


const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`


const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 500;
`

const ThinTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  margin-bottom: 10px;
  font-style: italic;
`

const Text = styled.p`
  text-align: justify;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto Mono', monospace;
  margin: 10px 0;

  @media screen and (max-width: 400px) {
    text-align: start;
  }
`



const About= () => {
    return (
        <Layout>
            <Seo title="About"/>
            <Section>
                <Wrapper>
                    <Title>About</Title>
                    <ThinTitle>Money for the future</ThinTitle>
                    <Text>Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow.
                        We work with open source code that allows you to be involved and improve the money of the future.</Text>
                    <Text>Kryptokrona is a decentralized blockchain based on CryptoNote, which forms the basis for Monero, among others.
                        CryptoNote is a so-called “application layer” protocol further developed by TurtleCoin that enables things like: private transactions,
                        messages and arbitrary data storage, completely decentralized.</Text>
                    <Text>On 2 April 2019, the platform was launched in part as a response to the Riksbank’s digital e-krona for the people’s right to create money and to safeguard the private economy without either commercial or state control.</Text>
                </Wrapper>
            </Section>
            <AboutCards/>
            <Nodestats/>
        </Layout>

    )
}

export default About