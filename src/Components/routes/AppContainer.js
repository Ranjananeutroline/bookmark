import React, { useState } from "react";


import Homepage from "../Home/HomePage1";
import PopBlocker from "../Home/PopBlocker";
import Setting from "../Home/Settings";

import SignupPopup from "../Home/SignupPopup";

import NoteFunctionality from "../StickyNote/NoteFunctionality";
import NoteFunctionalityLocal from "../StickyNoteLocal/NoteFunctionality";
const AppContainer = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [showbookmark, setShowbookmark] = React.useState(false);
  const handleClickBookmark = () => {
    setShowbookmark(!showbookmark);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

  const handleTheme = (event) => {
    localStorage.setItem("Theme", event.target.checked);
    setTheme(localStorage.getItem("Theme"));
    setBackgroundImage(localStorage.getItem("Theme"));
    console.log(theme);
  };

  //for DarkMode
  const [DarkMode, setDarkMode] = useState(localStorage.getItem("DarkMode"));
  const darkModeHandler = (event) => {
    localStorage.setItem("DarkMode", event.target.checked);
    setDarkMode(localStorage.getItem("DarkMode"));
    window.location.reload(false);
  };

  //for Open Links in New Tab
  const [OpenNewTab, setOpenNewTab] = useState(
    localStorage.getItem("OpenLinks")
  );
  const tabHandler = (event) => {
    localStorage.setItem("OpenLinks", event.target.checked);
    setOpenNewTab(event.target.checked);
  };
  //for note
  const [Note, setNode] = useState(localStorage.getItem("Notes"));
  const noteHandler = (event) => {
    localStorage.setItem("Notes", event.target.checked);
    setNode(localStorage.getItem("Notes"));
  };

  //for To DO list

  const toDoListHandler = (event) => {
    localStorage.setItem("ToDoList", event.target.checked);
  };

  //for BookMark
  const [bookmarks] = useState(localStorage.getItem("BookMarks"));
  const BookmarsHandler = (event) => {
    localStorage.setItem("BookMarks", event.target.checked);
  };

  //for Weather
  const [Weather, setWeather] = useState(localStorage.getItem("Weather"));
  const weatherHandler = (event) => {
    localStorage.setItem("Weather", event.target.checked);
    setWeather(localStorage.getItem("Weather"));
  };

  //for sticky note
  const [StickyNote, setStickyNOte] = useState(
    localStorage.getItem("StickyNote")
  );
  const stickyNoteHandler = (event) => {
    localStorage.setItem("StickyNote", event.target.checked);
    setStickyNOte(localStorage.getItem("StickyNote"));
  };

  //for rescent app

  const [rescentApp, setRescentApp] = useState(
    localStorage.getItem("RescentApp")
  );
  const rescentAppHandler = (event) => {
    localStorage.setItem("RescentApp", event.target.checked);
    setRescentApp(localStorage.getItem("RescentApp"));
  };

  //for background
  const [BackgroundImage, setBackgroundImage] = useState(
    localStorage.getItem("BackgroundImage")
  );
  const handleBackgroundImage = (data) => {
    localStorage.setItem("BackgroundImage", data);
    setBackgroundImage(localStorage.getItem("BackgroundImage"));
  };
  const [defaultBrowser, setDefaultBrowser] = useState(
    localStorage.getItem("DefaultBrowser")
  );

  const defaultBrowserHandler = (event) => {
    localStorage.setItem("DefaultBrowser", event.target.value);
    setDefaultBrowser(localStorage.getItem("DefaultBrowser"));
  };

 
  const [sliderValue, setSliderValue] = useState(
    localStorage.getItem("sliderValue")
  );
  const handleSlider = (event) => {
   
    localStorage.setItem("sliderValue", event.target.value);
    setSliderValue(localStorage.getItem("sliderValue"));
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const [welcomeMessagePopup, setWelcomeMessagePopup] = useState(false);
  const handleWelcomeMessagePopup = () => {
    setWelcomeMessagePopup(!welcomeMessagePopup);
  };

  const GoogleId = localStorage.getItem("GoogleId");
  return (
    <div style={{ width: "100%" }}>
      <Setting
        isOpen={isOpen}
        toggle={toggle}
        DarkMode={DarkMode}
        darkModeHandler={darkModeHandler}
        theme={theme}
        handleTheme={handleTheme}
        OpenNewTab={OpenNewTab}
        tabHandler={tabHandler}
        Note={Note}
        noteHandler={noteHandler}
        toDoListHandler={toDoListHandler}
        bookmarks={bookmarks}
        BookmarsHandler={BookmarsHandler}
        weatherHandler={weatherHandler}
        stickyNoteHandler={stickyNoteHandler}
        StickyNote={StickyNote}
        handleBackgroundImage={handleBackgroundImage}
        defaultBrowser={defaultBrowser}
        defaultBrowserHandler={defaultBrowserHandler}
        rescentApp={rescentApp}
        rescentAppHandler={rescentAppHandler}
        handleSlider={handleSlider}
        sliderValue={sliderValue}
      />

      <Homepage
        toggle={toggle}
        theme={theme}
        Weather={Weather}
        BackgroundImage={BackgroundImage}
        defaultBrowser={defaultBrowser}
        showbookmark={showbookmark}
        handleClickBookmark={handleClickBookmark}
        anchorRef={anchorRef}
        opens={open}
        handleToggle={handleToggle}
        rescentApp={rescentApp}
        DarkMode={DarkMode}
        popupOpen={popupOpen}
        handlePopup={handlePopup}
        stickyNoteHandler={stickyNoteHandler}
        StickyNote={StickyNote}
      />
      {GoogleId ? (
        <NoteFunctionality
          stickyNoteHandler={stickyNoteHandler}
          StickyNote={StickyNote}
        />
      ) : (
        <NoteFunctionalityLocal
          stickyNoteHandler={stickyNoteHandler}
          StickyNote={StickyNote}
        />
      )}
    
      <SignupPopup popupOpen={popupOpen} handlePopup={handlePopup} />
      <PopBlocker />
     
    </div>
  );
};

export default AppContainer;
