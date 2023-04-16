import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/LogoHive";

// Data
import { ProjectName } from "../../data";
import { ColorPalet4 } from "../../assets/colors/colorpalet";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg fill={"white"}/>
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
              { ProjectName }
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="font13" style={{ color: ColorPalet4 }}>{ ProjectName }</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80} style={{ color: ColorPalet4 }}>
              Terug naar boven
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;