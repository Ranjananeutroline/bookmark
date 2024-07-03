import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MdCancel } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

import SuccessConfirmation from "./SuccessConfimation/SuccessConfirmation";
import VerificationCode from "./VerificationCode/VerificationCode";
import ForEmail from "./ForEmail/ForEmail";
import ForPassword from "./ForPassword/ForPassword";

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
}));

const ForgetPassword = () => {
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
        style={{
          height: "1rem",
          fontSize: "0.8rem",
          color: "#8c8c8c",
          textTransform: "none",
        }}
        onClick={handleClickOpen}
      >
        Forget Password
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
                    <ForEmail nextStep={nextStep} handleChange={handleChange} />
                  );
                case 2:
                  return (
                    <VerificationCode
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                    />
                  );
                case 3:
                  return (
                    <ForPassword
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                    />
                  );
                //
                case 4:
                  return <SuccessConfirmation />;
              }
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ForgetPassword;
