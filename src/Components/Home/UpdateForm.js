import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Dialog, DialogContent } from "@mui/material";
import NewForm from "./NewForm";
import ButtonField from "../Form/ButtonField";

const useStyle = makeStyles(() => ({
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "0.6rem",
    marginBottom: "1rem",
  },
  create: {
    marginRight: "3rem",
  },
  DialogContentMainDiv: {
    paddingLeft: "1.3rem",
    paddingRight: "1.3rem",
    width: "26rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const UpdateForm = ({
  open,
  handleClose,
  id,
  sendDataToParent,
  currentUrl,
  currentTitle,
  index,
}) => {
  const classes = useStyle();
  const [urlValue, setUrlValue] = useState();
  const [titleValue, setTitleValue] = useState();

  useEffect(() => {
    setUrlValue(currentUrl);
    setTitleValue(currentTitle);
  }, []);

  const handleUrlChange = (event) => {
    setUrlValue(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleAdd = () => {
    let values = [];
    let newValue = { url: urlValue, title: titleValue };
    const oldValue = JSON.parse(localStorage.getItem(id));
    if (oldValue !== null) {
      values = [...oldValue];
    }
    values[index] = newValue;
    console.log(values);
    sendDataToParent(values, id);
    setUrlValue();
    setTitleValue();
    handleClose();
  };
  return (
    <Dialog
      open={open}
      BackdropProps={{ style: { background: "#fff" } }}
      hideBackdrop
      sx={{
        backdropFilter: "blur(5px)",
      }}
      PaperProps={{
        style: {
          borderRadius: "10px",
        },
      }}
    >
      {" "}
      <div className={classes.DialogContentMainDiv}>
        <DialogContent className={classes.content}>
          <NewForm
            urlValue={urlValue}
            titleValue={titleValue}
            handleUrl={handleUrlChange}
            handleTitle={handleTitleChange}
          />
        </DialogContent>
        <div className={classes.btn}>
          <div className={classes.create}>
            <ButtonField
              name="Update"
              colors="#4f6a6a"
              fontColor="#fff"
              radius="21px"
              border="none"
              onClick={handleAdd}
            />
          </div>
          <ButtonField
            name="Cancel"
            colors="#fff"
            fontColor="#000"
            radius="21px"
            border="1px solid #8F79FF"
            onClick={handleClose}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateForm;
