import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoOpenOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Carousel from "react-grid-carousel";
import Addurl from "../AddUrl/AddUrl";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Tooltip } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@material-ui/core";
import { RiAddCircleLine } from "react-icons/ri";

import PopBlocker from "./PopBlocker";
const Wrapper = styled.div`
  width: 16rem;
  height: 16rem;

  border-radius: 20px;
  
  @media screen and (max-width: 1600px) {
    width: 13rem;
    height: 13rem;
  }
  &:hover .center-arrow {
    display: block;
  }
  .center-arrow {
    display: none;
    @media screen and (max-width: 550px) {
      display: block;
    }
  }
  .arrow-left {
    display: block;
    position: absolute;
    transform: translate(3.8rem, 9.8rem);
    margin-top: 1.2rem;
    font-size: 1.3rem;

    cursor: pointer;
    @media screen and (max-width: 1600px) {
      transform: translate(3.8rem, 7.2rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 550px) {
      transform: translate(2.5rem, 4.9rem);
    }
    @media screen and (max-width: 390px) {
      transform: translate(2.5rem, 3.4rem);
    }
  }

  .arrow-right {
    display: block;
    position: absolute;
    transform: translate(8rem, 0.3rem);

    font-size: 1.3rem;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
      font-size: 1rem;
      transform: translate(8rem, -0.09rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(6.3rem, -0.4rem);
    }

    @media screen and (max-width: 390px) {
      transform: translate(5rem, -0.4rem);
    }
  }
  .box-title {
    color: #5797e1;
    width: 100%;
    margin-top: 4px;
    font-size: 1.3rem;

    .menus {
      font-size: 1.5rem;
      line-height: 1;
      padding-top: 0.5rem;
      padding-right: 4rem;
      min-height: 0px;
      background: red;
    }
    @media screen and (max-width: 1600px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
    }
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

    height: 2rem;
  }
  .BoxContainerTitle {
    // font-size: 1rem;
    width: 75%;
    padding-left: 3rem;
    padding-bottom: 0.1rem;
    @media screen and (max-width: 550px) {
      padding-left: 2rem;
    }
    @media screen and (max-width: 390px) {
      padding-left: 1.5rem;
      font-size: 0.75rem;
    }
  }
  .ThreeDotDiv {
    width: 25%;

    visibility: hidden;
  }
  .three-dots {
    font-size: 1.5rem;
    padding-top: 0.3rem;
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }
  .three-dots:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }

  .box-icons {
    position: relative;

    text-align: center;
    align-content: center;
    align-items: center;
    margin-top: 1.4rem;

    @media screen and (max-width: 550px) {
      margin-top: 0.8rem;
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
    // opacity: 0;
    text-align: center;
    margin-top: 0;
    text-transform: capitalize;

    @media screen and (max-width: 1600px) {
      font-size: 0.7rem;
    }
  }
  .notcarousel {
    margin: 0px 0px 9px 0px;
    @media screen and (max-width: 550px) {
      margin: 0px 0px -6px 0px;
    }
    @media screen and (max-width: 390px) {
      margin: 0px 0px -11px 0px;
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
    color: #64b5f6;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    padding: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.15);

    @media screen and (min-width: 390px) and (max-width: 550px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 390px) {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 550px) {
    height: 10rem;
    width: 10rem;
  }
  @media screen and (max-width: 390px) {
    height: 8rem;
    width: 8rem;
  }

  .cSYqTs {
    @media screen and (max-width: 550px) {
      overflow: hidden;
      margin: 0 0px;
    }
  }
`;
const IconContainer = styled.div`
  margin: 0px 0px 9px 0px;
  text-align: center;
  @media screen and (max-width: 550px) {
    margin: 0px 0px 4px 0px;
  }
  @media screen and (max-width: 390px) {
    margin: 0px 0px -1px 0px;
  }
`;

