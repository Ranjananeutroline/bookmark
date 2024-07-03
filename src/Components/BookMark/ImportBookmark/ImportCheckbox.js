import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

const ImportCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name=" "
              color="success"
            />
          }
          label={label}
        />
      </FormGroup>
    </>
  );
};

export default ImportCheckbox;
