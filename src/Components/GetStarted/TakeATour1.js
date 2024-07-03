import React from "react";
import styled from "styled-components";
import sc from "../../Assets/screenshot1.png";

const MsgTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #656478;
`;

const MsgContent = styled.div`
  font-size: 0.9rem;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1rem;

  @media screen and (max-width: 550px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 450px) {
    gap: 2.5rem;
    padding: 0.5rem 0.5rem;
  }
  .btn {
    width: 3.5rem;
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
const TakeATour1 = ({ nextStep }) => {
  return (
    <div>
      <Content>
        <MsgTitle>Home Page</MsgTitle>
        <MsgContent>
          1. Categorize your bookmarks into several categories for easy access
        </MsgContent>
        <img
          src={sc}
          alt=""
          style={{ width: "100%", height: "auto", marginTop: "1rem" }}
        />
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

export default TakeATour1;
