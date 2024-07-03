import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "./HelpData";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import MakeSuggestion from "./MakeSuggestion";
import axios from "axios";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";
import {api} from '../../api/api'
const HeadingConatiner = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: #104d89;
  display: flex;
  flex-direction: column;
  .subtitle {
    font-size: 1.3rem;
    color: #595959;
    font-weight: 400;
  }
  @media screen and (max-width:1500px)
  {
    font-size: 1.7rem;
    .subtitle {
      font-size: 1rem;
    }
  }
`;
const Root = styled.div`
  background-color: #eff3f6;
  border-radius: 5px;
  text-align: left;
  margin-top: 1rem;
  line-height: 1.5rem;
  margin: 3rem 20rem 3rem 20rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  @media screen and (max-width: 1500px) {
    margin: 3rem 15rem 3rem 15rem;
  }
  @media screen and (max-width: 1250px) {
    margin: 1rem 15rem 1rem 15rem;
  }
  @media screen and (max-width: 1150px) {
    margin: 1rem 10rem 1rem 10rem;
  }
  @media screen and (max-width: 1000px) {
    margin: 1rem 5rem 1rem 5rem;
  }
  @media screen and (max-width: 900px) {
    margin: 1rem 0rem 1rem 0rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;

    @media screen and (max-width: 1500px) {
      font-size: 1.2rem;
    }
  }
  .detail {
  }
`;
const FAQContainer = styled.div`
  .Accordion {
    margin-bottom: 0.5rem;
  }
  .title {
    font-size: 1.3rem;
    font-weight: 400;
    color: #3e5988;

    @media screen and (max-width: 1500px) {
      font-size: 0.9rem;
    }
  }
  .ExpandIcon {
    color: #3e5988;
  }
  .description {
    font-size: 1.3rem;
    color: #595959;
    @media screen and (max-width: 1500px) {
      font-size: 0.9rem;
    }
  }
`;

const AskFormContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 2rem;
    font-weight: 600;
    color: #104d89;
    width: 100%;

    text-align: center;
    @media screen and (max-width: 1500px) {
      font-size: 1.7rem;
    }
  }
`;
const Form = styled.div`
  padding: 2rem 3rem 2rem 3rem;
  @media screen and (max-width: 1500px) {
    padding: 1rem 3rem 2rem 3rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 0rem 2rem 0rem;
  }
  .nameDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .emaildiv {
    margin-top: 1rem;
  }
  .Description {
    margin-top: 1rem;
  }
  .submitButton {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
     width: 50%;
    border-radius: 5px;
    background-color: #1d9bf0;

    @media screen and (max-width:1500px)
  {
    width: 100%;
  }  }
`;

