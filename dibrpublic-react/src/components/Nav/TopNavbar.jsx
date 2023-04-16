import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkDOM } from "react-router-dom";
// Components

// Assets
import LogoIcon from "../../assets/svg/LogoHive";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { ColorPalet1, ColorPalet2, ColorPalet3, ColorPalet4, ColorPalet4Shade } from "../../assets/colors/colorpalet";
// Data
import { ProjectName } from "../../data";


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <LinkDOM className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            { ProjectName }
            </h1>
          </LinkDOM>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="alshuurder" spy={true} smooth={true} offset={-80}>
                Als huurder
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="alsverhuurder" spy={true} smooth={true} offset={-80}>
                Als verhuurder
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="hoewerkthet" spy={true} smooth={true} offset={-80}>
                Hoe werkt het?
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="aboutus" spy={true} smooth={true} offset={-80}>
                Over ons
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Inloggen
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
                <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                  Get Started
                </a>
              </li>   
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: ${ColorPalet4} 1px solid;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


