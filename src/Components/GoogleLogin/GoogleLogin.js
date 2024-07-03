import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { api } from "../../api/api";
import {gapi} from 'gapi-script'
const Root = styled.div`
  .Google-button {
   
    margin-top: 0.3rem;
    box-shadow:none; */}
  
  }
  .gooleLoginButton1:hover{
    background: #EFF3F6 !important;
    border: 1px solid rgb(25, 118, 210) !important;
    
  }
  .gooleLoginButton2:hover{
    background-color: #f5f5f0 !important;
    filter:brightness(85%)
    
  }
`;
const Googlelogin = ({ style, title, isHover,googleImg }) => {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"1066914610299-db7ocu1k9frjvl2a768qvjmaoo08ohom.apps.googleusercontent.com",
        scope:""
      })
    };
    gapi.load('client:auth2',start)
  })
  const responseGoogle = async (response) => {
    axios
      .post(api+"/profile/login", {
        GoogleId: response.profileObj.googleId,
        Name: response.profileObj.name,
        ImageUrl: response.profileObj.imageUrl,
        Email: response.profileObj.email,
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
      <GoogleLogin
        // clientId="380623597526-tm9olf93u5l95trg60ddl085kqbrpac8.apps.googleusercontent.com"
     clientId="1066914610299-db7ocu1k9frjvl2a768qvjmaoo08ohom.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className={
              isHover === "true" ? "gooleLoginButton2" : "gooleLoginButton1"
            }
            style={style}
          >
            {/* <span style={{}}>{title}</span> */}

           {googleImg}
            <span
              style={{
                color: "#70a7e5",
                fontSize: "0.85",
                letterSpacing: "0.02em",
              }}
            >
             {title}
            </span>

          </button>
        )}
      />
    </Root>
  );
};

export default Googlelogin;
