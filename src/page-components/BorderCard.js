import * as React from 'react'
import styled from "@emotion/styled";

const Card = styled.div`
  border-radius: 8px;
  border: 2px solid #979797;
  padding: 35px;
  width: 320px;
  height: 240px;

  @media screen and (max-width: 1280px) {
    width: 300px;
    height: 240px;
  }

  @media screen and (max-width: 1024px) {
    width: auto;
    height: 220px;
  }
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  margin:0;
  margin-top: 10px;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;


const BorderCard = ( {title, text, icon, alt } ) => {
    return(
        <Card>
            <img src={icon} alt={alt}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Card>
    )
};

export default BorderCard;