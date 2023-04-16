import React from "react";
import styled from "styled-components";
import { ColorPalet1,ColorPalet2,ColorPalet3,ColorPalet4, ColorPalet4Shade } from "../../assets/colors/colorpalet";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}
// Original color: #7620ff
const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : ColorPalet4)};
  background-color: ${(props) => (props.border ? "transparent" : ColorPalet4)};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : ColorPalet4Shade)};
    border: 1px solid ${ColorPalet4};
    color: ${(props) => (props.border ? ColorPalet4Shade : "#fff")};
  }
`;

