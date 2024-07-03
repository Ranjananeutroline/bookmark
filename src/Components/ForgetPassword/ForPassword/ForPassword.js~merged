import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaUserLock } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyle = makeStyles((theme) => ({
  DialogContentTitle: {
    color: "#738097",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    marginTop: "1rem",
  },
  PasswordIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 130,
  },
  ConfirmPasswordIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 190,
  },
  inputField: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    width: "70%",
    border: "1px solid white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
}));

const ForPassword = (props) => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
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
      props.nextStep();
    },
  });

  return (
    <>
      <span className={classes.DialogContentTitle}>New Password</span>
      <p className={classes.DialogContentSubTitle}>Enter the new password</p>
      <FaUserLock className={classes.PasswordIcon} />
      <input
        type="text"
        name="email"
        className={classes.inputField}
        placeholder="New Password"
        {...formik.getFieldProps("password")}
      ></input>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#ff3333",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        &nbsp; {formik.touched.password ? formik.errors.password : ""}{" "}
      </span>
      <FaUserLock className={classes.ConfirmPasswordIcon} />
      <input
        type="text"
        name="email"
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
        {formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}{" "}
      </span>
      <Button
        className={classes.ContinueButton}
        style={{
          backgroundColor: "#51DBEE",
          marginTop: "0.8rem",
          marginBottom: "1rem",
          borderRadius: "10rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          fontSize: "0.8rem",
        }}
        variant="contained"
        onClick={formik.handleSubmit}
      >
        Confirm
      </Button>
    </>
  );
};

export default ForPassword;
