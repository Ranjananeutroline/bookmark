import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import stickyicon from "../../Assets/stickyicon.png";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";
const AddNoteContainer = styled.div`
  .icon {
    position: relative;
    right: 0;
    bottom: 0;
    width: 2.5rem;
    height: auto;
  }
  .allNotes {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .allnote-text {
    font-size: 0.65rem;
    margin-bottom: 0.3rem;
    position: relative;
    right: 10;
  }
  .color-round {
    position: absolute;
    right: 40px;
    bottom: 0px;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background-color: white;
  }
  .icon:hover {
    cursor: pointer;
    filter: drop-shadow(3px 5px 2px #bdbdbd);
  }
  .icon-name {
    position: absolute;
    right: 10px;
    bottom: -10px;
    color: #659fe3;
    font-size: 0.7rem;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
  }
  .icon:hover + .icon-name {
    visibility: visible;
  }
  .color_list {
    height: 0px;
    position: absolute;
    right: 10px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    transition: 300ms;
  }

  .color_list_active {
    height: 150px;
  }

  .color_list_item {
    border-radius: 50%;
    height: 15px;
    width: 15px;
    list-style: none;
    cursor: pointer;
  }
  .uparrowDisplayStickyNoteMainDiv {
    background-color: yellow;
  }
  .displayStickyNote {
    padding: 0.5rem 0rem 0rem 0.5rem;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 2.2rem;
    margin-bottom: 2.5rem;
border-radius:15px;
    // background-color: #eeeeee;
    
    // background-color: #70B8E8;
    // background-color:#87CEEB;

    background-color:#bbe8f9;
    text-align: left;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    display: flex;
    flex-direction: column;

    // width: 14rem;
    width:15rem;
height:15.7rem;
    // height: 12.5rem;
  }
  .title {
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 0.6rem;
    text-align: center;
    color:#fff;
    // background-color: #eeeeee;
   

  }
  .eachNote {
    cursor: pointer;
    padding-left: 0.8rem;
    height: 1.5rem;
    display: flex;

    align-items: center;

    margin-bottom: 0.4rem;
  }
  .innerDiv {
    overflow-y: auto;
    
    padding-right: 0.4rem;
    margin-bottom: 0.5rem;

    ::-webkit-scrollbar {
      width: 0.4rem;
    }
  }
`;

function AddNoteSection(props) {
  const colors = ["#FFE4F1", "#F2E6FF", "#E2F1FF", "#FFF7D1", "#E4F9E0"];
  // const colors = ["#fcbfdc", "#dbc0f9", "#E2F1FF", "#FFF7D1", "#E4F9E0"];
  const [listOpen, setListOpen] = useState(false);
  const [openMsg, setopenMsg] = useState(false);
  const handleCloseMsg = () => {
    setopenMsg(false);
  };
  let colorListRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!colorListRef.current.contains(event.target)) {
        setListOpen(false);
        setDisplayNote(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  //insert in database

  const [displayNote, setDisplayNote] = useState(false);
  const moreThenThree = () => {
    setDisplayNote(!displayNote);
  };
  const displayAlert = (item) => {
    if (props.notes.length >= 1) {
      setopenMsg(true);
    } else {
      props.addNote(item);
    }
  };
  return (
    <div>
      <AddNoteContainer ref={colorListRef}>
        <ul className={`color_list ${listOpen ? "color_list_active" : ""}`}>
          {colors.map((item, index) => (
            <li
              key={index}
              className="color_list_item"
              style={{
                backgroundColor: item,
                filter: "brightness(0.95)",
              }}
              onClick={() => {
                displayAlert(item);
              }}
            />
          ))}
        </ul>
        <div className="allNotes">
          {props.notes.length > 0 ? (
            <>
              {listOpen ? (
                <span
                  style={{
                    fontSize: "0.7rem",
                    backgroundColor: "#e9e9e9",

                    padding: "0.15rem",
                    marginTop: "0.3rem",
                    borderRadius: "5px",
                    fontWeight: "",
                    marginRight: "0.2rem",
                    cursor: "pointer",
                  }}
                  onClick={moreThenThree}
                >
                  Notes list
                </span>
              ) : null}
            </>
          ) : null}
          <Tooltip title="Sticky Note" placement="top-end" arrow={true}>
            <img
              className="icon"
              src={stickyicon}
              onClick={() => {
                setListOpen(!listOpen);
              }}
              alt="icon"
            />
          </Tooltip>
        </div>

        <div className="uparrowDisplayStickyNoteMainDiv">
          {displayNote ? (
            <>
              <div className="displayStickyNote">
                <div className="title"> Sticky Notes</div>
                <div className="innerDiv">
                  <>
                    {props.notes.map((item, index) => {
                      const desc = item.text
                        ? item.text.replace(/(<([^>]+)>)/gi, "")
                        : " ";
                      return (
                        <>
                          <div
                            style={{
                              borderTop: "2px solid" + item.color,
                              filter: "brightness(0.85)",
                            }}
                          />
                          <div
                            className="eachNote"
                            style={{
                              textTransform: "none",
                              backgroundColor: item.color,
                              color: "#000",
                              fontSize: "0.7rem",
                              borderRadius: "0px 0px 0px 10px",
                            }}
                            onClick={() => {
                              props.maximize(item.id);
                            }}
                          >
                            {" "}
                            {desc.substring(0, 35)}
                          </div>
                        </>
                      );
                    })}
                  </>
                </div>
              </div>
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    // backgroundColor: "#eeeeee",
                    // backgroundColor:"#70B8E8",
                    // backgroundColor:"#87CEEB",
                    backgroundColor:"#bbe8f9",
                    content: '""',
                    display: "block",
                    position: "absolute",
                    width: 14,
                    height: 14,
                    top: -46,

                    transform: "rotate(45deg)",
                    left: "calc(95% - 1rem)",
                  },
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </AddNoteContainer>
      <SignUpAlertPopMsg
        open={openMsg}
        handleCloseMsg={handleCloseMsg}
        height="100%"
        vertical="center"
        horizontal="right"
       
        message="Please sign in to use all features !"
        severity="info"
      />
    </div>
  );
}

export default AddNoteSection;
