import React, { useState } from "react";
import {BsShare} from 'react-icons/bs'
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { BiDetail, BiHelpCircle } from "react-icons/bi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import AboutDetail from "./AboutDetail";
import HelpDetail from "./HelpDetail";
import PrivicyDetail from "./PrivicyDetail";
import { useParams } from "react-router-dom";
import { data } from "./InviteDate";
import link from "../../Assets/link.png";
import { WhatsappShareButton, LinkedinShareButton } from "react-share";
import { FaUser } from "react-icons/fa";
import Footers from "./Footers";
import Googlelogin from "../GoogleLogin/GoogleLogin";
import { useHistory } from "react-router-dom";

const Root = styled.div``;
const Container = styled.div`
  background-color: #eff3f6;
  padding: 1.5rem 10rem 1.5rem 10rem;

  @media screen and (max-width: 1500px) {
    padding: 1.5rem 7rem 1.5rem 7rem;
  }
  @media screen and (max-width: 950px) {
    padding: 1.5rem 3rem 1.5rem 3rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  align-items: center;
  color: #536c76;
  @media screen and (max-width: 1500px) {
    font-size: 1rem;
  }
  .logo {
    width: 2rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;
const LoginContainer = styled.div`
  .login {
    background-color: #d6dee4m !important;
    color: #3e595f;
    text-transform: none;
    border: 1px solid #d6dee4;
    
  }
`;
const BodyContainer = styled.div`
  height: 40vh;
  background-color: #eff3f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  .title {
    color: #3e595f;
    font-size: 2.4rem;
    font-weight: 600;
    @media screen and (max-width:1500px)
    {
      font-size: 2rem; 
    }
  }

  .subtitle {
    font-size: 1.4rem;
    color: #65909a;
    @media screen and (max-width:1500px)
    {
      font-size: 1rem; 
    }
  }
`;

export const InviteContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  
  margin-top: 0.5rem;
  .Title {
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.8rem;
    color: #3e595f;
    font-weight: 600;
    font-size: 1.1rem;
    // margin-bottom:0.3rem;
    margin-left: 1.2rem;
    @media screen and (max-width:1500px)
    {
      font-size: 0.9rem; 
    }
// box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 5px;
padding:0rem 1.2rem;

border-radius:20px ;
    .share
    {
      
      font-size:1.2rem;
      @media screen and (max-width:1500px)
    {
      font-size: 1rem; 
    }
    }
  }
  .IconsDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconName {
    font-size:0.8rem;
    color: #65909a;
    visibility: hidden;
    text-align: center;
    @media screen and (max-width:1500px)
    {
      font-size: 0.6rem; 
    }
  }
  .CopyLinkIconName {
    font-size: 0.8rem;
    color: #65909a;
    padding-top: 0.8rem;
  }
  .img {
    width: 1.8rem;
    @media screen and (max-width:1500px)
    {
      width: 1.3rem;
    }
  }
  .img-whatsapp {
    width: 1.9rem;
    @media screen and (max-width:1500px)
    {
      width: 1.5rem;
    }
  }
  .img-whatsapp: hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
  .img: hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
  .logo: hover .iconName {
    visibility: visible;
  }

  .logo {
    margin-top: 0.8rem;
    display: flex;
  
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    @media screen and (max-width:1500px)
    {
      margin-top: 0.5rem;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  @media screen and (max-width: 480px) {
    gap: 0.7rem;
  }
  @media screen and (max-width: 430px) {
    gap: 0.5rem;
  }
`;
const EachItem = styled.div`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  margin-top: -2.5rem;
  background-color: #fff;
  width: 15rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #3e595f;
  border: 1px solid #fff;
  font-size: 1.5rem;
  @media screen and (max-width: 1500px) {
    font-size: 1rem;
    width: 10rem;
  height: 5rem;
  }
  @media screen and (max-width: 600px) {
    width: 8rem;
    height: 4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 0.86rem;
  }

  &:hover {
    border: 1px solid #1d9bf0;
    color: #1d9bf0;
  }

  .icon {
    font-size: 1.3rem;
  }
`;
const ItemDetailContainer = styled.div``;
const Detail = styled.div``;

