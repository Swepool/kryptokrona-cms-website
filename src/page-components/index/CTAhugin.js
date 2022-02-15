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
  padding: 100px 40px;
  justify-content: space-between;
  gap: 20px;
  
  @media screen and (max-width: 829px) {
    flex-direction: column;
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

const SubText = styled.p`
  font-size: 0.75rem;
  color: ${color.green};
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
                    <Text>You store your Kryptokrona using a special program, a so-called wallet. If you have a PC or a mac the best option is our desktop wallet.</Text>
                    <ButtonWrapper>
                        <Fillbutton text="Download" url="https://hugin.chat/"/>
                    </ButtonWrapper>
                    <SubText>→ Make sure to backup your keys</SubText>
                </TextWrapper>
                <HuginImage src={Hugin}/>
            </Wrapper>
        </Section>
    )

}

export default CTAhugin