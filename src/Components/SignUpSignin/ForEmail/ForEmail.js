import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GrMail } from "react-icons/gr";
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
  inputField: {
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
  },
}));

const ForEmail = (props) => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Format !")
        .required("Email Required !"),
    }),
    onSubmit: (values) => {
      props.nextStep();
    },
  });

  return (
    <>
      <p className={classes.DialogContentTitle}>Grab It For Free</p>
      <GrMail className={classes.mailIcon} />
      <input
        type="text"
        name="email"
        className={classes.inputField}
        placeholder="Your Email"
        {...formik.getFieldProps("email")}
        // onChange={props.handleChange("email")}
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
        Continue
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

export default ForEmail;
