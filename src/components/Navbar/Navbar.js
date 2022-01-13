import * as React from 'react'
import styled from "@emotion/styled";
import {HiOutlineMenu} from "react-icons/all";
import XkrLogo from '../../images/Xkrlogo.svg'

const Nav = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(29, 29, 29, 0.50);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  z-index: 1;
  margin-top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

const NavWrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`
const Brand = styled.a`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: white;
  font-weight: 400;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    filter: brightness(130%) ;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 579px) {
    display: none;
  }
`

const NavButton = styled.a`
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-shadow: 0 0 10px #fff;
  }
`

const Rgb = styled.div`
  width: 100%;
  height: 2px;
  position: fixed;
  top: 0;
  background-color: #5f86f2;
  z-index: 999;
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 579px) {
    display: block;
  }
`;

const Navbar = ({ toggle }) => {

    return(
        <Nav id="home">
            <Rgb className="rgb"/>
            <NavWrapper>
                <Brand href="/"><img style={{height: "1.5rem"}} src={XkrLogo} alt="Kryptokrona logo"/></Brand>
                <Navigation>
                    <NavButton href="/wallets">Wallet</NavButton>
                    <NavButton href="https://hugin.chat">Hugin</NavButton>
                    <NavButton href="/mining">Mining</NavButton>
                    <NavButton href="/blog">Blog</NavButton>
                    <NavButton href="/about">About</NavButton>
                </Navigation>
                <Hamburger onClick={toggle}><HiOutlineMenu color="#979797" size="1.25em"/></Hamburger>
            </NavWrapper>
        </Nav>
    )
}



export default Navbar