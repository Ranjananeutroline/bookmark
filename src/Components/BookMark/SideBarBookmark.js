import React, { useState, useEffect } from "react";
import NewBookMark from "./AddBookMark/NewBookMark";
import BookMarkIcon from "./BookMarkIcon";
import * as s from "./BookMarkStyles";
import ButtonField from "./ButtonField";

import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Link } from "react-router-dom";
import AppContainer from "../routes/AppContainer";
import { api } from "../../api/api";
const SideBarBookmark = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [icons, seticons] = useState([
    {
      title: "Neutroline",
      url: "https://www.neutroline.com/",
    },
  ]);
  const [icons2, seticons2] = useState([
    {
      title: "",
      url: "",
    },
  ]);

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

  const CloseHandler = () => {
    setSidebarOpen(false);
  };
  const handleAdd = (urlValue, titleValue) => {
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

  const [darkMode, setDarkMode] = useState(localStorage.getItem("DarkMode"));

  const datas = localStorage.getItem("bookmark-app");
  const reterived = JSON.parse(datas);
  const GoogleId = localStorage.getItem("GoogleId");
  const getBookmarFromDb = () => {
    if (GoogleId) {
      axios
        .get(api+"/favoriteBookmark/bookmark/" + GoogleId)
        .then((res) => {
          const items = res.data.data.slice(
            Math.max(res.data.data.length - 6, 0)
          );

          seticons2(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  };

  useEffect(() => {
    getBookmarFromDb();
    if (reterived !== null) {
      const items = reterived.slice(Math.max(reterived.length - 6, 0));
      seticons(items);
    }
  }, []);

  const [search] = useState(" ");

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {sidebarOpen ? (
        <div>
          <AppContainer />
          <s.SideBookMark
            style={
              darkMode === "true"
                ? { background: "#3c3c3c", boxShadow: "none" }
                : { background: "" }
            }
          >
            <s.SideBookMarkContainer>
              <div
                className="topcontainer"
                style={
                  localStorage.getItem("DarkMode") === "true"
                    ? { background: "#595959", color: "#fff" }
                    : { background: "#E5E4E2", color: "#828282" }
                }
              >
                <s.Heading>Bookmarks</s.Heading>

                <s.CancelButton onClick={CloseHandler}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <CloseIcon
                      style={
                        localStorage.getItem("DarkMode") === "true"
                          ? { color: "#fff", fontSize: "1.2rem" }
                          : { color: "#828282", fontSize: "1.2rem" }
                      }
                    />
                  </Link>
                </s.CancelButton>
              </div>

              <s.IconContainer
                style={
                  localStorage.getItem("DarkMode") === "true"
                    ? { color: "#fff" }
                    : { color: "" }
                }
              >
                <BookMarkIcon
                  // padding="9px 6px 9px 6px"
                  padding="10px 20px"
                  margin="1.6rem"
                  // margin="0.8rem 0.6rem 0.8rem 0.7rem"
                  icons={GoogleId ? icons2 : icons}
                  seticons={seticons}
                  getBookmarFromDb={getBookmarFromDb}
                  editMode={editMode}
                  search={search}
                />
              </s.IconContainer>
              <s.ButtonContainer>
                <ButtonField
                  insideicons={
                    <AddIcon
                      style={{
                        verticalAlign: "middle",
                        fontSize: "1.7rem",
                        marginRight: "3px",
                      }}
                    />
                  }
                  name="Add New"
                  colors="#64b5f6"
                  fontColor="#FFF"
                  onClick={handleClickOpen}
                  radius="20px"
                  border="none"
                ></ButtonField>
                <Link to="/view-bookmark">
                  <ButtonField
                    name="View All"
                    fontColor="#64b5f6"
                    radius="20px"
                    colors={"white"}
                    border={"2px solid #64b5f6"}
                    style={{ border: "1px blue" }}
                    insideicons={
                      <ArrowForwardIcon
                        style={{
                          verticalAlign: "middle",
                          fontSize: "1.7em",
                          marginRight: "3px",
                        }}
                      />
                    }
                  />
                </Link>
              </s.ButtonContainer>
            </s.SideBookMarkContainer>
          </s.SideBookMark>
        </div>
      ) : null}

      <NewBookMark
        open={open}
        handleClose={handleClose}
        handleCloseForm={handleCloseForm}
        handleAdd={handleAdd}
        getBookmarFromDb={getBookmarFromDb}
      />
    </>
  );
};

export default SideBarBookmark;
