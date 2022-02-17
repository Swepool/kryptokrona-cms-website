import * as React from 'react'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";
import Secure from "/src/images/badge-secure.png"
import Gdpr from "/src/images/badge-gdpr.png"
import OpenSource from "/src/images/badge-opensource.png"

const Section = styled.div`
  border-top: 1px ${color.divide} solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.background};
\`
`

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 140px 40px;
  justify-content: space-between;
  gap: 40px;

  @media screen and (max-width: 829px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 25%;
  transition: all 250ms;

  @media screen and (max-width: 829px) {
    width: 100%;
  }
`

const Badge = styled.img`
  width: 80px;
`

const Title = styled.h2`
  
`

const Text = styled.p`
  margin: 0;
`


const Badges = () => {
    return(
        <Section>
            <Container>

                <Card>
                    <Badge src={OpenSource} alt="Kryptokrona open source badge"/>
                    <Title>Open Source</Title>
                    <Text>We believe Privacy should be available to all. Our source code is open for everyone to view and our community is open for anyone interested in contributing.</Text>
                </Card>

                <Card>
                    <Badge src={Secure} alt="Kryptokrona secure badge"/>
                    <Title>Secure</Title>
                    <Text>Encrypted with leading assymetric encryption, specifically NaCl. As a result, your information cannot be shared with third parties. Read more about the encryption here.</Text>
                </Card>

                <Card>
                    <Badge src={Gdpr} alt="Kryptokrona gdpr badge"/>
                    <Title>GDPR Compliant</Title>
                    <Text>GDPR compliant by default. Not hard to be compliant when we don’t save your data. The network have no servers, therefore we need no protection by strict EU privacy laws.</Text>
                </Card>

            </Container>
        </Section>
    )
}

export default Badges