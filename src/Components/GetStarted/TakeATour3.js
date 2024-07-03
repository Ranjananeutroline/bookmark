import React from "react";
import styled from "styled-components";
import update_bookmark from "../../Assets/updatebookmark-sc.png";
import update_bookmark_form from "../../Assets/updatebookmark-sc2.png";

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

  gap: 1rem;
  gap: 0.5rem;
  padding: 1rem 1rem;

  @media screen and (max-width: 550px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.5rem;
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

const ImageDiv = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 50%;
    height: auto;
    margin-top: 1rem;
    @media screen and (max-width: 450px) {
      width: 60%;
    }
  }
`;

const TakeATour2 = ({ nextStep }) => {
  return (
    <div>
      <Content>
        <MsgTitle>Home Page</MsgTitle>
        <MsgContent>3. Update, delete the added bookmarks</MsgContent>
        <ImageDiv>
          <img src={update_bookmark} alt="" className="image" />
          <img src={update_bookmark_form} alt="" className="image" />
        </ImageDiv>

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

export default TakeATour2;
