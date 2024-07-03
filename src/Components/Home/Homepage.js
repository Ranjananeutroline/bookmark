import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import bbc from "../../Assets/bbc.png";
import ekantipur from "../../Assets/ekantipur.png";
import setopati from "../../Assets/setopati.png";
import onlinekhabar from "../../Assets/onlinekhabar.jpg";
import merolagani from "../../Assets/merolagani.png";
import meroshare from "../../Assets/meroshare.png";
import sharesansar from "../../Assets/sharesansar.png";
import nepalstock from "../../Assets/nepalstock.png";
import nicasia from "../../Assets/nicasia.png";
import nabil from "../../Assets/nabil.png";
import prabhu from "../../Assets/prabhu.png";
import global from "../../Assets/global.png";
import daraz from "../../Assets/daraz.png";
import foodmandu from "../../Assets/foodmandu.png";
import esewa from "../../Assets/esewa.png";
import zoom from "../../Assets/zoom.png";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import messenger from "../../Assets/messenger.png";
import linkedin from "../../Assets/linkedin.png";
import spotify from "../../Assets/spotify.png";
import amazonprime from "../../Assets/amazonprime.png";
import Draggable from "react-draggable";
import TopContainer from "./TopContainer";
// import Notes from "../Notes";
// import Calculator from "../Calculator/Calculator";
import { IoChevronDownOutline, IoSettings } from "react-icons/io5";
import OutsideHandler from "./OutsideHandler";
// import Assistive from "../AssitiveTouch/Assistive"
import SearchBox from "../SearchBox/SearchBox";
import WeatherAPI from "../Weather/WeatherAPI";
import RecentSites from "../RecentSites/RecentSites";
import Assistive from "../AssitiveTouch/Assistive";
// let value = localStorage.getItem("BackgroundImage");
import theme1 from "../../Assets/abc.jpg";
import theme2 from "../../Assets/b.jpg";
import theme3 from "../../Assets/d.jpg";
import theme4 from "../../Assets/c.jpg";
import theme5 from "../../Assets/e.jpg";
import { BsThreeDots, BsFillReplyAllFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoOpenOutline, IoAddCircleOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import NewBookMark from "../BookMark/AddBookMark/NewBookMark";
import BoxContainer from "./BoxContainer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
// import EditForm from "./EditForm";
import FormBookMark from "../BookMark/AddBookMark/FormBookMark";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomepageContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  }
  a:link{
  text-decoration: none!important;
}
 
  .three-dots {
    position: absolute;
    right: 5%;
    float: right;
    vertical-align: middle;
    visibility: hidden;
    font-size: 1.5em;
  }
  .three-dots:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }
  .setting-icon {
    margin-top: 2rem;
    margin-right: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .search-layout > input {
    background-color: red;
  }
  .box-layout-left {
    margin-left: 5rem;
    width: 13rem;ss
    height: 13rem;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
  }
  .box-layout-right {
    margin-left: auto;
    margin-right: 5rem;
    width: 13rem;
    height: 13rem;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
  }
  .box-layout-center {

    width: 90%;
    height: 88px;
    filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.25));
    border: 1px solid #f0f0f0;
    border-radius: 20px;
  }
  .box-layout-left:hover,
  .box-layout-right:hover,
  .box-layout-center:hover {
    box-shadow: 1px 2px #ccc;
  }
  .box-title {
    position: absolute;
    width: 100%;
    color: #5797e1;
    margin-top: 4px;
  }
  .base-box-title {
    position: absolute;
    width: 100%;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.065em;
    color: #5797e1;
  }
  .box-line {
    position: absolute;
    width: 100%;
    margin-top: 6px;
    border: 1px solid rgba(240, 240, 240, 0.5);
    color: #f0f0f080;
  }
  .base-box-line {
    position: absolute;
    margin-top: 6px;
    width: 100%;
    border: 1px solid rgba(240, 240, 240, 0.5);
    color: #f0f0f080;
  }
  
  .box-icons {
    display: flex;
   flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  }
  .ff{
    height: 55px;
    width: 55px;
    flex: 1 0 50%; 
    border-radius: 10px;
    margin:20px;
  }
 
  .first-icon {
    position: absolute;
    margin-top: 18%;
    margin-left: -32%;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .second-icon {
    position: absolute;
    margin-top: 18%;
    margin-left: 10%;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .third-icon {
    position: absolute;
    margin-top: 51%;
    margin-left: -32%;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .fourth-icon {
    position: absolute;
    margin-top: 51%;
    margin-left: 10%;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .base-first-icon,
  .base-second-icon,
  .base-third-icon,
  .base-fourth-icon {
    margin-top: 5px;
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .base-first-icon:hover,
  .base-second-icon:hover,
  .base-third-icon:hover,
  .base-fourth-icon:hover,
  .first-icon:hover,
  .second-icon:hover,
  .third-icon:hover,
  .fourth-icon:hover {
    cursor: pointer;
    filter: drop-shadow(3px 5px 2px #bdbdbd);
    transition: all 0.4s linear;
  }
  .image_description1, .image_description2, .image_description3, .image_description4, .image_description5, .image_description6, .image_description7, .image_description8 {
    position: relative;
    color: #659fe3;
    font-size: 0.7em;
    visibility: hidden;
    text-decoration: none!important;
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
    text-align: center;
    margin-top: -2.1em;
  }
  .icons1:hover .image_description1 {
    visibility: visible;
    opacity: 1;
    text-decoration: none;

  }
 
  .icons2:hover .image_description2 {
    visibility: visible;
    opacity: 1;
  }
  
  .icons3:hover .image_description3 {
    visibility: visible;
    opacity: 1;
  }
  
  .icons4:hover .image_description4 {
    visibility: visible;
    opacity: 1;
  }
  
  .icons5:hover .image_description5 {
    visibility: visible;
    opacity: 1;
  }
  
  .icons6:hover .image_description6 {
    visibility: visible;
    opacity: 1;
  }
  
  .icons7:hover .image_description7 {
    visibility: visible;
    opacity: 1;
  }
 
  .icons8:hover .image_description8 {
    visibility: visible;
    opacity: 1;
  }
  .weatherapi {
    position: relative;
  }
  .recent-apps-text {
    color: #706e6e;
    letter-spacing: 0.13em;
    text-align: center;
    font-size: 1em;
  }
  @media screen and (min-width: 1600px) {
    .box-layout-left,
    .box-layout-right {
      width: 15rem;
      height: 15rem;
    }
    .box-layout-center {
      width: 99%;
      height: 7rem;
    }
    
    .first-icon,
    .second-icon,
    .third-icon,
    .fourth-icon,
    .base-first-icon,
    .base-second-icon,
    .base-third-icon,
    .base-fourth-icon {
      width: 55px;
      height: 55px;
    }
  
`;

const HomeTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5rem;
`;

const TopContainerWrapper = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
`;

const DownArrowContainer = styled.div`
  .downarrow {
    position: absolute;
    top: 1%;
    left: 50%;

    transform: translate(-50%, 0%);
    transition: all 1s ease;
    font-size: 1.3rem;
  }
`;

const SettingContainer = styled.div`
  text-align: right;
  margin-top: 2rem;
  margin-right: 3rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Homepage = ({
  toggle,
  BackgroundImage,
  defaultBrowser,
  handleClickBookmark,
  anchorRef,
  handleToggle,
  opens,
}) => {
  const [showTopContainer, setShowTopContainer] = useState(false);
  const [editform, setEditform] = useState(false);

  // const [menuopen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = useState(null);
  const [anchorE5, setAnchorE5] = useState(null);
  const [anchorE6, setAnchorE6] = useState(null);
  const [socialSites, setSocialSites] = useState([]);
  const [openmodal, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  const open4 = Boolean(anchorE4);
  const open5 = Boolean(anchorE5);
  const open6 = Boolean(anchorE6);

  console.log(anchorEl, anchorE2);

  const handleEdit = () => {
    console.log("Edit!!!");
  };

  useEffect(() => {
    loadSocialSites();
  }, []);

  const loadSocialSites = () => {
    const catchedSocialSites = localStorage.getItem("socialSites");
    if (catchedSocialSites != null) {
      const array = catchedSocialSites.split(",");
      setSocialSites(array);
    }
  };

  const handleClick1 = () => {
    window.open("https://facebook.com", "_blank");
    window.open("https://twitter.com", "_blank");
    window.open("https://www.messenger.com/", "_blank");
    window.open("https://linkedin.com", "_blank");
  };
  const handleClick2 = () => {
    window.open("https://www.bbc.com/nepali", "_blank");
    window.open("https://www.ekantipur.com/", "_blank");
    window.open("https://www.setopati.com/", "_blank");
    window.open("https://www.onlinekhabar.com/", "_blank");
  };
  const handleClick3 = () => {
    window.open("https://meroshare.cdsc.com.np/", "_blank");
    window.open("https://merolagani.com/", "_blank");
    window.open("http://www.sharesansar.com/", "_blank");
    window.open("http://www.nepalstock.com/", "_blank");
  };
  const handleClick4 = () => {
    window.open("https://esewa.com.np/", "_blank");
    window.open("https://zoom.us/", "_blank");
    window.open("https://www.daraz.com.np/", "_blank");
    window.open("https://foodmandu.com/", "_blank");
  };
  const handleClick5 = () => {
    window.open("https://www.youtube.com/", "_blank");
    window.open("https://www.spotify.com/us/", "_blank");
    window.open("https://www.netflix.com/np/", "_blank");
    window.open("https://www.primevideo.com/", "_blank");
  };
  const handleClick6 = () => {
    window.open("https://www.nicasiabank.com/", "_blank");
    window.open("https://www.prabhubank.com/", "_blank");
    window.open("https://globalimebank.com/", "_blank");
    window.open("https://www.nabilbank.com/individual", "_blank");
  };
  const editOnClick = () => {
    setEditform(true);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };
  const handleClose4 = () => {
    setAnchorE4(null);
  };
  const handleClose5 = () => {
    setAnchorE5(null);
  };
  const handleClose6 = () => {
    setAnchorE6(null);
  };

  const handleDownClick = () => {
    setShowTopContainer(true);
  };
  const handleClickOutside = () => {
    setShowTopContainer(false);
  };
  /* const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }; */
  const openLink = localStorage.getItem("OpenLinks");
  // const theme3 = "";
  // console.log(eval(localStorage.getItem("BackgroundImage")));

  const [theme, setTheme] = useState(localStorage.getItem("Theme"));
  console.log("home" + theme);
  return (
    <>
      <HomepageContainer
        style={
          localStorage.getItem("DarkMode") === "true"
            ? { backgroundColor: "black" }
            : BackgroundImage === "theme1" && theme === "true"
            ? {
                backgroundImage: `url(${theme1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : BackgroundImage === "theme2" && theme === "true"
            ? {
                backgroundImage: `url(${theme2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : BackgroundImage === "theme3" && theme === "true"
            ? {
                backgroundImage: `url(${theme3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // webkitFilter: "blur(1px)",
                // filter: "blur(8px)",
              }
            : BackgroundImage === "theme4" && theme === "true"
            ? {
                backgroundImage: `url(${theme4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : BackgroundImage === "theme5" && theme === "true"
            ? {
                backgroundImage: `url(${theme5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : { backgroundColor: "" }
        }
      >
        <HomeTopContainer>
          {localStorage.getItem("Weather") === "false" ? (
            <div></div>
          ) : (
            <WeatherAPI />
          )}
          <SettingContainer onClick={toggle}>
            <Tooltip title="Settings">
              <IconButton size="small">
                <IoSettings
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "white" }
                      : { color: "black" }
                  }
                />
              </IconButton>
            </Tooltip>
          </SettingContainer>
        </HomeTopContainer>
        {editform ? <FormBookMark /> : null}
        <Grid container spacing={2} alignItems="end" mt={6}>
          <Grid item md={4}>
            <div
              className="box-layout-left"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="box-title">
                Social Media
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose1}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={editOnClick}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick1}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://www.facebook.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    // target="_blank"
                    rel="noreferrer"
                    className="icons1"
                  >
                    <img src={facebook} alt="fb" className="ff"></img>
                    <p
                      className="image_description1"
                      style={{ textDecoration: "none" }}
                    >
                      Facebook
                    </p>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons2"
                  >
                    <img src={twitter} className="ff" alt="tw" />
                    <p className="image_description2">Twitter</p>
                  </a>

                  <a
                    href="https://www.messenger.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons3"
                  >
                    <img src={messenger} className="ff" alt="msngr" />
                    <p className="image_description3">Messenger</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons4"
                  >
                    <img src={linkedin} className="ff" alt="lnk" />
                    <p className="image_description4">Linkedin </p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="recent-search-container">
              <div className="recent-sites-layout">
                <span className="recent-apps-text"> </span>
                <RecentSites />
              </div>
              <div className="search-layout">
                <SearchBox defaultBrowser={defaultBrowser} />
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div
              className="box-layout-right"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="box-title">
                News
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorE2(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose2}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick2}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://www.bbc.com/nepali"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons1"
                  >
                    <img alt="alttag" src={bbc} className="ff" />
                    <p className="image_description1">BBC News</p>
                  </a>
                  <a
                    href="https://www.ekantipur.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons2"
                  >
                    <img alt="alttag" src={ekantipur} className="ff" />
                    <p className="image_description2">Ekantipur</p>
                  </a>
                  <a
                    href="https://www.setopati.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons3"
                  >
                    <img alt="alttag" src={setopati} className="ff" />
                    <p className="image_description3">Setopati</p>
                  </a>
                  <a
                    href="https://www.onlinekhabar.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons4"
                  >
                    <img alt="alttag" src={onlinekhabar} className="ff" />
                    <p className="image_description4">Online Khabar</p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2} alignItems="end">
          <Grid item md={3}>
            <div
              className="box-layout-left"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="box-title">
                Finance
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorE3(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE3}
                  open={open3}
                  onClose={handleClose3}
                >
                  <MenuItem onClick={handleClose3}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose3}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick3}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://meroshare.cdsc.com.np/#/login"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons1"
                  >
                    <img alt="alttag" src={meroshare} className="ff" />
                    <p className="image_description1">Meroshare</p>
                  </a>
                  <a
                    href="https://merolagani.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons2"
                  >
                    <img alt="alttag" src={merolagani} className="ff" />
                    <p className="image_description2">Merolagani</p>
                  </a>
                  <a
                    href="http://www.sharesansar.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons3"
                  >
                    <img alt="alttag" src={sharesansar} className="ff" />
                    <p className="image_description3">Sharesansar</p>
                  </a>
                  <a
                    href="http://www.nepalstock.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons4"
                  >
                    <img alt="alttag" src={nepalstock} className="ff" />
                    <p className="image_description4">Nepalstock</p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={3}>
            <div
              className="box-layout-center"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="base-box-title">
                Popular
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open4 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorE4(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE4}
                  open={open4}
                  onClose={handleClose4}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose4}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose4}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick4}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="base-box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://esewa.com.np/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons5"
                  >
                    {/* <img alt="alttag"src={"https://www.google.com/s2/favicons?sz=64&domain_url=https://www.esewa.com.np/"} className="ff" /> */}{" "}
                    <img alt="alttag" src={esewa} className="ff" />
                    <p className="image_description5">Esewa</p>
                  </a>
                  <a
                    href="https://connectips.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons6"
                  >
                    <img alt="alttag" src={zoom} className="ff" />
                    <p className="image_description6">Zoom</p>
                  </a>
                  <a
                    href="https://www.daraz.com.np/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons7"
                  >
                    <img alt="alttag" src={daraz} className="ff" />
                    <p className="image_description7">Daraz</p>
                  </a>
                  <a
                    href="https://foodmandu.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons8"
                  >
                    <img alt="alttag" src={foodmandu} className="ff" />
                    <p className="image_description8">Foodmandu</p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={3}>
            <div
              className="box-layout-center"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="base-box-title">
                Entertainment
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open5 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorE5(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE5}
                  open={open5}
                  onClose={handleClose5}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose5}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose5}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick5}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="base-box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://www.youtube.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons5"
                  >
                    <img
                      alt="alttag"
                      src="https://img.icons8.com/color/48/000000/youtube-play.png"
                      className="ff"
                    />
                    <p className="image_description5">Youtube</p>
                  </a>
                  <a
                    href="https://www.spotify.com/us/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons6"
                  >
                    <img alt="alttag" src={spotify} className="ff" />
                    <p className="image_description6">Spotify</p>
                  </a>
                  <a
                    href="https://www.netflix.com/np/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons7"
                  >
                    <img
                      alt="alttag"
                      src="https://img.icons8.com/color/48/000000/netflix-desktop-app--v1.png"
                      className="ff"
                    />
                    <p className="image_description7">Netflix</p>
                  </a>
                  <a
                    href="https://www.primevideo.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons8"
                  >
                    <img alt="alttag" src={amazonprime} className="ff" />
                    <p className="image_description8">Prime Video</p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={3}>
            <div
              className="box-layout-right"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { backgroundColor: "#18191A" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="box-title">
                Banks
                <BsThreeDots
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open6 ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorE6(e.currentTarget);
                  }}
                  className="three-dots"
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorE6}
                  open={open6}
                  onClose={handleClose6}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose6}>
                    <IoAddCircleOutline
                      style={{ marginRight: "15px", color: "green" }}
                    />
                    Add
                  </MenuItem>
                  <MenuItem onClick={handleClose6}>
                    <FiEdit style={{ marginRight: "15px", color: "#178417" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClick6}>
                    <IoOpenOutline
                      style={{ marginRight: "15px", color: "#1d5ba4" }}
                    />
                    Open all items
                  </MenuItem>
                </Menu>
                <div className="box-line"> </div>
                <div className="box-icons">
                  <a
                    href="https://www.nicasiabank.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons1"
                  >
                    <img alt="alttag" src={nicasia} className="ff" />
                    <p className="image_description1">Nicasia Bank</p>
                  </a>
                  <a
                    href="https://www.prabhubank.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons2"
                  >
                    <img alt="alttag" src={prabhu} className="ff" />
                    <p className="image_description2">Prabhu Bank</p>
                  </a>
                  <a
                    href="https://globalimebank.com/"
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="icons3"
                  >
                    <img alt="alttag" src={global} className="ff" />
                    <p className="image_description3">Global Bank</p>
                  </a>
                  <a
                    href="https://www.nabilbank.com/individual"
                    target="_blank"
                    rel="noreferrer"
                    className="icons4"
                  >
                    <img alt="alttag" src={nabil} className="ff" />
                    <p className="image_description4">Nabil Bank</p>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <OutsideHandler clickOutside={handleClickOutside}>
          {showTopContainer ? (
            <TopContainerWrapper>
              <TopContainer
                handleClickBookmark={handleClickBookmark}
                anchorRef={anchorRef}
                opens={opens}
                handleToggle={handleToggle}
              />
            </TopContainerWrapper>
          ) : (
            <DownArrowContainer>
              <IoChevronDownOutline
                onClick={handleDownClick}
                className="downarrow"
                style={
                  localStorage.getItem("DarkMode") === "true"
                    ? { color: "white" }
                    : { color: "black" }
                }
              />
            </DownArrowContainer>
          )}
        </OutsideHandler>
      </HomepageContainer>
    </>
  );
};

export default Homepage;
