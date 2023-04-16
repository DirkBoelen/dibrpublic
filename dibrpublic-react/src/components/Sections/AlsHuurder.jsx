import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import ImageInterior3 from "../../assets/img/interior3.jpg";
import ImageInterior4 from "../../assets/img/interior4.jpg";
import ImageInteriorKitchen1 from "../../assets/img/interiorkitchen1.jpg";
import ImageInteriorBed1 from "../../assets/img/interiorbed1.jpg";




import ImageExterior1 from "../../assets/img/exterior1.jpg";
import ImageExterior2 from "../../assets/img/exterior2.jpg";

import { ProjectName } from "../../data";

export default function AlsHuurder() {
  return (
    <Wrapper id="alshuurder">
      <div className="whiteBg py-14" 
        // style={{ padding: "60px 0" }
        >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Als huurder</h1>
            <p className="font13">
            Ervaar een moeiteloze en stressvrije zoektocht naar een huurwoning waarbij de woningen naar jou komen. 
              <br />
              Met slechts enkele eenvoudige stappen kan je snel je nieuwe verblijf vinden.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Maak een profiel aan"
                subtitle="Maak eenvoudig met je emailadres een huurders account aan. Vul je persoonlijke en financiele gegevens in. Maak je profiel compleet om in aanmerking te komen voor een woning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Geef jouw wooneisen aan"
                subtitle="Je wooneisen bepalen of jij wel of niet kan worden uitgekozen voor een bezichtiging."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="hourglass"
                title="Wacht op een uitnodiging"
                subtitle="Via de website, app en email wordt je op de hoogte gehouden. Update maandelijks je zoekstatus."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="email" 
                title="Ontvang een uitnodiging" 
                subtitle="Bekijk de details van de woning en accepteer de bezichtiging." />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="glasses"
                title="Bezichtiging van de woning"
                subtitle="Gefeliciteerd met je nieuwe woning!  Nu rest alleen nog de laatste afhandeling van de contracten."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Een woning (ver)huren was nooit zo makkelijk</h4>
                <h2 className="font40 extraBold">Laat de woning naar jou toe komen</h2>
                <p className="font12">
                  Doordat { ProjectName } alle zorgen weghaald van de woningzoekende, hoef jij nooit meer tijd te verdoen om een woning te vinden.
                  Maak een account aan en krijg binnen no-time een uitnodiging voor een bezichting van je droom huis.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Start nu!" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Mail ons" action={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={ImageExterior2} alt="office" className="w-[300px]" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={ImageInterior3} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={ImageExterior1} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={ImageInteriorBed1} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;