const ContactContainer = styled.div`
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const ContactMainContainer = styled.div`
  margin: 2rem 20rem 5rem 20rem;
  @media screen and (max-width: 1500px) {
    margin: 2rem 15rem 5rem 15rem;
  }
  @media screen and (max-width: 1250px) {
    margin: 2rem 15rem 5rem 15rem;
  }
  @media screen and (max-width: 1150px) {
    margin: 2rem 10rem 5rem 10rem;
  }
  @media screen and (max-width: 1000px) {
    margin: 2rem 5rem 5rem 5rem;
  }
  @media screen and (max-width: 900px) {
    margin: 2rem 0rem 5rem 0rem;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem;
  align-items:center;
  .header {
    font-size: 1.4rem;
    color: #104d89;
    font-weight: 600;
    margin-left: -0.5rem;

    @media screen and (max-width:1500px)
    {
      font-size: 1.1rem; 
    }
  }
  .data {
    font-size: 1.1rem;
    color: #1d9bf0;
    @media screen and (max-width:1500px)
    {
      font-size: 1rem; 
    }
  }
  .icon {
    margin-right: 0.5rem;
    margin-bottom: -0.2rem;
  }
`;

const HelpDetail = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mail: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Minimum 3 character!")
        .required("First Name Required!"),
      lastName: Yup.string()
        .min(3, "Minimum 3 character!")
        .required("Last Name Required!"),
      mail: Yup.string()
        .min(3, "Minimum 3 character!")
        .email("Invalid Email Format!")
        .required("Email Required!"),
      description: Yup.string()
        .min(5, "Minimum 5 character!")
        .required("Description Required!"),
    }),

    onSubmit: (values) => {
      SendToDatabase(values);
    },
  });
  const SendToDatabase = (values) => {
    axios
      .post(api+"/haveQuestion/", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.mail,
        description: values.description,
      })
      .then((res) => {
        console.log("successful");
        setopenMsg(true);
      })
      .catch((err) => {
        console.log(err);
        console.log("unsuccessful");
      });
  };

  const [openMsg, setopenMsg] = useState(false);
  const handleCloseMsg = () => {
    setopenMsg(false);
  };

  return (
    <>
      <HeadingConatiner>
        FAQ
        <span className="subtitle">
          Frequently asked question about BookMark App
        </span>
      </HeadingConatiner>
      <Root>
        <FAQContainer>
          {data.map((item, index) => {
            return (
              <Accordion className="Accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ExpandIcon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="title">{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="description">
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </FAQContainer>
        <AskFormContainer>
          <span className="title">Have a question ?</span>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} >
                {formik.touched.firstName && formik.errors.firstName ? (
                  <TextField
                    label={formik.errors.firstName}
                    id="outlined-size-small"
                    size="small"
                    error
                    {...formik.getFieldProps("firstName")}
                    fullWidth
                  />
                ) : (
                  <TextField
                    label="First Name"
                    id="outlined-size-small"
                    size="small"
                    {...formik.getFieldProps("firstName")}
                    fullWidth
                  />
                )}
              </Grid>
              <Grid item xs={12} md={6} >
                {formik.touched.lastName && formik.errors.lastName ? (
                  <TextField
                    label={formik.errors.lastName}
                    id="outlined-size-small"
                    error
                    size="small"
                    {...formik.getFieldProps("lastName")}
                    fullWidth
                  />
                ) : (
                  <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    {...formik.getFieldProps("lastName")}
                    size="small"
                    fullWidth
                  />
                )}
              </Grid>
              <Grid item xs={12} md={12} >
                {formik.touched.mail && formik.errors.mail ? (
                  <TextField
                    label={formik.errors.mail}
                    id="outlined-size-small"
                    error
                    {...formik.getFieldProps("mail")}
                    size="small"
                    fullWidth
                  />
                ) : (
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    {...formik.getFieldProps("mail")}
                    size="small"
                    fullWidth
                  />
                )}
              </Grid>
              <Grid item xs={12} md={12} >
                {formik.touched.description && formik.errors.description ? (
                  <TextField
                    label={formik.errors.description}
                    multiline
                    id="outlined-size-small"
                    rows="3"
                    error
                    {...formik.getFieldProps("description")}
                    size="small"
                    fullWidth
                  />
                ) : (
                  <TextField
                    label="Description"
                    multiline
                    id="outlined-size-small"
                    rows="3"
                    {...formik.getFieldProps("description")}
                    size="small"
                    fullWidth
                  />
                )}
              </Grid>
              <Grid
                item
                xs={12}
                
                
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  size="small"
                  variant="contained"
                  className="submitButton"
                  onClick={formik.handleSubmit}
                >
                  Send Message
                </Button>
                <SignUpAlertPopMsg
                  open={openMsg}
                  handleCloseMsg={handleCloseMsg}
                  height="30%"
                  vertical="bottom"
                  horizontal="center"
                  message="Your message has been sent !"
                />
              </Grid>
            </Grid>
            <MakeSuggestion />
          </Form>
        </AskFormContainer>
      </Root>
      <ContactMainContainer>
        <ContactContainer>
          <ContactDetail>
            <div className="header">
              <GrMail className="icon" />
              Email
            </div>
            <div className="data">neutroline@gmail.com</div>
          </ContactDetail>
          <ContactDetail>
            <div className="header">
              <BsFillTelephoneFill className="icon" />
              Phone
            </div>
            <div className="data">071-5778202345</div>
          </ContactDetail>
          <ContactDetail>
            <div className="header">
              <ImLocation2 className="icon" />
              Address
            </div>
            <div className="data">Devdaha 7, 32900</div>
          </ContactDetail>
        </ContactContainer>
      </ContactMainContainer>
    </>
  );
};

export default HelpDetail;
