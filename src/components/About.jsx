import {mapLogo } from "../constants";


const About = () => {


  return (
    
      <section id="about" className="p-8 relative bg-transparent bg-no-repeat overflow-hidden md:bg-cover"  style={{ backgroundImage: `url(${mapLogo})` }}>
      
      <div className="flex justify-center py-4 lg:justify-start xl:mt-[4vh]">
      <h2 className="text-3xl font-navbar pr-3 text-[#515151] lg:text-4xl">More about</h2>
      <h2 className="text-3xl font-navbar text-amber-500 lg:text-4xl">Kubusi Safaris</h2>
      </div>
      
      
        <div className="items-start py-4 bg-black bg-opacity-80 w-fit rounded-2xl text-[#F5F5DC] text-lg">
          
          <div className="p-5 font-navbar">

            <p className="py-2 text-center lg:text-start">Kubusi Safaris was established in 1998 and is owned and operated by the Williamson Family.</p>
            <p className="py-2 text-center lg:text-start">Operating from Tuskers Lodge near Makhanda, Kubusi Safaris is well known for its excellent quality and 
          service in the international arena. <br/>All hunters fly into Port Elizabeth National Airport, 
          where you will be collected by your personal guide.</p>
            <p className="py-2 text-center lg:text-start">We offer Ethical fair chase hunting safaris in the Eastern Cape province
           of South Africa for both Bow hunters and sport rifle hunters. 
          <br/>All hunting is done on foot in the spirit of fair chase.</p>
           <p className="py-2 text-center lg:text-start">Our trophy quality and game volume is exceptional, 
          offering trophy hunting (including Big 5 hunts), package hunts and management hunts.
              </p>
            <p className="py-2 text-center lg:text-start">We offer our own on site Taxidermy Company, ensuring the full responsibility for your safari experience.</p>
        
          </div>
          
        </div>
        <a href="#tuskers">
        <button className=" my-2 p-6 justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-80 rounded-2xl text-xl border-[1px] border-amber-500 hover:text-amber-500
         hover:scale-105 transition-transform duration-300">
          More about Tuskers Lodge</button>
        </a>

    </section>
   
    
    
  )
}

export default About