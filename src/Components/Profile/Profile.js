import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MdCancel } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import profile from "../../Assets/profile.png";
import camera from "../../Assets/camera.png";
import { BsFillPencilFill } from "react-icons/bs";
import Logout from "../Logout/Logout";
import EditProfile from "./EditProfile";
import axios from "axios";
import styled from "styled-components";
import EditPopUp from "./EditPopUp";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsCameraFill} from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { api } from "../../api/api";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
  DialogHeading: {},
  DialogCrossIcon: {
    float: "right",
    fontSize: "1.5rem",
    color: "#738097",
    marginTop: "-0.5rem",
    marginRight: "-1rem",
    cursor: "pointer",

    [theme.breakpoints.down("xs")]: {
      marginRight: "-1rem",
    },
  },
  DialogContentMainDiv: {
    // width: "30rem",
    display: "flex",
    // justifyContent: "space-between",
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",
    // },
  },
  ContentDiv: {
    width: "22rem",
    marginLeft: "0.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1.5rem",
    paddingBottom: "2.2rem",
    // height: "20vh",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    [theme.breakpoints.down("sm")]: {
      width: "15rem",
      marginLeft: "0rem",
      marginTop: "0.2rem",
      marginBottom: "0rem",
      boxShadow: "none",
    },
  },
  DialogContentTitle: {
    color: "rgba(115, 128, 151, 0.74)",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontWeight: "600",

    // marginTop: "1rem",
    // marginRight: "0.5rem",
    // marginLeft: "0.5rem",
    // backgroundColor: "red",
  },
  DialogContentSubTitle: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
    marginTop: "0.6rem",
  },
  Profile: {
    height: "8rem",
    borderRadius: "50%",
  },
  Camera: {
    // height: "1.7rem",
    backgroundColor: "#DCE2E2",
    padding: "0.5rem 0.5rem",
    borderRadius: "50%",
    // marginTop: "-3.2rem",
    // marginLeft: "6.8rem",
    fontSize:"1.2rem",
    // position:"absolute",
    color:"#03A9F4",
    pointer:"cursor"
  },
  adminName: {
    marginTop:"0.5rem",
    color: "#738097",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
  },
  adminInfo: {
    color: "#9F9E97",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
    marginTop: "0.5rem",
    fontWeight: "500",
  },
  EditProfileDiv: {
    // backgroundColor: "#C4C4C4",
backgroundColor:"#ECECEC",
    fontfamily: "Roboto",
    fontWeight: "400",

    fontSize: "0.7rem",
    paddingTop: "0.2rem",
    paddingLeft: "0.5rem",
    paddingBottom: "0.2rem",
    paddingRight: "0.5rem",
    marginLeft: "7rem",
    marginTop: "0.2rem",

    // color: "#fff",
    display: "flex",
    alignItems:"center",
    gap:'0.3rem',
    borderRadius:"5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#01ba85",
      color: "#fff",
    
      boxShadow:
        "0px 3px 5px -1px rgb(0 0 0 / 20%),0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  deactivateChangePasswordMainDiv: {
    marginLeft: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Root = styled.div`
  .profilebtn {
    background-color: #1d9bf0;
    color: #fff;
    width: 6rem;
    height: 1.8rem;
    border: 1px solid #ecdfdf;
    border-radius: 15px;
    margin-top: 0.5rem;
    font-size: 12px;
    cursor: pointer;
    text-transform: none;
    :hover {
      background-color: #1d9bf0;
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
        0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    }
  }
`;
const Content = styled.div`
  
  .DialogCrossIcon {
    float: right;
    font-size: 1.5rem;
    color: #738097;
    margin-top: -0.5rem;
    margin-right: -1rem;
    cursor: pointer;
    :hover {
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    }
  }

  .DialogContentMainDiv {
    
    display: flex;
    
  },
  
  
`;

const Profile = ({ profileDataFromDB, getProfileDataDb }) => {
  const classes = useStyle();

  const GoogleId = localStorage.getItem("GoogleId");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEditProfile, setEditProfile] = React.useState(false);

  const handleClickOpenEditProfile = () => {
    setEditProfile(!openEditProfile);
  };

  const updateOnDb = (values) => {
    axios
      .patch(api+"/profile/" + GoogleId, {
        Phone: values.phone,
        DateOfBirth: values.dateOfBirth,
      })
      .then((res) => {
        console.log("updated data");
      })
      .catch((err) => {
        console.log(err);
        console.log("unsuccessful");
      });
    getProfileDataDb();
  };

  useEffect(() => getProfileDataDb(), []);

  return (
    <Root>
      <Button variant="text" className="profilebtn" onClick={handleClickOpen}>
        My Profile
      </Button>
      <Dialog
        maxWidth={"md"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: { borderRadius: "10px" },
        }}
      >
        <DialogContent>
          <Content>
            <div className="DialogHeading">
              {" "}
              <MdCancel
                className={classes.DialogCrossIcon}
                onClick={handleClose}
              />{" "}
            </div>
            <div className={classes.DialogContentMainDiv}>
              <div className={classes.ContentDiv}>
                <span className={classes.DialogContentTitle}>My Profile</span>
                <p className={classes.DialogContentSubTitle}>
                  Welcome to my Account
                </p>
                {profileDataFromDB.ImageUrl ? (
                  <img
                    className={classes.Profile}
                    src={profileDataFromDB.ImageUrl}
                    alt="profile-img"
                  />
                ) : (
                  <img
                    className={classes.Profile}
                    src={profile}
                    alt="profile-img"
                  />
                )}

                {/* <img className={classes.Camera} src={camera} alt="camera-img" /> */}
                {/* <BsCameraFill className={classes.Camera}/> */}
{/* <Tooltip title="Edit Profile"> */}

<Tooltip title="Edit Profile" style={{
  position:"absolute",
  transform:"translate(60px,-20px)"
}}>
  <IconButton>
  <AiOutlineEdit className={classes.Camera} onClick={handleClickOpenEditProfile}/>
    </IconButton></Tooltip>


{/* </Tooltip> */}
               
                {/* <div 
                  // className={classes.EditProfileDiv}
                  // onClick={handleClickOpenEditProfile}
                > 
                  {/* <BsFillPencilFill /> */}
                   {/* <AiOutlineEdit/> */}
                  {/* <span>Edit Profile</span> */}
                {/* </div>  */}
                <EditPopUp
                  profileDataFromDB={profileDataFromDB}
                  updateOnDb={updateOnDb}
                />
                <span className={classes.adminName}>
                  {profileDataFromDB.Name}
                </span>

                <span className={classes.adminInfo}>
                  {profileDataFromDB.DateOfBirth
                    ? profileDataFromDB.DateOfBirth
                    : "----dob----"}
                </span>
                <span className={classes.adminInfo}>
                  {profileDataFromDB.Email}
                </span>
                <span className={classes.adminInfo}>
                  {profileDataFromDB.Phone
                    ? profileDataFromDB.Phone
                    : "----phone----"}
                </span>
                <Logout />
              </div>

              {openEditProfile ? (
                <div>
                  <EditProfile
                    profileDataFromDB={profileDataFromDB}
                    updateOnDb={updateOnDb}
                  />
                </div>
              ) : (
                " "
              )}
            </div>
          </Content>
        </DialogContent>
      </Dialog>
    </Root>
  );
};

export default Profile;
