import React from "react";
import styled from "styled-components";
import { data3 } from "../AboutHelpTerms/InviteDate";
import ReactTooltip from "react-tooltip";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  @media screen and (max-width: 758px) {
    display: none;
  }
  .title {
    color: #8c8c8c;
    font-weight: 500;
    font-size: 0.9rem;
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
    cursor: pointer;
    width: 2rem;
    height: 2rem;
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

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: white !important;
  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-top-color: white !important;
  }
`;

const AddExtension = () => {
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
              <img
                src={data.name}
                alt={data.alt}
                className="img"
                data-tip
                data-for={data.alt}
              />
            </a>
            <StyledReactTooltip id={data.alt} effect="solid">
              <span>{data.alt}</span>
            </StyledReactTooltip>
          </div>
        ))}
      </LogoContainer>
    </Root>
  );
};

export default AddExtension;
