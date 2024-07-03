import { Container, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from "react";
import TextFieldComponent from "../../Form/TextFieldComponent";
import { BiLink } from "react-icons/bi";
import { MdOutlineTopic } from "react-icons/md";

const useStyle = makeStyles(() => ({
  root: {
    border: "none",
    display: "flex",

    padding: "0.2rem",
    background: "FFFFFF",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.15)",
    borderRadius: " 3px",
  },
  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#8A7F7F",
    fontWeight: 500,
  },

  icon: {
    fontSize: "1.4rem",
    color: "#96A9B2",
  },
}));

const FormBookMark = ({
  urlValue,
  titleValue,
  handleTitle,
  handleUrl,
  titles,
}) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="xs">
          <Grid item xs={12} className={classes.title} p={1}>
            {titles}
          </Grid>

          <Grid container>
            <Grid className={classes.root} item xs={12} m={1} p={1}>
              <Grid item xs={3} sm={1}>
                <BiLink className={classes.icon} />
              </Grid>
              <Grid item xs={9} sm={11}>
                <TextFieldComponent
                  name="url"
                  placeholder="URL"
                  value={urlValue}
                  onChange={handleUrl}
                />
              </Grid>
            </Grid>
            <Grid className={classes.root} item xs={12} m={1} p={1}>
              <Grid item xs={3} sm={1}>
                <MdOutlineTopic className={classes.icon} />
              </Grid>
              <Grid item xs={9} sm={11}>
                <TextFieldComponent
                  name="title"
                  placeholder="TITLE"
                  value={titleValue}
                  onChange={handleTitle}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FormBookMark;
