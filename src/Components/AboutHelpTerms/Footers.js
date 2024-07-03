import React from "react";
import styled from "styled-components";
import { data2 } from "./InviteDate";
import InstallApp from "./InstallApp";
const FooterContainer = styled.div`
  font-size: 0.8rem;
  background: #eff3f6;

  color: #3e595f;

  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
`;
const FooterSection = styled.div`
  padding: 0.3rem 0.6rem;
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .img {
    width: 1rem;
    height: 1rem;
    position: relative;

    top: 0;
    transition: top ease 0.3s;
  }
  .img:hover {
    cursor: pointer;
    transform: scale(1.2);
    top: -3px;
  }
`;
const Footers = () => {
  return (
    <div>
      <InstallApp
        width="3rem"
        height="3rem"
        title="Install Bookmark App in the browser of your choice:"
      />
      <FooterContainer>
        <FooterSection>
          Neutroline ©️ 2022 | All Rights Reserved
          <ImageContainer>
            Follow us
            {data2.map((data, index) => (
              <>
                <a href={data.url} target="_blank" rel="noreferrer">
                  <img
                    src={`https://www.google.com/s2/favicons?sz=64&domain_url=${data.url}`}
                    alt={data.alt}
                    className="img"
                  />
                </a>
              </>
            ))}
          </ImageContainer>
        </FooterSection>
      </FooterContainer>
    </div>
  );
};

export default Footers;
