import * as React from 'react';
import styled from "styled-components";

import ProfileFormGeneral from '../Elements/ProfileFormGeneral';
import ProfileFormDocuments from '../Elements/ProfileFormDocuments';



export default function MyProfilePage() {
   return (
    <Wrapper id="myprofile">
    <div className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Mijn profiel</h1>
        </HeaderInfo>
        <div>
          <ProfileFormGeneral/>
          <ProfileFormDocuments/>
        </div>
      </div>
    </div>
  </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 40px;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;