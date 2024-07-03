import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/core/styles";

import { RiLogoutCircleRFill } from "react-icons/ri";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
  DialogHeading: {},
  DialogCrossIcon: {
    float: "right",
    fontSize: "1.5rem",
    color: "#738097",
    marginTop: "0.5rem",
    marginRight: "-1rem",
  },
  DialogContentMainDiv: {
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  DialogContentTitle: {
    color: "#738097",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    marginTop: "1rem",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    marginBottom: "0.5rem",

    textAlign: "center",
  },
  mailIcon: {
    color: "#96A9B2",
    fontSize: "1.3rem",
    position: "absolute",
    left: 75,
    top: 163,
  },

  DialogContentSubTitle: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",
    width: "85%",
    textAlign: "left",
    marginTop: "1rem",
  },
  RadioDIv: {
    display: "flex",
  },

  RadioInfo: {
    color: "#665F5F",
    fontWeight: "500",
    width: "75%",
    fontSize: "0.8rem",
    fontFamily: "Roboto",
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },
  LogOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    fontSize: "1.3rem",
    color: "#614F4F",
    marginRight: "0.3rem",
  },
  logoutText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "rgba(97, 79, 79, 0.69)",
    // marginLeft: "0.5rem",
  },
}));

const Logout = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.setItem("GoogleId", "");
    window.location.reload(false);
  };

  return (
    <div>
      <Button
        variant="text"
        className={classes.LogOut}
        style={{ textTransform: "none", marginTop: "1rem" }}
        onClick={handleClickOpen}
      >
        <RiLogoutCircleRFill className={classes.logoutIcon} />
        <span className={classes.logoutText}> Log Out</span>
      </Button>
      <Dialog
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
          <div className={classes.DialogHeading}></div>
          <div className={classes.DialogContentMainDiv}>
            <span className={classes.DialogContentTitle}>
              Are you sure you want to logout?{" "}
            </span>

            <div className={classes.buttonDiv}>
              <Button
                style={{
                  width: "6rem",
                  height: "2rem",
                  backgroundColor: "#64b5f6",
                  // marginRight: "0.1rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                  fontSize: "0.8rem",
                  colors: "#fff",
                  borderRadius: "21px",
                }}
                variant="contained"
                onClick={logout}
              >
                LogOut
              </Button>
              <Button
                style={{
                  width: "6rem",
                  height: "2rem",
                  borderRadius: "21px",
                  color: "#000",
                  marginLeft: "1rem",
                  backgroundColor: "#fff",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                  fontSize: "0.8rem",
                  border: "1px solid #64b5f6",
                }}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Logout;
