import React from "react";
import styled from "styled-components";
// Assets
import HourGlassIcon from "../../assets/svg/Services/HourGlassIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import EmailIcon from "../../assets/svg/Services/EmailIcon";
import GlassesIcon from "../../assets/svg/Services/GlassesIcon";
import HouseIcon from "../../assets/svg/Services/HouseIcon";
import ContractIcon from "../../assets/svg/Services/ContractIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "hourglass":
      getIcon = <HourGlassIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "email":
      getIcon = <EmailIcon />;
      break;
    case "glasses":
      getIcon = <GlassesIcon />;
      break;
    case "house":
      getIcon = <HouseIcon />;
      break;
    case "contract":
      getIcon = <ContractIcon />;
      break;
    default:
      getIcon = <HourGlassIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
  
  display: flex;
  justify-content: center;

`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
  text-align: center;
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
`;