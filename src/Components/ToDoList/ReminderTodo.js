import { Button, Dialog, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
const StyledDialog = styled(Paper)`

position:absolute;
top:0;
margin:5rem 2rem 0rem 2rem;
text-align:left;
border-radius:20px;
 
`;
const TopContainer = styled.div`
  text-align: right;
  padding: 0.4rem 0.4rem 0rem 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;

  .cancel {
    background: #a8a9be;
    opacity: 0.8;
    border-radius: 50%;
    color: #fff;
    

  }
`;
const BottomContainer = styled.div`
padding:0rem 1.5rem 1rem 1.5rem;
.btns{
  background-color:#7CC4F5;
  color:#fff;
  :hover
  {
    background-color:#7CC4F5;
  }
}
`;
const ReminderTodo = ({handleReminderClose, taskName}) => {
  console.log("ReminderTodo Task Name:", taskName); // Debugging line
  return (
    <>
      <StyledDialog
      >
        <TopContainer>
          <Icon icon="iconoir:cancel" className="cancel" 
          onClick={handleReminderClose}
          />
        </TopContainer>
        <BottomContainer>
         
          <Grid container spacing={2}>
           
            <Grid item xs={12}>
              <Typography>Task name</Typography>
              <TextField size="small" fullWidth value={taskName} />
            </Grid>

            <Grid item xs={12}>
              <Typography>Set Reminder</Typography>
              <TextField size="small" fullWidth type="date" />
            </Grid>

            <Grid item xs={12}>
             
              <Button size="small" fullWidth  className="btns">Set Reminder</Button>
            </Grid>
          </Grid>
        </BottomContainer>
      </StyledDialog>
    </>
  );
};

export default ReminderTodo;