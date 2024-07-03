import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

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
    marginTop: "2rem",
  },

  buttonDiv: {},
}));

const Confirmation = (props) => {
  const classes = useStyle();

  return (
    <>
      <span className={classes.DialogContentTitle}>
        Are you sure you want to Deactivate Account?
      </span>
      <p className={classes.DialogContentSubTitle}>
        You will permanently lose all data and profile info . After this , there
        is o turning back.
      </p>

      <div className={classes.buttonDiv}>
        <Button
          style={{
            backgroundColor: "#51DBEE",
            marginTop: "2.5rem",
            marginBottom: "2rem",
            marginRight: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            fontSize: "0.8rem",
          }}
          variant="contained"
          onClick={props.nextStep}
        >
          Continue
        </Button>
        <Button
          style={{
            backgroundColor: "#C4C4C4",
            marginTop: "2.5rem",
            marginBottom: "2rem",

            paddingLeft: "3rem",
            paddingRight: "3rem",
            fontSize: "0.8rem",
          }}
          variant="contained"
          onClick={props.handleClose}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Confirmation;
