import * as React from 'react'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";
import {Link} from "gatsby";

const Button = styled(Link)`
  border-radius: 5px;
  background-color: ${color.white60};
  padding: 10px 15px;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: ${color.background};
  border: 1px solid;

  &:hover {
    background-color: ${color.white80};
    border-radius: 5px;
    cursor: pointer;
`

const Fillbutton = ({text, url, id, addClass}) => {
    return(
        <Button className={addClass} id={id} to={url}>{text}</Button>
    )
}

export default Fillbutton