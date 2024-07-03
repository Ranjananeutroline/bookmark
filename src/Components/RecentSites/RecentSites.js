import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MdOutlineAddCircle } from "react-icons/md";

import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import { api } from "../../api/api";
import Snackbar from "@material-ui/core/Snackbar";

const RecentSitesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 0px;
  column-gap: 0.6rem;
  @media screen and (max-width: 950px) {
    display: none;
  }

  .recent-site-icon {
    display: flex;

    opacity: 0.5;

    padding: 1rem;
    border-radius: 10px;
  }
  .recent-site-icon: hover {

  }
  .recent-site-icon: hover .addBookmark {
    visibility: visible;
  }
  .recent-icon {
    height: 2rem;
    border-radius: 10px;
  }
  .recent-icon:hover {
    opacity: 1;
  }

  .image_description {
    opacity: 1;
    width: 80px;
    margin-left: -20px;
  }
  .icons1 {
    height: 2rem;
    border-radius: 10px;
  }
  .image_description_one,
  .image_description_two,
  .image_description_three,
  .image_description_four {
    position: absolute;
    color: #2478dc;
    font-size: 0.7em;
    visibility: hidden;
    text-decoration: none;
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
    width: 75px;
    text-align: center;
    margin-left: -20px;
    margin-top: -6px;
  }
  .icons1:hover .recent-site-icon {
    cursor: pointer;
    filter: drop-shadow(3px 5px 2px #bdbdbd);
    transition: all 0.3s linear;
    opacity: 1;
  }

  .icons1:hover .image_description_one,
  .icons1:hover .image_description_two,
  .icons1:hover .image_description_three,
  .icons1:hover .image_description_four,
  .recent-site-icon:hover {
    visibility: visible;
    opacity: 1;
  }

  .addBookmark {
    position: absolute;

    margin-left: 1.8rem;
    margin-top: -0.9rem;
    visibility: hidden;
  }
  .addBookmarkIcon {
    color: #1976d2;
    font-size: 1rem;
    padding: 1px;
  }
`;

const RecentSites = () => {
  const [recentData1, setRecentData1] = useState([]);
  const [recentData2, setRecentData2] = useState([]);
  const [recentData3, setRecentData3] = useState([]);
  const [recentData4, setRecentData4] = useState([]);
  const GoogleId = localStorage.getItem("GoogleId");

  const getRecentSitesFromDb = () => {
    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
      axios
        .get(api+"/history/opera")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      axios
        .get(api+"/history/chrome")
        .then((res) => {
          const array = res.data.data[0];

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      axios
        .get(api+"/history/safari")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });
      return "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      axios
        .get(api+"/history/firefox")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Firefox";
    } else if (
      navigator.userAgent.indexOf("MSIE") != -1 ||
      !!document.documentMode === true
    ) {
      axios
        .get(api+"/history/IE")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "IE"; //crap
    } else if (navigator.userAgent.indexOf("Brave") != -1) {
      axios
        .get(api+"/history/brave")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Brave";
    } else if (navigator.userAgent.indexOf("Maxthon") != -1) {
      axios
        .get(api+"/history/maxthon")
        .then((res) => {
          const array = res.data.data[0];

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Maxthon";
    } else if (navigator.userAgent.indexOf("Vivaldi") != -1) {
      axios
        .get(api+"/history/vivaldi")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Vivaldi";
    } else if (navigator.userAgent.indexOf("Torch") != -1) {
      axios
        .get(api+"/history/torch")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Torch";
    } else if (navigator.userAgent.indexOf("Seamonkey") != -1) {
      axios
        .get(api+"/history/sea-monkey")
        .then((res) => {
          const array = res.data.data[0].reverse();

          setRecentData1(array[1]);
          setRecentData2(array[2]);
          setRecentData3(array[3]);
          setRecentData4(array[4]);
        })
        .catch((err) => {
          console.log(err);
        });

      return "Seamonkey";
    } else {
      return "Unknown";
    }
  };
  useEffect(() => {
    getRecentSitesFromDb();
  }, []);

  const postDatatoDb = (Url, Title) => {
    console.log(GoogleId + " " + Url + " " + Title);
    if (GoogleId) {
      axios
        .post(api+"/favoriteBookmark", {
          GoogleId: GoogleId,
          CategoryId: 1,
          Title: Title,
          Url: Url,
          IsFavorite: "false",
          IsBookMark: "true",
        })
        .then(() => {
          console.log("Data inserted");
          handleClickOpen();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //for alert dialog box after submitting.
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {GoogleId ? (
        <>
          <RecentSitesContainer>
            <div className="recent-site-icon">
              <a
                href={
                  `${recentData1.url}`.indexOf("https://") === 0
                    ? `${recentData1.url}`
                    : `https://${recentData1.url}`
                }
                target="_blank"
                rel="noreferrer"
                className="icons1"
              >
                <img
                  src={`https://www.google.com/s2/favicons?sz=64&domain_url=${recentData1.url}`}
                  className="recent-icon"
                  alt=""
                ></img>
                <p className="image_description_one">
                  {recentData1.title
                    ? recentData1.title.substring(0, 10)
                    : null}
                </p>
              </a>
              <div className="addBookmark">
                <Tooltip title="Add Bookmark">
                  <IconButton
                    className="addBookmarkIcon"
                    onClick={() =>
                      postDatatoDb(recentData1.url, recentData1.title)
                    }
                  >
                    <MdOutlineAddCircle />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="recent-site-icon">
              <a
                href={
                  `${recentData2.url}`.indexOf("https://") === 0
                    ? `${recentData2.url}`
                    : `https://${recentData2.url}`
                }
                target="_blank"
                rel="noreferrer"
                className="icons1"
              >
                <img
                  src={`https://www.google.com/s2/favicons?sz=64&domain_url=${recentData2.url}`}
                  alt=""
                  className="recent-icon"
                ></img>
                <p className="image_description_one">
                  {recentData2.title
                    ? recentData2.title.substring(0, 10)
                    : null}
                </p>
              </a>
              <div className="addBookmark">
                <Tooltip title="Add To Bookmark">
                  <IconButton
                    className="addBookmarkIcon"
                    onClick={() =>
                      postDatatoDb(recentData2.url, recentData2.title)
                    }
                  >
                    <MdOutlineAddCircle />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="recent-site-icon">
              <a
                href={
                  `${recentData3.url}`.indexOf("https://") === 0
                    ? `${recentData3.url}`
                    : `https://${recentData3.url}`
                }
                target="_blank"
                rel="noreferrer"
                className="icons1"
              >
                <img
                  alt=""
                  src={`https://www.google.com/s2/favicons?sz=64&domain_url=${recentData3.url}`}
                  className="recent-icon"
                ></img>
                <p className="image_description_one">
                  {recentData3.title
                    ? recentData3.title.substring(0, 10)
                    : null}
                </p>
              </a>
              <div className="addBookmark">
                <Tooltip title="Add Bookmark">
                  <IconButton
                    className="addBookmarkIcon"
                    onClick={() =>
                      postDatatoDb(recentData3.url, recentData3.title)
                    }
                  >
                    <MdOutlineAddCircle />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="recent-site-icon">
              <a
                href={
                  `${recentData4.url}`.indexOf("https://") === 0
                    ? `${recentData4.url}`
                    : `https://${recentData4.url}`
                }
                target="_blank"
                rel="noreferrer"
                className="icons1"
              >
                <img
                  alt=""
                  src={`https://www.google.com/s2/favicons?sz=64&domain_url=${recentData4.url}`}
                  className="recent-icon"
                ></img>
                <p className="image_description_one">
                  {recentData4.title
                    ? recentData4.title.substring(0, 10)
                    : null}
                </p>
              </a>
              <div className="addBookmark">
                <Tooltip title="Add Bookmark">
                  <IconButton
                    className="addBookmarkIcon"
                    onClick={() =>
                      postDatatoDb(recentData4.url, recentData4.title)
                    }
                  >
                    <MdOutlineAddCircle />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <Snackbar
              open={openDialog}
              autoHideDuration={2000}
              onClose={handleCloseDialog}
            >
              <Alert
                onClose={handleCloseDialog}
                style={{
                  color: "#fff",
                  backgroundColor: "#333A56",
                  borderLeft: "1px green",
                }}
              >
                BookMark added Successfully!
              </Alert>
            </Snackbar>
          </RecentSitesContainer>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default RecentSites;
