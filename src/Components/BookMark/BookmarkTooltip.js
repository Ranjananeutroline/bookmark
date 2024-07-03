import React from "react";
import Tooltip from "@mui/material/Tooltip";

import Bookmark from "../../Assets/Bookmark.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const BookmarkTooltip = ({
  handleClickBookmark,
  anchorRef,
  handleToggle,
  opens,
}) => {
  return (
    <>
      <div>
        <Tooltip title="Bookmarks">
          <Button
            disableRipple
            ref={anchorRef}
            aria-controls={opens ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ backgroundColor: "transparent" }}
          >
            <Link to="/bookmark/sidebar">
              <img
                src={Bookmark}
                alt="bookmark"
                onClick={handleClickBookmark}
              ></img>
            </Link>
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default BookmarkTooltip;
