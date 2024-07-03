import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

import { useFormik } from "formik";
import * as Yup from "yup";
import SignupMessagePopup from "../Home/SignupMessagePopup";
import { BsFillPencilFill } from "react-icons/bs";
import { Icon } from "@iconify/react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: transparent;
  }
`;

const useStyle = makeStyles((theme) => ({
  DialogHeading: {},
  DialogCrossIcon: {
    float: "right",
    fontSize: "1.5rem",
    color: "#738097",
    marginTop: "-0.5rem",
    marginRight: "-1rem",
  },
  DialogContentMainDiv: {
    paddingLeft: "1.3rem",
    paddingRight: "1.3rem",
    width: "20rem",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
      width: "19rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  DialogContentTitle: {
    color: "#8A7F7F",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    marginTop: "0.5rem",
    marginBottom: "0.8rem",

    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      marginBottom: "1.5rem",
    },
  },
  titleIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 65,
    top: 80,
    [theme.breakpoints.down("xs")]: {
      left: 40,
      top: 83,
    },
  },
  urlIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",

    [theme.breakpoints.down("xs")]: {},
  },
  infoIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 65,
    top: 78,
    [theme.breakpoints.down("sm")]: {
      left: 38,
      top: 78,
    },
    [theme.breakpoints.down("xs")]: {
      top: 85,
    },
  },
  dateIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 65,
    top: 142,
    [theme.breakpoints.down("sm")]: {
      left: 38,
      top: 142,
    },
    [theme.breakpoints.down("xs")]: {
      top: 147,
    },
  },
  emailIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 65,
    top: 206,
    [theme.breakpoints.down("sm")]: {
      left: 38,
      top: 206,
    },
    [theme.breakpoints.down("xs")]: {
      top: 211,
    },
  },
  phoneIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 65,
    top: 270,
    [theme.breakpoints.down("sm")]: {
      left: 38,
      top: 270,
    },
    [theme.breakpoints.down("xs")]: {
      top: 274,
    },
  },
  inputField: {
    fontSize: "1rem",
    paddingLeft: "2rem",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",

    textColor: "#736969",

    width: "80%",
    height: "1rem",
    border: "1px solid white",

    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.15)",
    [theme.breakpoints.down("xs")]: {
      border: "1px solid #000",
      boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.15)",
    },
    "&:focus": {
      outline: "none",
    },
  },
  ContinueButton: {
    backgroundColor: "#51DBEE",
  },
  arrowIcon: {
    fontSize: "1.1rem",
  },
  DialogContent: {
    paddingLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "3rem",
    },
  },
  DialogContentSubTitle: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
    width: "50%",
    textAlign: "center",
  },
  DialogContentHaveAccount: {
    color: "#758989",
    fontfamily: "Roboto",
  },
  buttonDiv: {
    display: "flex",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  addButton: {
    width: "6rem !important",
    height: "2rem !important",
    backgroundColor: "#64b5f6 !important",
    marginRight: "0.4rem !important",
    paddingLeft: "3rem !important",
    paddingRight: "3rem !important",
    fontSize: "0.8rem !important",
    colors: "#fff !important",
    borderRadius: "21px !important",
  },
  cancelButton: {
    width: "6rem !important",
    height: "2rem !important",
    borderRadius: "21px !important",
    color: "#000 !important",
    marginLeft: "2rem !important",
    backgroundColor: "#fff !important",
    paddingLeft: "3rem !important",
    paddingRight: "3rem !important",
    fontSize: "0.8rem !important",
    border: "1px solid #64b5f6 !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1rem !important",
    },
  },
  EditProfileDiv: {
    backgroundColor: "#C4C4C4",

    fontfamily: "Roboto",
    fontWeight: "400",

    fontSize: "0.7rem",
    paddingTop: "0.2rem",
    paddingLeft: "0.5rem",
    paddingBottom: "0.2rem",
    paddingRight: "0.5rem",
    marginLeft: "7rem",
    marginTop: "0.2rem",
    display: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#51DBEE",
      color: "#fff",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const EditPopUp = ({ profileDataFromDB, updateOnDb }) => {
  const classes = useStyle();

  const [openMsg, setopenMsg] = useState(false);
  const handleCloseMsg = () => {
    setopenMsg(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      adminName: profileDataFromDB.Name,
      dateOfBirth: profileDataFromDB.DateOfBirth,
      email: profileDataFromDB.Email,
      phone: profileDataFromDB.Phone,
    },
    validationSchema: Yup.object({
      adminName: Yup.string().min(2, "Enter more than 1 character"),

      nickName: Yup.string().min(2, "Enter more than 1 character"),

      dateOfBirth: Yup.string(),

      email: Yup.string().email("Invalid Email Format !"),

      phone: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Invalid Phone !"
      ),
    }),
    onSubmit: (values) => {
      console.log("hello");
      updateOnDb(values);
    },
  });

  const [open, setopen] = useState(false);

  const handleClickOpen = () => {
    setopen(true);
  };
  const handleClose = (e) => {
    setopen(false);
  };

  return (
    <>
      <div className={classes.EditProfileDiv} onClick={handleClickOpen}>
        <BsFillPencilFill />
        <span>Edit Profile</span>
      </div>

      <StyledDialog
        style={{ backdropFilter: "blur(5px)" }}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: { borderRadius: "10px" },
        }}
      >
        <DialogContent className={classes.DialogContent}>
          <div className={classes.DialogContentMainDiv}>
            <span className={classes.DialogContentTitle}>
              Edit Profile Details
            </span>
            <Icon
              icon="mdi:card-account-details"
              className={classes.infoIcon}
            />
            <input
              type="text"
              name="title"
              className={classes.inputField}
              placeholder="Name"
              {...formik.getFieldProps("adminName")}
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.2rem",
              }}
            >
              &nbsp; {formik.touched.adminName ? formik.errors.adminName : ""}{" "}
            </span>
            <BsFillCalendarDateFill className={classes.dateIcon} />
            <input
              type="text"
              name="title"
              className={classes.inputField}
              placeholder="DOB"
              {...formik.getFieldProps("dateOfBirth")}
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.2rem",
              }}
            >
              &nbsp;{" "}
              {formik.touched.dateOfBirth ? formik.errors.dateOfBirth : ""}{" "}
            </span>
            <MdContactMail className={classes.emailIcon} />
            <input
              type="text"
              name="title"
              className={classes.inputField}
              placeholder="Email"
              {...formik.getFieldProps("email")}
              disabled
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.2rem",
              }}
            >
              &nbsp; {formik.touched.email ? formik.errors.email : ""}{" "}
            </span>
            <MdContactPhone className={classes.phoneIcon} />
            <input
              type="text"
              className={classes.inputField}
              placeholder="Phone No"
              {...formik.getFieldProps("phone")}
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.4rem",
              }}
            >
              &nbsp; {formik.touched.phone ? formik.errors.phone : ""}{" "}
            </span>

            <div className={classes.buttonDiv}>
              <Button
                className={classes.addButton}
                style={{}}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Save
              </Button>
              <Button
                className={classes.cancelButton}
                style={{}}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </StyledDialog>
      <SignupMessagePopup open={openMsg} handleCloseMsg={handleCloseMsg} />
    </>
  );
};

export default EditPopUp;
