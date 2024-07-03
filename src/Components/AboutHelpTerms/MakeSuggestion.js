import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";
import CloseIcon from "@mui/icons-material/Close";
import {api} from '../../api/api'
const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: transparent;
  }
`;

const Root = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.div`
  span {
    font-size: 1rem;
  }
  .button {
    border-radius: 15px;
    margin-left: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media screen and (max-width: 445px) {
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 445px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 100%;
  }

  .title {
    background: #eff3f6;

    padding: 0.8rem 1rem 0.8rem 1rem;
    border-radius: 0.7rem 0.7rem 0rem 0rem;
    text-align: center;
    color: #104d89;
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

const FormContainer = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  @media screen and (max-width: 550px) {
    padding: 1rem 1.5rem 2rem 1.5rem;
  }

  .textField {
    margin-top: 0.6rem;
  }
  .titleDiv {
    margin-top: 1rem;
  }

  .formTitle {
  }
`;

const LostContainer = styled.div`
  display: flex;
  justify-content: flex-end;
 
  padding: 0.5rem 2.5rem 1.3rem 2.5rem;
  .button {
    text-transform: none;
    padding: 0.2rem 1.5rem;
    border-radius: 20px;
    width: 6rem;
    margin-left: 1rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #64b5f6;
  }
  .add-Button {
    text-transform: none;
    padding: 0.2rem 1.5rem;
    border-radius: 20px;
    
  }
   
  },

  
`;

const MakeSuggestion = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Minimum 3 character!")
        .required("Title Required!"),
      description: Yup.string()
        .min(3, "Minimum 3 character!")
        .required("Description Required!"),
    }),

    onSubmit: (values) => {
      SendToDatabase(values);
      formik.resetForm();
    },
  });

  const SendToDatabase = (values) => {
    axios
      .post(api+"/makeSuggestion/", {
        title: values.title,
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
      <Root>
        <MainContainer>
          <span>Have a feature request? </span>
          <Button
            variant="outlined"
            className="button"
            onClick={handleClickOpen}
            size="small"
          >
            Make a Suggestion
          </Button>
        </MainContainer>
        <StyledDialog
          style={{ backdropFilter: "blur(5px)" }}
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: {
              borderRadius: "10px",
            },
          }}
        >
          <DialogContent style={{ padding: "0rem" }}>
            <ContentContainer>
              <span className="title">Make a Suggestion</span>
              <CloseIcon
                style={{
                  right: 0,
                  position: "absolute",
                  top: 2,
                  fontSize: "1.2rem",
                  margin: "1rem",
                  cursor: "pointer",
                  color: "red",
                }}
                onClick={handleClose}
              />
              <FormContainer>
                <div className="titleDiv">
                  <span className="formTitle">Title</span>
                  {formik.touched.title && formik.errors.title ? (
                    <TextField
                      id="outlined-basic"
                      label={formik.errors.title}
                      variant="outlined"
                      size="small"
                      className="textField"
                      error
                      {...formik.getFieldProps("title")}
                      fullWidth
                    />
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      size="small"
                      className="textField"
                      {...formik.getFieldProps("title")}
                      fullWidth
                    />
                  )}
                </div>
                <div className="titleDiv">
                  <span className="formTitle">Description</span>
                  {formik.touched.description && formik.errors.description ? (
                    <TextField
                      id="outlined-basic"
                      label={formik.errors.description}
                      variant="outlined"
                      size="small"
                      multiline
                      error
                      rows={4}
                      className="textField"
                      {...formik.getFieldProps("description")}
                      fullWidth
                    />
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Write your suggestion here"
                      variant="outlined"
                      size="small"
                      multiline
                      rows={4}
                      className="textField"
                      {...formik.getFieldProps("description")}
                      fullWidth
                    />
                  )}
                </div>
              </FormContainer>
              <LostContainer>
                <Button
                  className="add-Button"
                  style={{}}
                  variant="contained"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </Button>

                <SignUpAlertPopMsg
                  open={openMsg}
                  handleCloseMsg={handleCloseMsg}
                  height="30%"
                  vertical="bottom"
                  horizontal="center"
                  message="Your message has been sent !"
                />
              </LostContainer>
            </ContentContainer>
          </DialogContent>
        </StyledDialog>
      </Root>
    </>
  );
};

export default MakeSuggestion;
