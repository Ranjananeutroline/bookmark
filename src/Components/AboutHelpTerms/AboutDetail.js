import React from "react";
import styled from "styled-components";

import AboutTab from "./AboutTab";
const Root = styled.div`
  text-align: left;
  margin-top: 1rem;
  line-height: 1.5rem;
  padding: 3rem 10rem 3rem 10rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1250px) {
    padding: 1rem 15rem 1rem 15rem;
  }
  @media screen and (max-width: 1080px) {
    padding: 1rem 10rem 1rem 10rem;
  }
  @media screen and (max-width: 900px) {
    padding: 1rem 5rem 1rem 5rem;
  }
  @media screen and (max-width: 900px) {
    padding: 1rem 1rem 1rem 1rem;
  }
`;

const AboutDetail = () => {
  return (
    <Root>
      <AboutTab />
    </Root>
  );
};

export default AboutDetail;
