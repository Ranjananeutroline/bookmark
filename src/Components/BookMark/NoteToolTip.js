import React from 'react'
import Tooltip from "@mui/material/Tooltip";
import Button from "@material-ui/core/Button";
import todoicon from "../../Assets/todoicon.png";
const NoteToolTip = ({
    anchorRef,
    handleToggle,
    open,
}) => {
    return (
        <div>
            <Tooltip title="Todo List">
          <Button
            disableRipple
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ backgroundColor: "transparent" }}
          >
            <div >
              <img
                src={todoicon}
                alt="todo"
                width="25px"
                height="25px"
                style={{ backgroundColor: "rgb(227, 230, 228 / 0.1)" }}
              ></img>
            </div>
          </Button>
        </Tooltip>
        </div>
    )
}

export default NoteToolTip
