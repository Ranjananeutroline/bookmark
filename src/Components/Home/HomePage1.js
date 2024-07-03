import React, { useState, useEffect } from "react";
import TopContainer from "./TopContainer";
import {api} from '../../api/api'
import WeatherAPI from "../Weather/WeatherAPI";
import theme1 from "../../Assets/abc.jpg";
import theme2 from "../../Assets/b.jpg";
import theme3 from "../../Assets/d.jpg";
import theme4 from "../../Assets/c.jpg";
import theme5 from "../../Assets/e.jpg";
import axios from "axios";
import OutsideHandler from "./OutsideHandler";
import { IoChevronDownOutline, IoSettings } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";
import BoxContainerEdit from "./BoxContainerEdit";
import BoxContainer from "./BoxContainer";
import SearchBox from "../SearchBox/SearchBox";
import RectangleBoxContainer from "./RectangleBoxContainer";
import RectangleBoxContainerEdit from "./RectangleBoxContainerEdit";
import Updateurl from "../updateUrl/updateUrl";
import IconButton from "@mui/material/IconButton";
import RecentSites from "../RecentSites/RecentSites";
import AddExtensionPopUp from "./AddExtenstionPopUp";

const HomepageContainer = styled.div`
  height: 100vh;

  a:link {
    text-decoration: none !important;
  }
  .setting-icon {
    // margin-top: 4rem;
    // margin-right: 5rem;
    // font-size: 4rem;
    cursor: pointer;

    @media screen and (max-width:1600px)
    {
      margin-top: 2rem;
      margin-right: 3rem;
      font-size: 1.2rem; 
    }
  }
  
`;
const HomeTopContainer = styled.div`
  
  margin-bottom:2.5rem;
  @media screen and (max-width:1600px)
  {
    margin-bottom:0rem;
  }
`;
const WeatherContainer = styled.div`
height: 4rem; 
  @media screen and (max-width:1600px)
  {
    height: 4rem;
  }
`;
const SettingContainer = styled.div`
  text-align: right;
 

  @media screen and (max-width: 1600px) {
    margin-top: -2rem;
    margin-right: 3rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0.2rem;
    margin-top: -3rem;
  }
`;
const PopupContainer = styled.div`
  text-align: right;

  margin-top: 1rem;
  margin-right: 10rem;
 

@media screen and (max-width:1600px)
{
  margin-right: 3rem;
  font-size: 1.2rem;
  margin-top: -1.8rem;
}
  @media screen and (max-width: 768px) {
    margin-right: 0.2rem;
    margin-top: -3rem;
  }

  .setting
  {
    font-size:1.8rem;

    @media screen and (max-width:1600px)
{

  font-size: 1rem;
  
}
  }
`;
const TopContainerWrapper = styled.div`
  position: absolute;
  
  top: 2%;
  left: 50%;

  @media screen and (max-width:1600px)
{
  top: 1%;
  left: 50%;
}
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
  .downarrow:hover {
    filter: drop-shadow(5px 5px 5px gray);
    cursor: pointer;
  }
`;

