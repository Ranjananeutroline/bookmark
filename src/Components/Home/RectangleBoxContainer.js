import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoOpenOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Carousel from "react-grid-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import Addurl from "../AddUrl/AddUrl";
import AddIcon from "@mui/icons-material/Add";
import PopBlocker from "./PopBlocker";
import { RiAddCircleLine } from "react-icons/ri";

const Wrapper = styled.div`
  filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
  border-radius: 20px;
  height: 9rem;
  @media screen and (max-width: 1600px) {
    height: 7.55rem;
  }
  @media screen and (max-width: 1050px) {
    height: 13rem;
  }
  @media screen and (max-width: 550px) {
    height: 10rem;
    .gFIPel {
      overflow: hidden;
      margin: 0 0px;
    }
  }
  @media screen and (max-width: 390px) {
    height: 8rem;
  }
  &:hover .center-arrow {
    display: block;
  }
  .center-arrow {
    display: inline;
    text-align: center;
    bottom: 0;
    display: none;
    @media screen and (max-width: 550px) {
      display: block;
    }
  }
  .arrow-left {
    display: block;
    position: absolute;

    cursor: pointer;
    font-size: 1.3rem;
    // transform: translate(12rem,4.81rem);
    transform: translate(12rem, 5.4rem);
    @media screen and (max-width: 1600px) {
      transform: translate(7rem, 4.37rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 1050px) {
      transform: translate(3.8rem, 8.2rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(2.5rem, 5.7rem);
    }
    @media screen and (max-width: 390px) {
      transform: translate(2.5rem, 4.5rem);
    }
  }
  .arrow-right {
    display: block;
    position: absolute;

    // transform: translate(18rem, -0.3rem);
    transform: translate(18rem, -0.1rem);
    font-size: 1.3rem;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
      transform: translate(12rem, -0.01rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 1050px) {
      transform: translate(8rem, -0.4rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(6.3rem, -0.45rem);
    }

    @media screen and (max-width: 390px) {
      transform: translate(5rem, -0.32rem);
    }
  }
  .box-title {
    width: 100%;
    font-style: normal;

    margin-top: 4px;
    color: #5797e1;

    @media screen and (max-width: 390px) {
      font-size: 0.75rem;
    }
  }
  &:hover .ThreeDotDiv {
    visibility: visible;
  }
  .boxes {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(240, 240, 240, 0.5);
    bacground: red;
    height: 2rem;
  }
  .BoxContainerTitle {
    font-size: 1.3rem;
    width: 85%;
    padding-left: 2.5rem;
    @media screen and (max-width: 1600px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 550px) {
      padding-left: 2rem;
      font-size: 0.75rem;
    }
  }
  .ThreeDotDiv {
    width: 15%;
    // background: blue;
    visibility: hidden;
    @media screen and (max-width: 1075px) {
      width: 28%;
    }
  }
  .three-dots {
    font-size: 1.5rem;
  }
  .three-dots:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }

  .box-icons {
    position: static;
    text-align: center;
    align-content: center;
    align-items: center;
    @media screen and (max-width: 1050px) {
      margin-top: 1.4rem;
    }
    @media screen and (max-width: 550px) {
      margin-top: 1rem;
    }
    @media screen and (max-width: 390px) {
      margin-top: 0.5rem;
    }
  }

  .icons:hover .image_description {
    visibility: visible;
    opacity: 1;
  }
  .image_description {
    color: #2478dc;
    font-size: 1rem;
    visibility: hidden;
    text-decoration: none !important;
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
    text-align: center;
    text-transform: capitalize;

    @media screen and (max-width: 1600px) {
      font-size: 0.7rem;
    }
  }
  .ff {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    @media screen and (max-width: 1600px) {
      height: 40px;
      width: 40px;
    }

    @media screen and (max-width: 550px) {
      height: 30px;
      width: 30px;
    }
    @media screen and (max-width: 390px) {
      height: 23px;
      width: 23px;
    }
  }
  .extra-add {
    font-size: 1.7rem;
    cursor: pointer;
    color: #64b5f6;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    padding: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.15);

    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 390px) {
      font-size: 0.8rem;
    }
  }
  // @media screen and (min-width: 1600px) {
  //   width: 99%;
  //   height: 7rem;
  // }
`;
const IconContainer = styled.div`
  margin: 10px 0px 0px 0px;

  @media screen and (max-width: 1050px) {
    margin: 0px 0px 10px 0px;
  }
  @media screen and (max-width: 550px) {
    margin: 0px 0px 1px 0px;
  }
`;
const RectangleBoxContainer = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setopenPopup] = useState(false);

  const closePopup = () => {
    setopenPopup(false);
  };
  const open = Boolean(anchorEl);
  const [openAddForm, setOpenAddForm] = useState(false);
  let newArray = [0, 0, 0, 0];

  if (props.data.length <= 4) {
    props.data.map((d, index) => (newArray[index] = d));
  }
  const handleEdit = () => {
    props.editMode(props.id);
  };
  const handleClick = () => {
    props.data.map((data) => {
      var popup = window.open(
        `${data.url}`.indexOf("https://") === 0
          ? `${data.url}`
          : `https://${data.url}`,
        "_blank",
        console.log(data.url, "datas")
      );
      if (!popup) {
        setopenPopup(true);
      } else {
        setopenPopup(false);
      }
    });
  };
  const handleAddFormClose = () => {
    setOpenAddForm(false);
  };
  const handleAddFormOpen = () => {
    setOpenAddForm(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onhandleClick = (e) => {
    e.stopPropagation();
  };

  const getDataFromChildren = (values) => {
    props.sendToParent(values, props.id);
  };
  const openLink = localStorage.getItem("OpenLinks");
  const ArrowLeft = () => (
    <span className="center-arrow">
      <BsArrowLeft className="arrow-left" />
    </span>
  );

  const ArrowRight = () => (
    <span className="center-arrow">
      <BsArrowRight className="arrow-right" />{" "}
    </span>
  );
  const GoogleId = localStorage.getItem("GoogleId");
  const sliderValue = localStorage.getItem("sliderValue")
    ? localStorage.getItem("sliderValue")
    : 10;
  return (
    <Wrapper
      style={
        sliderValue !== "0" && localStorage.getItem("DarkMode") === "true"
          ? {
              backgroundColor: "#373737",

              filter:
                "drop-shadow(1px 2px " +
                sliderValue +
                "px rgba(0, 0, 0, 0.25))",
            }
          : {
              backgroundColor: "white",
              filter:
                "drop-shadow(0px 0px " +
                sliderValue +
                "px rgba(0, 0, 0, 0.25))",
            }
      }
    >
      <div className="box-title">
        <div className="boxes">
          {" "}
          <div className="BoxContainerTitle">
            {GoogleId
              ? props.boxDataFromDb.CategoryName
              : localStorage.getItem(props.id + "Name") !== null
              ? localStorage.getItem(props.id + "Name")
              : props.title}
          </div>
          <div className="ThreeDotDiv">
            <BsThreeDots
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
              className="three-dots"
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              disablePadding: "true",
              style:
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#323232", color: "#fff" }
                  : { backgroundColor: "" },
            }}
          >
            <MenuItem
              style={{
                // fontSize: "0.90rem",
                // lineHeight: "1",
                // paddingTop: "0.5rem",
                // paddingRight: "4rem",
                // minHeight: "0px",

                fontSize: "0.9rem",
                lineHeight: "1",
                paddingTop: "0.5rem",
                paddingRight: "4rem",
                minHeight: "0px",
              }}
              onClick={handleAddFormOpen}
            >
              <RiAddCircleLine
                style={{
                  // marginRight: "15px",
                  // color: "green",
                  // fontSize: "1.1em",

                  marginRight: "15px",
                  color: "green",
                  fontSize: "1rem",
                  marginLeft: "-0.1rem",
                }}
              />{" "}
              Add
            </MenuItem>
            <MenuItem
              style={{ 
                fontSize: "0.90rem", 
                lineHeight: "1", 
                minHeight: "0px" 
              }}
              onClick={handleEdit}
            >
              <FiEdit
                style={{
                  // marginRight: "15.5px",
                  // color: "#178417",
                  // fontSize:"0.85rem"
                  marginRight: "16px",
                  color: "green",
                  fontSize: "0.85rem",
                }}
              />
              Edit
            </MenuItem>
            <MenuItem
              style={{
                fontSize: "0.90rem",
                lineHeight: "1",
                paddingBottom: "0.5rem",
                minHeight: "0px",
              }}
              onClick={handleClick}
            >
              <IoOpenOutline
                style={{
                  //  marginRight: "15px", 
                  //  color: "#1d5ba4" 
                  marginRight: "13px",
                  color: "#1d5ba4",
                  fontSize: "1rem",
                  
                  }}
              />
              Open all
            </MenuItem>
          </Menu>
        </div>
        <div className="box-icons">
          {props.data.length > 4 ? (
            <Carousel
              cols={4}
              rows={1}
              gap={1}
              showDots={false}
              loop
              hideArrow={false}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              responsiveLayout={[
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 2,
                },
              ]}
              mobileBreakpoint={[
                {
                  cols: 2,
                  rows: 2,
                  scrollSnap: true,
                },
              ]}
            >
              {props.data.map((data, index) => (
                <Carousel.Item key={index}>
                  <IconContainer>
                    <a
                      href={
                        `${data.url}`.indexOf("https://") === 0
                          ? `${data.url}`
                          : `https://${data.url}`
                      }
                      target={openLink === "false" ? "_self" : "_blank"}
                      key={index}
                      rel="noreferrer"
                      className="icons"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${data.url}`}
                        alt={data.title}
                        className="ff"
                      ></img>
                      <div className="image_description">{data.title}</div>
                    </a>
                  </IconContainer>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel
              cols={4}
              rows={1}
              gap={1}
              showDots={false}
              loop
              hideArrow={true}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              responsiveLayout={[
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 2,
                },
              ]}
              mobileBreakpoint={[
                {
                  cols: 2,
                  rows: 2,
                  scrollSnap: true,
                },
              ]}
            >
              {newArray.map((data, index) => (
                <Carousel.Item key={index}>
                  <IconContainer>
                    {data !== 0 ? (
                      <a
                        key={index}
                        href={
                          `${data.url}`.indexOf("https://") === 0
                            ? `${data.url}`
                            : `https://${data.url}`
                        }
                        target={openLink === "false" ? "_self" : "_blank"}
                        id={index}
                        rel="noreferrer"
                        className="icons"
                      >
                        <img
                          // onClick={(e) => {
                          //   onhandleClick(e);
                          // }}
                          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${data.url}`}
                          alt={data.title}
                          className="ff"
                        ></img>
                        <div className="image_description">{data.title}</div>
                      </a>
                    ) : (
                      <Tooltip title="Add New">
                        <div>
                          <AddIcon
                            className="extra-add"
                            onClick={handleAddFormOpen}
                          />
                        </div>
                      </Tooltip>
                    )}
                  </IconContainer>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <Addurl
        open={openAddForm}
        handleClose={handleAddFormClose}
        id={props.id}
        getCategoryFormDB={props.getCategoryFormDB}
        sendDataToParent={getDataFromChildren}
        categoryId={props.boxDataFromDb.CategoryId}
        GoogleId={GoogleId}
        Categorytitle={props.title}
      />
      <PopBlocker open={openPopup} handleCloseMsg={closePopup} />
    </Wrapper>
  );
};

export default RectangleBoxContainer;
