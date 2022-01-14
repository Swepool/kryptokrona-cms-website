import * as React from 'react'
import styled from "@emotion/styled";
import ArtImg from '../../images/Kryptokrona.svg';
import Fillbutton from "../components/buttons/Button";
import Borderbutton from "../components/buttons/Borderbutton";


const Section = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15em;
  padding-bottom: 10em;

  @media screen and (max-width: 579px) {
    padding-top: 12em;
  }
`

const Container = styled.div`
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const TextContent = styled.div`

  @media screen and (max-width: 1000px) {
    order: 1;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`


const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75rem;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Art = styled.img`
  max-width: 1360px;
  width: 100%;
  margin-bottom: 2rem;
`

const Hero = () => {
    return (
        <Section>
            <Container>
                <Art src={ArtImg}/>
                <TextContent>
                    <Text>Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow.
                        We work with open source code that allows you to be involved and improve the money of the future.</Text>
                    <ButtonWrapper>
                        <Fillbutton addClass="rgb" text="Hugin"/>
                        <Borderbutton text="Roadmap" url="/roadmap"/>
                    </ButtonWrapper>
                </TextContent>
            </Container>
        </Section>
    )
}

export default Hero