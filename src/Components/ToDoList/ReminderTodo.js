import { Button, Dialog, Grid, Paper, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
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

const CustomSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const CustomSelect = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    border-color: #999;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f6f5f2;
  }
`;



const ReminderTodo = ({ handleReminderClose, taskName, updateTaskPriority }) => {
  const [priority, setPriority] = useState(''); // Default 
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleSelect = (selectedPriority) => {
    setPriority(selectedPriority);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSubmit = () => {
    updateTaskPriority(taskName, priority); // Call the function to update priority
    handleReminderClose(); // Close the reminder
  };

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
            <Typography>Priority</Typography>
            <CustomSelectContainer>
            <CustomSelect onClick={handleDropdownToggle}>
                {priority || 'Select'} {/* Show placeholder text */}
                <Icon icon="mdi:chevron-down" />
              </CustomSelect>
              <DropdownMenu open={dropdownOpen}>
                <DropdownItem onClick={() => handleSelect('low')}>Low</DropdownItem>
                <DropdownItem onClick={() => handleSelect('medium')}>Medium</DropdownItem>
                <DropdownItem onClick={() => handleSelect('high')}>High</DropdownItem>
              </DropdownMenu>
            </CustomSelectContainer>
          </Grid>

            <Grid item xs={12}>
             
              <Button size="small" fullWidth  className="btns" onClick={handleSubmit}>Set Reminder</Button>
            </Grid>
          </Grid>
        </BottomContainer>
      </StyledDialog>
    </>
  );
};

export default ReminderTodo;