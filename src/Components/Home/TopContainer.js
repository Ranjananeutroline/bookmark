import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Notes from "../Note/Notes";
import ToDoList from "../Todos/TodoList";
import BookmarkTooltip from "../BookMark/BookmarkTooltip";
import uuid from "react-uuid";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../api/api";
const useStyle = makeStyles((theme) => ({
  confirmBtn: {
    marginLeft: "0.5rem",
    background: "#2f4586",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem 0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "5px",
  },

  cancelBtn: {
    background: "#e02113",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem 0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
}));
const TopBoxContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  transition: all 1s ease;
  z-index: 555;

  .top-box-layout {
    width: 700px;
    height: 60px;
    background: #f3f3f3;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.11);

    @media screen and (max-width: 1600px) {
      width: 500px;
      height: 51px;
    }
    @media screen and (max-width: 768px) {
      width: 350px;
    }
    @media screen and (max-width: 420px) {
      width: 250px;
    }
  }
  .top-box-icons {
    display: flex;
    justify-content: space-evenly;

    padding-top: 10px;

    height: fit-content;
    align-items: center;
    @media screen and (max-width: 1600px) {
      padding-top: 5px;
    }
    @media screen and (max-width: 690px) {
      justify-content: center;
      gap: 1rem;
    }
  }
`;
const TopContainer = ({
  handleClickBookmark,
  anchorRef,
  handleToggle,
  opens,
  DarkMode,
}) => {
  const GoogleId = localStorage.getItem("GoogleId");
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : [{}]
  );
  const [openMsg, setopenMsg] = useState(false);
  const handleCloseMsg = () => {
    setopenMsg(false);
  };
  const [activeNote, setActiveNote] = useState(false);
  const [noteDateFromDB, setNoteDateFromDB] = useState();
  const getNotesDataDb = () => {
    axios
      .get(api +"/notes/" + GoogleId)
      .then((res) => {
        setNoteDateFromDB(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNotesDataDb();

    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      notesId: "",
      noteUniqueId: uuid(),
      ProfileId: "",
      noteTitle: "Untitled Note",
      noteDescription: "",
      GoogleId: GoogleId,
    };

    if (GoogleId) {
      axios
        .post(api+"/notes", newNote)
        .then(() => {
          console.log("Data inserted");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setNotes([newNote, ...notes]);
      setActiveNote(newNote.noteUniqueId);

      setopenMsg(true);
    }

    // setNotes([newNote, ...notes]);
    // setActiveNote(newNote.noteUniqueId);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ noteUniqueId }) => noteUniqueId !== noteId));
  };

  const classes = useStyle();

  const onDeleteNoteformDB = (notesId, Id) => {
    axios
      .delete(api+"/notes/" + notesId, {
        data: {
          ProfileId: Id,
        },
      })
      .then((res) => {
        getNotesDataDb();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onUpdatefromDb = (noteTitle, noteDescription) => {};

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.noteUniqueId === updatedNote.noteUniqueId) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    const note = notes.find(({ noteUniqueId }) => noteUniqueId === activeNote);
    return note;
  };

  return (
    <>
      <TopBoxContainer>
        <div className="all-container">
          <div className="top-box-layout">
            <div className="top-box-icons">
              {localStorage.getItem("Notes") === "false" ? null : (
                <Notes
                  notes={notes}
                  GoogleId={GoogleId}
                  noteDateFromDB={noteDateFromDB}
                  getNotesDataDb={getNotesDataDb}
                  onUpdatefromDb={onUpdatefromDb}
                  addNote={addNote}
                  onDeleteNote={onDeleteNote}
                  onDeleteNoteformDB={onDeleteNoteformDB}
                  activeNote={activeNote}
                  setActiveNote={setActiveNote}
                  getActiveNote={getActiveNote()}
                  onUpdateNote={onUpdateNote}
                  openMsg={openMsg}
                  handleCloseMsg={handleCloseMsg}
                />
              )}

              {localStorage.getItem("BookMarks") === "false" ? null : (
                <BookmarkTooltip
                  handleClickBookmark={handleClickBookmark}
                  anchorRef={anchorRef}
                  opens={opens}
                  handleToggle={handleToggle}
                  DarkMode={DarkMode}
                />
              )}

              {localStorage.getItem("ToDoList") === "false" ? null : (
                <ToDoList />
              )}
            </div>
          </div>
          {/* <div className="notes-display">{shownotes ? <Notes /> : null}</div> */}
        </div>
      </TopBoxContainer>
    </>
  );
};

export default TopContainer;
