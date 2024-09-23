import { aboutImg2, africamapbg } from "../../constants"
import { useState } from 'react';
import Footer from "../Footer"
import ContactForm from "../ContactForm";
import { Link } from "react-router-dom";
import logo from "../../assets/logogrey.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";

const HuntPackage = () => {
    const [isContactFormVisible, setContactFormVisible] = useState(false);

    const handleButtonClick = () => {
      setContactFormVisible(!isContactFormVisible);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-screen bg-gradient-to-b from-[#F5F5DC] to-[#DEB887]">
        <div className="relative flex items-center justify-between ml-[10vw] mt-[2vh]">
      {/* Logo Link */}
      <Link to="/">
        <div className="hover:scale-105 transition-transform duration-300">
          <img className="rounded-2xl" src={logo} width={110} alt="logo" />
        </div>
      </Link>

      {/* Burger Menu Icon for Mobile */}
      <div className="md:hidden mr-[12vw]">
      <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose className="text-4xl text-amber-500" /> // X icon when menu is open
          ) : (
            <GiHamburgerMenu className="text-4xl text-amber-500" /> // Burger icon when menu is closed
          )}
        </button>
      </div>

      {/* Buttons Group (visible on all screens) */}
      <div className={`hidden space-x-4 mr-[10vw] ${isMenuOpen ? 'block md:flex' : 'hidden md:flex'}`}>
      <Link to="/">
          <button 
            className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            Home
          </button>
        </Link>
        <Link to="/other">
          <button 
            className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            More Activities
          </button>
        </Link>

        <Link to="/photographic">
          <button 
            className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            Photographic
          </button>
        </Link>
        

        <button 
          className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          onClick={handleButtonClick}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu (only visible on small screens) */}
      <div className={`absolute top-24 h-[40vh] contain-content left-0 w-full bg-[#F5F5DC] z-40 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      
        <ul className="flex flex-col space-y-6 py-6 z-50">
        <li>
            <Link to="/" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/other" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              More Activities
            </Link>
          </li>
          <li>
            <Link to="/photographic" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              Photographic
            </Link>
          </li>
          <li>
            <button 
              className="text-lg font-navbar hover:text-amber-500" 
              onClick={() => {
                handleButtonClick();
                toggleMenu(); // Close menu on click
              }}
            >
              Contact Us
            </button>
          </li>
          <img className='fixed top-0 right-0 opacity-20 w-[60vw] overflow-hidden z-10' src={africamapbg}/>
        </ul>
      </div>
    </div>

        <div className="mt-[1vh]">
            <h1 className="text-4xl font-navbar mx-[10vw] p-3">Hunting</h1>
            <h2 className="text-xl font-navbar mx-[10vw] p-3">All Hunting Is Done On Foot, Ethical Walk and Stalk.</h2>
        </div>
        <div className="w-[80vw] mx-[10vw] grid grid-cols-1 md:grid-cols-2 gap-1 pb-[2vh] justify-center font-navbar">

            
        
            <div className="col-span-1 row-span-1 p-5 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 hover:brightness-105 transition-transform duration-300 xl:col-span-2">
                <h4 className="text-xl pb-2 xl:text-3xl">Rifle Hunting:</h4>
                <p className="lg:text-lg ">All hunting is done on foot in <b className="text-amber-500">The Spirit of Fair Chase</b>. We take great pride in promoting the sport of hunting, 
                    enjoying the challenge of getting you in as close as possible offering the perfect shot. 
                    We back up wounded game with Terriers which is an adventure on its own.
                    The Eastern Cape with its great diversity in landscape and game is a true hunting paradise. 
                    There are probably few regions in Africa that can offer as much to the hunter.
                </p>
            </div>
            
            <div className="col-span-1 row-span-1 p-5 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 hover:brightness-105 transition-transform duration-300">
            <h4 className="text-xl pb-2 xl:text-3xl">Big 5 Hunting:</h4>
                <p className="lg:text-lg">Kubusi Safaris offers all the Big 5 in South Africa and Zimbabwe.  
                    We have good concessions in Mpumalanga and North West Province for 
                    <b className="text-amber-500"> Hippo, Crocodile, Lion, Elephant, Buffalo, White and Black Rhino and limited Leopard hunts. </b> 
                    Our Lion hunting is done in the North West Province. This is a ranched hunt and is done ethically.  
                    We quote individually on the Big 5 as the prices change monthly; 
                    we also have access to PAC (problem animal control) Big 5 animals. Contact us for quotes.
                </p>
            </div>
            <div className="col-span-1 xl:row-span-2 2xl:row-span-2">
            <img
              src={aboutImg2}
              alt="Kudu"
              className=" w-full rounded-lg"
            />
            </div>
            
            <div className="col-span-1 row-span-1 p-5 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 hover:brightness-105 transition-transform duration-300">
            <h4 className="text-xl pb-2 xl:text-3xl">Bow Hunting:</h4>
                <p className="lg:text-lg">
                Spot and stalk is also a very productive way of bow hunting. 
                Mountain meadows, Acacia veld, and grassy clearings are often the preferred habitat for species such as 
                <b className="text-amber-500"> Impala , Blesbuck, Red Hartebeest, Warthog, Blue Wildebeest, and Zebra. </b>
                 Being a rather hilly and vegetated region, most parts of the Eastern Cape make good stalking grounds.
                </p>
                <p className="lg:text-lg">
                Game can often be observed from high vantage points with binoculars giving the hunter ample time to plan a stalk. 
                Closing the distance from several hundred meters to under forty can often be very challenging and requires a fair 
                amount of skill and patience, especially the last fifty meters. Bring kneepads! You will often be required to remove 
                your shoes for the finals. We also have blinds to hunt from. 
                </p>
            </div>
            
            
        </div>

        <div className="w-[80vw] mx-[10vw] p-5 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl pb-2 xl:text-3xl">Rifle Hire:</h4>
                <p className="pb-2 ">
                For those who do not want the hassle of traveling with their own weapons, 
                <b className="text-amber-500"> we have a selection of good calibers and optics to rent on a daily basis. </b>
                If you do want to travel with your own weapon, chat to your travel agent regarding which airlines are weapons carriers. 
                You can also use our preferred VIP meet and greet services at Johannesburg or Cape Town International airports. 
                They will clear your weapons for you and guide you through the whole process.
                </p>
                <p className="pb-2 lg:text-lg">
                Contact Henry Durrheim  +27 83 379 7062. henry@riflepermits.com 
                </p>
        </div>
        <div className="w-[80vw] mx-[10vw] mt-[2vh] p-5 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl pb-2 xl:text-3xl">Packages and Trophy Hunting:</h4>
                <p className="pb-2 ">
                    Please contact us for any hunting further information regarding hunting packages.
                    We also custom make packages to suit your preferences and wish list.
                </p>
        </div>
        <div className="relative ml-[10vw] mt-[2vh]">
        <p className=" font-navbar">
        Have any questions? Feel free to contact us.
            
        </p>
            <div >
                <button 
                    className="relative p-5 my-[2vh] inset-0 flex justify-center items-center 
                     hover:text-amber-500 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl z-50 border-[1px] border-amber-500 
                     hover:scale-105 transition-transform duration-300"
                    onClick={handleButtonClick}
                    >
                    Contact Us
                </button>
                </div>
            
        </div>
        {isContactFormVisible && (
        <div className="z-50">
          <ContactForm setContactFormVisible={setContactFormVisible} />
        </div>
      )}
        <Footer/>
    </div>
  )
}

export default HuntPackage