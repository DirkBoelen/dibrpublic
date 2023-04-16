import React from "react";
import styled from "styled-components";
import { ColorPalet1, ColorPalet2, ColorPalet3, ColorPalet4, ColorPalet4Shade } from "../../assets/colors/colorpalet";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: 250px;
    margin: 20px 0;
    border: 1px solid ${ColorPalet4};
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;

const imgstyled = styled.img`
  border: 1px solid;
`;