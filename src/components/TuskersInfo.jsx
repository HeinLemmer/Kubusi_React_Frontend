import { aboutImg, tuskGD, tuskshort } from "../constants"
import { useState } from 'react';
import ContactForm from "./ContactForm";

const TuskersInfo = () => {
    const [isContactFormVisible, setContactFormVisible] = useState(false);

    const handleButtonClick = () => {
      setContactFormVisible(!isContactFormVisible);
    };
  return (
    <section id="tuskers" className="bg-[#F5F5DC] overflow-hidden">
        <div className="flex justify-center items-center p-4">
            <h2 className=" pr-[1vw] text-2xl font-navbar text-[#515151] lg:text-4xl">More about </h2>
            <h2 className="text-2xl font-navbar text-amber-500 lg:text-4xl">Tuskers Lodge</h2>
        </div>
        
        <div className="w-[90vw] grid grid-cols-3 mx-[5vw] my-[2vh] rounded-2xl text-lg gap-2 justify-center">
        <div className="p-5 font-navbar bg-black bg-opacity-80 text-[#F5F5DC] rounded-2xl col-span-3 row-span-3">
            <p className="p-5">
                Tuskers Lodge is a Classic African thatched hunting lodge, fitted and decorated to international standards.<br/>
                The Lodge is 12kms (or 15mins drive) from Makhanda on the R67 going towards Bathurst/Port Alfred; turn right at the Tuskers Lodge sign.<br/> 
                The Lodge consists of a lounge, honesty bar (wine and malt only), a dining room and braai area, boma and swimming pool.
            </p>
            
        </div>
        
            <div className="col-span-1 row-span-1 rounded-2xl lg:brightness-90 hover:brightness-100 duration-100 ease-in">
            <img 
                src={aboutImg}
                className="w-[30vw] rounded-2xl"
                loading="lazy" 
                />
            </div>
            <div className=" col-span-1 row-span-1 rounded-2xl lg:brightness-90 hover:brightness-100 duration-100 ease-in">
            <img 
                    src={tuskshort}
                    className="w-[30vw] rounded-2xl"
                    loading="lazy" 
                    />
            </div>
            
            <div className=" col-span-1 row-span-1 rounded-2xl lg:brightness-90 hover:brightness-100 duration-100 ease-in">
            <img 
                    src={tuskGD}
                    className="w-[30vw] rounded-2xl"
                    loading="lazy" 
                    />
            </div>
            <div className="p-5 font-navbar bg-black bg-opacity-80 text-[#F5F5DC] rounded-2xl col-span-3 row-span-1">
            <p className="p-5">
                Tuskers consists of 8 thatched en-suite chalets. 4 chalets have a double and single bed and 4 chalets have 2 single beds.
                Our main house has 4 en-suite bedrooms with 2 single beds in each room. <br/>
                Tuskers can accommodate 24 guests sharing.
            </p>
            <div >
                <button 
                    className="p-5 mx-[1vw] inset-0 flex justify-center items-center 
                     hover:text-amber-500 font-navbar text-[#F5F5DC] rounded-2xl z-50 border-[1px] border-amber-500 
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

        </div>
        
    </section>
  )
}

export default TuskersInfo