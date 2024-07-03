import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import chrome from "../../Assets/chrome.png";
import fireFox from "../../Assets/mozilla.png";
import edge from "../../Assets/edge.png";
import opera from "../../Assets/opera.png";
import safari from "../../Assets/safari.png";
export const data = [
  {
    logo: <BsFacebook />,
    url: "https://www.messenger.com/",
    alt: "Messenger",
    color: "#4267B2",
  },
  { url: "https://mail.google.com/", logo: <BsInstagram />, alt: "Gmail" },

  {
    url: "https://www.linkedin.com/",
    logo: <BsLinkedin />,
    alt: "LinkedIn",
  },
];

export const data2 = [
  {
    logo: <BsFacebook />,
    url: "https://www.facebook.com/",
    alt: "Facebook",
    color: "#4267B2",
  },
  { url: "https://www.instagram.com/", logo: <BsInstagram />, alt: "Insta" },

  {
    url: "https://www.linkedin.com/",
    logo: <BsLinkedin />,
    alt: "LinkedIn",
  },
];

export const data3 = [
  {
    name: chrome,
    alt: "Chrome",
    url: "www.facebook.com",
  },
  {
    name: fireFox,
    alt: "FireFox",
    url: "www.facebook.com",
  },
  {
    name: edge,
    alt: "Microsoft Edge",
    url: "www.facebook.com",
  },

  {
    name: safari,
    alt: "Saffari",
    url: "www.facebook.com",
  },
];
