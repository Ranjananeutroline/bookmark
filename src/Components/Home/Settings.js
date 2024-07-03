import React, { useState, useEffect } from "react";
import {FcGoogle} from 'react-icons/fc'
import {SiMicrosoftbing,SiDuckduckgo} from 'react-icons/si'

import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { styled as muistyle } from "@mui/material/styles";
import { FormControlLabel, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import theme1 from "../../Assets/abc.jpg";
import theme2 from "../../Assets/b.jpg";
import theme3 from "../../Assets/d.jpg";
import theme4 from "../../Assets/c.jpg";
import theme5 from "../../Assets/e.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../Profile/Profile";
import Resetting from "../Resetting/Resetting";
import { Tooltip } from "@mui/material";
import { useHistory } from "react-router-dom";
import GoogleSignUp from "../GoogleLogin/GoogleSignUp";
import axios from "axios";
import Slider from "@mui/material/Slider";
import { RiSunFill } from "react-icons/ri";
import {api} from '../../api/api'
import { FaUser } from "react-icons/fa";
import Googlelogin from "../GoogleLogin/GoogleLogin";
import InstallApp from "../AboutHelpTerms/InstallApp";
import AddExtension from "./AddExtension";
const useStyles = makeStyles((theme) => ({
  selectBorder: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#dfbaba;",
    },
    "& .MuiInputLabel-root": {
      color: "gray",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-input": {
      color: "gray",
      fontSize: "14px",
      textAlign: "center",
      padding: "10px",
    },
  },
  menuItemClass: {
    "& .MuiMenuItem-root": {
      fontSize: "0.9rem",
    },
  },
}));

const SettingContainer = styled.aside`
  box-shadow: -5px 5px 10px rgba(105, 105, 105, 0.2),
    5px -5px 10px rgba(105, 105, 105, 0.2);
  .activeTab {
    color: #1976d2;
    font-size: 1.5rem;
  }
  .defaultTab {
    color: gray;
    font-size: 1.5rem;
  }
  background: #f4f4f4;
  position: fixed;
  height: 100%;
  width: 23%;
  top: 0;
  z-index: 9;
  transition: 0.5s ease-in;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  .css-19kzrtu {
    padding: 13px;
    margin-left: -11px;
    margin-right: 6px;

    @media screen and (max-width: 1300px) {
      padding: 10px;
      margin-right: 6px;
      margin-left: -16px;
    }
  }

  .setting-seperator {
    background-color: #fffafa;
    border: 1px solid #dfbaba;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .tabicon {
    font-size: 1.5rem;
  }

  .icon-tab {
    width: 45%;
    border-bottom: 2px solid #a09d90;
    margin-left: 1rem;
  }

  .custom-search {
    height: 3rem;
  }

  .tabpanel {
    width: 100%;
    margin: auto;
    padding: 8px 11px 11px 11px !important;
  }

  .title-setting {
    font-size: 1rem;
    border-radius: 7px;
    margin: 0 8px;
    padding: 5px;
    font-size: 1rem;
    color: #000;
    background: #fffafa;
  }

  .title-setting::before,
  .title-setting::after {
    flex: 1 1;
    content: "";
    margin: auto;
    border-bottom: 1px solid #dfbaba;
  }
  .title-setting::before {
    margin-right: 8px;
  }
  .title-setting::after {
    margin-left: 8px;
  }

  @media screen and (max-width: 1170px) {
    width: 30%;
  }
  @media screen and (max-width: 980px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 55%;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

const CloseIcon = styled(IoMdClose)`
  color: #000;
  :hover
  {
    border-radius:50%;
   padding:0.1rem;
    background:#F5F5F5;
  }
  
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
  outline: none;
 
`;
const SettingTitle = styled.div`
  font-size: 1.5rem;
  font-family: Roboto;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const SettingItems = styled.div`
  padding: 5px;
  font-size: 14px;
  padding-bottom: 5px;
  display: flex;
  color: #000;
  align-items: center;
  justify-content: space-between;
  text-align: start;
`;
const ShowHideContainer = styled.div`
  padding: 5px;
  font-size: 13px;
  display: flex;
  color: #000;
  align-items: center;
  justify-content: space-between;
`;

const ItemLabel = styled.div``;

