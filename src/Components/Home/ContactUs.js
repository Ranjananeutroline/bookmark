import React from 'react';
import ContactForm from '../Contact/ContactForm';
import styled from 'styled-components';
import GoogleMaps from '../Contact/GoogleMaps';
import logo from "../../assets/contact.png"
const ContactContainer=styled.div`
margin-top:2rem;
margin-bottom:2rem;
display:flex;

justify-content:space-evenly;
@media screen and (max-width:899px)
{
  flex-direction:column;
  gap:2rem;
  margin:0rem;
}

`;
const ContactImage=styled.img`
height:50vh;
width:100%;
@media screen and (max-width:890px)
{
  height:30vh;
}
`;
const ContactSection=styled.div`
h1
{
  position:absolute;
  color:#fff;
transform:translate(50%,200%);
}
`;
const ContactUs = () => {
  return <div>
    <ContactSection>
    <h1>Contact Us</h1>  
    <ContactImage src={logo}/>
    
    </ContactSection>
<ContactContainer>
<ContactForm/>
<GoogleMaps/>

</ContactContainer>
   
  </div>;
};

export default ContactUs;
