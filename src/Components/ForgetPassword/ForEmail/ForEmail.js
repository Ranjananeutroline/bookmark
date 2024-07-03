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
    marginTop: "1rem",
  },
  mailIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 163,
  },
  inputField: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    marginTop: "1rem",
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
      <span className={classes.DialogContentTitle}>Forget Password ?</span>
      <p className={classes.DialogContentSubTitle}>
        Enter the email address associated with your account{" "}
      </p>
      <GrMail className={classes.mailIcon} />
      <input
        type="text"
        name="email"
        className={classes.inputField}
        placeholder="Your Email"
        {...formik.getFieldProps("email")}
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
          marginTop: "1.4rem",
          marginBottom: "2rem",
          borderRadius: "10rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          fontSize: "0.8rem",
        }}
        variant="contained"
        onClick={formik.handleSubmit}
      >
        Send
        <IoIosArrowForward className={classes.arrowIcon} />
        <IoIosArrowForward
          className={classes.arrowIcon}
          style={{ marginLeft: "-0.8rem" }}
        />
      </Button>
    </>
  );
};

export default ForEmail;
