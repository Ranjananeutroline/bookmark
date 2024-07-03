import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MdCancel } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

import { IoIosArrowForward } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";

import { useFormik } from "formik";
import * as Yup from "yup";

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
  },
  DialogContentMainDiv: {
    display: "flex",
    paddingLeft: "1.1rem",
  },
  ContentDiv: {
    width: "28rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ContentRightDiv: {
    width: "15rem",
    paddingTop: "2.5rem",
  },
  DialogContentTitle: {
    color: "#738097",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    marginBottom: "1.5rem",
  },
  inputField: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",

    width: "70%",
    border: "1px solid white",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.15)",
    "&:focus": {
      outline: "none",
    },
  },
  DialogContentStatement: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
  },
  ContentRightTitle: {
    fontFamily: "Roboto",
    color: "#849A9A",
    fontSize: "0.9rem",
  },
  ContentRightList: {
    fontFamily: "Roboto",
    color: "#849A9A",
    marginBottom: "1rem",
    fontSize: "0.9rem",
  },
  LogOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    fontSize: "1.3rem",
    color: "#614F4F",
    marginRight: "0.9rem",
  },
  logoutText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "rgba(97, 79, 79, 0.69)",
  },
}));

const ChangePassword = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required("Password Required !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Invalid Password !"
        ),
      newPassword: Yup.string()
        .required("Password Required !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Invalid Password !"
        ),
      confirmPassword: Yup.string()
        .required("Password Required !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Invalid Password !"
        ),
    }),
    onSubmit: (values) => {
      // props.nextStep();
    },
  });

  return (
    <div>
      <Button
        variant="text"
        className={classes.LogOut}
        style={{ textTransform: "none", marginLeft: "1rem" }}
        onClick={handleClickOpen}
      >
        <FaUserLock className={classes.logoutIcon} />
        <span className={classes.logoutText}> Change Password</span>
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
          <div className={classes.DialogHeading}>
            {" "}
            <MdCancel
              className={classes.DialogCrossIcon}
              onClick={handleClose}
            />{" "}
          </div>
          <div className={classes.DialogContentMainDiv}>
            <div className={classes.ContentDiv}>
              <span className={classes.DialogContentTitle}>
                Change Password
              </span>
              <input
                type="password"
                name="currentPassword"
                className={classes.inputField}
                placeholder="Current Password"
                placeholderTextColor="green"
                {...formik.getFieldProps("currentPassword")}
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
                {formik.touched.currentPassword
                  ? formik.errors.currentPassword
                  : ""}{" "}
              </span>
              <input
                type="password"
                name="newPassword"
                className={classes.inputField}
                placeholder="New Password"
                {...formik.getFieldProps("newPassword")}
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
                {formik.touched.newPassword ? formik.errors.newPassword : ""}{" "}
              </span>
              <input
                type="password"
                name="confirmPassword"
                className={classes.inputField}
                placeholder="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
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
                {formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}{" "}
              </span>
              <Button
                className={classes.ContinueButton}
                style={{
                  backgroundColor: "#51DBEE",

                  borderRadius: "10rem",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                  fontSize: "0.8rem",
                  textTransform: "none",
                }}
                variant="contained"
              >
                Confirm
                <IoIosArrowForward className={classes.arrowIcon} />
                <IoIosArrowForward
                  className={classes.arrowIcon}
                  style={{ marginLeft: "-1rem" }}
                />
              </Button>
              <p className={classes.DialogContentStatement}>
                No String attached. No credit card required.
              </p>
            </div>
            <div className={classes.ContentRightDiv}>
              <p className={classes.ContentRightTitle}>
                {" "}
                Password most Contain
              </p>
              <li className={classes.ContentRightList}>
                At least 6 characters
              </li>
              <li className={classes.ContentRightList}>
                At least 1 upper case letter (A- Z)
              </li>
              <li className={classes.ContentRightList}>
                At least 1 lower case letter (a-z)
              </li>
              <li className={classes.ContentRightList}>
                as least 1 number(0-9)
              </li>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangePassword;
