import * as React from 'react'
import styled from "@emotion/styled";
import Wallet from '/src/images/wallet.png'
import Fillbutton from "../../components/buttons/Button";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const Wrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  display: flex;
  padding: 40px 40px;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 829px) {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  margin-bottom: 40px;
`

const ButtonWrapper = styled.div`
  margin: 40px 0;
`

const Title = styled.h1`
 font-size: 3rem;
  font-weight: 400;
`

const Text = styled.p`

`

const SubText = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
`

const WalletImage = styled.img`
    max-width: 40%;
`


const CTAdesktop = () => {
    return(
        <Section>
            <Wrapper>
                <TextWrapper>
                    <Title>Get your address</Title>
                    <Text>You store your Kryptokrona using a special program, a so-called wallet.</Text>
                    <Text>If you have a PC or a mac the best option is our desktop wallet.</Text>
                    <ButtonWrapper>
                        <Fillbutton text="Download"/>
                    </ButtonWrapper>
                    <SubText>→ The wallet stores your private key so you can easily send and receive Kryptokrona.</SubText>
                    <SubText>→ Make sure to backup your keys</SubText>
                </TextWrapper>
                <WalletImage src={Wallet}/>
            </Wrapper>
        </Section>
    )

}

export default CTAdesktop