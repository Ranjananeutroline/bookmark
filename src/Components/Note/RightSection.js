import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import notesLine from "../../Assets/notesLine.png";
import axios from "axios";
import { Icon } from "@iconify/react";
import {api} from '../../api/api'
const Rightsection = styled.div`
  // .note-right {
  //   border-radius: 0px 5px 5px 0px;
  //   background-color: #fcf4b1;
  //   background-image: url(${notesLine});
  //   overflow-y: auto;

  // }
  .note-description {
    // margin-top: 0.563rem;
     margin-top:-0.7rem;
    text-align: center;
    text-indent: 0.6rem;
    font-size: 1.1rem;
    color: #4d0202;

   
    // margin-right: -11px;

    @media screen and (max-width: 1600px) {
      font-size: 0.8rem;
    }
  }
  .notes-date-time {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 0.6em;
    color: #a14c06;
    margin-top: 5px;
  }
  .notes-title {
    text-indent: 15px;
    text-align: left;
    width: 100%;
    // margin-top: 40px;
    font-size: 1.2rem;
    color: #181616;
    font-weight: 600;
    margin: 25px 0;
  
    input[placeholder] {
      text-align: left;
    }
  }
   
  textarea {
    scrollbar-width: 0.2rem;

    line-height: 1.7;
    margin-top: 0.7rem;
    
  }

  textarea::-webkit-scrollbar-track {
    border-radius: 10px;
 
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  .note-title-button-div {
    display: flex;
    // align-items: center;
    // justify-content: flex-end;
    // margin-bottom:-0.5rem;
  }
  .save-button {
    // margin-top:0.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0;
    border: none;
    background-color: #fcf4b1;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.5rem;
    color: gray;
    text-decoration: underline;
    color: #70a7e5;
  }
  .done-button {
    margin-top:0.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0;
    border: none;
    cursor: pointer;
    padding-right: 0.5rem;
  }
`;

function RightSection({
  activeData,
  noteTitle,
  setActiveData,
  setActiveData2,
  getActiveNote,
  onUpdateNote,
  onUpdatefromDb,
  noteDateFromDB,
  getNotesDataDb,
  focusTitleInput,
  isAddingNote
}) {
  const titleInputRef = useRef(null);

  useEffect(() => {
    console.log("isAddingNote:", isAddingNote);
    if (titleInputRef.current && isAddingNote) {
      titleInputRef.current.focus();
    }
  }, [isAddingNote]);


  const onEditField = (field, value) => {
    onUpdateNote({
      ...getActiveNote,
      [field]: value,
    });
  };

  const GoogleId = localStorage.getItem("GoogleId");

  const [saveActive, setSaveActive] = React.useState();

  const onchangeTitle = (event) => {
    setActiveData(event.target.value);
    setSaveActive(activeData.notesId);
  };
  const onchangeDescription = (event) => {
    setActiveData2(event.target.value);
    setSaveActive(activeData.notesId);
  };

  const updataNoteInDb = () => {
    console.log(activeData);
    axios
      .patch(api+"/notes/" + activeData.notesId, {
        noteTitle: activeData.noteTitle,
        noteDescription: activeData.noteDescription,
        ProfileId: activeData.ProfileId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getNotesDataDb();
    setSaveActive("");
  };

  return (
    <Rightsection>
      {GoogleId ? (
        <Container>
          <div className="note-title-button-div">
            <div className="notes-title">
              <input
               ref={titleInputRef}
               type="text"
               id="note-title-input"
               placeholder={isAddingNote ? "Add Title" : "Note Title"}
                value={noteTitle}
                onChange={onchangeTitle}
                style={{
                  backgroundColor: isAddingNote ? "#c4c4c436" : "#c4c4c436",
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  padding: "5px 5px 3px 5px",
                }}
              /> </div>
              <div>
              {saveActive === activeData.notesId ? (
                <button onClick={updataNoteInDb} className="save-button">
                  Save
                </button>
              ) : (
                <>
                  {" "}
                  <Icon
                    icon="emojione:white-heavy-check-mark"
                    className="done-button"
                  />
                </>
              )}
            </div>
           
          </div>
          <div className="note-description">
            <textarea
              id="noteDescription"
              placeholder="Write your note here..."
              value={activeData.noteDescription}
              onChange={onchangeDescription}
              style={{
                // backgroundColor: "rgba(0, 0, 0, 0)",
                // borderColor: "rgba(0, 0, 0, 0)",
                // border: "none",
                // outline: "none",
                // height: "40vh",
                // width: "100%",
                // resize: "none",
                // fontSize: "1rem",

                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                border: "none",
                outline: "none",
                height: "40vh",
                width: "100%",

                resize: "none",
                // lineHeight:"1.71",
                padding:"0px 16px 0px 2px",
                textAlign: "justify",
                
              }}
            />
          </div>
        </Container>
      ) : (
        <Container>
          <div className="note-title-button-div">
            <div className="notes-title">
              <input
              ref={titleInputRef}
              type="text"
              id="note-title-input"
              placeholder={isAddingNote ? "Add Title" : "Note Title"}
                value={
                  getActiveNote === undefined
                    ? ""
                    : getActiveNote.noteTitle
                }
                onChange={(e) => {
                  onEditField("noteTitle", e.target.value);
                }}
                onFocus={(e) =>
                  e.target.value === "Untitled Note"
                    ? (e.target.value = "")
                    : ""
                }
                style={{
                  backgroundColor: isAddingNote ? "#c4c4c436" : "#c4c4c436",
                  border: "none",
                  outline: "none",
                  padding: "5px 5px 3px 5px",
                }}
              />
            </div>
          </div>
          <div className="note-description">
            <textarea
              id="noteDescription"
              placeholder="Write your note here..."
              value={
                getActiveNote === undefined ? "" : getActiveNote.noteDescription
              }
              onChange={(e) => {
                onEditField("noteDescription", e.target.value);
              }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                border: "none",
                outline: "none",
                height: "47vh",
                width: "100%",
                textIndent:"0.3rem",
                resize: "none",
                // lineHeight:"1.71",
                padding:"0px 16px 0px 2px",
                textAlign: "justify",
              }}
            />
          </div>
        </Container>
      )}
    </Rightsection>
  );
}

export default RightSection;