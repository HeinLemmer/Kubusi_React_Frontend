import PropTypes from 'prop-types';

const BentoLayout = ({ items }) => {
  return (
    <div className="flex justify-center items-center p-4">
    <div className="w-[90vw] grid grid-cols-1 md:grid-cols-3 gap-5 pb-[2vh] justify-center text-lg">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link} // Link to the page with more information
          className={`p-5 border-[3px] border-transparent font-navbar rounded-lg ${item.bgColor} ${item.colSpan ? `md:col-span-${item.colSpan}` : ''} hover:border-amber-600 hover:scale-105 transition-transform duration-300`}
        >
          {/* Image Box */}
          <div className="p-0 items-center justify-start">
            <img
              src={item.image}
              alt={item.title}
              className=" w-full rounded-lg"
              loading="lazy" 
            />
          </div>

          {/* Text Box */}
          <div className="p-4">
            
            <h2 className="text-[#F5F5DC] text-2xl">{item.title}</h2>       
            <p className="text-[#F5F5DC] mt-2 mr-5">{item.description}</p>

          </div>
          
          <div className='relative w-full h-[3vh]'>
          <svg
              className="absolute bottom-0 right-0 w-6 h-6 text-amber-500 mb-2 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
            
    </div>
    </div>
  );
};

BentoLayout.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      colSpan: PropTypes.number, // Optional, used to span multiple columns
      link: PropTypes.string.isRequired, // New: Link to the more info page
    })
  ).isRequired,
};

export default BentoLayout;
