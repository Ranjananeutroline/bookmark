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
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
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

  DialogContentSubTitle: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
    width: "65%",
    textAlign: "center",
  },

  buttonDiv: {},
}));

const ForPassword = (props) => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
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
      <span className={classes.DialogContentTitle}>Type your password</span>
      <p className={classes.DialogContentSubTitle}>
        Enter the password associated with your account
      </p>
      <FaUserLock className={classes.mailIcon} />
      <input
        type="password"
        className={classes.inputField}
        placeholder="Password"
        // onChange={props.handleChange("email")}
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
      <div className={classes.buttonDiv}>
        <Button
          style={{
            backgroundColor: "#51DBEE",
            marginTop: "0.9rem",
            marginBottom: "2rem",
            marginRight: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            fontSize: "0.8rem",
          }}
          variant="contained"
          onClick={formik.handleSubmit}
        >
          Confirm
        </Button>
        <Button
          style={{
            backgroundColor: "#C4C4C4",
            marginTop: "0.9rem",
            marginBottom: "2rem",

            // borderRadius: "10rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            fontSize: "0.8rem",
          }}
          variant="contained"
          onClick={props.nextStep}
        >
          Cancle
        </Button>
      </div>
    </>
  );
};

export default ForPassword;
