import React from "react";
import TextFieldComponent from "../Form/TextFieldComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Paper, Container, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FaGift } from "react-icons/fa";
const intial_state_values = {
  email: "",
};
const form_validation = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
});
const InviteForm = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          margin: 2,
          textAlign: "center",

          "& > :not(style)": {
            m: 1,
            width: "50ch",
            padding: 2,
            background: "#F5F4F4",
            margin: "auto",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Paper>
          <Grid container>
            <Grid item md={12} color="red">
              <FaGift />
            </Grid>

            <Grid item xs={12} color="#614F4F">
              <h2>Share With your Friend</h2>
            </Grid>

            <Grid item xs={12}>
              <Container maxWidth="md">
                <div>
                  <Formik
                    initialValues={{
                      ...intial_state_values,
                    }}
                    validationSchema={form_validation}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item sm={7}>
                          <TextFieldComponent
                            name="email"
                            label="Enter email address"
                          />
                        </Grid>
                        <Grid item sm={5}>
                          <Button variant="contained">Send Invite</Button>
                        </Grid>
                        <Grid item sm={12}>
                          <Typography>OR</Typography>
                        </Grid>
                        <Grid item sm={7}>
                          <TextFieldComponent
                            name="email"
                            label="Enter email address"
                          />
                        </Grid>
                        <Grid item sm={5}>
                          <Button variant="contained">Copy Link</Button>
                        </Grid>

                        <Grid item xs={12}>
                          <h3>share with friend</h3>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default InviteForm;