const BoxSection = styled.div`
margin:0rem 8% 0rem 8%;
  display: flex;
  gap:3rem;

 

  flex-direction: column;
 
  padding: 2rem 3rem 0rem 3rem;
  @media screen and (max-width: 1600px) {
    gap: 1.3rem;
    margin:0rem;
  }
  
  @media screen and (min-width: 1300px) {
    padding: 3rem 3rem 0rem 3rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 2rem 0rem 2rem;
  }
  @media screen and (max-width: 390px) {
    gap: 1rem;
  }
  @media screen and (max-width: 950px) {
    padding: 2rem 0rem;
  }

  .box2 {
    width:28%;
   
   
    @media screen and (max-width: 1050px) {
      width: 13rem;
    }
    @media screen and (max-width: 550px) {
      width: 10rem;
    }
    @media screen and (max-width: 390px) {
      width: 8rem;
    }
  }
`;
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 3rem;
    .search {
      position: absolute;
      top: 8%;
    }
  }
  @media screen and (max-width: 390px) {
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;

  @media screen and (max-width: 950px) {
    // flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
    column-gap: 2rem;

    display: grid;
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 390px) {
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;
const HomePage1 = ({
  toggle,
  BackgroundImage,
  defaultBrowser,
  handleClickBookmark,
  anchorRef,
  handleToggle,
  opens,
  rescentApp,
  currentLocation,
  DarkMode,
  handlePopup,
  popupOpen,
  stickyNoteHandler,
  StickyNote,
}) => {
  const [showTopContainer, setShowTopContainer] = useState(false);
  const [editMode, setEditMode] = useState({ status: false, boxId: "" });
  const [updateStatus, setUpdateStatus] = useState(false);
  const [currentUrl, setCurrentUrl] = useState();
  const [currentTitle, setCurrentTitle] = useState();
  const [currentUpdateParameters, setCurrentUpdateParameters] = useState([]);
  const [box1Sites, setBox1Sites] = useState([]);
  const [box2Sites, setBox2Sites] = useState([]);
  const [box3Sites, setBox3Sites] = useState([]);
  const [box4Sites, setBox4Sites] = useState([]);
  const [box5Sites, setBox5Sites] = useState([]);
  const [box6Sites, setBox6Sites] = useState([]);

  const box1InitialData = [
    { url: "https://facebook.com", title: "facebook" },
    { url: "https://twitter.com", title: "twitter" },
    { url: "https://www.messenger.com/", title: "messenger" },
    { url: "https://linkedin.com", title: "linkedin" },
  ];

  const box2InitialData = [
    { url: "https://www.bbc.com/nepali", title: "bbc" },
    { url: "https://www.ekantipur.com/", title: "ekantipur" },
    { url: "https://www.setopati.com/", title: "setopati" },
    { url: "https://www.onlinekhabar.com/", title: "onlinekhabar" },
  ];

  const box3InitialData = [
    { url: "https://meroshare.cdsc.com.np/", title: "meroshare" },
    { url: "https://merolagani.com/", title: "merolagani" },
    { url: "http://www.sharesansar.com/", title: "sharesansar" },
    { url: "http://www.nepalstock.com/", title: "nepalstock" },
  ];

  const box4InitialData = [
    { url: "https://www.nicasiabank.com/", title: "nicasiabank" },
    { url: "https://www.prabhubank.com/", title: "prabhubank" },
    { url: "https://globalimebank.com//", title: "globalimebank" },
    { url: "https://www.nabilbank.com/individual", title: "nabilbank" },
  ];

  const box5InitialData = [
    { url: "https://www.youtube.com/", title: "youtube" },
    { url: "https://www.hackerrank.com/", title: "hackerrank" },
    { url: "https://reactjs.org/", title: "reactjs" },
    { url: "https://stackoverflow.com/", title: "stackoverflow" },
  ];

  const box6InitialData = [
    { url: "https://www.netflix.com/", title: "netflix" },
    { url: "https://www.twitch.tv/", title: "twitch" },
    { url: "https://www.typingclub.com/sportal/", title: "typingclub" },
    { url: "https://9anime.to/", title: "9anime" },
  ];

  // From Database
  const GoogleId = localStorage.getItem("GoogleId");
  const [box1FromDb, setBox1FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });
  const [box2FromDb, setBox2FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });

  const [box3FromDb, setBox3FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });

  const [box4FromDb, setBox4FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });
  const [box5FromDb, setBox5FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });
  const [box6FromDb, setBox6FromDb] = useState({
    CategoryId: "",
    CategoryName: "",
    ProfileId: "",
  });

  const [box1DataFromDb, setBox1DataFromDb] = useState([]);
  const [box2DataFromDb, setBox2DataFromDb] = useState([]);
  const [box3DataFromDb, setBox3DataFromDb] = useState([]);
  const [box4DataFromDb, setBox4DataFromDb] = useState([]);
  const [box5DataFromDb, setBox5DataFromDb] = useState([]);
  const [box6DataFromDb, setBox6DataFromDb] = useState([]);
