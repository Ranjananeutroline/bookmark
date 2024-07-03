import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { api } from "../../api/api";
import {gapi} from 'gapi-script'
const MsgTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
`;
const CancelIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  color: #464360;
  padding: 0.5rem 0.8rem 0.5rem 0rem;
  cursor: pointer;
`;
const MsgDescription = styled.div`
  text-align: center;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0.2rem;
`;
const SignupButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  .signup {
    text-transform: none;
    background: #1a9ffc;
    border-radius: 20px;
    color: #fff;
    padding: 0.2rem 1.7rem 0.2rem 1.7rem;

    :hover {
      background: #1a9ffc;
    }
  }
  .maybe {
    text-transform: none;
    margin-left: 1.5rem;
    background: #ffffff;
    border-radius: 20px;
    color: #94959d;
    padding: 0.2rem 1.2rem 0.2rem 1.2rem;
    :hover {
      background: #ffffff;
    }
  }
`;
const MsgContent = styled.div`
  font-size: 1rem;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 1rem 0.5rem;
  justify-content: space-around;
  height: 15rem;
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

const SignupMessagePopup = ({ open, handleCloseMsg }) => {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"1066914610299-db7ocu1k9frjvl2a768qvjmaoo08ohom.apps.googleusercontent.com",
        scope:""
      })
    };
    gapi.load('client:auth2',start)
  })
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
    console.log(loginDetails.Name);
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
      .then(() => {
        localStorage.setItem("GoogleId", loginDetails.GoogleId);
        setOpenDialog(false);
        setWelcomeMessagePopup(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const responseGoogle = async (response) => {
    if (response.profileObj.googleId) {
      setOpenDialog(true);
    }

    setLoginDetails({
      GoogleId: response.profileObj.googleId,
      Name: response.profileObj.name,
      ImageUrl: response.profileObj.imageUrl,
      Email: response.profileObj.email,
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

  return (
    <div>
      <Dialog
        BackdropProps={{ style: { background: "transparent" } }}
        open={open}
        onClose={handleCloseMsg}
        PaperProps={{
          style: {
            borderRadius: "15px",
            background: "#F3F3F3",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          },
        }}
      >
        <CancelIcon onClick={handleCloseMsg}>
          <IoMdClose />
        </CancelIcon>

        <MsgTitle>Don't miss out</MsgTitle>
        <DialogContent>
          <MsgDescription>
            Please sign in to save your changes and <br />
            to enable all the features
          </MsgDescription>
        </DialogContent>
        <SignupButton>
          <GoogleLogin
            // clientId="380623597526-25ufr1kdmn515n13i7k7ka1o50m3tilp.apps.googleusercontent.com"
             clientId="1066914610299-db7ocu1k9frjvl2a768qvjmaoo08ohom.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} className="signup">
                Sign up
              </Button>
            )}
          />

          <Button className="maybe" onClick={handleCloseMsg}>
            Maybe,later
          </Button>
        </SignupButton>
      </Dialog>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">
          <div className={classes.DialogHeader}>
            <FcGoogle style={{ marginRight: "0.4rem" }} />
            <span>{"Sign in with Google"}</span>
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
            width: "100rem",
            height: "65vh",
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
            <button className="btn"> Get Started</button>
          </Content>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignupMessagePopup;
