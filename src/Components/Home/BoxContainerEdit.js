import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { MdFindReplace } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Carousel from "react-grid-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import axios from "axios";
import Addurl from "../AddUrl/AddUrl";
import Updateurl from "../updateUrl/updateUrl";
import SignupMessagePopup from "./SignupMessagePopup";
import { api } from "../../api/api";
const Wrapper = styled.div`
width: 16rem;
height: 16rem;

  border-radius: 20px;
  @media screen and (max-width:1600px)
  {
    width:13rem;
    height:13rem;
  }
  &:hover .center-arrow {
    display: block;
  }
  .center-arrow {
    // text-align: center;
    display: none;
    // bottom: 0;
    @media screen and (max-width: 550px) {
      display: block;
    }
  }
  .arrow-left {
    display: block;
    position: absolute;
   
    // transform: translate(3.8rem, 8.3rem);
    transform: translate(3.8rem, 9.7rem);
    cursor: pointer;
    font-size: 1.3rem;
    margin-top:1.3rem;
    @media screen and (max-width: 1600px) {
      transform: translate(3.8rem, 7.1rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 550px) {
      transform: translate(2.5rem, 4.7rem);
      margin-top:1.4rem;
    }
    @media screen and (max-width: 390px) {
      transform: translate(2.5rem, 3.15rem);
    }
  }
  .arrow-right {
    display: block;
    position: absolute;
    // transform: translate(8rem, -0.15rem);
    transform: translate(8rem, 0.4rem);
  
    font-size: 1.3rem;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
       font-size: 1rem;
       transform: translate(8rem, -0.15rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(6.3rem, -0.4rem);
    }
    @media screen and (max-width: 390px) {
      transform: translate(5rem, -0.46rem);
    }
  }
  .boxes {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(240, 240, 240, 0.5);
    height: 2rem;
  }
  .BoxContainerTitle {
    
    width:75%;
    padding-left: 3rem;
    @media screen and (max-width: 550px) {
      padding-left: 2rem;
    }
    @media screen and (max-width: 390px) {
      padding-left: 1.5rem;
      font-size: 0.75rem;
    }
  }
  .ThreeDotDiv {
    width: 25%;
    visibility: hidden;
  }
  .box-title {
    width: 100%;
    color: #5797e1;
    margin-top: 4px;
    
    @media screen and (max-width: 550px) {
      font-size:0.8rem;
    }
    @media screen and (max-width: 390px) {
      font-size: 0.75rem;
    }
  }
  .textField {
    color: #c1d9f7;
    .MuiInput-input {
      padding: 0;
      color: #c1d9f7;
     
      font-size:1.3rem;
    @media screen and (max-width: 1600px) {
      font-size:1rem;
    }
      @media screen and (max-width: 550px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 0.75rem;
      }
    }
  }
  .edit-buttons {
    display: flex;
    justify-content: center;

    visibility: hidden;
    margin-top: -1.2rem;
    height: 1.5rem;
    padding: 0 2px;

    @media screen and (max-width:1600px)
      {
        margin-top: -1.99rem;
        
      }
    @media screen and (max-width:550px)
    {
      margin-top: -1.99rem;
    }
    
    
  }
  .edit-buttons-carousal {
    display: flex;
    justify-content: center;

    visibility: hidden;
      margin-top: -1.7rem;
      padding: 0 2px;
      height: 1.5rem;
      @media screen and (max-width:1600px)
      {
        margin-top: -2.1rem;
       
      }
      @media screen and (max-width:550px)
      {
        margin-top: -2.05rem;
      }
    
  }
  
  .icons {
    cursor: pointer;

    margin: 0rem 0rem 10px 0rem;
  }
  .box-icons {
    position: relative;
    text-align: center;
    align-content: center;
    align-items: center;
    margin-top: 1.4rem;
    @media screen and (max-width: 550px) {
      margin-top: 0.8rem;
    }
    @media screen and (max-width: 390px) {
      margin-top: 0.5rem;
    }
  }

  .icons:hover .image_description {
    visibility: visible;
    opacity: 1;
  }

  .icons:hover .edit-buttons {
    visibility: visible;
  }
  .icons:hover .edit-buttons-carousal {
    visibility: visible;
  }
  .image_description {
    position: relative;
    color: #659fe3;
    font-size: 1rem;
    visibility: hidden;
    text-decoration: none !important;
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
    text-align: center;
    @media screen and (max-width:1600px)
    {
      font-size: 0.7rem; 
    }
  }
  .ff {
    height: 50px;
    width: 50px;

    border-radius: 10px;
    margin: 0px 0px 24px 0px;
    @media screen and (max-width: 1600px) {
      height: 40px;
      width: 40px;
    }
    @media screen and (max-width: 550px) {
      height: 30px;
      width: 30px;
     
      margin: 0px 0px 18px 0px;
    }

    
    @media screen and (max-width: 390px) {
      height: 23px;
      width: 23px;
      margin: 0px 0px 13px 0px;
    }
  }
  &:hover .close {
    visibility: visible;
  }
  .close {
    vertical-align: middle;
    visibility: hidden;
    font-size: 1.5rem;
  
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
    
  }
  .close:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }
  .extra-add {
    font-size: 2.2rem;
    cursor: pointer;
    color: #64b5f6;

    background-color: #fff;
    padding: 5px;

    @media screen and (min-width: 390px) and (max-width: 550px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 390px) {
      font-size: 1.5rem;
    }
  }

  .delete-button {
    font-size: 1.3rem;
    color: red;
    margin-top: -3px;
    
    @media screen and (max-width:1600px)
    {
      font-size: 0.9rem;
      color: red; 
      margin-top: 5px;
    }
    @media screen and (max-width: 390px) {
      margin-top: 10px;
    }
  }
  .replace-button {
    font-size: 1.3rem;
   
    margin-top: -3px;
    @media screen and (max-width:1600px)
    {
      font-size: 0.9rem;
    
      margin-top: 5px;
    }
    @media screen and (max-width: 390px) {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    height: 10rem;
    width: 10rem;
  }
  @media screen and (max-width: 390px) {
    height: 8rem;
    width: 8rem;
  }

  .cSYqTs {
    @media screen and (max-width: 550px) {
      overflow: hidden;
      margin: 0 0px;
    }
  }
`;

