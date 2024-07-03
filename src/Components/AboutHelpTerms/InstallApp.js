import React from "react";
import styled from "styled-components";
import { data3 } from "./InviteDate";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
  .title {
    color: #8c8c8c;
    font-weight: 500;
    font-size: 1.2rem;

    @media screen and (max-width:1600px)
    {
      font-size: 1rem; 
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  .imageTitleDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconTitle {
      font-size: 0.9rem;
      color: #999999;
      visibility: hidden;
    }
  }
  .img {
    margin-top: 1rem;

    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (max-width: 430px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .imageTitleDiv:hover .iconTitle {
    visibility: visible;
  }
`;
const InstallApp = () => {
  return (
    <Root>
      <span className="title">
        Install Bookmark App in the browser of your choice:
      </span>
      <LogoContainer>
        {data3.map((data, index) => (
          <div className="imageTitleDiv">
            <a
              href={
                `${data.url}`.indexOf("https://") === 0
                  ? `${data.url}`
                  : `https://${data.url}`
              }
              target="_blank"
            >
              <img src={data.name} alt={data.alt} className="img" />
            </a>
            <span className="iconTitle"> {data.alt}</span>
          </div>
        ))}
      </LogoContainer>
    </Root>
  );
};

export default InstallApp;
