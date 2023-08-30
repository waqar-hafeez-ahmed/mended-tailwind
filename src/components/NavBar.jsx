import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuIcon from "../assets/MenuIcanNavbar.svg";
import MLogo from "../assets/MLogoNavbar.svg";
import MENDED from "../assets/MENDEDNavBar.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <nav className=" bg-gradient-to-b  from-black from-10% to-transparent">
      <div className="text-white max-w-[1240px] w-full mx-auto font-['Outfit'] flex justify-between items-center h-[120px] p-4">
        <h1 className="hidden md:flex w-full mx-auto">
          <Link to="/">
            <img src={MENDED} alt="/" className="w-[120px] flex gap-8 " />
          </Link>
        </h1>
        {/*  */}
        <Link to="/">
          <img className="flex md:hidden ml-2 w-8" src={MLogo} alt="/" />
        </Link>
        <ul className="hidden md:flex md:text-xs lg:text-base flex-wrap w-[1240px] md:gap-8 gap-2">
          <li className="py-4">
            <Link className="text-gray-300 hover:text-white " to="/">
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-gray-300 hover:text-white" to="/advocates">
              Our Advocates
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-gray-300 hover:text-white" to="/">
              Mended Team
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-gray-300  hover:text-white" to="/">
              Become a Mender
            </Link>
          </li>
        </ul>
        <button className=" hidden md:flex bg-black bg-opacity-50 border border-[#97D5D5] rounded-[83px] px-10 text-sm py-2 ">
          SignUp
        </button>

        <div onClick={navHandler} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <img src={MenuIcon} alt="/" />}
        </div>
        <div
          className={
            nav
              ? " fixed top-0 left-0 bg-[#000300] w-[70%] h-full border-r border-gray-900 p-4 ease-in-out duration-500"
              : "fixed  h-full ease-in-out duration-500 w-[70%] top-0 left-[-100%] "
          }
        >
          <img className="ml-1 pb-2 w-10" src={MLogo} alt="/" />
          <ul className="=p-4 uppercase">
            <li className="p-2 border-b border-gray-500">Home</li>
            <li className="p-2 border-b border-gray-500">Our Advocates</li>
            <li className="p-2 border-b border-gray-500">Mended Team</li>
            <li className="p-2 border-b border-gray-500">Become a Mender</li>
            <li className="p-2 ">Contact</li>
          </ul>
          <button className="  bg-black rounded-[50%] px-5 py-2">SignUp</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// import React from "react";

// const NavBar = () => {
//   return (
//     <div className="max-w-[1240px] text-white mx-auto flex justify-between items-center h-24">
// <h1 className="text-3xl font-bold w-full mx-auto">MENDED</h1>
//       <div className="w-full flex gap-8">
//         <ul className="flex flex-row flex-wrap gap-8 ">
// <li className="py-4">Home</li>
// <li className="py-4">Our Advocates</li>
// <li className="py-4">Mended Team</li>
// <li className="py-4">Become a Mender</li>
//         </ul>
// <button className="bg-black rounded-xl px-5 py-2">SignUp</button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
