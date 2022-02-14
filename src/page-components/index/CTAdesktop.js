import * as React from 'react'
import styled from "@emotion/styled";
import Wallet from '/src/images/wallet.png'
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

const WalletImage = styled.img`
  max-width: 500px;
  margin-top: 30px;
`


const CTAdesktop = () => {
    return(
        <Section>
            <Wrapper>
                <TextWrapper>
                    <Title>Get a wallet</Title>
                    <Text>You store your Kryptokrona using a special program, a so-called wallet. If you have a PC or a mac the best option is our desktop wallet.</Text>
                    <ButtonWrapper>
                        <Fillbutton text="Download"/>
                    </ButtonWrapper>
                    <SubText>→ Make sure to backup your keys</SubText>
                </TextWrapper>
                <WalletImage src={Wallet}/>
            </Wrapper>
        </Section>
    )

}

export default CTAdesktop