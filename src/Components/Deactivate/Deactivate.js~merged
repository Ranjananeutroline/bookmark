import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MdCancel } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import SuccessConfirmation from "./SuccessConfimation/SuccessConfirmation";
import ForEmail from "./Confirmation/Confirmation";
import ForPassword from "./ForPassword/ForPassword";
import { BsPersonXFill } from "react-icons/bs";

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
  },
  DialogContentMainDiv: {
    width: "25rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  LogOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    fontSize: "1.3rem",
    color: "#614F4F",
    marginRight: "0.9rem",
  },
  logoutText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "rgba(97, 79, 79, 0.69)",
  },
}));

const Deactivate = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    step: 1,
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  // Go to next step
  const nextStep = () => {
    var step = state.step;
    setState({
      step: step + 1,
    });
  };

  // Go to prev step
  const prevStep = () => {
    var step = state.step;
    setState({
      step: step - 1,
    });
  };
  // Handle fields change
  const handleChange = (input) => (e) => {
    // setState({ [input]: e.target.value });
    console.log(state);
  };

  return (
    <div>
      <Button
        variant="text"
        className={classes.LogOut}
        style={{ textTransform: "none", marginLeft: "1rem" }}
        onClick={handleClickOpen}
      >
        <BsPersonXFill className={classes.logoutIcon} />
        <span className={classes.logoutText}> Deactive account</span>
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
          <div className={classes.DialogHeading}>
            {" "}
            <MdCancel
              className={classes.DialogCrossIcon}
              onClick={handleClose}
            />{" "}
          </div>
          <div className={classes.DialogContentMainDiv}>
            {(() => {
              switch (state.step) {
                default:
                  return <h1>User Forms not working. Enable Javascript!</h1>;
                case 1:
                  return (
                    <ForEmail
                      nextStep={nextStep}
                      handleClose={handleClose}
                      handleChange={handleChange}
                    />
                  );
                case 2:
                  return (
                    <ForPassword
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                    />
                  );
                //
                case 3:
                  return <SuccessConfirmation />;
              }
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Deactivate;