console.log(api)
  const getCategoryFormDB = () => {
    if (GoogleId) {
      //for category
      axios
        .get(api+"/category/" + GoogleId)
        .then((res) => {
          //box0 data from db
          setBox1FromDb(res.data.data[0]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[0].CategoryId
            )
            .then((res) => {
              setBox1DataFromDb(res.data.data);
            });

          //box4 data from db
          setBox2FromDb(res.data.data[4]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[4].CategoryId
            )
            .then((res) => {
              // console.log(res.data.data);()
              setBox2DataFromDb(res.data.data);
            });

          //box1 data from db
          setBox3FromDb(res.data.data[1]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[1].CategoryId
            )
            .then((res) => {
              setBox3DataFromDb(res.data.data);
            });

          //box5 data from db
          setBox4FromDb(res.data.data[5]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[5].CategoryId
            )
            .then((res) => {
              setBox4DataFromDb(res.data.data);
            });

          //box2 data from db
          setBox5FromDb(res.data.data[2]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[2].CategoryId
            )
            .then((res) => {
              setBox5DataFromDb(res.data.data);
            });
          //box3 data from db
          setBox6FromDb(res.data.data[3]);
          axios
            .get(
              api+"/favoriteBookmark/category/" +
                GoogleId +
                "/" +
                res.data.data[3].CategoryId
            )
            .then((res) => {
              setBox6DataFromDb(res.data.data);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getCategoryFormDB();

    setInitialData("box1", box1InitialData);
    setInitialData("box2", box2InitialData);
    setInitialData("box3", box3InitialData);
    setInitialData("box4", box4InitialData);
    setInitialData("box5", box5InitialData);
    setInitialData("box6", box6InitialData);

    setInitialName("box1Name", "Social Media");
    setInitialName("box2Name", "News");
    setInitialName("box3Name", "Finance");
    setInitialName("box4Name", "Banks");
    setInitialName("box5Name", "Popular");
    setInitialName("box6Name", "Entertainment");

    loadBoxContainerSites("box1");
    loadBoxContainerSites("box2");
    loadBoxContainerSites("box3");
    loadBoxContainerSites("box4");
    loadBoxContainerSites("box5");
    loadBoxContainerSites("box6");
  }, []);

  const setInitialData = (id, initialValue) => {
    localStorage.getItem(id) == null &&
      localStorage.setItem(id, JSON.stringify(initialValue));
  };

  const setInitialName = (id, initialValue) => {
    localStorage.getItem(id) == null && localStorage.setItem(id, initialValue);
  };

  const loadBoxContainerSites = (id) => {
    const catchedSocialSites = JSON.parse(localStorage.getItem(id));
    if (catchedSocialSites != null) {
      id === "box1" && setBox1Sites(catchedSocialSites);
      id === "box2" && setBox2Sites(catchedSocialSites);
      id === "box3" && setBox3Sites(catchedSocialSites);
      id === "box4" && setBox4Sites(catchedSocialSites);
      id === "box5" && setBox5Sites(catchedSocialSites);
      id === "box6" && setBox6Sites(catchedSocialSites);
    }
  };

  const handleUpdateMode = (id, boxId) => {
    // console.log(id + " " + boxId);
    // console.log(box1Sites);
    if (id) {
      boxId === "box1" && setCurrentUrl(box1Sites[id].url);
      boxId === "box1" && setCurrentTitle(box1Sites[id].title);
      boxId === "box2" && setCurrentUrl(box2Sites[id].url);
      boxId === "box2" && setCurrentTitle(box2Sites[id].title);
      boxId === "box3" && setCurrentUrl(box3Sites[id].url);
      boxId === "box3" && setCurrentTitle(box3Sites[id].title);
      boxId === "box4" && setCurrentUrl(box4Sites[id].url);
      boxId === "box4" && setCurrentTitle(box4Sites[id].title);
      boxId === "box5" && setCurrentUrl(box5Sites[id].url);
      boxId === "box5" && setCurrentTitle(box5Sites[id].title);
      boxId === "box6" && setCurrentUrl(box6Sites[id].url);
      boxId === "box6" && setCurrentTitle(box6Sites[id].title);

      setUpdateStatus(true);
      setCurrentUpdateParameters({
        id: id,
        boxId: boxId,
      });
    }
  };

  const closeUpdateStatus = () => {
    setUpdateStatus(false);
  };
  const handleEditMode = (boxId) => {
    setEditMode({
      status: true,
      boxId: boxId,
    });
  };
  const handleEditModeClose = () => {
    setEditMode(false);
  };
  const handleDelete = (urlId, boxId) => {
    let newList = [];

    if (boxId === "box1") {
      newList = box1Sites.filter((urls, index) => {
        return index != urlId;
      });
      console.log(newList);
    }
    if (boxId === "box2") {
      newList = box2Sites.filter((urls, index) => {
        return index != urlId;
      });
    }
    if (boxId === "box3") {
      newList = box3Sites.filter((urls, index) => {
        return index != urlId;
      });
    }
    if (boxId === "box4") {
      newList = box4Sites.filter((urls, index) => {
        return index != urlId;
      });
    }
    if (boxId === "box5") {
      newList = box5Sites.filter((urls, index) => {
        return index != urlId;
      });
    }
    if (boxId === "box6") {
      newList = box6Sites.filter((urls, index) => {
        return index != urlId;
      });
    }

    updateUrlLists(newList, boxId);
  };

  const handleDownClick = () => {
    setShowTopContainer(true);
  };
  const handleClickOutside = () => {
    setShowTopContainer(false);
  };
  const saveDataToLocalStorage = (value, id) => {
    value.length === 0
      ? localStorage.clear()
      : localStorage.setItem(id, JSON.stringify(value));
  };
  const updateUrlLists = (value, id) => {
    saveDataToLocalStorage(value, id);
    id === "box1" && setBox1Sites(JSON.parse(localStorage.getItem(id)));
    id === "box2" && setBox2Sites(JSON.parse(localStorage.getItem(id)));
    id === "box3" && setBox3Sites(JSON.parse(localStorage.getItem(id)));
    id === "box4" && setBox4Sites(JSON.parse(localStorage.getItem(id)));
    id === "box5" && setBox5Sites(JSON.parse(localStorage.getItem(id)));
    id === "box6" && setBox6Sites(JSON.parse(localStorage.getItem(id)));
  };

  const [theme] = useState(localStorage.getItem("Theme"));
  return (
    // <div>
    <>
      <HomepageContainer
        style={
          localStorage.getItem("DarkMode") === "true"
            ? { backgroundColor: "#181818" }
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
          <WeatherContainer>
            {localStorage.getItem("Weather") === "false" ? (
              <div></div>
            ) : (
              <WeatherAPI currentLocation={currentLocation} />
            )}
          </WeatherContainer>
          <OutsideHandler clickOutside={handleClickOutside}>
            {showTopContainer ? (
              <TopContainerWrapper>
                <TopContainer
                  handleClickBookmark={handleClickBookmark}
                  anchorRef={anchorRef}
                  opens={opens}
                  handleToggle={handleToggle}
                  DarkMode={DarkMode}
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
          {GoogleId ? (
            <SettingContainer onClick={toggle}>
              <Tooltip title="Profile">
                <IconButton size="small">
                  <MdAccountCircle
                    style={
                      localStorage.getItem("DarkMode") === "true"
                        ? { color: "white" }
                        : { color: "black" }
                    }
                  />
                </IconButton>
              </Tooltip>
            </SettingContainer>
          ) : null}
          {GoogleId ? null : (
            <PopupContainer>
              <Tooltip title="Settings" size="small" >
                <IconButton size="small" onClick={handlePopup} color="success">
                  <IoSettings
                    // onClick={handlePopup}
className="setting"
                    style={
                      localStorage.getItem("DarkMode") === "true"
                        ? { color: "white" }
                        : { color: "black" }
                    }
                  />
                </IconButton>
              </Tooltip>
            </PopupContainer>
          )}
        </HomeTopContainer>

        <BoxSection>
          <TopBox>
            <div className="box1">
              {editMode.status === true && editMode.boxId === "box1" ? (
                <BoxContainerEdit
                  title={GoogleId ? box1FromDb.CategoryName : "Social Media"}
                  getCategoryFormDB={getCategoryFormDB}
                  data={GoogleId ? box1DataFromDb : box1Sites}
                  id="box1"
                  boxDataFromDb={box1FromDb}
                  handleDelete={handleDelete}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                  sendToParent={updateUrlLists}
                />
              ) : (
                <BoxContainer
                  title={
                    localStorage.getItem("box1Name")
                      ? localStorage.getItem("box1Name")
                      : "Social Media"
                  }
                  boxDataFromDb={box1FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  data={GoogleId ? box1DataFromDb : box1Sites}
                  id="box1"
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                />
              )}
            </div>

            <div className="search">
              <div className="recent-sites-layout">
                {rescentApp === "false" ? null : <RecentSites />}
              </div>
              <SearchBox defaultBrowser={defaultBrowser} />
            </div>
            <div className="box1">
              {editMode.status === true && editMode.boxId === "box2" ? (
                <BoxContainerEdit
                  title={GoogleId ? box2FromDb.CategoryName : "News"}
                  data={GoogleId ? box2DataFromDb : box2Sites}
                  boxDataFromDb={box2FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box2"
                  handleDelete={handleDelete}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                  sendToParent={updateUrlLists}
                />
              ) : (
                <BoxContainer
                  title={
                    localStorage.getItem("box2Name")
                      ? localStorage.getItem("box2Name")
                      : "News"
                  }
                  data={GoogleId ? box2DataFromDb : box2Sites}
                  boxDataFromDb={box2FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box2"
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                />
              )}
            </div>
          </TopBox>
          <BottomBox>
            <div className="box1">
              {editMode.status === true && editMode.boxId === "box3" ? (
                <BoxContainerEdit
                  title={GoogleId ? box3FromDb.CategoryName : "Finance"}
                  data={GoogleId ? box3DataFromDb : box3Sites}
                  boxDataFromDb={box3FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box3"
                  handleDelete={handleDelete}
                  sendToParent={updateUrlLists}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                />
              ) : (
                <BoxContainer
                  title={
                    localStorage.getItem("box3Name")
                      ? localStorage.getItem("box3Name")
                      : "Finance"
                  }
                  data={GoogleId ? box3DataFromDb : box3Sites}
                  boxDataFromDb={box3FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box3"
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                />
              )}
            </div>

            <div className="box2">
              {editMode.status === true && editMode.boxId === "box5" ? (
                <RectangleBoxContainerEdit
                  title={GoogleId ? box5FromDb.CategoryName : "Popular"}
                  data={GoogleId ? box5DataFromDb : box5Sites}
                  boxDataFromDb={box5FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box5"
                  sendToParent={updateUrlLists}
                  handleDelete={handleDelete}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                />
              ) : (
                <RectangleBoxContainer
                  title={
                    localStorage.getItem("box5Name")
                      ? localStorage.getItem("box5Name")
                      : "Popular"
                  }
                  data={GoogleId ? box5DataFromDb : box5Sites}
                  boxDataFromDb={box5FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box5"
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                />
              )}
            </div>

            <div className="box2">
              {editMode.status === true && editMode.boxId === "box6" ? (
                <RectangleBoxContainerEdit
                  title={GoogleId ? box6FromDb.CategoryName : "Entertainment"}
                  sendToParent={updateUrlLists}
                  data={GoogleId ? box6DataFromDb : box6Sites}
                  boxDataFromDb={box6FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box6"
                  handleDelete={handleDelete}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                />
              ) : (
                <RectangleBoxContainer
                  title={
                    localStorage.getItem("box6Name")
                      ? localStorage.getItem("box6Name")
                      : "Entertainment"
                  }
                  data={GoogleId ? box6DataFromDb : box6Sites}
                  boxDataFromDb={box6FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box6"
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                />
                
              )}
            </div>

            <div className="box1">
              {editMode.status === true && editMode.boxId === "box4" ? (
                <BoxContainerEdit
                  title={GoogleId ? box4FromDb.CategoryName : "Banks"}
                  data={GoogleId ? box4DataFromDb : box4Sites}
                  boxDataFromDb={box4FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  id="box4"
                  sendToParent={updateUrlLists}
                  handleDelete={handleDelete}
                  handleClose={handleEditModeClose}
                  handleUpdate={handleUpdateMode}
                />
              ) : (
                <BoxContainer
                  title={
                    localStorage.getItem("box4Name")
                      ? localStorage.getItem("box4Name")
                      : "Banks"
                  }
                  data={GoogleId ? box4DataFromDb : box4Sites}
                  boxDataFromDb={box4FromDb}
                  getCategoryFormDB={getCategoryFormDB}
                  sendToParent={updateUrlLists}
                  editMode={handleEditMode}
                  id="box4"
                />
              )}
            </div>
          </BottomBox>
        </BoxSection>
        <Updateurl
          open={updateStatus}
          handleClose={closeUpdateStatus}
          id={currentUpdateParameters.boxId}
          currentUrl={currentUrl}
          currentTitle={currentTitle}
          sendDataToParent={updateUrlLists}
          index={currentUpdateParameters.id}
        />
      </HomepageContainer>
      {GoogleId ? null : <AddExtensionPopUp />}
    {/* // </div> */}
    </>
  );
};

export default HomePage1;
