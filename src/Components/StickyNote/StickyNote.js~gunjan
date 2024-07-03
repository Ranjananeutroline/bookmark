import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CancelIcon from "../../Assets/cancel.png";
import MinimizeIcon from "../../Assets/minimize.png";
import { MdMinimize } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

import { Rnd } from "react-rnd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";

import { config } from "./editerConfig";
import Draggable from "react-draggable";
import axios from "axios";
import { api } from "../../api/api";
const StickynoteContainer = styled.div`
  .box {
    bottom: 200px;
    right: 200px;
    @media screen and (max-width: 550px) {
      right: 90px;
    }
  }
  .dot-b-div {
    display: flex;
    align-items: center;
    // border-bottom: 1px solid #c4c4c4;
  }
  .three-dots {
    font-size: 1.2rem;
  }
  .three-dots:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }
`;

const CkEditorContainer = styled.div`
  .ck-editor {
    font-size: 1rem;
    display: flex;
    flex-direction: column-reverse;
  }
  .ck-toolbar {
    background-color: transparent !important;

    border-left: none !important;
    border-right: none !important;
  }

  .ck.ck-button,
  a.ck.ck-button {
    cursor: pointer;
    border: none;
    transition: none;
    background: transparent;
  }

  .ck-editor__editable {
    height: 14.7rem !important;

    background-color: transparent !important;
    padding: 0px;
    border: none !important;
    box-shadow: none !important;
  }
`;
const FooterIcon = styled.div`
  flex: 1;
`;

let timer = 500,
  timeout;
function StickyNote(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(305);
  const [x, setX] = useState(800);
  const [y, setY] = useState(-500);
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  FullEditor.defaultConfig = config;

  const GoogleId = localStorage.getItem("GoogleId");

  const updateStickyNoteInDB = (
    color,
    stickyNoteId,
    profileId,
    stickyNoteDescription
  ) => {
    console.log(
      color + " " + stickyNoteId + " " + profileId + " " + stickyNoteDescription
    );
    if (GoogleId) {
      axios
        .patch(api+"/stickynote/" + stickyNoteId, {
          color: color,
          stickyNoteDescription: stickyNoteDescription,
          ProfileId: profileId,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteInDb = (notesId, profileId) => {
    axios
      .delete(api+"/stickynote/" + notesId, {
        data: {
          ProfileId: profileId,
        },
      })
      .then((res) => {
        props.getSticyNotesDataDb();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const minimizeToDb = (stickyNoteId, profileId) => {
    if (GoogleId) {
      axios
        .patch(api+"/stickynote/visibility/" + stickyNoteId, {
          ProfileId: profileId,
          visibility: "false",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      props.getSticyNotesDataDb();
    }
  };
  return (
    <>
      {props.note.visibility === "true" ? (
        <StickynoteContainer>
          <Draggable
            handle="b"
            bounds="body"
            style={{
              display: "flex",
            }}
          >
            <div
              className="box no-cursor"
              style={{
                background: "#f0f0f0",
                position: "absolute",
                bottom: "200px",
                right: "200px",
                overflow: "hidden",
                borderRadius: "0.65rem",
                boxShadow:
                  "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                width: width,
                height: height,
              }}
            >
              <div
                className="dot-b-div"
                style={{
                  backgroundColor: props.note.color,
                  filter: "brightness(0.95)",
                }}
              >
                <b className="cursor" style={{ width: "90%" }}>
                  <div
                    className="header"
                    style={{
                      height: "33px",
                      position: "sticky",
                      top: "0",
                    }}
                  >
                    <div
                      className="header-icon"
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        padding: "5px",
                      }}
                      //
                    >
                      <Menu
                        style={{ marginLeft: "10px" }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                          disablePadding: "true",
                        }}
                      >
                        <MenuItem
                          style={{
                            fontSize: "0.90rem",
                            lineHeight: "1",
                            paddingTop: "0.5rem",
                            paddingRight: "1rem",
                          }}
                          onClick={() => {
                            setAnchorEl(false);
                            minimizeToDb(
                              props.note.stickyNoteId,
                              props.note.ProfileId
                            );
                          }}
                        >
                          Minimize
                        </MenuItem>

                        <MenuItem
                          style={{ fontSize: "0.90rem", lineHeight: "1" }}
                          onClick={() => {
                            setAnchorEl(false);
                            deleteInDb(
                              props.note.stickyNoteId,
                              props.note.ProfileId
                            );
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </b>
                <BsThreeDotsVertical
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                    console.log(e.currentTarget);
                  }}
                  className="three-dots"
                />
              </div>

              <div>
                <FooterIcon style={{ backgroundColor: props.note.color }}>
                  <CkEditorContainer>
                    <CKEditor
                      editor={FullEditor}
                      data={props.note.stickyNoteDescription}
                      onChange={(event, editor) => {
                        const data = editor.getData();

                        updateStickyNoteInDB(
                          props.note.color,
                          props.note.stickyNoteId,
                          props.note.ProfileId,
                          data
                        );
                      }}
                    />
                  </CkEditorContainer>
                </FooterIcon>
              </div>
            </div>
          </Draggable>
        </StickynoteContainer>
      ) : (
        " "
      )}
    </>
  );
}

export default StickyNote;
