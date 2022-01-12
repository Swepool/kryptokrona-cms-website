import * as React from 'react'
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #2a2a2a;
  margin-bottom: 80px;
`;

const InfoContainer = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  padding-right: 40px;
  margin: 0;
  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  text-align: end;
  font-weight: 400;
  margin: 0;
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  text-align: end;
  font-size: 20px;
  margin-top: 10px;
`;

const PageHeader = ({title, heading1, text1, heading2, text2, heading3, text3,}) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <InfoContainer>
                <Heading>{heading1}</Heading>
                <Text>{text1}</Text>
                <Heading>{heading2}</Heading>
                <Text>{text2}</Text>
                <Heading>{heading3}</Heading>
                <Text>{text3}</Text>
            </InfoContainer>
        </HeaderContainer>
    )
}

export default PageHeader