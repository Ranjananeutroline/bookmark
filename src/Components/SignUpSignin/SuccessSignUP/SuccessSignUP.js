import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GiConfirmed } from "react-icons/gi";
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
    // marginTop: "2rem",
  },
  confirmIcon: {
    fontSize: "6rem",
    color: "#2CD283",
  },
}));

const SuccessSignUP = (props) => {
  const classes = useStyle();

  return (
    <>
      <p className={classes.DialogContentTitle}>Confirm Details</p>
      <GiConfirmed className={classes.confirmIcon} />
      <p className={classes.DialogContentStatement}>
        Thank you for your submission!
      </p>
      <p className={classes.DialogContentHaveAccount}>
        You will get an email with further instructions{" "}
      </p>
    </>
  );
};

export default SuccessSignUP;
