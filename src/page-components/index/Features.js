import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
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
  height: 180px;
  width: 30%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid rgba(255, 255, 255, 0.5);
  
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }


  @media screen and (max-width: 1000px) {
    width: 46%;
  }

  @media screen and (max-width: 629px) {
    width: 100%;
    height: 180px;
  }
`

const CardContent = styled.div`
  padding: 20px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-weight: 200;
  color: rgb(255, 255, 255);
`
const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgb(151, 151, 151);
  font-weight: 400;
  margin-bottom: 100px;
`

const Features = () => {
    return (
        <Section>
            <Wrapper>

                <Card>
                    <CardContent>
                        <CardTitle> 🔒 Private money</CardTitle>
                        <Text>All transactions are private. Users can share view keys to give trusted parties access to to share account information.</Text>
                    </CardContent>

                </Card>

                <Card>
                    <CardContent>
                        <CardTitle> 🤙 Quick & efficient</CardTitle>
                        <Text>Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle> 🗂 The peoples currency</CardTitle>
                        <Text>You can assist Kryptokrona. Through mining you can create Kryptokrona and store them wherever you want to.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>🐥 Peer to peer</CardTitle>
                        <Text>The Kryptokrona isn’t dependent on central banks or servers, thus less fragile than todays systems.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>😎 Transparency</CardTitle>
                        <Text>Our source code is open for everyone to view and our community is open for anyone interested.</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>😎 Technical support</CardTitle>
                        <Text>You can get assistance with Kryptokrona, around the clock, every day of the week in our Discord server. Welcome for discussions.</Text>
                    </CardContent>
                </Card>

            </Wrapper>
        </Section>
    )
}

export default Features