const AboutHelpTerms = () => {
  const type = useParams();
  console.log(type.type);
  const [page, setPage] = useState(type.type);

  const [copied, setCopied] = useState(false);
  const links = window.location.href;
  console.log(links);

  const copyLink = () => {
    const el = document.createElement("input");
    el.value = window.location.href;

    document.body.appendChild(el);

    el.select();

    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  const GoogleId = localStorage.getItem("GoogleId");
  const history = useHistory();

  return (
    <>
      <Root>
        <Container>
          <TopContainer>
            <LogoContainer onClick={() => history.push("/")}>
              <img src={logo} alt="" className="logo" />
              Neutroline
            </LogoContainer>
            <LoginContainer>
              {GoogleId ? (
                <FaUser />
              ) : (
                <Googlelogin
                  style={{
                    backgroundColor: "#d6dee4",
                    color: "#3e595f",
                    textTransform: "none",
                    border: "1px solid #d6dee4",
                    cursor: "pointer",
                    borderRadius: "5px",
                    padding: "0.5rem 0.9rem",
                  }}
                  title="Login"
                />
              )}
            </LoginContainer>
          </TopContainer>
          <BodyContainer>
            <span className="title">We are here to help!</span>
            <span className="subtitle">
              Choose a category to find the help you need. And get an instant
              answer <br />
              for the most commonly asked questions.
            </span>
            <InviteContiner>
              <div className="Title">
              <BsShare className="share"/>
                Invite friends/Share
             
              </div>
              <div className="IconsDiv">
                <div className="logo">
                  <WhatsappShareButton
                    url={links}
                    quote={"BookMark App"}
                    hashtag="#Neutroline"
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=https://www.whatsapp.com/`}
                      alt={data.alt}
                      className="img-whatsapp"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => console.log("hello")}
                    />
                  </WhatsappShareButton>

                  <span className="iconName" style={{ marginLeft: "1rem" }}>
                    WhatsApp
                  </span>
                </div>

                <div className="logo">
                  <LinkedinShareButton
                    url={links}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=https://www.linkedin.com`}
                      alt={data.alt}
                      className="img"
                      style={{ marginRight: "0.9rem" }}
                      onClick={() => console.log("hello")}
                    />
                  </LinkedinShareButton>

                  <div className="iconName" style={{ marginLeft: "-0.9rem" }}>
                    LinkedIn
                  </div>
                </div>

                <div className="logo">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Boomark+App&body='+${links}+'&ui=2&tf=1&pli=1`}
                    target="_black"
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=https://mail.google.com/`}
                      alt={data.alt}
                      className="img"
                      style={{ marginLeft: "-0.3rem" }}
                    />
                  </a>

                  <div className="iconName" style={{ marginLeft: "-0.4rem" }}>
                    Gmail
                  </div>
                </div>

                <div className="logo">
                  <img
                    src={link}
                    alt="Copy Link"
                    style={{
                      width: "1.4rem",
                      marginLeft: "0.2rem",
                      marginBottom: "0.1rem",
                    }}
                    className="img"
                    onClick={copyLink}
                  />
                  <div className="iconName">
                    {!copied ? "Copy link" : "Copied!"}
                  </div>
                </div>
              </div>
            </InviteContiner>
          </BodyContainer>
        </Container>
        <ItemContainer>
          <EachItem
            onClick={() => {
              setPage("about");
            }}
            style={
              page === "about"
                ? { border: "1px solid #1d9bf0", color: "#1d9bf0" }
                : { border: " ", color: " " }
            }
          >
            <BiDetail className="icon" />
            About
          </EachItem>
          <EachItem
            onClick={() => {
              setPage("help");
            }}
            style={
              page === "help"
                ? { border: "1px solid #1d9bf0", color: "#1d9bf0" }
                : { border: " ", color: " " }
            }
          >
            <BiHelpCircle className="icon" />
            Help
          </EachItem>
          <EachItem
            onClick={() => {
              setPage("privacy");
            }}
            style={
              page === "privacy"
                ? { border: "1px solid #1d9bf0", color: "#1d9bf0" }
                : { border: " ", color: " " }
            }
          >
            <MdOutlinePrivacyTip className="icon" />
            Privacy & policy
          </EachItem>
        </ItemContainer>
        <ItemDetailContainer>
          <Detail>
            {page === "about" ? (
              <AboutDetail />
            ) : page === "help" ? (
              <HelpDetail />
            ) : page === "privacy" ? (
              <PrivicyDetail />
            ) : (
              " "
            )}
          </Detail>
        </ItemDetailContainer>

        <Footers />
      </Root>
    </>
  );
};

export default AboutHelpTerms;
