import React, { useEffect, useState } from "react";
import AddNoteSection from "./AddNoteSection";

import StickyNoteContainer from "./StickyNoteContainer";

function NoteFunctionality({ StickyNote }) {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
    
      color,
      visibility: true,
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

    tempNotes[index].visibility = false;
    setNotes(tempNotes);
  };
  const maximize = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].visibility = true;
    setNotes(tempNotes);
  };
  const updateText = (text, id) => {
    console.log(text + " " + id);
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
          <AddNoteSection notes={notes} addNote={addNote} maximize={maximize} />
          <StickyNoteContainer
            notes={notes}
            deleteNote={deleteNote}
            updateText={updateText}
            minimize={minimize}
            maximize={maximize}
          />
        </>
      )}
    </div>
  );
}

export default NoteFunctionality;
