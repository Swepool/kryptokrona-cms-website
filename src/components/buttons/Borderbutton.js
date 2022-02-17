import * as React from 'react'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";

const Button = styled.a`
  border-radius: 5px;
  border: 1px solid ${color.white60};
  background-color: transparent;
  padding: 10px 15px;
  color: ${color.white60};
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid ${color.white80};
    color: ${color.white80};
  }
`

const Borderbutton = ({text, url}) => {
    return(
        <Button href={url}>{text}</Button>
    )
}

export default Borderbutton