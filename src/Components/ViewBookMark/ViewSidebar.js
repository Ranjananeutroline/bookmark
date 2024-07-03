import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { data } from "./CategoryData";

import { IoMdReturnLeft } from "react-icons/io";
import { Tooltip } from "@material-ui/core";
const ViewSidebarContainer = styled.div`
  height: 100vh;

  width: 17rem;

  font-size: 1.5rem;
  background: red;
  @media screen and (max-width: 660px) {
    display: none;
  }

  .topheading {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .backicon {
    padding: 4px 6px 4px 6px;

    color: black;
    font-size: 1.2rem;
    background-color: #fff;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .backicon:hover {
    transform: scale(1.05);
    transition-duration: 0.3s;
  }
`;
const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: column;
  span {
    font-size: 1rem;
    color: #585f61;
  }
`;

const Heading = styled.h1`
  width: 100%;

  font-size: 1.5rem;
  font-weight: 400;
  font-family: Roboto;
`;
const IconLayout = styled.div`
background-color: #a09d90
border-radius:50%;
margin-left:0.5rem;
height: 1.9rem;

`;
const MenuItem = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  background: #64b5f6;
  border-radius: 5px;
  margin-left: 0.3rem;
  margin-right: 0.3rem;

  margin-bottom: 0.3rem;

  color: ${(props) => props.color};
`;
const Icon = styled.span`
  font-size: 1.7rem;
  margin-right: 15px;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const ViewSidebar = ({ isItemSelected }) => {
  const CategoryItemJsx = data.map((item) => {
    return (
      <Link to={item.to} style={{ textDecoration: "none" }}>
        <MenuItem
          key={item.index}
          isItemSelected={isItemSelected}
          color={item.color}
        >
          <MenuContainer>
            {" "}
            <Icon>{item.icon}</Icon>
            {item.name}
          </MenuContainer>
        </MenuItem>
      </Link>
    );
  });

  return (
    <>
      <ViewSidebarContainer
        style={
          localStorage.getItem("DarkMode") === "true"
            ? { backgroundColor: "#3C3C3C", color: "white" }
            : { backgroundColor: "#f0f2f5" }
        }
      >
        <div
          className="topheading"
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { backgroundColor: "", color: "white" }
              : { backgroundColor: "#E5E4E2", color: "#828282" }
          }
        >
          <Link to="/bookmark/sidebar">
            <Tooltip title="Back">
              <IconLayout>
                <IoMdReturnLeft className="backicon" />
              </IconLayout>
            </Tooltip>
          </Link>

          <Heading>Bookmarks</Heading>
        </div>
        {CategoryItemJsx}
      </ViewSidebarContainer>
    </>
  );
};

export default ViewSidebar;
