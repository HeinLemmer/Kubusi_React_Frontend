// index.js

import buffalo from '../assets/hero/buffalo.jpg';
import rhino from '../assets/hero/rhino.jpg';
import kudu from '../assets/hero/kudu.jpg';

import map from '../assets/about/elephant_NoBG.png';
import view from '../assets/about/tuskerslodge24.jpg';
import wbImg from '../assets/about/kudu_side.jpg';
import africa from '../assets/about/africaMap.png';

//PACKAGES IMGS IMPORT

import hunting from '../assets/packages/8828.jpg';
import custom from '../assets/packages/23101.jpg';
import otherAct from '../assets/packages/6118.jpg';

//TUSKERS LODGE IMGS

import tusk1 from '../assets/about/tuskerslodge43.jpg';
import tusk2 from '../assets/about/tuskerslodge29.jpg';
import tusk3 from '../assets/packages/48475.jpg';

import spring from '../assets/packages/springbok-006.jpg';
import scuba from '../assets/packages/dive.jpg';
import shark from '../assets/packages/rag1.jpg';

import gd from '../assets/packages/tracking.jpg';
import birdw from '../assets/packages/bird.jpg';
import footerImg from '../assets/footerImg.jpg';
// Constants for text content
export const footImg = footerImg;
  
  // Constants for navigation (navbar)
  export const NAV_ITEMS = [
    { title: "Home", link: "/" },
    { title: "About", link: "#about" },
    { title: "Packages", link: "#packages" },
    { title: "Tuskers Lodge", link: "#tuskers" },

  ];
  
  // Constants for images (You can import images or use URLs)
  export const IMAGES = {
 // Local image path or URL
    aboutImage: "/images/about-safari.jpg",
    serviceImage1: "/images/safari-tour.jpg",
    serviceImage2: "/images/wildlife-photography.jpg",
    serviceImage3: "/images/luxury-lodge.jpg",
    contactImage: "/images/contact-us.jpg",
  };

  export const HEROIMAGES = [buffalo, rhino, kudu]
  export const mapLogo = map;
  export const gamedrive = gd;
  export const bird = birdw;
  export const aboutImg = view;
  export const aboutImg2 = wbImg;
  export const tusklong = tusk1;
  export const tuskshort = tusk2;
  export const tuskGD = tusk3;
  export const bok = spring;
  export const scubadive = scuba;
  export const ragshark = shark;
  export const africamapbg = africa;

  // Example constants for colors (optional)
  export const COLORS = {
    primaryColor: "#CC5500",  // Burnt orange for accents
    secondaryColor: "#556B2F", // Olive green for text or backgrounds
    navBackground: "#F5F5DC", // Light beige for navbar background
    navTextColor: "#696969", // Dark grey for nav text
  };
  
  // Example constants for other website configurations (optional)
  export const SITE_CONFIG = {
    siteName: "Wild Safari Adventures",
    siteURL: "https://www.wildsafari.com",
    contactEmail: "info@wildsafari.com",
    phoneNumber: "+1 (234) 567-8900",
  };

  //Package Bento INFO
  export const packages = [
    {
      title: 'Photographic Safari',
      description: 'Learn more about the Photographic Safari Packages we offer.',
      image: custom,
      bgColor: 'bg-black bg-opacity-80',
      link: '/photographic', // Link to more info page
    },
    {
      title: 'Hunting Safari',
      description: 'Learn more about the African Hunting Safari experience.',
      image: hunting,
      bgColor: 'bg-black bg-opacity-80',
      link: '/hunt', // Link to more info page
    },
    {
      title: 'Other Activities Offered',
      description: 'Learn more about the other activities that are available.',
      image: otherAct,
      bgColor: 'bg-black bg-opacity-80',
      link: '/other', // Link to more info page
    },
  ];
  

  export const CONTACT = {
    address: `"Makhanda, 
                Eastern Cape 6139, 
                South Africa "`,
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
  };
  
    // DISPLAY CORRECT YEAR
    export const currentYear = new Date().getFullYear();