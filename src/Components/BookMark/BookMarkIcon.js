import React from "react";
import * as s from "./BookMarkStyles";
import { MdCancel } from "react-icons/md";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {api} from '../../api/api'
const BookMarkIcon = ({
  padding,
  margin,
  icons,
  filteredResults,
  search,
  editMode,
  seticons,
  getBookmarFromDb,
  setMessage,
}) => {
  const openLink = localStorage.getItem("OpenLinks");

  let GoogleId = localStorage.getItem("GoogleId");

  const handleChange = (FavoriteBookMarkId, ProfileId, event) => {
    console.log(
      FavoriteBookMarkId + " " + ProfileId + " " + event.target.value
    );

    if (GoogleId) {
      axios
        .patch(
          api+"/favoriteBookmark/update_title/" +
            FavoriteBookMarkId,
          {
            title: event.target.value,
            ProfileId: ProfileId,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      getBookmarFromDb();
    } else {
      setMessage(true);
    }
  };

  const handleDeleteFromDb = (FavoriteBookMarkId, ProfileId, id) => {
    if (GoogleId) {
      axios
        .delete(
          api+"/favoriteBookmark/" + FavoriteBookMarkId,
          {
            data: {
              ProfileId: ProfileId,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          console.log("data failed to delete");
        });
      getBookmarFromDb();
    } else {
      let items = JSON.parse(localStorage.getItem("bookmark-app"));
      items = items.filter((arr, index) => {
        return id !== index;
      });
      console.log(items);
      localStorage.setItem("bookmark-app", JSON.stringify(items));
      seticons(JSON.parse(localStorage.getItem("bookmark-app")));
    }
  };
  const localdata = localStorage.getItem("DarkMode");
  return (
    <>
      {search.length > 1
        ? filteredResults.map((item, index) => {
            const data = `${item.Url}`;

            return (
              <s.BookMarkIconContainer margin={margin} key={index}>
                <s.IconLayout padding={padding}>
                  <a
                    href={
                      data.indexOf("https://") === 0
                        ? `${item.url}`
                        : `https://${item.url}`
                    }
                    // href={item.url}
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                  >
                    <s.Icons
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.url}`}
                    />
                  </a>
                  <span className="deleteIconDiv">
                    {editMode === true ? (
                      <MdCancel
                        className="deleteIcon"
                        onClick={() =>
                          handleDeleteFromDb(
                            item.FavoriteBookMarkId,
                            item.ProfileId,
                            index
                          )
                        }
                      />
                    ) : (
                      " "
                    )}
                  </span>
                </s.IconLayout>

                <s.Title>
                  {item.title && editMode === false ? (
                    item.title.substring(0, 10)
                  ) : (
                    <TextField
                      variant="standard"
                      type="text"
                      style={{
                        width: "4.5rem",
                      }}
                      defaultValue={item.title}
                      onChange={(event) =>
                        handleChange(
                          item.FavoriteBookMarkId,
                          item.ProfileId,
                          event
                        )
                      }
                      InputProps={{
                        disableUnderline: true,
                        style: { fontSize: 13 },
                        inputProps: {
                          style:
                            localdata === "true"
                              ? {
                                  textAlign: "center",
                                  textTransform: "capitalize",
                                  borderBottom: "0.5px solid #64B5F6",
                                  color: "#fff",
                                  padding: "0px",
                                }
                              : {
                                  textAlign: "center",
                                  textTransform: "capitalize",
                                  borderBottom: "0.5px solid #64B5F6",

                                  padding: "0px",
                                },
                        },
                      }}
                    />
                  )}
                </s.Title>
              </s.BookMarkIconContainer>
            );
          })
        : icons.map((item, index) => {
            const data = `${item.url}`;
            return (
              <s.BookMarkIconContainer margin={margin} key={index}>
                <s.IconLayout padding={padding}>
                  <a
                    href={
                      data.indexOf("https://") === 0
                        ? `${item.url}`
                        : `https://${item.url}`
                    }
                    // href={item.url}
                    target={openLink === "false" ? "_self" : "_blank"}
                    rel="noreferrer"
                    
                  >
                    <s.Icons
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.url}`}
                    />
                  </a>
                  <span className="deleteIconDiv">
                    {editMode === true ? (
                      <MdCancel
                        className="deleteIcon"
                        onClick={() =>
                          handleDeleteFromDb(
                            item.FavoriteBookMarkId,
                            item.ProfileId,
                            index
                          )
                        }
                      />
                    ) : (
                      " "
                    )}
                  </span>
                </s.IconLayout>

                <s.Title>
                  {item.title && editMode === false ? (
                    item.title.substring(0, 10)
                  ) : (
                    <TextField
                      variant="standard"
                      type="text"
                      style={{
                        width: "4.5rem",
                      }}
                      defaultValue={item.title}
                      onChange={(event) =>
                        handleChange(
                          item.FavoriteBookMarkId,
                          item.ProfileId,
                          event
                        )
                      }
                      InputProps={{
                        disableUnderline: true,

                        style: { fontSize: 13 },
                        inputProps: {
                          style:
                            localdata === "true"
                              ? {
                                  textAlign: "center",
                                  textTransform: "capitalize",
                                  borderBottom: "0.5px solid #64B5F6",
                                  color: "#fff",
                                  padding: "0px",
                                }
                              : {
                                  textAlign: "center",
                                  textTransform: "capitalize",
                                  borderBottom: "0.5px solid #64B5F6",

                                  padding: "0px",
                                },
                        },
                      }}
                    />
                  )}
                </s.Title>
              </s.BookMarkIconContainer>
            );
          })}
    </>
  );
};

export default BookMarkIcon;
