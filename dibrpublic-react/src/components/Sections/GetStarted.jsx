import { Button, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ProjectName } from "../../data";
// Components
import PricingTable from "../Elements/PricingTable";
import TopNavbar from "../Nav/TopNavbar";

export default function GetStarted() {
  return (
    <Wrapper id="pricing">
      <TopNavbar/>
      
      <Wrapper2 className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Wij zijn er bijna...</h1>
            <p className="font13">
              Het {ProjectName} team is druk bezig met het afmaken van het platform.
              <br />
              Schrijf je in voor de nieuwsbrief voor alle nieuwe updates en nieuwtjes!
            </p>
           
          </HeaderInfo>
          <divstyled style={{ display: 'flex', alignItems: 'stretch' }}>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{ flex: 1 }} />
            <Button variant="outlined" style={{ flex: 'none' }}>Schrijf je in</Button>
          </divstyled>

        </div>
      </Wrapper2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const Wrapper2 = styled.div`
  margin-top: 70px;
  text-align: center;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const divstyled = styled.div`
  margin-top: 32px !important;
`;