const BoxContainerEdit = (props) => {
  const [openMsg, setopenMsg] = useState(false);
  const handleCloseMsg = () => {
    setopenMsg(false);
  };
  const handleOpenMsg = () => {
    if (GoogleId) {
      setopenMsg(false);
    } else {
      setopenMsg(true);
    }
  };
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [title, setTitle] = useState();

  let newArray = [0, 0, 0, 0];
  if (props.data.length <= 4) {
    props.data.map((d, index) => (newArray[index] = d));
  }
  const handleAddFormOpen = () => {
    setOpenAddForm(true);
  };
  const handleAddFormClose = () => {
    setOpenAddForm(false);
  };
  const handleUpdateFormClose = () => {
    setOpenUpdateForm(false);
  };
  const ArrowLeft = () => (
    <span className="center-arrow">
      <BsArrowLeft className="arrow-left" />
    </span>
  );

  const ArrowRight = () => (
    <span className="center-arrow">
      <BsArrowRight className="arrow-right" />
    </span>
  );
  useEffect(() => {
    if (GoogleId) {
      setTitle(props.title);
    } else {
      localStorage.getItem(props.id + "Name")
        ? setTitle(localStorage.getItem(props.id + "Name"))
        : setTitle(props.title);
    }
  }, []);
  const handleDelete = (e) => {
    props.handleDelete(e.target.dataset.id, props.id);

    handleOpenMsg();
  };

  const handleDeleteFromDb = (FavoriteBookMarkId, ProfileId) => {
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
      props.getCategoryFormDB();
    }
  };

  const handleUpdate = (e) => {
    // setOpenUpdateForm(true);

    props.handleUpdate(e.target.dataset.id, props.id);
  };

  const [updateData, setUpdateData] = useState({});
  const handleUpdateFormDb = (FavoriteBookMarkId, ProfileId, title, url) => {
    setOpenUpdateForm(true);
    setUpdateData({
      FavoriteBookMarkId: FavoriteBookMarkId,
      ProfileId: ProfileId,
      title: title,
      url: url,
    });
  };

  const handleClose = () => {
    updateTitleInDB();

    props.handleClose();
  };
  const getDataFromChildren = (values) => {
    props.sendToParent(values, props.id);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value !== "  " ? event.target.value : "Untitled");
    localStorage.setItem(
      props.id + "Name",
      event.target.value !== "" ? event.target.value : "Untitled"
    );
  };

  const updateTitleInDB = () => {
    if (GoogleId) {
      axios
        .patch(
          api+"/category/" + props.boxDataFromDb.CategoryId,
          {
            CategoryName: title,
            ProfileId: props.boxDataFromDb.ProfileId,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      props.getCategoryFormDB();
    }
  };

  const GoogleId = localStorage.getItem("GoogleId");
  const sliderValue = localStorage.getItem("sliderValue")
    ? localStorage.getItem("sliderValue")
    : 10;

  return (
    <>
      <Wrapper
        position={props.position}
        style={
          sliderValue !== "0" && localStorage.getItem("DarkMode") === "true"
            ? {
                backgroundColor: "#373737",

                filter:
                  "drop-shadow(1px 2px " +
                  sliderValue +
                  "px rgba(0, 0, 0, 0.25))",
              }
            : {
                backgroundColor: "white",
                filter:
                  "drop-shadow(0px 0px " +
                  sliderValue +
                  "px rgba(0, 0, 0, 0.25))",
              }
        }
      >
        <div className="box-title">
          <div className="boxes">
            <div className="BoxContainerTitle">
              <TextField
                variant="standard"
                required
                autoFocus
                placeholder={props.title}
                value={title || ""}
                onChange={onTitleChange}
                size="small"
                className="textField"
                inputProps={{ maxLength: 15, style: { textAlign: "center" } }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </div>
            <div className="ThreeDotDiv">
              <MdClose
                id="basic-button"
                className="close"
                onClick={handleClose}
              />
            </div>
          </div>
          <div className="box-icons">
            {props.data.length > 4 ? (
              <div className="box-icons-carousal">
                <Carousel
                  cols={2}
                  rows={2}
                  gap={0}
                  showDots={false}
                  loop
                  hideArrow={false}
                  arrowLeft={ArrowLeft}
                  arrowRight={ArrowRight}
                  mobileBreakpoint={[
                    {
                      cols: 2,
                      rows: 2,
                    },
                  ]}
                >
                  {props.data.map((data, index) => (
                    <Carousel.Item key={index}>
                      <div
                        key={index}
                        rel="noreferrer"
                        className="icons"
                        id={index}
                      >
                        <img
                          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${data.url}`}
                          alt={data.title}
                          className="ff"
                        ></img>
                        <div className="edit-buttons-carousal">
                          <div>
                            <Tooltip title="Delete">
                              <IconButton
                                size="small"
                                className="delete-button"
                                onClick={
                                  GoogleId
                                    ? () =>
                                        handleDeleteFromDb(
                                          data.FavoriteBookMarkId,
                                          data.ProfileId
                                        )
                                    : handleDelete
                                }
                              >
                                <IoCloseOutline data-id={index} />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <div>
                            <Tooltip title="Update">
                              <IconButton
                                size="small"
                                className="replace-button"
                                onClick={
                                  GoogleId
                                    ? () =>
                                        handleUpdateFormDb(
                                          data.FavoriteBookMarkId,
                                          data.ProfileId,
                                          data.title,
                                          data.url
                                        )
                                    : handleUpdate
                                }
                              >
                                {" "}
                                <MdFindReplace data-id={index} />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            ) : (
              <Carousel
                cols={2}
                rows={2}
                gap={1}
                showDots={false}
                loop
                hideArrow={true}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                mobileBreakpoint={[
                  {
                    cols: 2,
                    rows: 2,
                  },
                ]}
              >
                {newArray.map((data, index) => (
                  <Carousel.Item key={index}>
                    {data !== 0 ? (
                      <div
                        key={index}
                        rel="noreferrer"
                        className="icons"
                        id={index}
                      >
                        <img
                          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${data.url}`}
                          alt={data.title}
                          className="ff"
                        ></img>
                        <div className="edit-buttons">
                          {props.data.length > 1 && (
                            <div>
                              <Tooltip title="Delete">
                                <IconButton
                                  size="small"
                                  className="delete-button"
                                  onClick={
                                    GoogleId
                                      ? () =>
                                          handleDeleteFromDb(
                                            data.FavoriteBookMarkId,
                                            data.ProfileId
                                          )
                                      : handleDelete
                                  }
                                >
                                  <IoCloseOutline data-id={index} />
                                </IconButton>
                              </Tooltip>
                            </div>
                          )}

                          <div>
                            <Tooltip title="Update">
                              <IconButton
                                size="small"
                                className="replace-button"
                                onClick={
                                  GoogleId
                                    ? () =>
                                        handleUpdateFormDb(
                                          data.FavoriteBookMarkId,
                                          data.ProfileId,
                                          data.title,
                                          data.url
                                        )
                                    : handleUpdate
                                }
                              >
                                <MdFindReplace data-id={index} />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Tooltip title="Add New">
                        <AddCircleSharpIcon
                          className="extra-add"
                          onClick={handleAddFormOpen}
                        />
                      </Tooltip>
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
          <Addurl
            open={openAddForm}
            handleClose={handleAddFormClose}
            getCategoryFormDB={props.getCategoryFormDB}
            id={props.id}
            sendDataToParent={getDataFromChildren}
            Categorytitle={
              GoogleId
                ? props.boxDataFromDb.CategoryName.substring(0, 13)
                : props.title
            }
          />

          <Updateurl
            open={openUpdateForm}
            updateData={updateData}
            handleClose={handleUpdateFormClose}
            getCategoryFormDB={props.getCategoryFormDB}
            id={props.id}
            sendDataToParent={getDataFromChildren}
            CategoryUpdatetitle={
              GoogleId
                ? props.boxDataFromDb.CategoryName.substring(0, 13)
                : props.title
            }
            // localTitle={props.title}
          />
        </div>
      </Wrapper>
      <SignupMessagePopup open={openMsg} handleCloseMsg={handleCloseMsg} />
    </>
  );
};

export default BoxContainerEdit;
