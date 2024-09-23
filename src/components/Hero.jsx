import { useEffect, useState } from 'react';
import { HEROIMAGES } from '../constants/index.js';
import Newsletter from './Newsletter.jsx';
import ContactForm from './ContactForm.jsx';



const Hero = () => {
  

  const [currentImage, setCurrentImage] = useState(0);

  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleButtonClick = () => {
    setContactFormVisible(!isContactFormVisible);
  };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % HEROIMAGES.length);
        }, 8000); 
        return () => clearInterval(interval);
      }, []);
  return (
    <section className="flex relative h-[100vh] w-screen overflow-hidden justify-center items-center lg:justify-start">
      {HEROIMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDuration: '3000ms',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}
      
      {/* Gradient Overlay */}
      <div
    className="absolute inset-0 opacity-80"
    style={{
      background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1))',
    }}
  ></div>

     {/* Content on top */}
    <div className="relative pl-10 pr-28 py-5 font-navbar mt-72 bg-black bg-opacity-80 w-screen lg:w-[50rem] lg:rounded-2xl">
        <h1 className="text-[#F5F5DC] text-2xl font-bold lg:text-4xl">Welcome to</h1>
        <h1 className="text-amber-500 text-5xl font-extrabold whitespace-nowrap lg:text-7xl">Kubusi Safaris</h1>
    </div>
    <div className="absolute z-20 justify-start font-navbar left-[10vw] bottom-[5vh] 
    md:left-[5vw] lg:bottom-[10vh] xl:left-[4vw] 2xl:left-[3vw] 2xl:bottom-[15vh]">
    <button className="hover:text-amber-500 p-5 justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 rounded-2xl text-xl border-[1px] border-amber-500  hover:scale-105 transition-transform duration-300"
        onClick={handleButtonClick}>
          Contact Us
          </button>
    </div>
    {isContactFormVisible && (
        <div className="z-50">
          <ContactForm setContactFormVisible={setContactFormVisible} />
        </div>
      )}
    <Newsletter/>
    </section>
  )
}

export default Hero