import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from "../../assets/logogrey.png";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import { africamapbg, ragshark, scubadive } from "../../constants";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import Curtain from "../Curtain";

const ActivitiesPage = () => {
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
      <Curtain/>
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
        <Link to="/hunt">
          <button 
            className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            Hunting
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
      <div className={`absolute top-24 left-0 contain-content w-full bg-[#F5F5DC] z-40 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      
        <ul className="flex flex-col space-y-6 py-6">
        <li>
            <Link to="/" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/hunt" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              Hunting
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
          <img className='fixed top-0 right-0 opacity-20 w-[45vw] overflow-hidden z-10' src={africamapbg}/>
        </ul>
      </div>
    </div>
        <h2 className="text-4xl font-navbar mx-[10vw] p-3">Other Activities Offered</h2>
        <h4 className="font-navbar text-xl mx-[10vw] p-3">
        If your group splits up and you need an extra guide for any of the below activities, <br/>
        your guides fee will be $150 per day, if your hunting guide is taking you, no additional guides fee
        </h4>
        <div className="w-[80vw] mx-[10vw] grid grid-cols-1 md:grid-cols-2 gap-1 pb-[2vh] justify-center">
        <div className="col-span-1 xl:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Deep Sea Fishing</h4>
                        <h5 className="py-2">Price: $150 per person sharing charter</h5>
                        <p>
                        Port Alfred is situated in the Eastern Cape Province, midway between East London and Port Elizabeth. 
                        The Kowie, for many years just a small fishing village, is today a bustling holiday destination.
                        </p>
                        <p>
                        And everyone fishes! Blackfish has operated professional and pleasure craft from here since 1978 and they still do. So, welcome aboard, lets go fishing...
                        Your selected catch will be cooked for you by Nonkosi at the lodge
                        </p>                      

            </div>
            <div className="col-span-1 xl:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Shark Fishing from the shore</h4>
                        <h5 className="py-2">Price: $150 per person max 2 fishermen per session</h5>
                        <p>
                        We have some amazing catch, photo and release shark fishing along our coastline, just 40 minutes drive from Tuskers Lodge. 
                        We mostly catch Ragged Tooth Shark, Bronze whaler shark and numerous other smaller species. 
                        It is loads of fun with a challenging fight.
                        </p>
                                             

            </div>
            <div className="col-span-1 row-span-1 lg:col-span-2 2xl:row-span-2">
                <img className="rounded-2xl" src={ragshark} alt="Gamedrive"/>
            </div>

            <div className="col-span-1 lg:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Big 5 Game Drive</h4>
                        <h5 className="py-2">Price: $150 per person</h5>
                        <p>
                        Pumba Game Reserve is nestled below the Highlands ridge, rich in diversity and wildlife, home of the big 5. 
                        On arrival you will be invited to enjoy a welcome drink and a briefing of the days activities. 
                        </p>
                        <p>
                        You will then be whisked away off into the African Bush in open safari land rovers to go on a thrilling search for the finest in South African Wildlife. 
                        Your game drive will last for about 2.5 hours. After the game drive, you will have a traditional African Boma Lunch and head back to Tuskers for sundowners. 
                        </p>
                                             

            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Port Alfred Day trip with Spa Treatment</h4>
                        <h5 className="py-2">Price: Request local price list</h5>
                        <p>
                        Spend time at Royal St Andrews Spa.
                        </p>
                        <p>
                        Lunch at Ocean Basket or Guido beachfront at own cost (around $15 each)
                         </p>
                         <p>
                         Beach walk from Pier to Kellys Beach (approx 1 km easy stroll)
                         </p>
                         <p>
                         Pop in to Rosehill shopping Mall
                         </p>
                         <p>
                         Visit Pig and Whistle in Bathurst on your way back to the lodge   
                         </p>
                                             

            </div>

            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Addo Elephant National Park and Port Elizabeth Day Trip</h4>
                        <h5 className="py-2">Price: $150 per person</h5>
                        <p>
                        Day trip to Addo Elephant National Park, lunch at Cattle Baron
                        </p>
                        <p>
                        Drive to boardwalk shopping center and curios along beach road ·   
                         </p>
                         <p>
                         Baywest shopping center if requested as well. 
                         </p>                         

            </div>
            <div className="col-span-1 row-span-1 lg:col-span-2">
                <img className="rounded-2xl" src={scubadive} alt="Gamedrive"/>
            </div>
            <div className="col-span-1 lg:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-xl xl:text-3xl text-amber-500">Water activities in Port Alfred</h4>
                        <h5 className="py-2">Price: Request local price list</h5>
                        <p>
                        Water activities in Port Alfred
                        </p>
                        <p>
                        Spear fishing, free diving 
                         </p>
                         <p>
                         Kayaking and Stand Up Paddle boarding on the Kowie river 
                         </p>
                         <p>
                         Ocean dolphin and whale cruises 
                         </p>
                         <p>
                         River skiing, tubeing and wake boarding   
                         </p>
                         <p>
                         Surf Lessons  
                         </p>
                                             

            </div>
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

export default ActivitiesPage