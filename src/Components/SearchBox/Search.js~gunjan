import React from "react";
import { TextField } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
const SearchContainer = styled.div`
  .clearform {
  }
  .clearform:hover {
    opacity: 1;
  }
  .textfield {
    width: 28vw;
    position: relative;
    margin-right: 2rem;

    @media screen and (min-width: 768px) and (max-width: 950px) {
      width: 35vw;
    }
    @media screen and (min-width: 550px) and (max-width: 768px) {
      width: 35vw;
    }
    @media screen and (max-width: 550px) {
      width: 45vw;
    }
  }

  .icon {
    position: relative;

    display: flex;
    float: right;

    fontsize: 1.5em;
    color: gray;
    margintop: -1.8rem;

    opacity: 1;
    backgroundcolor: white;
    cursor: pointer;
  }
`;

const Search = ({ state, name }) => {
  const [data, setData] = React.useState("");
  const [showCross, setShowCross] = React.useState(false);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleClick = () => {
    setData("");
  };

  const handleKey = (e) => {
    if (e.Key !== 0) {
      setShowCross(true);
    }
  };
  return (
    <>
      <SearchContainer>
        <form action={state} target="_blank">
          <TextField
            id="search-form"
            className="textfield"
            placeholder=""
            variant="standard"
            name={name}
            autoComplete="off"
            type="text"
            value={data}
            onChange={handleChange}
            autoFocus
            InputProps={{
              disableUnderline: true,
            }}
            onKeyPress={handleKey}
          ></TextField>
        </form>

        {data.length !== 0 && showCross === true ? (
          <IoCloseOutline
            className="clearform"
            onClick={handleClick}
            style={{
              position: "relative",

              display: "flex",
              float: "right",

              fontSize: "1.5em",
              color: "gray",
              marginTop: "-1.8rem",

              opacity: "1",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          />
        ) : null}
      </SearchContainer>
    </>
  );
};

export default Search;
