import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { MdOutlineRefresh } from "react-icons/md";
import styled from "styled-components";
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
    cursor: "pointer",
  },
  DialogContentMainDiv: {
    textAlign: "center",

    width: "22rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
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

  DialogContentSubTitle: {
    color: "#C2CECE",
    fontSize: "0.8rem",
    fontfamily: "Roboto",

    textAlign: "left",
    marginTop: "1rem",
  },
  RadioDIv: {
    display: "flex",
    flexDirection: "column",
    color: "#665F5F",
    fontWeight: "500",

    fontSize: "0.8rem",
    fontFamily: "Roboto",
    marginTop: "1rem",
    marginBottom: "1rem",
  },

  RadioInfo: {},
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  LogOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "2.1rem",
    fontSize: "0.85rem",
    // color: "#000",
    textTransform: "none",
    // backgroundColor: "#e6e6e6",
    width: "10rem",
    border: "1px solid #ecdfdf",
    borderRadius: "15px",
    marginTop: "0.25rem",
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
  },
}));

const Root = styled.div`
  .LogoutButton {
    display: flex;
    justifycontent: center;
    alignitems: center;
    height: 2.1rem;

    fontsize: 0.85rem;
    color: #000;
    text-transform: none;
    backgroundcolor: #e6e6e6;
    width: 10rem;
    border: 1px solid #ecdfdf;
    border-radius: 15px;
    margintop: 0.25rem;
    :hover {
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
        0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    },
  }

`;

const Resetting = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetSettingHandler = () => {
    localStorage.setItem("DarkMode", false);
    localStorage.setItem("BackgroundImage", false);
    localStorage.setItem("Weather", true);
    localStorage.setItem("Theme", false);
    localStorage.setItem("CurrentLocation", true);
    localStorage.setItem("Notes", true);
    localStorage.setItem("BookMarks", true);
    localStorage.setItem("ToDoList", true);
    localStorage.setItem("RescentApp", true);
    localStorage.setItem("StickyNote", true);

    handleClose();
    window.location.reload(false);
  };

  return (
    <Root>
      <div>
        <Button
          // variant="text"
          // className={classes.LogOut}
          className="LogoutButton"
          // style={{}}
          onClick={handleClickOpen}
        >
          Reset Settings
          <MdOutlineRefresh
            style={{ marginLeft: "0.3rem", fontSize: "0.95rem", color: "#000" }}
          />
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
                Are you sure you want to reset settings?{" "}
              </span>

              <div className={classes.RadioDIv}>
                <span className={classes.RadioInfo}>
                  Clear personalized setting and other infomation
                </span>
                <span>on this device</span>
              </div>
              <div className={classes.buttonDiv}>
                <Button
                  style={{
                    width: "6rem",
                    height: "2rem",
                    backgroundColor: "#64b5f6",
                    marginRight: "0.4rem",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                    fontSize: "0.8rem",
                    colors: "#fff",
                    borderRadius: "21px",
                  }}
                  variant="contained"
                  onClick={resetSettingHandler}
                >
                  Reset
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
    </Root>
  );
};

export default Resetting;
