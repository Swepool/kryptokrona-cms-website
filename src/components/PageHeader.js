import * as React from 'react'
import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  padding-right: 40px;
  margin: 0;
  margin-top: 1rem;
  
  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.4);
  margin: 5px 0;
`;

const PageHeader = ({title, text1, text2,}) => {
    return (
        <Header>
            <Text>Category: {text2}</Text>
            <Text>Published: {text1}</Text>
            <Title>{title}</Title>
        </Header>
    )
}

export default PageHeader