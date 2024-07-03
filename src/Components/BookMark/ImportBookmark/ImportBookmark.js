import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import ImportCheckbox from "./ImportCheckbox";
import SelectBrowser from "./SelectBrowser";
const data = [
  {
    label: "Favourites",
  },
  {
    label: "Bookmarks",
  },
  {
    label: "Saved password",
  },
  {
    label: "Browsing history",
  },
];

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const ImportBookmark = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const checkboxItemJsx = data.map((item) => {
    return <ImportCheckbox label={item.label} />;
  });
  return (
    <div>
      <Dialog
        open={open}
        hideBackdrop="true"
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        minWidth="xs"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Import bookmark
        </DialogTitle>
        <DialogContent>
          <SelectBrowser />
          <p>Choose what to import </p>
          {checkboxItemJsx}
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Import</Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImportBookmark;
