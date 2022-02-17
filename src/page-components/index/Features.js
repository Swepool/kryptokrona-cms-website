import * as React from 'react'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";

const Section = styled.div`
  background-color: ${color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: transparent;
  height: 210px;
  width: 30%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid ${color.white60};
  
  &:hover {
    border: 1px solid ${color.white80};
  }


  @media screen and (max-width: 1000px) {
    width: 46%;
    height: 220px;
  }

  @media screen and (max-width: 629px) {
    width: 100%;
    height: 200px;
  }
`

const CardContent = styled.div`
  padding: 20px;
`

const CardTitle = styled.h2`
  margin: 0;
  font-weight: 200;
  color: ${color.white};
`
const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: ${color.white60};
  font-weight: 400;
  margin-bottom: 100px;
`

const Features = () => {
    return (
        <Section>
            <Wrapper>

                <Card>
                    <CardContent>
                        <CardTitle>Nordic Crypto</CardTitle>
                        <Text>A growing cryptocurrency from the Nordics, you'll find people from Sweden, Norway, Denmark, Finland, but also an international audience.</Text>
                    </CardContent>

                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Decentralized </CardTitle>
                        <Text>Kryptokrona adds value to the region as a robust decentralized payment and communication system. Securing our freedom as citizens.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Crypto Community</CardTitle>
                        <Text>Strong local roots with an understanding of politics, culture & language. A feature that should not be underestimated.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>A response</CardTitle>
                        <Text>Kryptokrona launched as an open-source alternative to a digital e-krona/e-krone and the growing cashless society in the Nordics.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>No middleman</CardTitle>
                        <Text>The Kryptokrona isn’t dependent on our central banks or servers, thus less fragile than todays financial systems.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Private</CardTitle>
                        <Text>The basics of Kryptokrona allow users to stay anonymous by default, to send value and data without being revealed or traced.</Text>
                    </CardContent>
                </Card>

            </Wrapper>
        </Section>
    )
}

export default Features