import { useEffect, useState } from "react";
import logo from "../assets/logogrey.png";

const Curtain = () => {

    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set the curtain to hide after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="fixed inset-0 bg-[#F5F5DC]  z-50 flex items-center justify-center transition-opacity duration-2000 ease-out opacity-100">
        <img src={logo} width={300} alt="logo" className="animate-pulse duration-300" />
      </div>
    )
  )
}

export default Curtain