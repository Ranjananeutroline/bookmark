import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Bowser from "bowser";
import { Button } from "@mui/material";
const Root = styled.div`
animation: hideMe 20s infinite;

@keyframes hideMe{
  0%{
      opacity: 1;
  }
  100%{
      opacity: 0;
  }
}
  @media screen and (max-width: 1024px) {
    display: none;
  }

  .extension
  {
    border-radius: 0rem;
    position: absolute;
    top: 0;
    right: 0;
  background:#0E87D8;
    border-radius: 2rem;
    margin-right:10rem;
    
    width: 10rem;   
   padding:0.2rem;
    margin-top:2.1rem;
    font-size: 1.2rem;
    color:#fff;
    text-transform:capitalize;

    @media screen and (max-width:1600px)
    {
      padding:0rem;
      width: 7rem;  
      height: 1.8rem; 
      margin-top:0.5rem;
      font-size: 0.8rem;
      margin-right:3rem;
    }
:hover
{
  background:#0E87D8;
  box-shadow:0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
}
  }
`;
const actions = [
  {
    // icon: (
    //   <Icon
    //     icon="logos:chrome"
    //     onClick={() => {
    //       handleClick("www.facebook.com");
    //     }}
    //     style={{ fontSize: "1.5rem" }}
    //   />
    // ),
    url:"www.google.com",
    name: "Chrome",
   
  },
  {
    // icon: (
    //   <Icon
    //     icon="logos:firefox"
    //     onClick={() => {
    //       handleClick("www.facebook.com");
    //     }}
    //     style={{ fontSize: "1.5rem" }}
    //   />
    // ),
    url:"www.facebook.com",
    name: "Firefox",
   
  },
  {
    icon: (
      <Icon
        icon="logos:safari"
        onClick={() => {
          handleClick("www.facebook.com");
        }}
        style={{ fontSize: "1.5rem" }}
      />
    ),
    name: "Safari",
   
  },
  {
    // icon: (
    //   <Icon
    //     icon="logos:microsoft-edge"
    //     onClick={() => {
    //       handleClick("www.facebook.com");
    //     }}
    //     style={{ fontSize: "1.5rem" }}
    //   />
    // ),
    name: "Microsoft Edge",
    url:"www.gmail.com"
   
  },
];

const handleClick = (url) => {
  window.open(url.indexOf("https://") === 0 ? url : `https://${url}`, "_blank");
};

export default function AddExtensionPopUp() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  console.log(browser.getBrowser().name);

  return (
    <Root>
{/* <div className="extension"> */}
{actions.map((action) => {
            if (browser.getBrowser().name === action.name)
              return (
                <>
                
                <Button
                
                className="extension"
                  key={action.name}
                onClick={()=>{
                handleClick(action.url)}}
                 
                >add extension</Button></>
              
              );
          })} 
          {/* </div> */}
      <Box >
     
     

        {/* <SpeedDial
        transitionDuration={2000}
        key={action.name}
        onClick={()=>handleClick(action.url)}
          ariaLabel="SpeedDial basic example"
          sx={{
            borderRadius: "0rem",
            position: "absolute",
            top: -8,
            right: 45,

            "& .MuiSpeedDial-fab": {
              textTransform: "capitalize",
              borderRadius: "2rem",
              minHeight: "0",
              width: "7rem",
              height: "1.8rem",
              marginTop:"0.8rem",
              fontSize: "0.8rem",
              // backgroundColor: "red",
              boxShadow: "none",
              "&: hover": {
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
              },
            },
          }}
          direction="left"
          icon="Add Extension"


        >


           {actions.map((action) => {
            if (browser.getBrowser().name === action.name)
              return (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  style={{ padding: "0rem", width: "1rem", height: "1rem" }}
                />
              );
          })} 
         </SpeedDial> */}


        
      </Box>
    </Root>
  );
}