const DarkModeContainer = styled.div`
  padding-right: 1rem;
  text-align: end;
  margin-top: 1rem;
`;
// const newWindows = (value, id) => {
//   value.length === 0
//     ? localStorage.clear()
//     : localStorage.setItem(id, JSON.stringify(value));
// };
const OthersSettingContainer = styled.div`
  .formcontrol {
    display: inline;
  }

  .weather-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title-osetting {
    font-size: 1.15rem;
    margin-bottom: 0.8rem;
    margin-top: 1rem;
    text-align: start;
  }
  .title-subtitle {
    text-align: start;
    font-size: 1rem;
  }

  .coutry-city {
    margin-top: 2rem;
  }
  .w-100 {
    width: 100%;
  }
  .remainder-checkbox {
    text-align: end;
  }
  .remainder-checkboxes {
    text-align: start;
  }
  .locationswitch {
    margin-top: 4px;
  }
  .remainder-label {
    text-align: start;
  }
`;

const SettingPart = styled.div`
  background-color: #fffafa;
  border: 1px solid #dfbaba;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const BottomThemeSwitch = styled.div`
  margin-top: 10px;
  text-align: end;
`;

const WallpaperSection = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  justify-content: space-between;

  .theme-img {
    height: 4rem;
    width: 4.5rem;
    padding: 0px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid white;
    @media screen and (max-width: 1400px) {
      height: 3rem;
      width: 3rem;
      justify-content: space-between;
    }
  }
`;

const SigUpCreateAccout = styled.div`
  background-color: #fffafa;
  border: 1px solid #dfbaba;
  border-radius: 10px;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  text-align: left;

  .signInCreateAccountDiv {
  }
  .signupCreateAccoutInnerDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .SigInTitle {
    font-weight: bold;
    text-align: center;
  }
`;

const TermsAndPolicies = styled.div`
  margin-bottom: 0.1rem;
  margin-left: 1.8rem;
  padding: 0.55rem 0rem 0.55rem 0rem;
  display: flex;
  gap: 2rem;
  position: absolute;
  bottom: 0;

  .textTermsAndPolicies {
    cursor: pointer;
    color: black;
    font-size: 0.85rem;
  }
  .textTermsAndPolicies:hover {
    color: #64b5f6;
  }
`;

const OtherSeeting = styled.div`
  background-color: #fffafa;
  border: 1px solid #dfbaba;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  .weatherdiv {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #e9d1d1;
  }
  .resetSettingDiv {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }
`;

const ProfileContainer = styled.div`
  background-color: #fffafa;
  border: 1px solid #dfbaba;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1.1rem 1rem 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  .profileDiv {
  }
  .userName {
    font-size: 1rem;
    color: #808080;
    font-weight: 600;
    margin-top:0.2rem;
  }
  .email {
    font-size: 0.85rem;
    color: #ababab;
  }
  .changePasswordDiv {
  }
`;

