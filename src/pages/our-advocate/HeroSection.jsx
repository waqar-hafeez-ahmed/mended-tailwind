import React from "react";
import Text1 from "../../assets/Advocates/The300Warriors.png";
import Img1 from "../../assets/Advocates/HeroPicture.png";
import YellowLine from "../../assets/Advocates/YellowLine1.png";
import Ellipse from "../../assets/Advocates/Ellipse1.png";
import Ellipse2 from "../../assets/Advocates/Ellipse2.png";
const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between py-2 w-full items-center mx-auto md:mt-[-160px]">
      <div className="absolute top-0 left-0 md:block hidden -z-10">
        <img src={YellowLine} alt="" />
        <img src={Ellipse} alt="" className="absolute  top-0 left-0" />
      </div>

      <div className=" md:hidden block">
        <h2 className="text-center font-bold text-3xl text-white z-10 font-Outfit">
          Advocate
        </h2>
        <div className=" mt-[-65px] ml-[-30px] z-10">
          <img src={Img1} alt="" width={700} />
        </div>
      </div>
      <div className="flex flex-col md:max-w-[700px] md:text-left text-center md:ml-[200px] md:mt-0 ">
        <img src={Text1} alt="" className="md:px-0 px-4" />
        <p className="md:text-xl md:px-0 py-4 px-4 text-white">
          The 300 warriors are students that believe in our mission and believe
          we will change the world together. Our warriors will spread the word
          on their campuses, influence change on their campus, fight the
          negative mental health stigma on their campus, and normalize mental
          health on their campus. These warriors check in with board members
          daily and are the spark to our revolution.
        </p>
      </div>
      <img
        src={Img1}
        alt=""
        className="w-[740px]  ml-[-50px] md:block hidden"
      />
    </div>
  );
};

export default HeroSection;
