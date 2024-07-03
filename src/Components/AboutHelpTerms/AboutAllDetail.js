import React from "react";
import styled from "styled-components";
import home from "../../Assets/home.PNG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { data } from "./AboutData";
const Root = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    margin-top: 1rem;
    font-size: 1.8rem;

    font-weight: 500;
    margin-bottom: 1rem;
    color: #104d89;
    width: 100%;

    @media screen and (max-width:1500px)
    {
      font-size: 1.5rem; 
    }
  }
  .detail {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    @media screen and (max-width:1500px)
    {
      font-size: 1rem; 
    }
  }
`;

const ImageContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .homeImage {
    width: 90%;

    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

const FeatureContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  .featureTitle {
    font-size: 1.8rem;

    font-weight: 500;
    margin-bottom: 1rem;
    color: #104d89;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1.5rem;
    @media screen and (max-width:1500px)
    {
      font-size: 1.5rem; 
    }
  }
  .featureoverviewLI {
    color: #104d89;
    font-weight: 500;
   
    span {
      &:hover {
        color: #1da8f4;
      }
    }
  }
  .listTitle {
    color: #104d89;
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  .listDetail {
    margin-top: 2rem;
  }
  .links
  {
    text-decoration:none;
    color: #104d89;
  }
`;
const AboutAllDetail = () => {
  return (
    <Root>
      <span className="title">About BookMark App</span>

      <span className="detail">
        Momentum is a free Google Chrome, Firefox, Safari and Microsoft Edge
        add-on that breathes life into your New Tab page. Enjoy daily landscape
        photos, encouraging quotes, added focus, quick access to links, to-dos,
        local weather and more! Join millions who are already using Momentum to
        stay focused, refreshed and inspired!
      </span>
      <ImageContiner>
        <img src={home} alt="AppMainImage" className="homeImage" />
      </ImageContiner>
      <FeatureContainer>
        <span className="featureTitle">Feature Overview</span>
        <span className="detail">
          The following features are available to all Momentum users:
        </span>
        <ul>
          {" "}
          <li className="featureoverviewLI">
            <AnchorLink href="#SearchBar"  className="links">
              <span>Search Bar</span>
            </AnchorLink>
          </li>{" "}
          <li className="featureoverviewLI">
            <AnchorLink href="#Bookmark"  className="links">
              <span>Bookmark</span>
            </AnchorLink>
          </li>
          <li className="featureoverviewLI">
            <AnchorLink href="#Note"  className="links">
              <span>Note</span>
            </AnchorLink>
          </li>
          <li className="featureoverviewLI">
            <AnchorLink href="#StickyNote"  className="links">
              <span>Sticky Note</span>
            </AnchorLink>
          </li>{" "}
          <li className="featureoverviewLI">
            <AnchorLink href="#ToDoList"  className="links">
              <span>To Do List</span>
            </AnchorLink>
          </li>{" "}
          <li className="featureoverviewLI">
            <AnchorLink href="#Weather" className="links">
              <span>Weather</span>
            </AnchorLink>
          </li>{" "}
          <li className="featureoverviewLI">
            <AnchorLink href="#Setting" className="links">
              <span>Setting</span>
            </AnchorLink>
          </li>
        </ul>
        {/* Item one */}

        {data.map((item, index) => {
          return (
            <>
              <span className="listTitle" id={item.id}>
                {item.title}
              </span>
              <span className="listDetail">{item.description}</span>
              <ImageContiner>
                <img src={item.image} alt={item.title} className="homeImage" />
              </ImageContiner>
            </>
          );
        })}
      </FeatureContainer>
    </Root>
  );
};

export default AboutAllDetail;
