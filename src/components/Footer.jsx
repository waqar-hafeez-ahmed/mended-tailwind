import React from "react";
import M from "../assets/MOrange.png";
import Mended from "../assets/MENDEDNavBar.svg";
import Background from "../assets/FooterBackground.png";
import Background2 from "../assets/FooterBackground2.png";
const Footer = () => {
  return (
    <div>
      <img
        src={Background}
        alt=""
        className="absoulute -z-10 w-full mb-[-90px] md:block hidden"
      />
      <img
        src={Background2}
        alt=""
        className="absoulute -z-10 w-full mb-[-110px] md:hidden block"
      />
      <div className="w-full py-8 flex flex-col">
        <div className="flex justify-center gap-2">
          <img src={M} alt="" className="md:w-[36px] w-[27px]" />
          <img src={Mended} alt="" className="md:w-[89px] w-[66px]" />
        </div>
        <div className="flex justify-between md:mt-0 mt-6 px-14 pt-6 font-[Archivo] md:text-base text-sm">
          <p className="md:text-[#F8F8F880]/50 text-[#F8F8F880]/70 ">
            Terms & Agreements
          </p>
          <p className="text-[#F8F8F880]/50 md:block hidden">
            @2023 Mended All Rights Reserved
          </p>
          <p className="md:text-[#F8F8F880]/50 text-[#F8F8F880]/70 ">
            Privacy Policy
          </p>
        </div>
        <p className="text-[#F8F8F880]/30 font-[Archivo] text-center mt-10 text-sm md:hidden block">
          @2023 Mended All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
