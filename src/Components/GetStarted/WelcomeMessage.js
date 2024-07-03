import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import TakeATour1 from "./TakeATour1";
import TakeATour2 from "./TakeATour2";
import TakeATour3 from "./TakeATour3";
import TakeATour4 from "./TakeATour4";
import TakeATour5 from "./TakeATour5";
import TakeATour6 from "./TakeATour6";

const Root = styled.div``;

const WelcomeMessage = ({ getStartedClicked }) => {
  const [step, setStep] = React.useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  console.log(getStartedClicked);
  return (
    <Root>
      {getStartedClicked ? (
        <Dialog
          open={getStartedClicked}
          PaperProps={{
            style: {
              borderRadius: "20px",
              background: "#F3F3F3",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#fffafa",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 8px ",
              width: "100rem",
              height: "75vh",
            },
          }}
        >
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 0px",
            }}
            disablePadding
          >
            {(() => {
              switch (step) {
                default:
                  return <h1>Completed</h1>;
                case 1:
                  return <TakeATour1 nextStep={nextStep} />;
                case 2:
                  return <TakeATour2 nextStep={nextStep} />;
                case 3:
                  return <TakeATour3 nextStep={nextStep} />;
                case 4:
                  return <TakeATour4 nextStep={nextStep} />;
                case 5:
                  return <TakeATour5 nextStep={nextStep} />;
                case 6:
                  return <TakeATour6 />;
              }
            })()}
          </DialogContent>
        </Dialog>
      ) : null}
    </Root>
  );
};

export default WelcomeMessage;
