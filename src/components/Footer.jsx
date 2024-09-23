import { currentYear } from "../constants";

const Footer = () => {
  return (
    <div className="block pt-[5vh]">
      {/* COPYRIGHT AND SOCIAL ICONS */}
      <div className="flex z-50 font-navbar h-[13vh] w-screen bg-[#DEB887]">
        <p className="py-[3vh]  lg:py-[5vh] px-[5vw] font-navbar" 
        style={{wordSpacing: '0.2vw'}}>
          &copy; Copyright
          <br className="md:hidden " /> {currentYear} Kubusi Safaris
        </p>
        <div className="absolute z-40 right-0">
          <ul className="py-[4vh] lg:py-[5vh] px-[6vw] flex font-navbar">
            {/* Facebook Icon */}
            <li className="px-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-[#515151] hover:scale-110 transition-transform hover:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.402.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.671c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.31h3.59l-.467 3.621h-3.123V24h6.116C23.402 24 24 23.402 24 22.676V1.325C24 .598 23.402 0 22.675 0z" />
                </svg>
              </a>
            </li>

            {/* Instagram Icon */}
            <li className="px-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-[#515151] hover:scale-110 transition-transform hover:text-violet-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.418.405.57.2.977.437 1.406.865.428.429.665.836.865 1.407.165.458.351 1.248.405 2.417.058 1.267.069 1.648.069 4.851s-.012 3.584-.069 4.85c-.054 1.17-.24 1.96-.405 2.418-.2.57-.437.977-.865 1.406-.429.428-.836.665-1.406.865-.458.165-1.248.351-2.417.405-1.267.058-1.648.069-4.851.069s-3.584-.012-4.85-.069c-1.17-.054-1.96-.24-2.418-.405a4.608 4.608 0 01-1.406-.865c-.428-.429-.665-.836-.865-1.406-.165-.458-.351-1.248-.405-2.417C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.85c.054-1.17.24-1.96.405-2.418.2-.57.437-.977.865-1.407.429-.428.836-.665 1.406-.865.458-.165 1.248-.351 2.417-.405 1.267-.058 1.648-.069 4.851-.069zm0-2.163C8.741 0 8.332.012 7.052.07c-1.281.059-2.17.253-2.927.54a6.554 6.554 0 00-2.375 1.548A6.553 6.553 0 00.452 4.49c-.286.756-.48 1.646-.54 2.926C.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.059 1.28.253 2.17.54 2.926a6.549 6.549 0 001.548 2.376 6.547 6.547 0 002.376 1.547c.756.287 1.646.48 2.927.54 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.28-.059 2.17-.253 2.926-.54a6.554 6.554 0 002.376-1.548 6.553 6.553 0 001.547-2.376c.287-.756.48-1.646.54-2.926.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.059-1.28-.253-2.17-.54-2.927a6.552 6.552 0 00-1.548-2.375 6.554 6.554 0 00-2.376-1.548c-.756-.287-1.646-.48-2.926-.54C15.668.012 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </li>

            {/* YouTube Icon */}
            <li className="px-3 rounded-2xl">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-7 h-6 text-[#515151] hover:scale-110 transition-transform hover:text-red-500"
                  fill="currentColor"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a2.99 2.99 0 00-2.105-2.11C19.48 3.499 12 3.499 12 3.499s-7.48 0-9.393.577a2.993 2.993 0 00-2.105 2.11C0 8.106 0 12 0 12s0 3.894.502 5.813a2.992 2.992 0 002.105 2.11C4.52 20.501 12 20.501 12 20.501s7.48 0 9.393-.577a2.992 2.992 0 002.105-2.11C24 15.894 24 12 24 12s0-3.894-.502-5.813zM9.602 15.203V8.797L15.546 12l-5.944 3.203z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
