import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  inputDiv: {
    display: "flex",
    justifyContent: "center",
  },
  inputField: {
    marginRight: "0.5rem",
    borderTopStyle: "hidden",
    borderRightStyle: "hidden",
    borderLeftStyle: "hidden",
    fontSize: "1.3rem",
    paddingLeft: "1rem",
    paddingRight: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    marginTop: "1rem",
    width: "5%",
    border: "1px 0px 1px 1px solid white",

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

const VerificationCode = (props) => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      first: "",
    },
    validationSchema: Yup.object({
      first: Yup.string()
        .matches(/^\d+$/, "The field should have digits only")
        .required("Email Required !"),
      second: Yup.string()
        .matches(/^\d+$/, "The field should have digits only")

        .required("Email Required !"),
      third: Yup.string()
        .matches(/^\d+$/, "The field should have digits only")

        .required("Email Required !"),
      forth: Yup.string()
        .matches(/^\d+$/, "The field should have digits only")

        .required("Email Required !"),
    }),
    onSubmit: (values) => {
      props.nextStep();
    },
  });

  return (
    <>
      <span className={classes.DialogContentTitle}>Verification</span>
      <p className={classes.DialogContentSubTitle}>
        Enter the verification code we just sent you on your email addesss{" "}
      </p>
      <div className={classes.inputDiv}>
        <input
          type="text"
          maxLength="1"
          className={classes.inputField}
          {...formik.getFieldProps("first")}
        ></input>

        <input
          type="text"
          maxLength="1"
          className={classes.inputField}
          {...formik.getFieldProps("second")}
        ></input>

        <input
          type="text"
          maxLength="1"
          className={classes.inputField}
          {...formik.getFieldProps("third")}
        ></input>
        <input
          type="text"
          maxLength="1"
          className={classes.inputField}
          {...formik.getFieldProps("forth")}
        ></input>
      </div>
      <Button
        className={classes.ContinueButton}
        style={{
          backgroundColor: "#51DBEE",
          marginTop: "2.5rem",
          marginBottom: "2rem",
          borderRadius: "10rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          fontSize: "0.8rem",
        }}
        variant="contained"
        onClick={formik.handleSubmit}
      >
        Verify Code
        <IoIosArrowForward className={classes.arrowIcon} />
        <IoIosArrowForward
          className={classes.arrowIcon}
          style={{ marginLeft: "-0.8rem" }}
        />
      </Button>
    </>
  );
};

export default VerificationCode;
