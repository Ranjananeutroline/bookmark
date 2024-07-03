import React from "react";
import styled from "styled-components";
import notes from "../../Assets/notesicon.png";
import stickynote from "../../Assets/stickyicon.png";
import bookmark from "../../Assets/Bookmark.png";
import todo from "../../Assets/todoicon.png";
import weather from "../../Assets/weather.png";
import theme from "../../Assets/themeimg.png";

const Data = [
  {
    icon: notes,
    title: "Sticky Notes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
  {
    icon: stickynote,
    title: "Notes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
  {
    icon: todo,
    title: "To-do Lists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
  {
    icon: bookmark,
    title: "Bookmark",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
  {
    icon: weather,
    title: "Weather",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
  {
    icon: theme,
    title: "Custom Wallpaper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
  },
];

const MsgTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #656478;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  @media screen and (max-width: 450px) {
    gap: 1rem;
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
const Container = styled.div`
  display: flex;
  gap: 1rem;
  .icon {
    margin-top: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  .text {
    display: flex;
    flex-direction: column;
  }
  .header {
    font-size: 1rem;
  }
  .description {
    color: #4d4848;
    font-size: 0.7rem;
  }
`;

const TakeATour4 = ({ nextStep }) => {
  return (
    <div>
      <Content>
        <MsgTitle>Other Other Features</MsgTitle>
        {Data.map((data, index) => (
          <Container key={index}>
            <img src={data.icon} alt="" className="icon" />
            <div className="text">
              <div className="title">{data.title}</div>
              <div className="description">{data.description}</div>
            </div>
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

export default TakeATour4;
