import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { BiLink } from "react-icons/bi";
import { MdOutlineTopic } from "react-icons/md";

import styled from "styled-components";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

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
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
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
    left: 65,
    top: 142,
    [theme.breakpoints.down("xs")]: {
      left: 40,
      top: 147,
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
}));

const NewBookMark = ({
  open,
  handleClose,
  handleCloseForm,
  handleAdd,
  getBookmarFromDb,
}) => {
  const classes = useStyle();

  const handleSubmitAdd = (urlValue, titleValue) => {
    handleAdd(urlValue, titleValue);
  };
  let GoogleId = localStorage.getItem("GoogleId");

  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Maximum 15 character !")
        .required("Title Required !"),
      url: Yup.string()
        .required("Title Required !")
        .matches(
          /^(https):\/\/|[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/,
          "Invalid URL!"
        ),
    }),

    onSubmit: (values) => {
      GoogleId
        ? postDatatoDb(values.url, values.title)
        : handleSubmitAdd(values.url, values.title);

      formik.resetForm();
    },
  });

  const postDatatoDb = (Url, Title) => {
    console.log(GoogleId + " " + Url + " " + Title);
    if (GoogleId) {
      axios
        .post("https://project101-backend.uc.r.appspot.com/favoriteBookmark", {
          GoogleId: GoogleId,
          CategoryId: 1,
          Title: Title,
          Url: Url,
          IsFavorite: "false",
          IsBookMark: "true",
        })
        .then(() => {
          console.log("Data inserted");
        })
        .catch((err) => {
          console.log(err);
        });
      getBookmarFromDb();
    }
  };

  return (
    <>
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
            <CloseIcon
              style={{
                right: 0,
                position: "absolute",
                top: 0,
                fontSize: "1.2rem",
                margin: "1rem",
                cursor: "pointer",
                color: "red",
              }}
              onClick={handleCloseForm}
            />
            <span className={classes.DialogContentTitle}>Add New Bookmark</span>
            <BiLink className={classes.titleIcon} />
            <input
              type="text"
              name="title"
              className={classes.inputField}
              placeholder="URL"
              {...formik.getFieldProps("url")}
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.2rem",
              }}
            >
              &nbsp; {formik.touched.url ? formik.errors.url : ""}{" "}
            </span>
            <MdOutlineTopic className={classes.urlIcon} />
            <input
              type="text"
              className={classes.inputField}
              placeholder="Title"
              {...formik.getFieldProps("title")}
            ></input>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#ff3333",
                marginTop: "0.2rem",
                marginBottom: "0.4rem",
              }}
            >
              &nbsp; {formik.touched.title ? formik.errors.title : ""}{" "}
            </span>

            <div className={classes.buttonDiv}>
              <Button
                className={classes.addButton}
                style={{}}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Add
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
    </>
  );
};

export default NewBookMark;
