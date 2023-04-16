import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/add/add2.png";
// Data
import { ProjectName } from "../../data";
import "./PageUitnodigingMail.css";
import TopNavbar from "../Nav/TopNavbar";
import img1 from '../../assets/img/house_interior1.jpeg';
import img2 from '../../assets/img/house_interior2.jpeg';
import img3 from '../../assets/img/house_exterior.jpeg';
import avatar6 from '../../assets/img/avatar6.jpg'
import { ColorPalet1, ColorPalet2, ColorPalet3, ColorPalet4 } from "../../assets/colors/colorpalet";

export default function PageUitnodigingMail() {
  return (
    <div className="email-container">
      <div className="email">
        <div className="email-header">
          <TopNavbar/>
          <img
            src={avatar6}
            alt="Dibr logo"
            className="email-logo"
          />
          <h1 className="email-title">Uitnodiging bezichtiging woning</h1>
        </div>
        <div className="email-body">
          <p>
            Beste Titus &amp; Oskar,
          </p>
          <br></br>
          <p>
            Gefeliciteerd! Jullie zijn uitgenodigd voor een bezichtiging voor de woning op de <b>onsnieuwehuislaan 123</b>.
          </p>
          <p>
            Klik <ColorLink href="#">hier</ColorLink> om deze woning te bekijken.
          </p>
          <div className="email-images">
            <img
              src={img1}
              alt="Image 1"
              className="email-image"
            />
            <img
              src={img3}
              alt="Image 2"
              className="email-image"
            />
            <img
              src={img2}
              alt="Image 3"
              className="email-image"
            />
          </div>
          <br></br>
          <p>
            Klik op deze <ColorLink href="#">link</ColorLink> en log in om de uitnodiging te accepteren.
          </p>
          <br></br>
          <p>
            Met huiselijke groeten,
            <br />
            Het Dibr Team
          </p>
        </div>
        <div className="email-footer">
          <p>
            Dit bericht is automatisch gegenereerd. Gelieve niet te antwoorden.
          </p>
        </div>
      </div>
    </div>
  );
}

const ColorLink = styled.a`
  color: ${ColorPalet1}};
  font-weight: 600;
`;

const Wrapper = styled.section`
  width: 100%;
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