const ShadowDensity = styled.div`
  background-color: #fffafa;
  border: 1px solid #dfbaba;
  border-radius: 10px;
  padding: 1rem 1rem 1rem 1rem;
  margin-top: 1rem;
  .ShadowDensityInnerDiv {
    display: flex;
    align-items: center;
  }
`;
const IOSSwitch = muistyle((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 34,
  height: 18,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 15,
    height: 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Setting = ({
  isOpen,
  toggle,

  darkModeHandler,

  theme,
  handleTheme,

  noteHandler,
  toDoListHandler,
  BookmarsHandler,

  weatherHandler,
  StickyNote,
  stickyNoteHandler,
  handleBackgroundImage,
  defaultBrowser,
  defaultBrowserHandler,
  rescentApp,
  rescentAppHandler,
  handleSlider,
  sliderValue,
  z,
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();
  const [profileImage, setprofileImage] = useState();
  const getProfileImage = () => {
    if (GoogleId) {
      axios
        .get(api+"/profile/" + GoogleId)
        .then((res) => {
          setprofileImage(res.data.data[0].ImageUrl);
          console.log("hello");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const GoogleId = localStorage.getItem("GoogleId");

  const [profileDataFromDB, setProfileDataFromDB] = useState({
    Name: "",
    Email: "",
    ImageUrl: "",
    Phone: "",
    DateOfBirth: "",
  });

  const getProfileDataDb = () => {
    axios
      .get(api+"/profile/" + GoogleId)
      .then((res) => {
        setProfileDataFromDB(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileImage();
  }, []);
  const classes = useStyles();

  return (
    <SettingContainer
      isOpen={isOpen}
      style={
        localStorage.getItem("DarkMode") === "true"
          ? { backgroundColor: "#3c3c3c", color: "white", boxShadow: "none" }
          : { backgroundColor: "#f4f4f4" }
      }
    >
      <Icon onClick={toggle}>
        <CloseIcon
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { color: "white" }
              : { color: "" ,}
          }
        />
      </Icon>
      <SettingTitle>Settings</SettingTitle>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tooltip title="General Settings">
          <Tab
            icon={
              <IoSettings
                className={value ? "defaultTab" : "activeTab"}
                style={
                  localStorage.getItem("DarkMode") === "true"
                    ? { color: "white" }
                    : { color: " " }
                }
              />
            }
            {...a11yProps(1)}
            aria-label="other setting"
            className="icon-tab"
          />
        </Tooltip>
        <Tooltip title="Profile Settings">
          <Tab
            icon={
              <FaUser
                className={value ? "activeTab" : "defaultTab"}
                style={
                  localStorage.getItem("DarkMode") === "true"
                    ? { color: "white" }
                    : { color: " " }
                }
              />
            }
            {...a11yProps(0)}
            aria-label="profile"
            className="icon-tab"
          />
        </Tooltip>
      </Tabs>

      <TabPanel value={value} index={0} className="tabpanel">
        <SettingPart>
          <SettingItems>
            <ItemLabel
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "black" }
                  : { color: "" }
              }
            >
              Default Search Engine
              {/* Default  Engine */}
            </ItemLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={defaultBrowser == null ? "" : defaultBrowser}
              sx={{ width: 121, height: 35 }}
              size="small"
              className={classes.selectBorder}
              onChange={defaultBrowserHandler}
              MenuProps={{
                MenuListProps: {
                  disablePadding: "true",
                },
              }}
            >
              <MenuItem
                style={{
                  fontSize: "0.9rem",
                  padding: "0.1rem 1rem 0.1rem 1.5rem",
                }}
                value="Google"
              >
               <FcGoogle style={{marginRight:"0.5rem"}}/> Google
              </MenuItem>
              <MenuItem
                style={{
                  fontSize: "0.9rem",
                  padding: "0.2rem 1.5rem 0.2rem 1.5rem",
                }}
                value="Bing"
              >
             <SiMicrosoftbing style={{marginRight:"0.5rem"}}/>   Bing
              </MenuItem>
              {/* <MenuItem
                style={{
                  fontSize: "0.9rem",
                  padding: "0.2rem 1.5rem 0.2rem 1.5rem",
                }}
                value="Yahoo"
              >
                Yahoo
              </MenuItem> */}

              <MenuItem
                style={{
                  fontSize: "0.9rem",
                  padding: "0.2rem 1.5rem 0.2rem 1.5rem",
                }}
                value="Duckduckgo"
              >
             <SiDuckduckgo style={{marginRight:"0.5rem"}}/>  Duckduckgo
              </MenuItem>
            </Select>
          </SettingItems>
        </SettingPart>

        <fieldset className="setting-seperator">
          <legend>
            <span className="title-setting">Show / Hide</span>
          </legend>
          <Grid container rowSpacing={0} columnSpacing={{ md: 2, xl: 12 }}>
            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Notes
                </ItemLabel>
                {localStorage.getItem("Notes") === "false" ? (
                  <IOSSwitch onClick={noteHandler} />
                ) : (
                  <IOSSwitch onClick={noteHandler} defaultChecked />
                )}
              </ShowHideContainer>
            </Grid>
            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Recents
                </ItemLabel>
                {rescentApp === "false" ? (
                  <IOSSwitch color="primary" onClick={rescentAppHandler} />
                ) : (
                  <IOSSwitch
                    color="primary"
                    onClick={rescentAppHandler}
                    defaultChecked
                  />
                )}
              </ShowHideContainer>
            </Grid>
            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Bookmarks
                </ItemLabel>
                {localStorage.getItem("BookMarks") === "false" ? (
                  <IOSSwitch color="primary" onClick={BookmarsHandler} />
                ) : (
                  <IOSSwitch
                    color="primary"
                    onClick={BookmarsHandler}
                    defaultChecked
                  />
                )}
              </ShowHideContainer>
            </Grid>
            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Weather
                </ItemLabel>
                {localStorage.getItem("Weather") === "false" ? (
                  <IOSSwitch color="primary" onClick={weatherHandler} />
                ) : (
                  <IOSSwitch
                    color="primary"
                    onClick={weatherHandler}
                    defaultChecked
                  />
                )}
              </ShowHideContainer>
            </Grid>

            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Todo&nbsp;Lists
                </ItemLabel>
                {localStorage.getItem("ToDoList") === "false" ? (
                  <IOSSwitch color="primary" onClick={toDoListHandler} />
                ) : (
                  <IOSSwitch
                    color="primary"
                    onClick={toDoListHandler}
                    defaultChecked
                  />
                )}
              </ShowHideContainer>
            </Grid>

            <Grid item xs={6}>
              <ShowHideContainer>
                <ItemLabel
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Sticky&nbsp;Notes
                </ItemLabel>
                {StickyNote === "false" ? (
                  <IOSSwitch color="primary" onClick={stickyNoteHandler} />
                ) : (
                  <IOSSwitch
                    color="primary"
                    onClick={stickyNoteHandler}
                    defaultChecked
                  />
                )}
              </ShowHideContainer>
            </Grid>
          </Grid>
        </fieldset>
        {/* <fieldset className="setting-seperator">
          <legend>
            <span className="title-setting">Display Icons</span>
          </legend>
          <SettingDisplayIcons>
            <CgDisplayFlex className="display-icon" />
            <CgDisplayFullwidth className="display-icon" />
            <CgDisplayGrid className="display-icon" />
            <CgDisplaySpacing className="display-icon" />
            <MdOutlineSmartDisplay className="display-icon" />
          </SettingDisplayIcons>
        </fieldset> */}
        {/* <OtherSeeting>
          <FormControl className="formcontrol"> */}
        {/* <span
              style={{
                borderBottom: "1px solid #e9d1d1",
                paddingBottom: "0.2rem",
              }}
            >
              Default Search Engine
            </span> */}
        {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={defaultBrowser}
              // value={defaultBrowser == null ? "" : defaultBrowser}
              defaultValue="Default Search Engine"
              // sx={{ width: 120}}
              size="small"
              className={classes.selectBorder}
              onChange={defaultBrowserHandler}
            >
             <MenuItem value="Default Search Engine" disabled>Default Search Engine</MenuItem>
              <MenuItem className={classes.selectBorder} value="Google">
                Google
              </MenuItem>
              <MenuItem value="Bing">Bing</MenuItem>
              <MenuItem value="Yahoo">Yahoo</MenuItem>
             

            </Select> */}
        {/* </FormControl>
        </OtherSeeting> */}

        <OtherSeeting>
          {" "}
          <div className="weatherdiv">
            <ItemLabel
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "black" }
                  : { color: "" }
              }
            >
              Current Location
            </ItemLabel>
            {localStorage.getItem("Weather") === "false" ? (
              <IOSSwitch color="primary" onClick={weatherHandler} />
            ) : (
              <IOSSwitch
                color="primary"
                onClick={weatherHandler}
                defaultChecked
              />
            )}
          </div>
          <div className="resetSettingDiv">
            <Resetting />
          </div>
        </OtherSeeting>

        <DarkModeContainer>
          {localStorage.getItem("DarkMode") === "true" ? (
            <FormControlLabel
              value="start"
              control={<IOSSwitch color="primary" defaultChecked="true" />}
              label="Dark Mode &nbsp;&nbsp;"
              labelPlacement="start"
              onClick={darkModeHandler}
              defaultChecked="true"
            />
          ) : (
            <FormControlLabel
              value="start"
              control={<IOSSwitch color="primary" />}
              label="Dark Mode &nbsp;&nbsp;"
              labelPlacement="start"
              onClick={darkModeHandler}
            />
          )}
        </DarkModeContainer>
        <TermsAndPolicies>
          <span
            onClick={() => history.push("/info/about")}
            className="textTermsAndPolicies"
            style={
              localStorage.getItem("DarkMode") === "true"
                ? { color: "white" }
                : { color: "" }
            }
          >
            About
          </span>

          <span
            className="textTermsAndPolicies"
            onClick={() => history.push("/info/help")}
            style={
              localStorage.getItem("DarkMode") === "true"
                ? { color: "white" }
                : { color: "" }
            }
          >
            {" "}
            Help
          </span>

          <span
            onClick={() => history.push("/info/privacy")}
            className="textTermsAndPolicies"
            style={
              localStorage.getItem("DarkMode") === "true"
                ? { color: "white" }
                : { color: "" }
            }
          >
            {" "}
            Terms & Privacy
          </span>
        </TermsAndPolicies>
      </TabPanel>
      <TabPanel value={value} index={1} className="tabpanel">
        <OthersSettingContainer>
          {localStorage.getItem("GoogleId") ? (
            <ProfileContainer>
              <img
                src={profileImage}
                alt=""
                style={{ borderRadius: "50%", width: "4rem", height: "4rem" }}
              />

              <div>
                <div className="userName">{profileDataFromDB.Name}</div>
                <div className="email">{profileDataFromDB.Email}</div>
              </div>

              <div className="profileDiv">
                <Profile
                  profileDataFromDB={profileDataFromDB}
                  setProfileDataFromDB={setProfileDataFromDB}
                  getProfileDataDb={getProfileDataDb}
                />
              </div>
            </ProfileContainer>
          ) : (
            <SigUpCreateAccout>
              <div className="signupCreateAccoutInnerDiv">
                <span
                  className="SigInTitle"
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Create an account
                </span>
                <div className="signInCreateAccountDiv">
                  <GoogleSignUp />
                </div>
                <span
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.77rem",
                    color: "black",
                  }}
                >
                  Already a member?&nbsp;
                </span>
                <span style={{ color: "#70a7e5", cursor: "pointer" }}>
                  <Googlelogin />
                </span>
              </div>
            </SigUpCreateAccout>
          )}

          <ShadowDensity>
            <div
              style={{ textAlign: "center" }}
              className="ShadowDensityInnerDiv"
            >
              <Tooltip title="Shadow Density">
                <Button
                  size="small"
                  style={{
                    background: "none",
                    minWidth: "0px",
                    marginRight: "0.8rem",
                  }}
                >
                  <RiSunFill
                    style={{
                      color: "#1976d2",
                      fontSize: "1.3rem",
                      cursor: "pointer",
                    }}
                  />
                </Button>
              </Tooltip>
              <Slider
                defaultValue={sliderValue}
                aria-label="Volume"
                onChange={handleSlider}
                sx={{
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#fff",
                    border: "2px solid currentColor",
                  },
                  "& .MuiSlider-rail": {
                    height: 4,
                  },
                  "& 	.MuiSlider-track": {
                    height: 2,
                  },
                }}
                max="15"
              />
            </div>
          </ShadowDensity>

          {/* <h5 className="title-osetting">Customize</h5>
          <div className="title-subtitle">Show/Hide</div>
          <SettingDisplayIcons>
            <SettingGridContainer>
              <MdGridView className="display-icon" />
              <SettingLabel>Social Media</SettingLabel>
            </SettingGridContainer>
            <SettingGridContainer>
              <MdGridView className="display-icon" />
              <SettingLabel>News</SettingLabel>
            </SettingGridContainer>
            <SettingGridContainer>
              <MdGridView className="display-icon" />
              <SettingLabel>Popular</SettingLabel>
            </SettingGridContainer>
            <SettingGridContainer>
              <MdGridView className="display-icon" />
              <SettingLabel>Entertainment</SettingLabel>
            </SettingGridContainer>
            <SettingGridContainer>
              <MdGridView className="display-icon" />
              <SettingLabel>Banks</SettingLabel>
            </SettingGridContainer>
          </SettingDisplayIcons> */}

          <h5 className="title-osetting">Custom Wallpapers</h5>
          {theme === "true" ? (
            <WallpaperSection>
              <img
                src={theme1}
                className="theme-img"
                alt="wallpaper1"
                onClick={() => handleBackgroundImage("theme1")}
              />
              <img
                src={theme2}
                className="theme-img"
                alt="wallpaper1"
                role="button"
                onClick={() => handleBackgroundImage("theme2")}
              />
              <img
                src={theme3}
                className="theme-img"
                alt="wallpaper1"
                role="button"
                onClick={() => handleBackgroundImage("theme3")}
              />
              <img
                src={theme4}
                className="theme-img"
                alt="wallpaper1"
                role="button"
                onClick={() => handleBackgroundImage("theme4")}
              />
              <img
                src={theme5}
                className="theme-img"
                alt="wallpaper1"
                onClick={() => handleBackgroundImage("theme5")}
              />
            </WallpaperSection>
          ) : null}
          <BottomThemeSwitch>
            {theme === "true" ? (
              <FormControlLabel
                value="start"
                control={<Switch color="primary" defaultChecked />}
                label="Theme"
                labelPlacement="start"
                onChange={handleTheme}
              />
            ) : (
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Theme"
                labelPlacement="start"
                onChange={handleTheme}
              />
            )}
          </BottomThemeSwitch>
          {GoogleId ? null : <AddExtension />}
        </OthersSettingContainer>
      </TabPanel>
    </SettingContainer>
  );
};

export default Setting;
