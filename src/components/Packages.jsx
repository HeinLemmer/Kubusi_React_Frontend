import { packages } from "../constants"
import BentoLayout from "./BentoLayout"

const Packages = () => {

  return (
    <section id="packages" className="bg-gradient-to-tl from-[#DEB887] to-[#F5F5DC] p-8">
      <div className="flex justify-center items-center p-4">
        <h2 className="text-2xl font-navbar text-[#515151] lg:text-4xl">Our Safari Packages</h2>
      </div>
      

      <BentoLayout items={packages}/>


    </section>
    
    
    
  )
}

export default Packages