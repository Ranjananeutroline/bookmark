import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookMarkIcon from "../BookMark/BookMarkIcon";
import ViewSidebar from "./ViewSidebar";
import { FiSearch } from "react-icons/fi";
import { api } from "../../api/api";
import axios from "axios";
import TextField from "@mui/material/TextField";
import logo from "../../Assets/logo.jpg";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";
import NewBookMark from "../BookMark/AddBookMark/NewBookMark";
import AddIcon from "@mui/icons-material/Add";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";

const ViewBookMark = styled.div`
  display: flex;
  background: #ffff;
`;
const ViewAllBookMark = styled.div`
  display: flex;
  height: 8vh;
  flex-wrap: wrap;
  width: 80%;
  @media screen and (max-width: 660px) {
    width: 100%;
  }
  .ButtonDiv {
    @media screen and (max-width: 395px) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  .Addicon {
    margin-right: 3px;
    @media screen and (max-width: 450px) {
      display: none;
      margin-right: 0px;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 90vh;
    justify-content: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
  }
  .passwordTextFieldDiv {
    background-color: #f0f2f5;

    border-radius: 20px;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .searchTextfield {
    width: 25rem;
    @media screen and (max-width: 940px) {
      width: 15rem;
    }
    @media screen and (max-width: 770px) {
      width: 10rem;
    }
    @media screen and (max-width: 450px) {
    }
  }
  .logo {
    width: 2.5rem;
    margin-left: 1rem;
    @media screen and (max-width: 674px) {
      width: 2rem;
    }
  }
  .logSearchDiv {
    display: flex;
  }
  .cancelButton {
    font-size: 1.4rem;
  }

  .Button {
    width: 4.3rem;
  }
  .doneButton {
    width: 4.3rem !important;
    color: #828282 !important;
    background: #e5e4e2 !important;
    border: 1px solid #e5e4e2;
    @media screen and (max-width: 450px) {
      width: 3.5rem !important;
    }
  }
  .doneButton:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important;
  }
  .editButton {
    width: 4.3rem;
    @media screen and (max-width: 450px) {
      width: 3.5rem;
    }
  }
  .editButton:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important;
  }
  .ButtonIcon {
    margin-right: 0.3rem;
    @media screen and (max-width: 450px) {
      margin-right: 0rem;
      display: none;
    }
  }
  .addButton {
    margin-right: 0.5rem;
    @media screen and (max-width: 450px) {
    }
  }
  .addButton:hover {
    background: #3ea2f4 !important;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important;
  }
`;

