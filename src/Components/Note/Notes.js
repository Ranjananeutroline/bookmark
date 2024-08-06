import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import noteIcon from "../../Assets/notesicon.png";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import notesLine from "../../Assets/notesLine.png";
import Notebook from "../../Assets/Notebook2.png";
import { FcPlus } from "react-icons/fc";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { BsFillTrashFill } from "react-icons/bs";
import RightSection from "./RightSection";
import Button from "@mui/material/Button";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: "99",
  },
  "& .MuiMenu-list": {
    paddingTop: "0px",
    paddingBottom: "0px",
  },

  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {},

  noteDescription: {
    visibility: "hidden",
    fontSize: "0.7em",
    color: "#2478dc",
    marginTop: "-7px",
  },
  topFirstIcon: {
    textAlign: "center",

    "&:hover $noteDescription": {
      visibility: "visible",
    },
  },
  Button: {
    backgroundColor: "transparent",
  },
}));

const NoteContainer = styled.div`
  width: 44rem;
  height: 25.75rem;
  
  background: #f4f4f4;
  border-radius: 3px;
  display: flex;
  // justify-content: center;
  text-align: center;

  @media screen and (max-width:1600px){
    width: 40rem;
    height: 25rem;
  }
  @media screen and (max-width:525px){
    width: 130%;
  }
  @media screen and (max-width:450px){
    width: 100%;
  }
  .note-right {
    
    border-radius: 0px 5px 5px 0px;
    width: 50%;
    background-color: #fcf4b1;
  
    // background-image: url(${notesLine});
    background-image: url(${Notebook});
    background-repeat:no-repeat;
    background-fit:cover;
    background-attachment: fixed;
    ${"" /* overflow-y: auto; */}
    @media screen and (max-width:768px){
      flex:1;
    }

   
  }
  .note-title {
    font-size: large;
    font-family: "Times New Roman", Times, serif;
    font-weight: bolder;
    letter-spacing: 0.08em;
    border-bottom:2px solid #F4F4F4;
   
   
    box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 2px;
height:2.5rem;
margin-bottom:0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
   
    padding:0.8rem 0.8rem 0.5rem 0.5rem;

   
  }
  .note-search
  {
   
    display:flex;
    align-items:center;
     justify-content:center;
    gap:0.5rem;
    width:95%;
    margin:0.5rem 0.5rem 0rem 0.5rem;

   
    input
    {
     
      outline:none;
      border:none;
      padding:0.4rem 0.2rem;
      border-radius:10px;
      // width:12rem;
     
   
    
    }
    input[placeholder]
    {
   text-indent:1rem;
     
    }
  }
  .search
  {
   
   
    cursor:pointer;

    font-size:1rem;
   width:5%;
   margin-top:0.5rem;
   
   
    
  }
  .add-butn {
    font-size: 1.1rem;
    margin-right: 5px;
  
    @media screen and (max-width:1600px){
      font-size: 1rem;
      margin-right: 5px;
      
    }
  }
  .add-note {
    color: #000;
    font-size: 1.2rem;
    background-color: white;
    border-radius: 20px;
    // position: fix;
    width: 6rem;
    margin-top: 1.5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    @media screen and (max-width:1600px){
      width: 6rem;
      font-size: 1rem;
      margin-top: 0.3rem;
     
    }
    @media screen and (max-width:440px){
      width:7rem;
      font-size:0.8rem;
    }
  }
  .add-note:hover {
    background-color: #e3e3e3;
  }
  .note-lists {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    text-decoration: none;
    border: none;
    text-align: center;
    vertical-align: middle;
  }
  .eachItem {
   
    height:16.3rem;
    overflow-y: auto;
    ::-webkit-scrollbar {
      /* display: none; */
      width: 6.5px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
  }
  .note-left {
    overflow-x: hidden;
    overflow-y: hidden;
    text-decoration: none;
    @media screen and  (max-width:768px){
      width:40%;
    }
    @media screen and (max-width:525px){
      width:50%;
      ${"" /* margin-left:rem; */}
    }
    
  }
  .datefield {
    font-size: 1rem;
    color: gray;

    @media screen and (max-width:1600px){
      font-size: 0.6rem;
      
      }
    @media screen and (max-width:768px){
    display:none;
    }
  }
  .deleteButton {
    font-size: 1.1rem;
    color: #f44336;
    margin-left: 0.4rem;
    display: none;
   s padding-top: 0.2rem;

    @media screen and (max-width:1600px){
      font-size: 0.83rem;
      }
  }
  .textfield {
   
    width:97%;
  margin-left:0.2rem;
   
    height: 40px;
    border-radius: 5px;
    margin-top: 6px;
    border: 1px solid #d4f3c5;
    box-shadow: 0px 2px 2px rgba(61, 60, 60, 0.25);
    overflow: hidden;
    margin-bottom: 2px;
    text-align: left;
    text-indent: 5px;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:0.5rem;
    font-size:0.9rem;
    
    @media screen and (max-width:1600px){
      height: 35px;
      font-size:0.83rem;
      }
    @media screen and (min-width:370px) and (max-width:550px){
      justify-content:center;
      height:25px;
      padding-left:2px;
      text-indent: 10px;
    }
    @media screen and (max-width:370px){
      justify-content:center;
      height:25px;
      padding-left:2px;
      text-indent: 20px;
    }
  }
  .textfield:hover {
    cursor: pointer;
    box-shadow: 0.5px 1px 2px #ccc;
  }
  .textfield:hover .deleteButton {
    display: inline;
  }
  .textfield:hover .datefield {
    display: none;
  }
  .textfield:nth-child(4n + 1) {
    background: #b1fcd0;
  }
  .textfield:nth-child(4n + 2) {
    background: rgba(156, 149, 204, 0.7);
  }
  .textfield:nth-child(4n + 3) {
    background: #d4f3c5;
  }
  .textfield:nth-child(4n + 4) {
    background: #f3d1be;
  }
  .textfield:nth-child(4n + 5) {
    background: #bcccfb;
  }
  .textfield:nth-child(4n + 1).active,
  .textfield:nth-child(4n + 2).active,
  .textfield:nth-child(4n + 3).active,
  .textfield:nth-child(4n + 4).active,
  .textfield:nth-child(4n + 5).active {
    filter: brightness(0.6);
    box-shadow: rgb(91 91 91 / 25%) 1px 2px 4px inset;
    
  }
  @media screen and (min-width:620px) and (max-width:755px){
    ${
      "" /* width: 30rem;
  height: 20rem; */
    }
margin-left:-4rem;
    }
    @media screen and (min-width:520px) and (max-width:620px){
      width:30rem;
    }

    @media screen and  (max-width:450px){
      width:25rem;
      margin:0rem 0rem  0rem 2rem;
    }
    @media screen and  (max-width:390px){
      width:25rem;
      margin:0rem 0rem  0rem 1rem;
    }
    ${
      "" /* @media screen and (max-width:520px){
      width:25rem;
    } */
    }
   
  }
`;

