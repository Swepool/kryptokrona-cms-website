import * as React from 'react'
import styled from "@emotion/styled";
import {FaGithub} from "react-icons/all";
import {useEffect} from "react";
import {color} from "../../theme/colors";

const Section = styled.div`
  background-color: ${color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  margin-top: 50px;
  border-top: 1px solid ${color.divide};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 0 40px;

  @media screen and (max-width: 1029px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    gap: 50px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  @media screen and (max-width: 1029px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`

const Title = styled.h2`
  color: ${color.white};
  font-weight: 400;
  margin: 0;
`

const SubTitle = styled.h2`
  color: ${color.white80};
  font-weight: 400;
  margin: 0;
`

const Text = styled.p`
  color: ${color.white60};
  font-family: 'Roboto Mono', monospace;
`

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #6e5494;
  padding: 10px 20px;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: ${color.white60};
  }
`

const CardWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1029px) {
    width: 100%;
    align-items: center;
  }
`

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${color.white60};
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 1029px) {
    width: 80%;
  }

  @media screen and (max-width: 579px) {
    width: 100%;
  }
`
const CardTextWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const UserWrapper= styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px
`
const Avatar = styled.img`
  width: 32px;
  border-radius: 5px;
`
const UserName = styled.h3`
  color: white;
  font-weight: 400;
  margin: 0;
`

const CommitTitle = styled.h3`
  margin: 0;
  color: ${color.white60};
  font-weight: 400;
`

const Addition = styled.p`
  color: ${color.green};
  font-family: 'Roboto Mono', monospace;
`

const Deletion = styled.p`
  color: ${color.red};
  font-family: 'Roboto Mono', monospace;
`

const RoundButton = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${color.white60};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms;
  color: ${color.background};
  
  &:hover {
    background-color: ${color.white};
    cursor: pointer;
  }
`

const Contribute =() => {

    useEffect((file) => {

        //Fetches the last commit on given url
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/commits/master")
            .then((response) => response.json())
            .then((data) => {
                const username = data.author.login
                const commitMsg = data.commit.message
                const additions = data.stats.additions
                const deletions = data.stats.deletions
                const avatar = data.author.avatar_url
                const url = data.html_url

                //Adds the returned content to dom
                document.getElementById('commitTitle').textContent = commitMsg
                document.getElementById('additions').textContent = additions
                document.getElementById('deletions').textContent = deletions
                document.getElementById('avatar').src = avatar
                document.getElementById('username').textContent = username
                document.getElementById('url').href = url
            });
    });

    return(
        <Section>
            <Wrapper>
                <TextWrapper>
                    <Title>Contribute</Title>
                    <Text>This project is open source and maintained by the Community. You can
                        for example make changes to this site, suggest awesome new features,
                        or help us squash bugs. Not a developer? No worries, there's tons of
                        things to do!</Text>
                    <Button href="https://github.com/kryptokrona/">Github <FaGithub size="2em"/></Button>
                </TextWrapper>
                <CardWrapper>
                    <SubTitle>Latest Contribution </SubTitle>
                    <Card>
                        <CardTextWrapper>
                            <CommitTitle id="commitTitle"/>
                            <div style={{display: "flex", gap: "10px"}}>
                                <Addition id="additions"/>
                                <Deletion id="deletions"/>
                            </div>
                        </CardTextWrapper>
                        <UserWrapper>
                            <div style={{display: "flex", gap: "10px", alignItems: "end"}}>
                                <Avatar id="avatar" alt="Github Avatar"/>
                                <UserName id="username"/>
                            </div>
                            <RoundButton id="url" href='/#'>⮕</RoundButton>

                        </UserWrapper>
                    </Card>
                </CardWrapper>
            </Wrapper>
        </Section>
    )
}

export default Contribute