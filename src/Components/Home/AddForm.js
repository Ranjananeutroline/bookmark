import React, { useState } from "react";
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
    marginBottom: "1.5rem",
  },
  create: {
    marginRight: "3rem",
  },
}));
const AddForm = ({ open, handleClose, id, sendDataToParent }) => {
  const classes = useStyle();
  const [urlValue, setUrlValue] = useState();
  const [titleValue, setTitleValue] = useState();

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
    values.push(newValue);
    sendDataToParent(values);
    setUrlValue();
    setTitleValue();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      BackdropProps={{ style: { background: "#000" } }}
      hideBackdrop="true"
      sx={{
        backdropFilter: "blur(5px)",
      }}
      PaperProps={{
        style: {
          borderRadius: "10px",
        },
      }}
    >
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
            name="Add"
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
    </Dialog>
  );
};

export default AddForm;
