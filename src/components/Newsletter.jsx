import { useState, useEffect } from 'react';

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission logic
        console.log("Subscribed with email:", email);
        setEmail('');
      };

      useEffect(() => {
        // Set a timer to show the newsletter after 3 seconds
        const timer = setTimeout(() => {
          setVisible(true);
        }, 4000); // 4 seconds
    
        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
      }, []);

      const handleClose = () => {
        setVisible(false); // Hide the newsletter when close is clicked
      };
    
      if (!visible) return null; // Don't render if not visible

  return (
    <div className=' animate-slideIn fixed z-40 rounded-2xl bg-black bg-opacity-70 px-10 py-16 top-32 font-semibold left-30 text-2xl 
      lg:right-10'>

      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        &#10005;
      </button>

        <h3 className='text-[#F5F5DC] font-navbar text-2xl pb-14 whitespace-nowrap xl:text-3xl'>Subscribe to our newsletter <br/>for adventure updates</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="email"
          className="px-3 py-2 bg-[#F5F5DC] text-[#696969] border border-gray-300 font-navbar rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-amber-500 text-white py-2 font-navbar rounded-lg hover:bg-amber-600 hover:text-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter