import React, { useState } from "react";
import StickyNote from "./StickyNote";
import styled from "styled-components";


const NoteContent = styled.div`
  height: 100%;
  .note-container {
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: scroll;
  }
  .minimize_btn {
    position: relative;
    right: 6px;
    bottom: 1.5px;
   
    width: 12px;
    cursor: pointer;
    margin-right: 10px;
  }
  .color-round {
    position: absolute;
    right: 35px;
    bottom: 5px;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    background-color: white;
    border: 0.4px solid black;
  }
`;

function StickyNoteContainer(props) {
  const [show, setShow] = useState(true);
  const notes = props.notes;

  return (
    <div>
      <NoteContent>
        {show ? (
          <div className="note-container">
            {notes?.length > 0
              ? notes.map((item) => (
                  <StickyNote
                    key={item.id}
                    note={item}
                    deleteNote={props.deleteNote}
                    updateText={props.updateText}
                    minimize={props.minimize}
                    getSticyNotesDataDb={props.getSticyNotesDataDb}
                  />
                ))
              : ""}
          </div>
        ) : (
          ""
        )}
      </NoteContent>
    </div>
  );
}

export default StickyNoteContainer;
