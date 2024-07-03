import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { api } from "../../api/api";
const Root = styled.div`
.signupButton:hover
{
  background-color:#1877F2 !important;

  // background-color: #f5f5f0 !important;
}
`;
const FaceBookLogins = () => {
  const responseFacebook = async (response) => {
    axios
      .post(api+"/profile/login", {
        GoogleId: response.id,
        Name: response.name,
        ImageUrl: response.picture.data.url,
        Email: response.email,
        Country: localStorage.getItem("Country"),
        CreatedAt: "",
        UpdatedAt: "",
      })
      .then((res) => {
        localStorage.setItem("GoogleId", res.data.data[0].GoogleId);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

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
              // backgroundColor: "#3E76F8",
              backgroundColor:"#1877F2",
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
              // color: "#0E87D8"
              marginLeft: "0.3rem",
            }}
          >
            <FaFacebook style={{ fontSize: "1rem", color:"#fff"}} />
            <span
              style={{
                // color: "#70a7e5",
                fontSize: "0.85",
                letterSpacing: "0.02rem",
                color:"#fff",
              }}
            >
              Sign in with Facebook
            </span>
          </button>
        )}
      />
    </Root>
  );
};

export default FaceBookLogins;
