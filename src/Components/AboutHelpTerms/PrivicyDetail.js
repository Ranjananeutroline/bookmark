import React from "react";
import styled from "styled-components";

const Root = styled.div`
  text-align: left;
  margin-top: 1rem;
  line-height: 1.5;
letter-spacing:0.02rem;
  padding: 3rem 10rem 3rem 10rem;

  @media screen and (max-width: 1250px) {
    padding: 1rem 15rem 1rem 15rem;
  }
  @media screen and (max-width: 1150px) {
    padding: 1rem 10rem 1rem 10rem;
  }
  @media screen and (max-width: 900px) {
    padding: 1rem 5rem 1rem 5rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1rem 1rem 1rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    @media screen and (max-width:1600px)
    {
      font-size: 1.2rem;
   
    }
  }
  .detail {
    font-size: 1.2rem;
    @media screen and (max-width:1600px)
    {
      font-size: 1rem;
   
    }
  }
`;
const PrivicyDetail = () => {
  return (
    <Root>
      <span className="title">Summary</span>
      <br />
      <span className="detail">
        Here you will find a full disclosure of the personal information we
        collect and how we use it. These are our main principles:
        <ul>
          <li>On start.me we care about your privacy.</li>
          <li>
            On start.me you are NOT the product. We do not sell or share your
            data with anyone else. We make money through ads and subscriptions,
            not by selling your data.
          </li>
          <li>
            {" "}
            We limit the amount of personal data we collect from you. During the
            sign-up process we ask you to provide us with your name and email
            address. We use this information to ensure you can login to our
            service. We do not share this information with anyone else.
          </li>
          <li>
            {" "}
            When you use start.me, your IP address gets logged. This is done on
            an anonymous basis and only for the purpose of protecting and
            securing our platform.{" "}
          </li>
          <li>
            {" "}
            Our hardware and software are updated with the latest security
            patches. We also work with external partners who frequently audit
            the security of our platform.
          </li>
          <li>
            {" "}
            We work with external advertising & affiliate partners to support
            the Free plan of start.me.{" "}
          </li>
          <li>
            {" "}
            Our partners may use additional cookies to serve relevant and
            personalized ads to you. Upgrading to PRO will remove any
            advertising or affiliate tags from start.me.
          </li>
          <li>
            {" "}
            You can delete your account and all associated data whenever you
            want to. Go to your user profile https://start.me/users/edit and
            click the "Delete account" button. You can also ask our support team
            (support@start.me) to do this for you.{" "}
          </li>
          <li>
            {" "}
            For a more detailed description of our Privacy Policy, please scroll
            further on this page. We limit the amount of personal data we
            collect from you. During the sign-up process we ask you to provide
            us with your name and email address. We use this information to
            ensure you can login to our service. We do not share this
            information with anyone else.
          </li>
        </ul>
      </span>
    </Root>
  );
};

export default PrivicyDetail;
