import React from "react";

import { TextField, makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  root: {
    "& input::placeholder": {
      color: "#fff",
    },
  },
}));

const TextFieldComponent = ({ name, value, onChange, ...otherProps }) => {
  const textFieldConfig = {
    variant: "standard",

    size: "small",
    ...otherProps,
    onChange,
    InputProps: {
      disableUnderline: true,
    },
  };

  const { root } = usestyles(otherProps);
  return (
    <>
      <TextField
        className={`${root}`}
        {...textFieldConfig}
        style={{ color: "#fff" }}
      />
    </>
  );
};

export default TextFieldComponent;
