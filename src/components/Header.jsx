import { useState } from 'react';
import logo from "../assets/logogrey.png";
import { africamapbg, NAV_ITEMS } from "../constants/index.js";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center bg-[#F5F5DC] justify-between p-1 z-40"
    >
      {/* Logo */}
      <div className="flex flex-shrink-0 pl-5">
        <img src={logo} width={100} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <ul className="flex m-5">
          {NAV_ITEMS.map((item, index) => (
            <li className="px-10 text-lg font-navbar hover:text-amber-500 hover:scale-105 transition-transform duration-300" key={index}>
              <a href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <div className="lg:hidden flex items-center pr-5">
      <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose className="text-4xl text-amber-500" /> // X icon when menu is open
          ) : (
            <GiHamburgerMenu className="text-4xl text-amber-500" /> // Burger icon when menu is closed
          )}
        </button>
      </div>

      {/* Mobile Menu (visible when toggled) */}
{isMenuOpen && (
  <div
    className="lg:hidden absolute h-[40vh] top-full left-0 w-full bg-[#F5F5DC] bg-cover bg-center bg-no-repeat z-50"
  >
    
    <ul className="flex flex-col m-5">
      {NAV_ITEMS.map((item, index) => (
        <li
          className="py-4 text-lg font-navbar hover:text-amber-500 hover:scale-105 transition-transform duration-300"
          key={index}
        >
          <a href={item.link} onClick={() => setIsMenuOpen(false)}>
            {item.title}
          </a>
        </li>
      ))}
      <img className='fixed right-0 w-[55vw] opacity-20 overflow-hidden z-10' src={africamapbg}/>
    </ul>
  </div>
)}
    </nav>
  );
};

export default Header;
