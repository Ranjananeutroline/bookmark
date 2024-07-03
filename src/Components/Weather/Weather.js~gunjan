import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Container = styled.div`
  display: flex;
  // flex-direction: row;
  padding-top: 20px ;
  // gap: 2px;
  // margin-left:10rem;

  @media screen and (max-width:1600px){
    padding-top: 10px;
    // gap: 2px;
    margin-left:0rem;
  }
  @media screen and (max-width:916px){
    display:none;
  }
`;
const WeatherContainer=styled.div`
background:#EDECEC;
display: flex;
gap: 2px;
margin-left:0.8rem;
padding-top:0.3rem;
// padding:0.3rem 1rem;
border-radius:10px;
:hover
{
  // cursor:pointer;
  // background-color:#EFF3F6;
}
`;
const WeatherIcon = styled.div`

`;
const CityInfo = styled.div``;
const City = styled.div`
  font-family: "Nunito", sans-serif;

  font-size: 1.3rem;
  line-height: 1.5;
  letter-spacing: 0.21rem;
  color: #575757;
  font-weight: 600;
text-transform:uppercase;
  margin-right: 10px;
  @media screen and (max-width:1600px){
    font-weight: 550;
    font-size:15px;
    letter-spacing: 0.10rem;
  
    margin-top:0.5rem;
    line-height: 0.7;
    margin-right: 8px;
   
  }
  @media screen and (max-width:768px){
    font-size:10px;
  }
`;
const WeatherDetail = styled.div`
  font-size: 13px;
  letter-spacing: 0.1rem;
  // font-weight: 600;
  color: #3d3636;
  margin-right: 12px;
  @media screen and (max-width:1600px){
    // font-size: 10px;
    // margin-right: 10px;
  
  }
  @media screen and (max-width:768px){
    display:none;
  }
`;
const TemperatureInfo = styled.div`

margin-right:1.2rem;
`;
const Temperature = styled.div`
  margin-top: 0;
  // margin-bottom: 5px;
  color: gray;
  letter-spacing: 0.1rem;
  font-size: 16px;
  @media screen and (max-width:1600px){
    font-size: 14px;
   
    
  }
`;
const Toggle = styled.div`

`;

const TextSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 12px;
  color: #fff;
  padding-right: 2px;
  @media screen and (max-width:1500px){
    // font-size: 12px;
    
  }
`;

function Weather({ data }) {
  const [checked, setChecked] = useState(true);
  const changeHandler = () => {
    setChecked(!checked);
  };
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <Container>
      <WeatherContainer>
      <WeatherIcon>
        <img src={iconurl} alt="iconurl" />
      </WeatherIcon>
      <CityInfo>
        <City
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { color: "white" }
              : { color: "black" }
          }
        >
          {data.name}
        </City>
        <WeatherDetail
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { color: "white" }
              : { color: "black" }
          }
        >
          {data.weather[0].description}
        </WeatherDetail>
      </CityInfo>
      <TemperatureInfo>
        <Temperature
          style={
            localStorage.getItem("DarkMode") === "true"
              ? { color: "white" }
              : { color: "black" }
          }
        >
          {checked
            ? Math.floor(data.main.temp - 273.15) + "° C"
            : Math.floor((data.main.temp - 273.15) * (9 / 5) + 32) + "° F"}
        </Temperature>
        <Toggle>
          <Switch
            className="react-switch"
            onChange={changeHandler}
            checked={checked}
            uncheckedIcon={<TextSwitch>° F</TextSwitch>}
            checkedIcon={<TextSwitch>° C</TextSwitch>}
            width={40}
            handleDiameter={18}
            onColor="#03A9F4"
            offColor="#03A9F4"
            height={18}
            onHandleColor="#E5E5E5"
            offHandleColor="#E5E5E5"
            
          />
        </Toggle>
      </TemperatureInfo>
      </WeatherContainer>
    </Container>
  );
}

export default Weather;
