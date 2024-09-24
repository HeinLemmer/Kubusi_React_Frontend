import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from "../../assets/logogrey.png";
import ContactForm from "../ContactForm";
import { africamapbg, bird, bok, gamedrive } from "../../constants";
import Footer from "../Footer";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";

const PhotoPackage = () => {
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
    <div className="w-[100vw] overflow-hidden bg-gradient-to-b from-[#F5F5DC] to-[#DEB887]">
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

        <Link to="/other">
          <button 
            className="px-4 py-4 font-navbar text-lg hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          >
            More Activities
          </button>
        </Link>
        

        <button 
          className="px-4 py-4 font-navbar text-lg hover:text-amber-500"
          onClick={handleButtonClick}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu (only visible on small screens) */}
      <div className={`absolute top-28 left-0 contain-content w-full bg-[#F5F5DC] z-40 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      
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
            <Link to="/other" className="text-lg font-navbar hover:text-amber-500" onClick={toggleMenu}>
              More Activities
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
        <div className="mt-[1vh]">
            <h1 className="text-4xl font-navbar mx-[10vw] p-3">Photographic Safari</h1>
            <h2 className="text-2xl font-navbar mx-[10vw] p-3">What you can expect on the Safari</h2>
        </div>

        <div className="w-[80vw] mx-[10vw] grid grid-cols-1 md:grid-cols-2 gap-1 pb-[2vh] justify-center font-navbar">
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 1</h4>
                        <p>Land in Port Elizabeth, collected by your personal guide and <b className="text-amber-500"> drive to Tuskers Lodge </b> near Makhanda.</p>

            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 2</h4>
                        <p>We spend the day at Tuskers Lodge, morning Game Drive and afternoon <b className="text-amber-500"> light hike following wildlife on foot. </b> 
                        Evening sundowners at Sunset and back to the Boma for a traditional barbecue.</p>

            </div>
            <div className="col-span-1 row-span-1 lg:col-span-2 2xl:col-span-1">
                <img className="rounded-2xl" src={gamedrive} alt="Gamedrive"/>
            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 3</h4>
                        <p>
                        Sibuya Game Reserve is one of the most unique Safari destinations South Africa. 
                        From its Reception near the Ocean, it is unique in that it has more navigable river than any other 
                        game reserve in South Africa.  
                        </p>
                        <p>
                        Consequently, as a birding destination it is hard to beat: there are nearly<b className="text-amber-500"> 400 different species. </b>  
                        This breathtakingly beautiful game reserve is sanctuary to an abundance of diverse wildlife from elephants 
                        to otters, and almost everything in between, including the <b className="text-amber-500"> Big Five. </b> 
                        </p>
                        <p>
                        We meet at the reception in Kenton-on-sea and take a 45 minute <b className="text-amber-500"> river cruise </b>  up to the game drive meeting point. A three-hour game drive is followed by lunch and then a leisurely mellow river cruise back to reception  where you will be picked up by your guide.   
                        Slow drive back to Tuskers in time for sundowners and dinner
                        </p>

            </div>
            <div className="col-span-1 2xl:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 4</h4>
                        <p>
                        Pumba Game Reserve is nestled below the Highlands ridge, <b className="text-amber-500">  rich in diversity and wildlife</b>, home of the big 5. 
                        On arrival you will be invited to enjoy a welcome drink and a briefing of the days activities. 
                        You will then be whisked away off into the African Bush in open safari land rovers to go on a thrilling 
                        search for the finest in South African Wildlife. 
                        Your game drive will last for about 2.5 hours.   
                        </p>
                        <p>
                        After the game drive, you will have a traditional African Boma Lunch and head back to Tuskers for sundowners.
                        </p>
                       

            </div>
            <div className="col-span-1 lg:col-span-2 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 5</h4>
                        <p>
                        <b className="text-amber-500"> 
                        Bush, Beach and Forrest tour. </b>This scenic route takes you through all the meandering valleys and Coastal Dune biomes. We will leave Tuskers and go through the valley on the Southwell Road. 
                        This road comes out at Kenton-on Sea past some well know wildlife areas. Abundant wildlife along the way. After Kenton you will turn off on the coastal road past Boknes and Cannon Rocks. 
                        A short 3km walk to see the Diaz Cross along the beach. From there you travel along the open grasslands hugging the coast.   
                        </p>
                        <p>
                        Further along the route enjoy incredible views of the Alexandria Dune fields and Bird Island in the distance. Then onto the woody cape area. The indigenous forest attracts a myriad of bird species and some of the small antelope species. 
                        Slow drive back to Tuskers past Alexandria, across the Bushmans River and cutting back up through the Southwell Road. 
                        </p>
                       

            </div>
            <div className="col-span-1 row-span-1 2xl:row-span-2">
                <img className="rounded-2xl" src={bird} alt="bird"/>
            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 6</h4>
                        <p>
                        We leave for a 1.5 hour drive to the world famous  <b className="text-amber-500">  Addo Elephant National Park. </b>Addo is the third largest Reserve in South Africa. 
                        Home of the famous Addo elephants. Morning drive followed by lunch at the Cattle Baron.    
                        </p>                      

            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 7</h4>
                        <p>
                        After breakfast we head off to Port Alfred and spend some time at the beach. En route we will pop into the famous Fish River Lighthouse for a <b className="text-amber-500"> panoramic view of the Indian Ocean. </b> 
                        Lunch in Port Alfred at Ocean Basket or Guidos on the Kowie River Mouth. A magic beach stroll from the Pier to Kellys beach is always a fine experience. On our way back to Tuskers we pop into the quaint 
                        little town of Bathurst and visit the oldest pub in the eastern cape, the Pig and Whistle and the Giant Pinneapple.    
                        </p>                      

            </div>
            <div className="col-span-1 2xl:col-span-2 row-span-1 lg:row-span-2 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 8</h4>
                        <p>
                        After a light breakfast we will head off to  <b className="text-amber-500">  Kwantu Private Game reserve </b> for a day trip. Game drive followed by Lunch. 
                        The game reserve is home to the village of Sidbury, built by the British Settlers to support the sheep farming community. Here you will find 
                        St Peters church built in 1838, one of the oldest Anglican churches in South Africa.   
                        </p>
                        <p>
                        The village has many tales to tell of the British Settlers whose cries rang out in the 1820’s on the plains as they battled Bushmen, Hottentots and Xhosa tribes to establish a new life in Africa. Weary travellers and locals shared stories of blood curdling encounters with lions, leopards and elephants as they rested at Pollards Inn. 
                        In the midst of the Kwantu Reserve, lies the village of Sidbury.  
                        </p>
                        
                        <p>
                        The village was founded by Lieutenant Richard Daniel, a leader of the Daniel party of the British 1820 Settlers to the Eastern Cape which came to South Africa on the ship the Duke of Marlborough. 
                        He named the village after his home town of Sidbury, Devonshire.  
                        </p>
                       

            </div>
            <div className="col-span-1 row-span-1 2xl:col-span-2 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg xl:text-3xl">Day 9</h4>
                        <p>
                        Time to say goodbye. Your guides will drop you off at the airport in Port Elizabeth after a hearty breakfast at Tuskers Lodge.     
                        </p>                      

            </div>
            
        </div>
        <div className="w-[100vh]">
        <h2 className="text-4xl font-navbar mx-[20vw] p-3">Pricing</h2>
        <h4 className="font-navbar mx-[20vw] p-3 whitespace-nowrap">Prices valid 2024 and 2025</h4>
        <div className="w-[60vw] mx-[20vw] grid grid-cols-1 md:grid-cols-2 gap-5 pb-[2vh] items-center justify-center text-lg">
        <div className="col-span-1 row-span-3">
                <img className="rounded-2xl" src={bok} alt="bird"/>
            </div>
        <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg">Cost for one (1 X 1)</h4>
                        <div>
                            <h4 className="text-2xl">$ 2600</h4>
                            <p className="text-sm">per person</p>
                        </div>                      

            </div>
            
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg">Cost for two (2 X 1)</h4>
                        <div>
                            <h4 className="text-2xl">$ 2200</h4>
                            <p className="text-sm">per person</p>
                        </div>                      

            </div>
            <div className="col-span-1 row-span-1 p-5 font-navbar text-[#F5F5DC] bg-black 
                     bg-opacity-80 rounded-2xl">
                        <h4 className="text-lg">Cost for minor (under 18)</h4>
                        <div>
                            <h4 className="text-2xl">$ 900</h4>
                            <p className="text-sm">per person</p>
                        </div>                      

            </div>
            

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

export default PhotoPackage