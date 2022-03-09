import * as React from 'react'
import styled from "@emotion/styled";
import Hugin from '/src/images/HuginChat.png'
import Fillbutton from "../../components/buttons/Button";
import { color } from "../../theme/colors";

const Section = styled.div`
  border-top: 1px ${color.divide} solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 140px 40px;
  justify-content: space-between;
  gap: 20px;
  
  @media screen and (max-width: 829px) {
    flex-direction: column;
  }

  @media screen and (max-width: 579px) {
    flex-direction: column;
    padding: 140px 20px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  
  @media screen and (max-width: 829px) {
    flex-direction: column;
    max-width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin: 40px 0;
`

const Title = styled.h1`
 font-size: 3rem;
  font-weight: 400;
`

const Text = styled.p`
  margin: 0;
`


const HuginImage = styled.img`
  max-width: 550px;
  margin-top: 30px;
`


const CTAhugin = () => {
    return(
        <Section>
            <Wrapper>
                <TextWrapper>
                    <Title>Hide with Hugin</Title>
                    <Text>Hugin is a messaging service where messages are stored on the kryptokrona blockchain.<br></br>
                    Your messages are secured with military grade encryption so that only you and your chat partner have the possibility to read them.</Text>
                    <ButtonWrapper>
                        <Fillbutton text="Download" url="https://hugin.chat/"/>
                    </ButtonWrapper>
                </TextWrapper>
                <HuginImage src={Hugin} alt="Hugin Messenger"/>
            </Wrapper>
        </Section>
    )

}

export default CTAhugin