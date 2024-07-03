import React from "react";
import styled from "styled-components";
import shadow_density from "../../Assets/shadow-density.png";
import profile_sc from "../../Assets/profile-sc.png";
import theme from "../../Assets/theme.png";

const Data = [
  {
    image: profile_sc,
    description:
      "Update your profile information by going to the profile section. ",
  },
  {
    image: shadow_density,
    description: "Increase or decrease the box shadow of the category boxes.",
  },
  {
    image: theme,
    description: "Choose your desired wall papers and themes",
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
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
    gap: 0rem;
    justify-content: center;
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
  }
`;

const TakeATour6 = ({ nextStep }) => {
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
          <button className="btn" onClick={() => window.location.reload(false)}>
            Done
          </button>
        </div>
      </Content>
    </div>
  );
};

export default TakeATour6;
