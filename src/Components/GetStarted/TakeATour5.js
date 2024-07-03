import React from "react";
import styled from "styled-components";
import default_search_engine from "../../Assets/defaults_search_engine.png";
import show_hide from "../../Assets/show_hide.png";
import current_location from "../../Assets/current_location.png";
import dark_mode from "../../Assets/darkmode.png";

const Data = [
  {
    image: default_search_engine,
    description: "Choose your default browser ",
  },
  {
    image: show_hide,
    description: "Show or hide widgets as per your need.",
  },
  {
    image: current_location,
    description: "Turn your location on to receive more features",
  },
  {
    image: dark_mode,
    description: "Dark mode feautre is also available",
  },
];

const MsgTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #656478;
`;

const MsgContent = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .btn {
    width: 4.5rem;
    padding: 0.3rem 0rem;
    border-radius: 20px;
    border: none;
    outline: none;
    color: white;
    background: #18a0fb;
    cursor: pointer;
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    gap: 0rem;
    align-items: center;
  }
  .image {
    width: 12rem;
    height: auto;
  }
  .text {
    font-size: 0.8rem;
    text-align: left;
    width: 16rem;
    @media screen and (max-width: 550px) {
      text-align: center;
    }
    @media screen and (max-width: 450px) {
      text-align: center;
    }
    ${"" /* padding:1rem; */}
  }
`;

const TakeATour5 = ({ nextStep }) => {
  return (
    <div>
      <Content>
        <MsgTitle>Settings</MsgTitle>
        <MsgContent>Customize the settings as per your need</MsgContent>
        {Data.map((data, index) => (
          <Container key={index}>
            <div className="text">{data.description}</div>
            <img src={data.image} className="image" alt="" />
          </Container>
        ))}
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="btn" onClick={nextStep}>
            {" "}
            Next
          </button>
        </div>
      </Content>
    </div>
  );
};

export default TakeATour5;
