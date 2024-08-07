import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Careers from "./Careers";
import AboutAllDetail from "./AboutAllDetail";
import styled from 'styled-components';
const TabContainer=styled.div`
.tabtitle
{
  font-size:1.5rem;
  @media screen and (max-width:1500px)
  {
    font-size:1rem;
  }
}

`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <TabContainer>
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
         
        >
          <Tab label="About"   {...a11yProps(0)} className="tabtitle"/>
          <Tab label="Careers" {...a11yProps(1)} className="tabtitle"/>
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        style={{
          "& .MuiBox-root": {
            padding: "0px",
          },
        }}
      >
        <AboutAllDetail />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Careers />
      </TabPanel>
    </Box>
    </TabContainer>
  );
}
