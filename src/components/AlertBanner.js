import * as React from 'react'
import styled from "@emotion/styled";
import {color} from "../theme/colors";

const Section = styled.div`
  background-color: ${color.navbarBG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-top: 80px;
  border-bottom: 1px solid ${color.divide};
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 0 40px;
`

const Content = styled.p`
  text-align: center;
  color: ${color.green};
`

const AlertBanner = ({text, emoji}) => {
    return(
        <Section>
            <Wrapper>
                <Content>{text} {emoji}</Content>
            </Wrapper>
        </Section>
    )
}

export default AlertBanner