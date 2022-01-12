import styled from '@emotion/styled'
import * as React from 'react'

const ContainerDiv = styled.div`
box-sizing: border-box;
max-width: 1920px;
width: 100%;
padding-left: 40px;
padding-right: 40px;
margin: 0 auto;

  @media screen and (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  
`

const Container = ({ children }) => {
    return (
        <ContainerDiv>{children}</ContainerDiv>
    )
}

export default Container