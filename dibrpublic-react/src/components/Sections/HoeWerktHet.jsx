import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import ProfielUitkiezenImage from "../../assets/img/profieluitkiezen-screenshot.png";
import UitnodigingMailImage from "../../assets/img/uitnodigingsmail-screenshot.PNG";
import ProfilePageImage from "../../assets/img/profilepageimage.png";

import { ProjectName } from "../../data";

export default function HoeWerktHet() {
  const navigate = useNavigate();

  const handleClickNavigate = (page) => {
    navigate(page);
  }

  return (
    <Wrapper id="hoewerkthet">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Hoe werkt het?</h1>
            <p className="font13">
              Zie hieronder wat impressies van {ProjectName}, hoe het eruit ziet en hoe het precies werkt!
              <br />
              {ProjectName} is in de maak, dus foto's kunnen afwijken van uiteindelijk resultaat.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProfielUitkiezenImage}
                title="Profielen uitnodigen voor je woning"
                text="Als woningaanbieder zie je iedereen die voldoet aan jou wooneisen. Zowel op financieel gebied als woningvoorkeuren van de huurder."
                action={() => handleClickNavigate("/profieluitkiezen")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProfilePageImage}
                title="Jouw zoekprofiel"
                text="Maak je zoekprofiel compleet. Vergeet niet om huurvoorkeuren en alle nodige documenten en gegevens in te vullen."
                action={() => handleClickNavigate("/zoekprofiel")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={UitnodigingMailImage}
                title="Uitnodiging voor een bezichtiging"
                text="Als huurder ontvang jij op elk moment een uitnodiging voor een bezichtiging. Bekijk de woning snel en reageer als je interesse hebt!"
                action={() => handleClickNavigate("/uitnodigingmail")}
              />
            </div>
          </div>
          {/* <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
          </div> */}
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;