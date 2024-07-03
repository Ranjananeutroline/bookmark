import React, { useState } from "react";

import theme1 from "../../Assets/abc.jpg";
import theme2 from "../../Assets/b.jpg";
import theme3 from "../../Assets/d.jpg";
import theme4 from "../../Assets/c.jpg";
import theme5 from "../../Assets/e.jpg";
import loginimg from "../../Assets/login.png";
import TextField from "@mui/material/TextField";
import { HiOutlineMail } from "react-icons/hi";
import { BsUnlock } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../../api/api";
import styled from "styled-components";
import ForgetPassword from "../ForgetPasswordSignUp/ForgetPassword";
import SignUPForm from "../SignUpSignin/SignUPForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

const SignInMainContainer = styled.div`
  height: 100vh;
  //   background-image: url("p");
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignInDiv = styled.div`
  background-color: #1f1a30;
  color: white;
  border-radius: 15px;
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const ImageDiv = styled.div`
  .image {
    height: 10rem;
  }
`;
const LogInDiv = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  margin-top: 1.5rem;
  .loginTitle {
    font-size: 1.5rem;
    text-align: left;
  }
  .loginSubTitle {
    font-size: 0.85rem;
    color: #575267;
    margin-top: 0.5rem;
  }

  .emailTextFieldDiv {
    width: 17rem;
    background-color: #39304d;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .passwordTextFieldDiv {
    background-color: #39304d;
    border-radius: 10px;
    // margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .buttonDiv {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .forgetPassword {
    margin-top: 0.3rem;
  }
  .signUp {
    display: flex;
    justify-content: center;
    color: #4d485b;
    margin-top: 3rem;
    font-size: 0.85rem;
  }
`;
const SignIn = () => {
  const [theme] = useState(localStorage.getItem("Theme"));

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password Required !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Invalid Password !"
        ),
      email: Yup.string()
        .email("Invalid Email Format !")
        .required("Email Required !"),
    }),
    onSubmit: (values) => {
      sendToBackend(values.email, values.password);
    },
  });

  const [login, setLogin] = useState(false);

  const sendToBackend = (email, password) => {
    axios
      .post(api+"/user/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
       
        if (response.data) {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
        
          console.log("Login Successfully !");
          setLogin(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (login) {
    return <Redirect to="/" />;
  }

  return (
    <SignInMainContainer
      style={
        localStorage.getItem("DarkMode") === "true"
          ? { backgroundColor: "black" }
          : localStorage.getItem("BackgroundImage") === "theme1" &&
            theme === "true"
          ? {
              backgroundImage: `url(${theme1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : localStorage.getItem("BackgroundImage") === "theme2" &&
            theme === "true"
          ? {
              backgroundImage: `url(${theme2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : localStorage.getItem("BackgroundImage") === "theme3" &&
            theme === "true"
          ? {
              backgroundImage: `url(${theme3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              
            }
          : localStorage.getItem("BackgroundImage") === "theme4" &&
            theme === "true"
          ? {
              backgroundImage: `url(${theme4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : localStorage.getItem("BackgroundImage") === "theme5" &&
            theme === "true"
          ? {
              backgroundImage: `url(${theme5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : { backgroundColor: "" }
      }
    >
      <SignInDiv>
        <ImageDiv>
          <img className="image" src={loginimg} alt="login-img" />
        </ImageDiv>
        <LogInDiv>
          <span className="loginTitle">Login</span>
          <span className="loginSubTitle">Please sign in to continue</span>
          <div className="emailTextFieldDiv">
            <TextField
              variant="standard"
              required
              fullWidth
              autoComplete="email"
              autoFocus
              placeholder="Email"
              {...formik.getFieldProps("email")}
              InputProps={{
                style: { fontFamily: "Arial", color: "white" },
                startAdornment: (
                  <HiOutlineMail
                    style={{ marginRight: "0.5rem", color: "#938ea4" }}
                  />
                ),
                disableUnderline: true,
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.8rem",
              color: "#ff3333",
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
            }}
          >
            &nbsp; {formik.touched.email ? formik.errors.email : ""}{" "}
          </span>
          <div className="passwordTextFieldDiv">
            <TextField
              variant="standard"
              type="password"
            
              required
              fullWidth
              autoComplete="password"
              autoFocus
              placeholder="Password"
              {...formik.getFieldProps("password")}
              InputProps={{
                style: { fontFamily: "Arial", color: "white" },
                startAdornment: (
                  <BsUnlock
                    style={{ marginRight: "0.5rem", color: "#938ea4" }}
                  />
                ),
                disableUnderline: true,
              }}
            />
          </div>
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
          <div className="buttonDiv">
            <Button
              style={{
                borderRadius: "20px",
                width: "10rem",
                backgroundColor: "#0AF7E4",
                color: "black",
              }}
              variant="contained"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>
          </div>

          <span className="forgetPassword">
            {" "}
            <ForgetPassword />{" "}
          </span>

          <span className="signUp">
            Dont have an account? <SignUPForm />{" "}
          </span>
        </LogInDiv>
      </SignInDiv>
    </SignInMainContainer>
  );
};

export default SignIn;
