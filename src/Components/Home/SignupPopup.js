import React, { useState } from "react";
import styled from "styled-components";
import GoogleSignUp from "../GoogleLogin/GoogleSignUp";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import FacebookLogins from "../FacebookLogin/FacebookSignUp";
import { Button } from "@mui/material";
import FacebookSignUP from "../FacebookLogin/FacebookSignUp";
import FaceBookLogins from "../FacebookLogin/FaceBookLogins";
import Googlelogin from "../GoogleLogin/GoogleLogin";

const SignupContainer = styled.div`
  position: fixed;
  height: 17rem;
  width: 17.5rem;
  top: 0;
  z-index: 99999;
  transition: 0.5s ease-in;
  padding: 0.5rem;

  display: flex;
  justify-content: center;

  right: 0;
  border-radius: 1rem;
`;

const SigUpCreateAccout = styled.div`
  background-color: #eff3f6;
  border: 1px solid #dfbaba;
  border-radius: 10px;
  padding: 0rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  text-align: left;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  
  .btn {
    // background-color:#466FFB;
    background-color:#1D9BF0;
    color: #fff;
    width: 8rem;
    height: 2rem;
    border: 1px solid #ecdfdf;
    border-radius: 18px;
    // margin-top: 0.8rem;
    margin-top: 0.3rem;
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 0.3rem;
    font-size: 0.8rem;
    text-transform: capitalize;

    :hover {
      // background-color: #1d9bf0;
      background-color:#1D9BF0;
      box-shadow: rgba(0, 0, 0, 0.1) 1px  1px 6px 2px;
    }

  }

  .signInCreateAccountDiv {
   
   margin-bottom:1.3rem;
   
  }

  .signUpCreateAccountDiv {
  //  margin-top:0.7rem;
    margin-bottom:2.4rem;
   
    
   }
  .signupCreateAccoutInnerDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
   
  }
  .signinCreateAccoutInnerDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:-1.5rem;
 
   
  }
  .SigInTitle {
    font-weight: bold;
    text-align: center;
    font-size: 1rem;
  }

  
`;
const TermsAndPolicies = styled.div`
  margin-bottom: 0.1rem;

  padding: 0rem 0rem 0.8rem 0rem;
  display: flex;
  gap: 2rem;
  position: absolute;
  bottom: 0;

  .textTermsAndPolicies {
    cursor: pointer;
    color: black;
    font-size: 0.85rem;
  }
  .textTermsAndPolicies:hover {
    color: #64b5f6;
  }
`;

const CloseIcon = styled(IoMdClose)`
  color: #000;
  font-size: 1rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
  outline: none;
`;

function SignupPopup({ popupOpen, handlePopup }) {
  const history = useHistory();
  const [change, setChange] = useState(true);

  const handleClick = () => {
    setChange(!change);
  };
  return (
    <>
      {popupOpen ? (
        <SignupContainer>
          <Icon onClick={handlePopup}>
            <CloseIcon
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "white" }
                  : { color: "" }
              }
            />
          </Icon>
          {change ? (
            <SigUpCreateAccout
              style={
                change
                  ? { backgroundColor: "#fffafa" }
                  : { backgroundColor: "green" }
              }
            >
              <div className="signupCreateAccoutInnerDiv">
                <span
                  className="SigInTitle"
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Create an account
                </span>
                <div className="signInCreateAccountDiv">
                  <GoogleSignUp />
                  <FacebookSignUP />
                </div>

                <span
                  style={{
                    marginTop: "0.3rem",
                    fontSize: "0.77rem",
                    color: "black",
                  }}
                >
                  Already a member?&nbsp;
                </span>
                <span style={{  color: "#70a7e5", cursor: "pointer" }}>
                  <Button className="btn" onClick={handleClick}>
                    Login
                  </Button>
                </span>
              </div>
            </SigUpCreateAccout>
          ) : (
            <SigUpCreateAccout change={change}>
              <div className="signinCreateAccoutInnerDiv">
                <span
                  className="SigInTitle"
                  style={
                    localStorage.getItem("DarkMode") === "true"
                      ? { color: "black" }
                      : { color: "" }
                  }
                >
                  Login an account
                </span>
                <div className="signUpCreateAccountDiv">
                  <Googlelogin
                    isHover="true"
                    title="Sign in with Google"
                    style={{
                      backgroundColor: "white",
                      width: "15rem",
                      height: "2rem",
                      border: "1px solid #ecdfdf",
                      borderRadius: "15px",
                      marginTop: "0.8rem",
                      display: "flex",
                      gap: "0.8rem",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      marginLeft: "0.3rem",
                    }}
                    googleImg={<FcGoogle style={{ fontSize: "1rem" }} />}
                  />

                  <FaceBookLogins />
                </div>

<div>
                <span
                  style={{
                    // marginTop: "1.3rem",
                    fontSize: "0.85rem",
                    color: "black",
                    
                  }}
                >
                  Don't have an account?
                </span>
                <span style={{ marginLeft:"0.4rem" ,fontSize: "0.85rem",color: "#0095F7", cursor: "pointer",fontWeight:500 }} onClick={handleClick}>
                  Sign Up
                  {/* <Button className="btn" onClick={handleClick}>
                    Sign Up
                  </Button> */}
                 
                </span>
                </div>
              </div>
            </SigUpCreateAccout>
          )}

          <TermsAndPolicies>
            <span
              className="textTermsAndPolicies"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "white" }
                  : { color: "" }
              }
              onClick={() => history.push("/info/about")}
            >
              About
            </span>

            <span
              className="textTermsAndPolicies"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "white" }
                  : { color: "" }
              }
              onClick={() => history.push("/info/help")}
            >
              {" "}
              Help
            </span>

            <span
              className="textTermsAndPolicies"
              style={
                localStorage.getItem("DarkMode") === "true"
                  ? { color: "white" }
                  : { color: "" }
              }
              onClick={() => history.push("/info/privacy")}
            >
              {" "}
              Terms & Privacy
            </span>
          </TermsAndPolicies>
        </SignupContainer>
      ) : null}
    </>
  );
}

export default SignupPopup;
