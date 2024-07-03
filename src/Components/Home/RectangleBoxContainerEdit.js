import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { MdFindReplace } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Carousel from "react-grid-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Tooltip, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import Addurl from "../AddUrl/AddUrl";
import axios from "axios";
import Updateurl from "../updateUrl/updateUrl";
import SignupMessagePopup from "./SignupMessagePopup";
import { api } from "../../api/api";
const Wrapper = styled.div`
  filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
  border-radius: 20px;
  height: 9rem;
  
  @media screen and (max-width: 1600px) {
    height: 7.55rem;
  }

  @media screen and (max-width: 1050px) {
    height: 13rem;
  }
  @media screen and (max-width: 550px) {
    height: 10rem;
    .gFIPel {
      overflow: hidden;
      margin: 0 0px;
    }
    .cSYqTs {
      overflow: hidden;
      margin: 0 0px;
  }
  }
  @media screen and (max-width: 390px) {
    height: 8rem;
  }

  &:hover .center-arrow {
    display: block;
  }
  .center-arrow {
    display: inline;
    text-align: center;
    bottom: 0;
    display: none;
    @media screen and (max-width: 550px) {
      display: block;
    }
  }
  .arrow-left {
    display: block;
    position: absolute;
    // transform: translate(12rem, 4.5rem);
    transform: translate(12rem, 5rem);
    cursor: pointer;
    font-size: 1.3rem;
    @media screen and (max-width: 1600px) {
      transform: translate(7rem, 4rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 1050px) {
      transform: translate(3.8rem, 8.2rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(2.5rem, 5.7rem);
    }
    @media screen and (max-width: 390px) {
      transform: translate(2.5rem, 4rem);
    }
  }
  .arrow-right {
    display: block;
    position: absolute;
    // transform: translate(18rem, -0.8rem);
    transform: translate(18rem, -0.1rem);
    font-size: 1.3rem;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
      transform: translate(12rem, -0.3rem);
      font-size: 1rem;
    }
    @media screen and (max-width: 1050px) {
      transform: translate(8rem, -0.4rem);
    }
    @media screen and (max-width: 550px) {
      transform: translate(6.3rem, -0.45rem);
    }

    @media screen and (max-width: 390px) {
      transform: translate(5rem, -1.1rem);
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
    width: 80%;
    padding-left: 1.9rem;

   
   
  }
  .ThreeDotDiv {
    width: 12%;
   
    visibility: hidden;

    @media screen and (max-width:1075px)
    {
      width: 27%;
    }
  }
  .box-title {
    width: 100%;
    color: #5797e1;
    margin-top: 4px;
    @media screen and (max-width: 390px) {
      font-size: 0.75rem;
    }
  }
  .textField {

    color: #c1d9f7;
    .MuiInput-input {
      padding: 0;
      color: #c1d9f7;
      font-size: 1.3rem;

      @media screen and (max-width: 1600px) {
    
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 390px) {
      .MuiInput-input {
       
        font-size: 0.75rem;
      }
    }
  }
  &:hover .close {
    visibility: visible;
  }
  .delete-button {
    font-size: 1rem;
    color: red;
   margin-top: 2px;

    @media screen and (max-width:1600px)
    {
      margin-top: 1px;
      font-size: 0.9rem;
    }
  }
  .replace-button {
    font-size: 1rem;
    color: blue;
    margin-top: 2px;

    @media screen and (max-width:1600px)
    {
      margin-top: 1px;
      font-size: 0.9rem;
    }
  }
  .close {
    
    vertical-align: middle;
    visibility: hidden;
    font-size: 1.5rem;
  }
  .close:hover {
    filter: drop-shadow(3px 2px 10px blue);
    cursor: pointer;
  }
  .edit-buttons {
    display: flex;
    justify-content: center;
   padding:1rem 0rem 0rem 0rem;
    visibility: hidden;
    margin-top: -1.6rem;
    @media screen and (max-width: 1600px) {
      margin-top: -1.7rem;
    }
  }
  .delete-link {
    color: #ee0909;
    cursor: pointer;
  
  }
  .replace-link {
    color: #1e91d1;
    cursor: pointer;
  }
  .box-line {
    
    margin-top: 6px;
   
    color: #f0f0f080;
  }
  .box-icons {
   
    text-align: center;
    align-content: center;
    align-items: center;
    margin:6px 0px 0px 0px;
   
    @media screen and (max-width: 1050px) {
      margin-top: 1.4rem;
    }
    @media screen and (max-width: 550px) {
      margin-top: 1rem;
    }
    @media screen and (max-width: 390px) {
      margin-top: 0.5rem;
    }
  }
  

  }
  .icons
  {
   
    margin:4px 0px 0px 0px;
    

    @media screen and (max-width: 1050px) {
      margin: 0px 0px 5px 0px;
    }
    @media screen and (max-width: 550px) {
      margin: 0px 0px -5px 0px;
    }
    
  }
  .icons:hover .image_description {
    visibility: visible;
    opacity: 1;
  }
  .icons:hover .edit-buttons {
    visibility: visible;
  }

  .image_description {
   
    color: #659fe3;
    font-size: 0.7em;
    visibility: hidden;
    text-decoration: none !important;
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
    text-align: center;
  }
  .ff {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    
    
    @media screen and (max-width: 1600px) {
      height: 40px;
      width: 40px;
     
    }
    @media screen and (max-width: 550px) {
      height: 30px;
      width: 30px;
    }
    @media screen and (max-width: 390px) {
      height: 23px;
      width: 23px;
    }
    
  }

    
   
  
  .icon-button {
    font-size: 0.9em;
  }
  .extra-add {
    font-size: 2.2rem;
    cursor: pointer;
    color: #64b5f6;
    cursor: pointer;
    background-color: #fff;
    padding: 5px;
   
    @media screen and (max-width: 550px) {
      font-size: 1.6rem;
    }
 
  }

  
`;