const ViewAll = () => {
  const datas = localStorage.getItem("bookmark-app");
  const reterived = JSON.parse(datas);
  const [icons, seticons] = useState([
    {
      Title: "",
      Url: "",
    },
  ]);
  const GoogleId = localStorage.getItem("GoogleId");

  const getBookmarFromDb = () => {
    if (GoogleId) {
      axios
        .get(api+"/favoriteBookmark/bookmark/" + GoogleId)
        .then((res) => {
          const items = res.data.data;

          seticons(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  };

  useEffect(() => {
    getBookmarFromDb();
    if (reterived === null) {
      seticons([]);
    } else seticons(reterived);
  }, []);

  const [search, setsearch] = useState(" ");
  const [filteredResults, setFilteredResults] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setsearch(value);

    if (search !== " ") {
      const filteredData = icons.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setFilteredResults(icons);
    }
  };
  const history = useHistory();
  const cancelTo = () => history.push("/");
  const [editMode, setEditMode] = useState(false);
  const editBookMark = () => {
    console.log(message);
    setEditMode(!editMode);
  };

  //for add
  const [open, setopen] = useState(false);
  let [values, setData] = useState([]);

  const handleClickOpen = () => {
    setopen(true);
  };
  const handleClose = (e) => {
    setopen(false);
  };
  const handleCloseForm = (e) => {
    setopen(false);
  };
  const handleAdd = (urlValue, titleValue) => {
    console.log(urlValue + " " + titleValue);
    let newValue = { url: urlValue, title: titleValue };
    const oldValue = JSON.parse(localStorage.getItem("bookmark-app"));
    if (oldValue !== null) {
      values = [...oldValue];
    }
    values.push(newValue);
    updateUrl(values);
  };

  const saveDataToLocalStorage = (value, id) => {
    localStorage.setItem("bookmark-app", JSON.stringify(value));
  };
  const updateUrl = (value) => {
    saveDataToLocalStorage(value);

    setData(value);
    let sideValue = JSON.parse(localStorage.getItem("bookmark-app"));
    seticons(sideValue.slice(Math.max(sideValue.length - 6, 0)));
  };
  const localdata = localStorage.getItem("DarkMode");

  const [message, setMessage] = useState(false);
  const [openDialog, setDialog] = useState(false);
  const handleCloseMsg = () => {
    setDialog(false);
  };

  const openMessage = () => {
    if (message) {
      setDialog(true);
    }
  };

  return (
    <>
      <ViewBookMark
        style={
          localdata === "true"
            ? { backgroundColor: "#181818", color: "white" }
            : { backgroundColor: "" }
        }
      >
        <ViewSidebar />

        <ViewAllBookMark>
          <Grid
            item
            style={
              localdata === "true"
                ? {
                    backgroundColor: "#3C3C3C",
                    color: "white",
                    display: "flex",
                    borderLeft: "1px solid #4B4B4B",
                    borderBottom: "1px solid #4B4B4B",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.05)",
                  }
                : {
                    backgroundColor: "",
                    display: "flex",
                    backgroundColor: "#fff",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.05)",
                  }
            }
            xs={12}
          >
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                width: "100%",

                marginRight: "1rem",
              }}
            >
              <div className="logSearchDiv">
                <Link to="/">
                  <img src={logo} alt="log" className="logo" />
                </Link>
                <div className="passwordTextFieldDiv">
                  <TextField
                    variant="standard"
                    type="text"
                    className="searchTextfield"
                    required
                    fullWidth
                    autoFocus
                    placeholder="Search here"
                    onChange={handleChange}
                    InputProps={{
                      style: { fontFamily: "Arial" },
                      startAdornment: (
                        <FiSearch
                          style={{ marginRight: "0.5rem", color: "#7C7E81" }}
                        />
                      ),
                      disableUnderline: true,
                    }}
                  />
                </div>
              </div>

              <div className="ButtonDiv">
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleClickOpen}
                  className="addButton"
                  style={{
                    background: "#64B5F6",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  <AddIcon
                    className="Addicon"
                    style={{
                      fontSize: "1.6em",
                    }}
                  />
                  Add
                </Button>
                {editMode == true ? (
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      editBookMark();
                      openMessage();
                    }}
                    className="doneButton"
                    style={{
                      background: "#64B5F6",
                      color: "#fff",
                      fontSize: "0.8rem",
                    }}
                  >
                    <MdDownloadDone className="ButtonIcon" />
                    Done
                  </Button>
                ) : (
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={editBookMark}
                    className="editButton"
                    style={
                      localdata === "true"
                        ? { backgroundColor: "#fff", fontSize: "0.8rem" }
                        : { backgroundColor: "", fontSize: "0.8rem" }
                    }
                  >
                    <AiOutlineEdit className="ButtonIcon" />
                    Edit
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
          {icons.length > 30 ? (
            <div className="icons">
              <BookMarkIcon
                padding="10px 20px"
                margin="1.2rem"
                search={search}
                icons={icons}
                seticons={seticons}
                editMode={editMode}
                filteredResults={filteredResults}
                getBookmarFromDb={getBookmarFromDb}
                setMessage={setMessage}
              />
            </div>
          ) : (
            <BookMarkIcon
              padding="10px 20px"
              margin="1.2rem"
              search={search}
              icons={icons}
              seticons={seticons}
              editMode={editMode}
              filteredResults={filteredResults}
              getBookmarFromDb={getBookmarFromDb}
              setMessage={setMessage}
            />
          )}
        </ViewAllBookMark>
      </ViewBookMark>
      <NewBookMark
        open={open}
        handleClose={handleClose}
        handleCloseForm={handleCloseForm}
        handleAdd={handleAdd}
        getBookmarFromDb={getBookmarFromDb}
      />
      <SignUpAlertPopMsg
        open={openDialog}
        handleCloseMsg={handleCloseMsg}
        height="50%"
        vertical="center"
        horizontal="center"
        message="Please sign in to save your changes!"
      />
    </>
  );
};

export default ViewAll;
