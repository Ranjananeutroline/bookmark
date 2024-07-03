import React from "react";
import styled from "styled-components";
const Button = styled.button`
  padding: 5px 30px;
  font-size:1.1rem;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  cursor: pointer;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.color};
  &:hover {
    box-shadow: 0 3px 10px rgb(100 181 246 / 0.8);

    transition: ease 0.5s;
  }
  @media (max-width: 1500px) {
    padding: 4px 16px;
    font-size: 0.8rem;
    
  }
`;
const ButtonField = ({
  name,
  colors,
  onClick,
  radius,
  fontColor,
  border,
  insideicons,
}) => {
  return (
    <>
      <Button
        type="submit"
        color={colors}
        onClick={onClick}
        radius={radius}
        fontColor={fontColor}
        border={border}
      >
        {insideicons}
        {name}
      </Button>
    </>
  );
};

export default ButtonField;
