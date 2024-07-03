import React from "react";
import styled from "styled-components";
const Button = styled.button`
  padding: 8px 30px;
  border: ${props=>props.border};
  border-radius: ${props=>props.radius};
  cursor: pointer;
  color: ${(props)=>props.fontColor};
 
  background: ${(props) => props.color};
`;
const ButtonField = ({ name, colors,onClick,radius,fontColor,border }) => {
  return (
    <>
      <Button color={colors} onClick={onClick} radius={radius} fontColor={fontColor} border={border}>{name}</Button>
    </>
  );
};

export default ButtonField;