const BoxContainer = (props) => {
  const [openPopup, setopenPopup] = useState(false);

  const closePopup = () => {
    setopenPopup(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
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
        "_blank"
      );

      if (!popup) {
        setopenPopup(true);
      } else {
        setopenPopup(false);
      }
    });
  };

  const onhandleClick = (e) => {
    e.stopPropagation();
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

  const getDataFromChildren = (values) => {
    props.sendToParent(values, props.id);
  };
  const ArrowLeft = () => (
    <span className="center-arrow">
      <BsArrowLeft className="arrow-left" />{" "}
    </span>
  );

  const ArrowRight = () => (
    <span className="center-arrow">
      <BsArrowRight className="arrow-right" />{" "}
    </span>
  );

  const GoogleId = localStorage.getItem("GoogleId");

  React.useEffect(() => {}, []);
  const sliderValue = localStorage.getItem("sliderValue")
    ? localStorage.getItem("sliderValue")
    : 10;
  return (
    <Wrapper
      position={props.position}
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
            style={{ marginLeft: "10px" }}
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
                fontSize: "0.9rem",
                lineHeight: "1",
                paddingTop: "0.5rem",
                paddingRight: "4rem",
                minHeight: "0px",
              }}
              onClick={handleAddFormOpen}
            >
              <RiAddCircleLine
                style={
                  {
                    marginRight: "14px",
                    color: "green",
                    fontSize: "1rem",
                    marginLeft:"-0.1rem"
                  }
                }
              />
              Add
            </MenuItem>

            <MenuItem
              style={{
                fontSize: "0.9rem",
                lineHeight: "1",
                minHeight: "0px",
              }}
              onClick={handleEdit}
            >
              <FiEdit
                style={{
                  marginRight: "16px",
                  color: "green",
                  fontSize: "0.85rem",
                }}
              />
              Edit
            </MenuItem>
            <MenuItem
              style={{
                fontSize: "0.9rem",
                lineHeight: "1",
                paddingBottom: "0.5rem",
                minHeight: "0px",
              }}
              onClick={handleClick}
            >
              <IoOpenOutline
                style={{
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
              cols={2}
              rows={2}
              gap={0}
              showDots={false}
              loop
              hideArrow={false}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              mobileBreakpoint={[
                {
                  cols: 2,
                  rows: 2,
                },
              ]}
            >
              {props.data.map((data, index) => (
                <Carousel.Item key={index}>
                  <IconContainer>
                    <a
                      key={data.index}
                      href={
                        `${data.url}`.indexOf("https://") === 0
                          ? `${data.url}`
                          : `https://${data.url}`
                      }
                      target="_blank"
                      id={data.index}
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
                  </IconContainer>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel
              cols={2}
              rows={2}
              gap={1}
              showDots={false}
              loop
              hideArrow={true}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              mobileBreakpoint={[
                {
                  cols: 2,
                  rows: 2,
                },
              ]}
            >
              {newArray.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className="notcarousel">
                    {data !== 0 ? (
                      <a
                        key={index}
                        href={
                          `${data.url}`.indexOf("https://") === 0
                            ? `${data.url}`
                            : `https://${data.url}`
                        }
                        target="_blank"
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
                        <p className="image_description">{data.title}</p>
                      </a>
                    ) : (
                      <Tooltip title="Add New">
                        <IconButton
                          size="small"
                          style={{ borderRadius: "50%" }}
                          onClick={handleAddFormOpen}
                        >
                          <AddIcon
                            // style={{ marginTop: "-2px" }}
                            className="extra-add"
                          />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>{" "}
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
        <Addurl
          open={openAddForm}
          getCategoryFormDB={props.getCategoryFormDB}
          handleClose={handleAddFormClose}
          id={props.id}
          sendDataToParent={getDataFromChildren}
          categoryId={props.boxDataFromDb.CategoryId}
          GoogleId={GoogleId}
          Categorytitle={
            GoogleId ? props.boxDataFromDb.CategoryName : props.title
          }
        />
        <PopBlocker open={openPopup} handleCloseMsg={closePopup} />
      </div>
    </Wrapper>
  );
};

export default BoxContainer;