const RectangleBoxContainerEdit = (props) => {
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
  const GoogleId = localStorage.getItem("GoogleId");

  useEffect(() => {
    if (GoogleId) {
      setTitle(props.title);
    } else {
      localStorage.getItem(props.id + "Name")
        ? setTitle(localStorage.getItem(props.id + "Name"))
        : setTitle(props.title);
    }
  }, []);
  const handleAddFormOpen = () => {
    setOpenAddForm(true);
  };
  const handleAddFormClose = () => {
    setOpenAddForm(false);
  };
  const getDataFromChildren = (values) => {
    props.sendToParent(values, props.id);
  };
  const onTitleChange = (event) => {
    if (GoogleId) {
      axios
        .patch(
          api+"/category/" + props.boxDataFromDb.CategoryId,
          {
            CategoryName: event.target.value,
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

    setTitle(event.target.value !== "  " ? event.target.value : "Untitled");
    localStorage.setItem(
      props.id + "Name",
      event.target.value !== "" ? event.target.value : "Untitled"
    );
  };
  const ArrowLeft = () => (
    <span className="center-arrow">
      <BsArrowLeft className="arrow-left" />
    </span>
  );

  const ArrowRight = () => (
    <span className="center-arrow">
      <BsArrowRight className="arrow-right" />{" "}
    </span>
  );

  const handleDelete = (e) => {
    props.handleDelete(e.target.dataset.id, props.id);
    handleOpenMsg();
  };

  const handleDeleteFromDb = (FavoriteBookMarkId, ProfileId) => {
    if (GoogleId) {
      axios
        .delete(
         api+ "/favoriteBookmark/" + FavoriteBookMarkId,
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
    } else {
      handleDelete();
    }
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
  const handleUpdate = (e) => {
    props.handleUpdate(e.target.dataset.id, props.id);
  };

  const handleUpdateFormClose = () => {
    setOpenUpdateForm(false);
  };
  const handleClose = () => {
    props.handleClose();
  };
  const sliderValue = localStorage.getItem("sliderValue")
    ? localStorage.getItem("sliderValue")
    : 10;
  return (
    <Wrapper
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
            <Carousel
              cols={4}
              rows={1}
              gap={1}
              showDots={false}
              loop
              hideArrow={false}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              responsiveLayout={[
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 2,
                },
              ]}
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
                    <div className="edit-buttons">
                      {props.data.length > 1 && (
                        <div className="delete-link">
                          <Tooltip title="Delete">
                            <IconButton
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
                              <IoCloseOutline
                                className="delete-button"
                                data-id={index}
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                      )}
                      <div className="replace-link">
                        <Tooltip title="Update">
                          <IconButton
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
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel
              cols={4}
              rows={1}
              gap={1}
              showDots={false}
              loop
              hideArrow={true}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              responsiveLayout={[
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 2,
                },
              ]}
              mobileBreakpoint={[
                {
                  cols: 2,
                  rows: 2,
                  scrollSnap: true,
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
                          <div className="delete-link">
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
                        <div className="replace-link">
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
                                        data.title !== ""
                                          ? data.title
                                          : "Untitled",
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
                      <div>
                        <AddCircleSharpIcon
                          className="extra-add"
                          onClick={handleAddFormOpen}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <Addurl
        open={openAddForm}
        handleClose={handleAddFormClose}
        getCategoryFormDB={props.getCategoryFormDB}
        id={props.id}
        sendDataToParent={getDataFromChildren}
        Categorytitle={props.title}
      />

      <Updateurl
        open={openUpdateForm}
        updateData={updateData}
        handleClose={handleUpdateFormClose}
        getCategoryFormDB={props.getCategoryFormDB}
        id={props.id}
        sendDataToParent={getDataFromChildren}
        CategoryUpdatetitle={ GoogleId
          ? props.boxDataFromDb.CategoryName.substring(0, 13)
          : props.title}
      />
      <SignupMessagePopup open={openMsg} handleCloseMsg={handleCloseMsg} />
    </Wrapper>
  );
};

export default RectangleBoxContainerEdit;
