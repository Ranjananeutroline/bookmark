import { Button, Dialog, DialogActions } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFreeCancellation } from "react-icons/md";
import styled from "styled-components";
import logo from "../../Assets/popupblocker.png";
const CancelIcon = styled.div`
  padding: 0.5rem 0rem 0rem 0rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const DialogHeading = styled.div`
  margin: 0rem 0.5rem;
  text-align: center;

  span {
    font-size: 1rem;
    font-weight: 600;
    ${"" /* margin-left: 0.5rem; */}
    text-align:center;
  }
  .icon {
    color: red;
    margin-right: 0.4rem;
  }
  .title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }
`;
const MsgContent = styled.div`
  text-align: center;
  .done {
    padding: 0.2rem 0.1rem;

    border-radius: 5px;
    font-size: 0.8rem;
    color: #fff;
    background: #18a0fb;
    cursor: pointer;
    :hover {
      color: #fff;
      background: #18a0fb;
    }
  }
`;
const MsgDescription = styled.p`
  display: flex;
  gap: 2rem;
  padding: 0.5rem 1rem 0rem 1rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    // background: red;
    padding: 0rem 0rem 0rem 0rem;
    text-align: center;
    gap: 1rem;
  }

  img {
    height: 28vh;
    object-fit: cover;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-size: 0.875rem;
  }
`;
const PopBlocker = ({ open, handleCloseMsg }) => {

  return (
   
      <Dialog
        BackdropProps={{ style: { background: "transparent" } }}
        open={open}
        onClose={handleCloseMsg}
        PaperProps={{
          style: {
            borderRadius: "8px",
            background: "#F3F3F3",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            backgroundColor: "#F3F3F3",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) ",
            border: "2px solid #FFFAFF",
          },
        }}
      >
        <CancelIcon>
          <IoMdClose onClick={handleCloseMsg} />
        </CancelIcon>

        <DialogHeading>
          <MdOutlineFreeCancellation className="icon" />
          <span className="title">Pop-ups were blocked on this page</span>

          <MsgContent>
            <MsgDescription>
              <img src={logo} alt="" />
              <Description>
                <div className="text">
                  {" "}
                  To open all the items, you need to allow your browser
                  popup.You can click on the right side of your search bar in
                  the browser as shown in the picture.
                </div>
                <span>OR</span>
                <div className="text">
                  Enable popup from your default setting.
                </div>
              </Description>
            </MsgDescription>

            <DialogActions>
              <Button className="done" onClick={ handleCloseMsg}> Done</Button>
            </DialogActions>
          </MsgContent>
        </DialogHeading>
      </Dialog>
  
  );
};

export default PopBlocker;
