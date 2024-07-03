import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import styled from "styled-components";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { IoMdClose } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import WelcomeMessage from "../GetStarted/WelcomeMessage";
import { api } from "../../api/api";
const MsgTitle = styled.div`
  text-align: left;
  font-size: 2rem;
  @media screen and (max-width: 490px) {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }
`;
const CancelIcon = styled.div`
  padding: 0.5rem 0rem 0rem 0rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const MsgContent = styled.div`
  font-size: 1rem;
  text-align: left;

  @media screen and (max-width: 600px) {
    text-align: justify;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 7rem 1rem;
  gap: 1.5rem;

  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem 4rem 0rem;
  }

  .btn {
    width: 6rem;
    padding: 0.5rem 0rem;
    border-radius: 20px;
    border: none;
    outline: none;
    color: white;
    background: #18a0fb;
    cursor: pointer;
  }
`;

const useStyle = makeStyles((theme) => ({
  DialogHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: "1rem",
  },
  DialogMainDiv: {
    padding: "2rem",
    fontSize: "1.4rem",
    textAlign: "center",
  },
  DialogSubText: {
    padding: "0rem 1rem 0rem 1rem",
    textAlign: "center",
  },
  ButtonDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingTop: "6rem",
  },
  buttonStyle: {
    cursor: "pointer",
  },
  textStyle: {
    color: "#1976d2",
  },
}));

const Root = styled.div`
  .Google-button {
    
    margin-top: 0.3rem;
    box-shadow:none; */}
  
  }
  
  
  .signupButton:hover {
  //  background-color: #f5f5f0 !important;
  background-color:#3E76F8!important;
 
  }
`;

const FacebookSignUP = () => {
  const classes = useStyle();

  const [loginDetails, setLoginDetails] = useState([
    {
      GoogleId: "",
      Name: "",
      ImageUrl: "",
      Email: "",
    },
  ]);

  const SignUpWithGoogle = () => {
    axios
      .post(api+"/profile/", {
        GoogleId: loginDetails.GoogleId,
        Name: loginDetails.Name,
        ImageUrl: loginDetails.ImageUrl,
        Email: loginDetails.Email,
        Country: localStorage.getItem("Country"),
        CreatedAt: "",
        UpdatedAt: "",
      })
      .then((res) => {
        localStorage.setItem("GoogleId", loginDetails.GoogleId);
        setOpenDialog(false);
        setWelcomeMessagePopup(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const responseFacebook = (response) => {
    // console.log(response);

    if (response.id) {
      setOpenDialog(true);
    }

    setLoginDetails({
      GoogleId: response.id,
      Name: response.name,
      ImageUrl: response.picture.data.url,
      Email: response.email,
    });
  };

  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(!openDialog);
  };

  const [welcomeMessagePopup, setWelcomeMessagePopup] = useState(false);
  const handleWelcomeMessagePopup = () => {
    setWelcomeMessagePopup(!welcomeMessagePopup);
  };
  const [getStartedClicked, setGetStarted] = useState(false);
  const handleGetStarted = () => {
    setGetStarted(true);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root>
      <FacebookLogin
        appId="733752994460826"
        // autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="signupButton"
            style={{
              // backgroundColor: "white",
              backgroundColor: "#3E76F8",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 5px",
              width: "15rem",
              height: "2rem",
              border: "1px solid #ecdfdf",
              borderRadius: "15px",
              marginTop: "0.4rem",
              display: "flex",
              gap: "0.6rem",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "0.3rem",
            }}
          >
            <FaFacebook style={{ fontSize: "1rem", color: "#fff" }} />
            <span
              style={{
                // color: "#70a7e5",
                color:"#fff",
                fontSize: "0.85",
                letterSpacing: "0.02rem",
              }}
            >
              Sign up with Facebook
            </span>
          </button>
        )}
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
        fullScreen={fullScreen}
      >
        <DialogTitle id="alert-dialog-title">
          <div className={classes.DialogHeader}>
            <FaFacebook style={{ marginRight: "0.4rem" }} />
            <span>{"Sign in with Facebook"}</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.DialogMainDiv}>
            Confirm you want to sign in to <br />{" "}
            <span className={classes.textStyle}>Neutroline.com</span> as{" "}
            {loginDetails.Name}
          </div>
          <div className={classes.DialogSubText}>
            To create an account, Neutroline will share your name,
            <br /> email address and profile picture with Neutroline.com.
            <br /> See Neutroline.com's{" "}
            <span className={classes.textStyle}>privacy policy</span> and{" "}
            <span className={classes.textStyle}>terms of service. </span>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.ButtonDiv}>
            <Button className={classes.buttonStyle} onClick={SignUpWithGoogle}>
              Confirm
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={handleCloseDialog}
              autoFocus
            >
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <Dialog
        BackdropProps={{ style: { background: "transparent" } }}
        open={welcomeMessagePopup}
        onClose={handleWelcomeMessagePopup}
        PaperProps={{
          style: {
            borderRadius: "20px",
            background: "#F3F3F3",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#fffafa",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 8px ",
          },
        }}
      >
        <CancelIcon
          onClick={() => {
            handleWelcomeMessagePopup();
            window.location.reload(false);
          }}
        >
          <IoMdClose />
        </CancelIcon>

        <DialogContent sx={{ padding: "0rem 1rem 0rem 1rem" }}>
          <Content>
            <MsgTitle>Welcome to Neutroline</MsgTitle>
            <MsgContent>
              Thank you for joining us. We aim to provide the best
              services.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum
            </MsgContent>
            <button className="btn" onClick={handleGetStarted}>
              {" "}
              Get Started
            </button>
          </Content>
        </DialogContent>
      </Dialog>
      <WelcomeMessage getStartedClicked={getStartedClicked} />
    </Root>
  );
};

export default FacebookSignUP;
