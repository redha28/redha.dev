import { IoImageOutline, IoSearchCircleSharp } from "react-icons/io5";
import logo from "../../images/icon/r-icon.jpg";

const Footer = () => {
  return (
    <footer className="sticky flex justify-center items-center gap-8 bottom-0 h-[6vh] bg-[#1D1C47]">
      <div>
        <button className="w-10 h-10 border-2 border-white rounded-lg hover:scale-105 hover:cursor-pointer shadow-white">
          <img src={logo} className="h-full w-full" />
        </button>
      </div>

      {/* search button */}
      <div className="relative flex items-center gap-2">
        {/* Ikon pencarian di dalam input */}
        <IoSearchCircleSharp className="absolute left-3 text-white text-3xl" />
        <input
          type="text"
          className="rounded-lg p-2 pl-12 w-60 bg-transparent border-2 border-white focus:outline-none focus:border-blue-500 text-white placeholder-white"
          placeholder="Search..."
        />
      </div>

      <div className="w-10 h-10 border-2 border-white rounded-lg hover:scale-105 hover:cursor-pointer shadow-white"></div>
      <div className="w-10 h-10 rounded-lg hover:scale-105 hover:cursor-pointer shadow-white">
        <IoImageOutline className="w-full h-full text-white" />
      </div>
      <div className="w-10 h-10 border-2 border-white rounded-lg hover:scale-105 hover:cursor-pointer shadow-white"></div>
    </footer>
  );
};

export default Footer;