export default function Notes({
  notes,
  noteDateFromDB,
  GoogleId,
  addNote,
  onUpdatefromDb,
  onUpdateNote,
  activeNote,
  onDeleteNote,
  onDeleteNoteformDB,
  setActiveNote,
  getActiveNote,
  getNotesDataDb,
  openMsg,
  handleCloseMsg,
}) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  console.log(notes);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Shift") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      console.log("Trying to focus:", anchorRef.current);
      if (anchorRef.current) {
        anchorRef.current.focus();
      } else {
        console.error("anchorRef.current is null");
      }
    }
    prevOpen.current = open;
  }, [open]);

  // console.log(noteDateFromDB);
  const [activeData, setActiveData] = useState({});
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [focusTitleInput, setFocusTitleInput] = useState(false);

  const sendToRightSection = (
    notesId,
    noteTitle,
    noteDescription,
    ProfileId
  ) => {
    setActiveData({
      notesId: notesId,
      noteTitle: noteTitle,
      noteDescription: noteDescription,
      ProfileId: ProfileId,
    });
    // console.log(
    //   notesId + " " + noteTitle + " " + noteDescription + " " + ProfileId
    // );
  };

  // console.log(activeData);

  // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchHandleChange = (e) => {
    setSearch(e.target.value);

    if (search !== " ") {
      const filteredData = GoogleId
        ? noteDateFromDB.filter((item) => {
            return Object.values(item)
              .join("")
              .toLowerCase()
              .includes(search.toLowerCase());
          })
        : notes.filter((item) => {
            return Object.values(item)
              .join("")
              .toLowerCase()
              .includes(search.toLowerCase());
          });

      setFilteredResults(filteredData);
    } else {
      // setFilteredResults(notes);
    }
  };

  const handleAddNote = () => {
    addNote();
    setIsAddingNote(true);
  };

  useEffect(() => {
    const inputElement = document.getElementById('note-title-input');
    console.log("Element retrieved:", inputElement);
    if (isAddingNote && !openMsg && inputElement) {
      inputElement.focus();
    }
  }, [openMsg, isAddingNote]);

  return (
    <div className={classes.root}>
      <div>
        <Tooltip title="Notes">
          <Button
            disableRipple
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ backgroundColor: "transparent" }}
            className={classes.Button}
          >
            <div className={classes.topFirstIcon}>
              <img src={noteIcon} alt="notes"></img>
            </div>
          </Button>
        </Tooltip>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
         
          // role={undefined}
          // rootboundary="document"
          // disableEnforceFocus={true}
          
          transition
          disablePortal
          
          style={{ zIndex: 500, marginTop: "2rem", marginLeft: "-7rem" }}
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps}>
              <Paper >
                <ClickAwayListener onClickAway={handleClose}
               
                >
                  <div>
                  {/* <MenuList
                    // autoFocusItem={open}
                    // id="menu-list-grow"
                    // autoFocus={false}
                    // autoFocusItem={false}
                    // disabledItemsFocusable
                    // disableListWrap
                   disablePadding
                   
                    onKeyDown={handleListKeyDown}
                    // style={{ padding: "0rem" }}
                  > */}
                    <Box
                      sx={
                        localStorage.getItem("DarkMode") === "true"
                          ? {
                              position: "relative",
                              mt: "0px",
                              "&::before": {
                                backgroundColor: "#3d4042",
                                content: '""',
                                display: "block",
                                position: "absolute",
                                width: 28,
                                height: 28,
                                top: -10,
                                // left: 70,
                                transform: "rotate(45deg)",
                                left: "calc(23% - 1rem)",
                              },
                            }
                          : {
                              position: "relative",
                              mt: "0px",
                              "&::before": {
                                backgroundColor: "#F4F4F4",
                                content: '""',
                                display: "block",
                                position: "absolute",
                                width: 28,
                                height: 28,
                                top: -10,
                                // left: 70,
                                transform: "rotate(45deg)",
                                left: "calc(23% - 1rem)",
                              },
                            }
                      }
                    />
                    {/* <Grid container spacing={1} justifyContent={"center"}> */}
                    <NoteContainer
                      style={
                        localStorage.getItem("DarkMode") === "true"
                          ? { backgroundColor: "#3d4042" }
                          : { color: "" }
                      }
                    >
                      <Grid item lg={6} md={6} sm={6} className="note-left">
                        {" "}
                        <div
                          className="note-title"
                          style={
                            localStorage.getItem("DarkMode") === "true"
                              ? { color: "#E4E6EB" }
                              : { color: "" }
                          }
                        >
                          <div className="note-search">
                            {" "}
                            Notes
                            <div className="">
                              {show ? (
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Search Here"
                                  onChange={searchHandleChange}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="search">
                            <BsSearch onClick={handleShow} />
                            {/* </div> */}
                          </div>
                        </div>
                        <div className="note-lists">
                          {/* <TextField
                              id="outlined-basic"
                              label="Add Notes"
                              size="small"
                              variant="outlined"
                              className="textfield"
                              onChange={handleChange}
                              value={inputlist}
                            >
                              {inputlist}
                            </TextField> */}
                          <>
                            <div className="eachItem">
                              {search.length > 0 ? (
                                <>
                                  {noteDateFromDB && GoogleId
                                    ? filteredResults.map((note, index) => {
                                        return (
                                          <button
                                            className={`textfield ${
                                              note.noteUniqueId ===
                                                activeNote && "active"
                                            }`}
                                            style={
                                              localStorage.getItem(
                                                "DarkMode"
                                              ) === "true"
                                                ? { border: "1px  #d4f3c5" }
                                                : { color: "" }
                                            }
                                            key={index}
                                            onClick={() => {
                                              sendToRightSection(
                                                note.notesId,
                                                note.noteTitle,
                                                note.noteDescription,
                                                note.ProfileId
                                              );
                                            }}
                                          >
                                            {note.noteTitle !== ""
                                              ? note.noteTitle.substring(0, 25)
                                              : "Untitled Note"}
                                            <span className="datefield">
                                              {new Date().toLocaleDateString(
                                                // note.lastUpdated
                                                "en-GB",
                                                {}
                                              )}
                                            </span>
                                            <span className="deleteButton">
                                              <BsFillTrashFill
                                                key={index}
                                                onClick={(e) =>
                                                  onDeleteNoteformDB(
                                                    note.notesId,
                                                    note.ProfileId
                                                  )
                                                }
                                              />
                                            </span>
                                          </button>
                                        );
                                      })
                                    : filteredResults.map((note, index) => {
                                        return (
                                          <button
                                            key={index}
                                            className={`textfield ${
                                              note.noteUniqueId ===
                                                activeNote && "active"
                                            }`}
                                            style={
                                              localStorage.getItem(
                                                "DarkMode"
                                              ) === "true"
                                                ? { border: "1px  #d4f3c5" }
                                                : { color: "" }
                                            }
                                            onClick={() => {
                                              setActiveNote(note.noteUniqueId);
                                            }}
                                          >
                                            {note.noteTitle
                                              ? note.noteTitle.length > 25
                                                ? note.noteTitle
                                                    .substring(0, 25)
                                                    .trimEnd() + ". . ."
                                                : note.noteTitle.substring(
                                                    0,
                                                    25
                                                  )
                                              : "Untitled Note"}
                                            <span className="datefield">
                                              {new Date().toLocaleDateString(
                                                // note.lastUpdated
                                                "en-GB",
                                                {}
                                              )}
                                            </span>
                                            <span className="deleteButton">
                                              <BsFillTrashFill
                                                key={index}
                                                onClick={(e) =>
                                                  onDeleteNote(
                                                    note.noteUniqueId
                                                  )
                                                }
                                              />
                                            </span>
                                          </button>
                                        );
                                      })}
                                </>
                              ) : (
                                <>
                                  {noteDateFromDB && GoogleId
                                    ? noteDateFromDB.map((note, index) => {
                                        return (
                                          <button
                                            className={`textfield ${
                                              note.noteUniqueId ===
                                                activeNote && "active"
                                            }`}
                                            style={
                                              localStorage.getItem(
                                                "DarkMode"
                                              ) === "true"
                                                ? { border: "1px  #d4f3c5" }
                                                : { color: "" }
                                            }
                                            key={index}
                                            onClick={() => {
                                              sendToRightSection(
                                                note.notesId,
                                                note.noteTitle,
                                                note.noteDescription,
                                                note.ProfileId
                                              );
                                            }}
                                          >
                                            {note.noteTitle !== ""
                                              ? note.noteTitle.substring(0, 25)
                                              : "Untitled Note"}
                                            <span className="datefield">
                                              {new Date().toLocaleDateString(
                                                // note.lastUpdated
                                                "en-GB",
                                                {}
                                              )}
                                            </span>
                                            <span className="deleteButton">
                                              <BsFillTrashFill
                                                key={index}
                                                onClick={(e) =>
                                                  onDeleteNoteformDB(
                                                    note.notesId,
                                                    note.ProfileId
                                                  )
                                                }
                                              />
                                            </span>
                                          </button>
                                        );
                                      })
                                    : notes.map((note, index) => {
                                        return (
                                          <button
                                            key={index}
                                            className={`textfield ${
                                              note.noteUniqueId ===
                                                activeNote && "active"
                                            }`}
                                            style={
                                              localStorage.getItem(
                                                "DarkMode"
                                              ) === "true"
                                                ? { border: "1px  #d4f3c5" }
                                                : { color: "" }
                                            }
                                            onClick={() => {
                                              setActiveNote(note.noteUniqueId);
                                            }}
                                          >
                                            {note.noteTitle
                                              ? note.noteTitle.length > 25
                                                ? note.noteTitle
                                                    .substring(0, 25)
                                                    .trimEnd() + ". . ."
                                                : note.noteTitle.substring(
                                                    0,
                                                    25
                                                  )
                                              : "Untitled Note"}
                                            <span className="datefield">
                                              {new Date().toLocaleDateString(
                                                // note.lastUpdated
                                                "en-GB",
                                                {}
                                              )}
                                            </span>
                                            <span className="deleteButton">
                                              <BsFillTrashFill
                                                key={index}
                                                onClick={(e) =>
                                                  onDeleteNote(
                                                    note.noteUniqueId
                                                  )
                                                }
                                              />
                                            </span>
                                          </button>
                                        );
                                      })}
                                </>
                              )}

                              {/* {noteDateFromDB && GoogleId 
                                ? noteDateFromDB.map((note, index) => {
                                    return (
                                      <button
                                        className={`textfield ${
                                          note.noteUniqueId === activeNote &&
                                          "active"
                                        }`}
                                        style={
                                          localStorage.getItem("DarkMode") ===
                                          "true"
                                            ? { border: "1px  #d4f3c5" }
                                            : { color: "" }
                                        }
                                        key={index}
                                        onClick={() => {
                                          sendToRightSection(
                                            note.notesId,
                                            note.noteTitle,
                                            note.noteDescription,
                                            note.ProfileId
                                          );
                                        }}
                                      >
                                        {note.noteTitle !== ""
                                          ? note.noteTitle.substring(0, 25)
                                          : "Untitled Note"}
                                        <span className="datefield">
                                          {new Date().toLocaleDateString(
                                            // note.lastUpdated
                                            "en-GB",
                                            {}
                                          )}
                                        </span>
                                        <span className="deleteButton">
                                          <BsFillTrashFill
                                            key={index}
                                            onClick={(e) =>
                                              onDeleteNoteformDB(
                                                note.notesId,
                                                note.ProfileId
                                              )
                                            }
                                          />
                                        </span>
                                      </button>
                                    );
                                  })
                                : notes.map((note, index) => {
                                    return (
                                      <button
                                        key={index}
                                        className={`textfield ${
                                          note.noteUniqueId === activeNote &&
                                          "active"
                                        }`}
                                        style={
                                          localStorage.getItem("DarkMode") ===
                                          "true"
                                            ? { border: "1px  #d4f3c5" }
                                            : { color: "" }
                                        }
                                        onClick={() => {
                                          setActiveNote(note.noteUniqueId);
                                        }}
                                      >
                                        {note.noteTitle
                                          ? note.noteTitle.length>25? note.noteTitle.substring(0, 25).trimEnd() + '. . .':note.noteTitle.substring(0, 25)
                                          : "Untitled Note"}
                                        <span className="datefield">
                                          {new Date().toLocaleDateString(
                                            // note.lastUpdated
                                            "en-GB",
                                            {}
                                          )}
                                        </span>
                                        <span className="deleteButton">
                                          <BsFillTrashFill
                                            key={index}
                                            onClick={(e) =>
                                              onDeleteNote(note.noteUniqueId)
                                            }
                                          />
                                        </span>
                                      </button>
                                    );
                                  })} */}
                            </div>
                          </>
                        </div>
                        <Button
                          className="add-note"
                          style={
                            localStorage.getItem("DarkMode") === "true"
                              ? { fontSize: "0.9rem", color: "black" }
                              : { fontSize: "0.9rem", color: "#3A0404" }
                          }
                          onClick={handleAddNote}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                             e.preventDefault();
                            }
                          }}
                        >
                          <FcPlus className="add-butn" /> Note
                        </Button>
                      </Grid>
                      <Grid item lg={7} className="note-right">
                        <RightSection
                          activeData={activeData}
                          setActiveData={(data) =>
                            setActiveData({
                              ...activeData,
                              noteTitle: data,
                            })
                          }
                          setActiveData2={(data) =>
                            setActiveData({
                              ...activeData,
                              noteDescription: data,
                            })
                          }
                          noteTitle={activeData.noteTitle}
                          getActiveNote={getActiveNote}
                          noteDateFromDB={noteDateFromDB}
                          onUpdateNote={onUpdateNote}
                          onUpdatefromDb={onUpdatefromDb}
                          getNotesDataDb={getNotesDataDb}
                          focusTitleInput={focusTitleInput}
                          isAddingNote={isAddingNote}
                        />
                      </Grid>
                    </NoteContainer>
                    <SignUpAlertPopMsg
                      open={openMsg}
                      handleCloseMsg={handleCloseMsg}
                      height="100%"
                      vertical="top"
                      horizontal="center"
                      severity="info"
                      message="Please sign in to use notes features!"
                    />
                    </div>
                  {/* </MenuList> */}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}