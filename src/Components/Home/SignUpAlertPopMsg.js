import { Snackbar } from "@mui/material";
import React from "react";
import Alert from "@mui/material/Alert";

const SignUpAlertPopMsg = ({
  open,
  handleCloseMsg,
  height,
  vertical,
  horizontal,
  message,
  severity
}) => {
  return (
    <div>
      {
        <Snackbar
          open={open}
          onClose={handleCloseMsg}
          autoHideDuration={3000}
          style={{ height: height ,width:"100%"}}
          anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
        >
          <Alert
            // icon={false}
            variant="filled"
            severity={severity}
          style={{
            backgroundColor:"#1093F3",color:"#fff",borderRadius:"15px"}}
            onClose={handleCloseMsg}
          >
            {message}
          </Alert>
        </Snackbar>
      }
    </div>
  );
};

export default SignUpAlertPopMsg;