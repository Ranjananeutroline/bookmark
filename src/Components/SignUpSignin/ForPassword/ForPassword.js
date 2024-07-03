import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaUserLock } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyle = makeStyles((theme) => ({
  DialogContentTitle: {
    color: "#738097",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
  },
  mailIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 120,
  },
  mailIconConfirmPassword: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 178,
  },
  inputFieldPassword: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    width: "70%",
    border: "1px solid white",
    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:focus": {
      outline: "none",
      //   backgroundColor: "red",
    },
  },
  inputFieldConfirmPassword: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    width: "70%",
    border: "1px solid white",
    // marginTop: "1rem",
    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:focus": {
      outline: "none",
      //   backgroundColor: "red",
    },
  },
  ContinueButton: {
    backgroundColor: "#51DBEE",
    // fontSize: "1.5rem",
  },
  arrowIcon: {
    fontSize: "1.1rem",
  },
  DialogContentStatement: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
  },
  DialogContentHaveAccount: {
    color: "#758989",
    fontfamily: "Roboto",
    // marginTop: "2rem",
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
      <p className={classes.DialogContentTitle}>Sign up For Free</p>
      <FaUserLock className={classes.mailIcon} />
      <input
        type="password"
        className={classes.inputFieldPassword}
        placeholder="Password"
        // onChange={props.handleChange("password")}
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
      <FaUserLock className={classes.mailIconConfirmPassword} />

      <input
        type="Password"
        className={classes.inputFieldConfirmPassword}
        placeholder="Confirm Password"
        // onChange={props.handleChange("confirmPassword")}
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
          // marginTop: "2rem",
          borderRadius: "10rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          fontSize: "0.8rem",
        }}
        variant="contained"
        onClick={formik.handleSubmit}
      >
        Sign Up
        <IoIosArrowForward className={classes.arrowIcon} />
        <IoIosArrowForward
          className={classes.arrowIcon}
          style={{ marginLeft: "-0.8rem" }}
        />
      </Button>
      <p className={classes.DialogContentStatement}>
        No String attached. No credit card required.
      </p>
      <p className={classes.DialogContentHaveAccount}>
        Already have an account ?{" "}
      </p>
    </>
  );
};

export default ForPassword;
