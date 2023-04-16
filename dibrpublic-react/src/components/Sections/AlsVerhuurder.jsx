import React from "react";
import styled from "styled-components";
import { ProjectName } from "../../data";
// Components
import ServiceBox from "../Elements/ServiceBox";

// Assets


export default function AlsVerhuurder() {
  return (
    <Wrapper id="alsverhuurder">
      {/*<div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Als verhuurder</h1>
            <p className="font13">
              Vind binnen no-time geschikte huurders voor je woning. Alle gegevens gecheckt door {ProjectName}!
              <br />
              Met een paar simpele stappen heb jij zo je woning verhuurd:
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Maak een profiel aan"
                subtitle="Maak eenvoudig met je emailadres een verhuurders account aan."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="house"
                title="Meld de woning aan"
                subtitle="Vul alle benodigde woningspecificaties in en upload foto's van de woning."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="email" 
                title="Nodig potentiele huurders uit" 
                subtitle="Je nodigt potentiele huurder uit een overzicht van potentiele huurders die voldoen aan alle eisen." />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="glasses"
                title="Bezichtiging van de woning"
                subtitle={`Kies en verwelkom de nieuwe huurders van uw woning. Host de bezichtiging zelf of laat dit over aan ${ProjectName}.`}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="contract"
                title="Afhandeling formaliteiten"
                subtitle={`Ontvang via Dibr alle benodigde gegevens van de gekozen huurder, handel alle formaliteiten via ${ProjectName} af.`}
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
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
