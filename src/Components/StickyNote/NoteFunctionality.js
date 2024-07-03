import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNoteSection from "./AddNoteSection";
import {api} from '../../api/api'
import StickyNoteContainer from "./StickyNoteContainer";

function NoteFunctionality({ StickyNote }) {
  const [notes, setNotes] = useState([]);

  const GoogleId = localStorage.getItem("GoogleId");

  const getSticyNotesDataDb = () => {
    axios
      .get(api+"/stickynote/" + GoogleId)
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSticyNotesDataDb();
  }, []);

  const addNote = (color, notesId, profileId, stickyNoteDescription) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      color,
      notesId,
      profileId,
      stickyNoteDescription,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const minimize = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      {StickyNote === "false" ? null : (
        <>
          <AddNoteSection
            notes={notes}
            addNote={addNote}
            getSticyNotesDataDb={getSticyNotesDataDb}
          />
          <StickyNoteContainer
            getSticyNotesDataDb={getSticyNotesDataDb}
            notes={notes}
            deleteNote={deleteNote}
            updateText={updateText}
            minimize={minimize}
          />
        </>
      )}
    </div>
  );
}

export default NoteFunctionality;
