import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import { searchengine } from "./SearchengineData";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";

import Popper from "@material-ui/core/Popper";
import Search from "./Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItemContainer = styled.div`
  flex-direction: column;

  margin-top: 0.75rem;

  // margin-right: 3.7rem;
  margin-right: 1.5rem;
  border-radius: 0 0 8px 8px;
  background-color: #f4f4f4;
  filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.2));

  .text-menu {
    padding: 0.15rem 0.8rem;
    // text-align: center;

    display:flex;
    gap:0.5rem;
   
  }
  .text-menu:hover {
    background-color: #d5d5d5;
    color: #659fe3;
  }
`;
const MenuIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0;
  margin-left: -3rem;
  height: 100%;
  @media screen and (max-width:1500px)
  {
    margin-left: 0.8rem;
  }
`;
const DropdownArrow = styled.div`
  font-size: 1.5rem;
  
  margin-left: 1rem;
  cursor: pointer;
  @media screen and (max-width:1500px)
  {
  //  margin-top:0.5rem;
  }
`;
const BorderLine = styled.div`
  border-left: 2px solid #fff;
`;

const SearchIcon = ({ show, setshow, handleClick, defaultBrowser }) => {
  const [menu, setmenu] = useState(
    defaultBrowser === "Google"
      ? searchengine[0].icon
      : defaultBrowser === "Bing"
      ? searchengine[2].icon:
      // : defaultBrowser === "Yahoo"
      // ? searchengine[3].icon:
      searchengine[1].icon
      
     
  );

  const [state, setstate] = useState(
    defaultBrowser === "Google"
      ? searchengine[0].link
      : defaultBrowser === "Bing"
      ? searchengine[2].link:
      // defaultBrowser === "Yahoo"
      // ? searchengine[3].link:
      searchengine[1].link
    
  );

  const [name, setname] = useState(searchengine[0].name);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    handleClick();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const onClickAwayHandler = (event) => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItems>
        <MenuIconContainer>
          <MenuIcon>{menu}</MenuIcon>

          <DropdownArrow
            onClick={handleClickPopper}
            style={
              localStorage.getItem("DarkMode") === "true"
                ? { color: "#000" }
                : { backgroundColor: "#fff" }
            }
          >
            {show ? <IoMdArrowDropup /> : <RiArrowDropDownFill />}
          </DropdownArrow>

          <Popper id={id} open={open} anchorEl={anchorEl}>
            <ClickAwayListener onClickAway={onClickAwayHandler}>
              <MenuItemContainer>
                {searchengine.map((option,index) => {
                  return (
                 
                      <MenuItem
                     
                        style={
                          localStorage.getItem("DarkMode") === "true"
                            ? {
                                backgroundColor: "#373737",
                                fontSize: "0.9rem",
                                color: "#fff",
                                minHeight: "0px",
                                paddingTop:"0.2rem",
                              }
                            : {
                                backgroundColor: "",
                                fontSize: "0.9rem",
                                minHeight: "0px",
                                paddingTop:"0.2rem",
                                
                              }
                        }
                        key={index}
                        value={option.value}
                        className="text-menu"
                        onClick={() => {
                          setmenu(option.icon);
                          setstate(option.link);
                          setname(option.name);
                        }}
                      >
                 {option.icon}       {option.value}
                      </MenuItem>
                  
                  );
                })}
              </MenuItemContainer>
            </ClickAwayListener>
          </Popper>

          <BorderLine />
        </MenuIconContainer>

        <Search state={state} name={name} />
      </MenuItems>
    </>
  );
};

export default SearchIcon;
