import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";

const SearchBoxContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.div`
  background: white;
  width: 38vw;
  border-radius: 25px;
  box-shadow: 0.5px 1px #ccc;
  border: 1px solid #dfe1e5;

  &:hover {
    box-shadow: 0px 1px 3px rgb(192, 185, 185);
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 38vw;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    width: 48vw;
  }
  @media screen and (min-width: 550px) and (max-width: 768px) {
    width: 55vw;
  }
  @media screen and (max-width: 550px) {
    width: 75vw;
  }
  @media screen and (max-width: 390px) {
    height: 3rem;
  }
`;
const SearchContent = styled.div`
  margin: 0.5rem;
  padding: 0.1rem;
`;

const SearchBox = ({ defaultBrowser }) => {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(!show);
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setshow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <SearchBoxContainer>
        <SearchBar
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { backgroundColor: "#FFFFFF" }
              : { backgroundColor: "" }
          }
        
        >
          <SearchContent ref={menuRef}>
            <SearchIcon
              show={show}
              setshow={setshow}
              handleClick={handleClick}
              defaultBrowser={defaultBrowser}
            />
          </SearchContent>
        </SearchBar>
      </SearchBoxContainer>
    </>
  );
};

export default SearchBox;
