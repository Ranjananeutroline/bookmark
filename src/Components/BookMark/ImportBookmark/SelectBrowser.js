import { MenuItem, Select } from "@mui/material";
import React from "react";
const data = [
  {
    values: "Google Chrome",
  },
  {
    values: "Microsoft Edge",
  },
  {
    values: "Firefox",
  },
];
const SelectBrowser = ({selectmenu}) => {
  const [selectbrowser, setselectbrowser] = React.useState("");

  const handleChange = (event) => {
    setselectbrowser(event.target.value);
  };

const menuitemJsx=data.map((item,index) => {
  const selectmenu=selectbrowser===item.values;
  console.log(selectmenu)
  return <MenuItem value={item.values} key={index}
  selectmenu={selectmenu}
  >{item.values}</MenuItem>;
})
  return (
    <>
      <Select
        value={selectbrowser}
        onChange={handleChange}
        fullWidth="true"
        size="small"
      >
        {menuitemJsx}
      </Select>
      <div>{selectbrowser}</div>
    </>
  );
};

export default SelectBrowser;
