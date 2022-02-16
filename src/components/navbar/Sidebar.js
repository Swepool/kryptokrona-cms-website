import React from 'react';
import styled from "@emotion/styled";
import {IoClose} from "react-icons/all";
import {Link} from "gatsby";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(42, 42, 42, 0.7);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;


const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  padding-inline-start: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <IoClose color="#ffffff"/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link style={{display: "flex", justifyContent: "center", alignContent: "center"}} to="/wallet"><SidebarLink>Wallet</SidebarLink></Link>
                    <SidebarLink href="https://hugin.chat">Hugin</SidebarLink>
                    <Link style={{display: "flex", justifyContent: "center", alignContent: "center"}} to="/mining"><SidebarLink>Mining</SidebarLink></Link>
                    <SidebarLink href="https://explorer.kryptokrona.se">Explorer</SidebarLink>
                    <Link style={{display: "flex", justifyContent: "center", alignContent: "center"}} to="/blog"><SidebarLink>Blog</SidebarLink></Link>
                    <Link style={{display: "flex", justifyContent: "center", alignContent: "center"}} to="/about"><SidebarLink>About</SidebarLink></Link>
                </SidebarMenu>
                <SideBtnWrap style={{display: 'flex', gap: '10px'}}>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
