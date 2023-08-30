import React from "react";
import Mended from "../../assets/MendedDrippingPaint.png";
import Poster from "../../assets/VideoPoster.png";
import Button from "../../components/YellowButton";
import DrippingPaint from "../../assets/DripingButtonPaint.png";
import Heart from "../../assets/HeartPink.png";
import Dots from "../../assets/UnionDots.png";
import Ellipse from "../../assets/EllipseHeroSection2.png";
import Ellipse2 from "../../assets/EllipseHeroSection.png";
import NavBack from "../../assets/NavBackground.png";
import NavBack2 from "../../assets/NavBackground2.png";
import Fire from "../../assets/FireSmiling.png";
import GreenLine from "../../assets/GreenDripingPaint.png";

const HeroSection = () => {
  const src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <div>
      <img src={Dots} alt="" className="absolute lg:block hidden" />
      <img
        src={NavBack}
        alt=""
        className="absolute -z-10 top-0 mt-[-50px] right-0 md:block hidden"
      />
      <img
        src={NavBack2}
        alt=""
        className="absolute -z-10  mt-[-120px] right-0 md:hidden block"
      />
      <img
        src={Ellipse2}
        alt=""
        className="absolute opacity-80 top-0 -z-10 mt-[-60px] md:block hidden"
      />
      <img
        src={Ellipse}
        alt=""
        className="absolute -z-10 right-0 mt-[-30px] w-[600px]"
      />
      <img
        src={Fire}
        alt=""
        className="absolute md:-z-10 z-10 right-0 md:w-[150px] w-[100px]  md:mt-[500px] mt-[380px]"
      />
      <img
        src={GreenLine}
        alt=""
        className="absolute -z-10 md:w-[300px] w-[250px] md:left-0 left-[-50px] md:mt-[600px] mt-[620px] "
      />

      <div className="max-w-[1240px] h-screen flex lg:flex-row flex-col justify-center mx-auto items-center text-white lg:mt-[-100px] md:mt-[120px] ">
        <div className="mx-auto">
          <h1 className="font-['Outfit'] font-black text-center md:text-7xl text-4xl text-[#61ADAD] opacity-60 mt-[80px]">
            Welcome to
          </h1>
          <h1 className="md:w-[450px] w-[245px] mx-auto md:py-4 py-2 pb-4">
            <img src={Mended} alt="/" />
          </h1>
          <div className="hidden md:block">
            <p className="text-xl max-w-[466px]">
              A mental health social network that is a family built on love,
              health, creativity, and change
            </p>
            <div className="mt-10">
              <Button />
              <img className="mt-[-11px]" src={DrippingPaint} alt="/" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <div className="mx-8 md:w-[540px] md:h-[363px]  flex md:rounded-[50px] rounded-[15px] overflow-hidden border-white border-2 md:border-4 bg-gray-300 justify-center items-center">
            <video className=" mx-auto" controls poster={Poster}>
              <source src={src} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <p
            className="font-bold font-['Roboto'] md:text-base text-xs
         italic text-center py-6"
          >
            LOVE CONQUERS ALL
          </p>
          <img
            className=" md:w-14 w-10 flex mx-auto md:mt-[-58px] mt-[-48px] -z-10"
            src={Heart}
            alt="/"
          />
          <div className="block md:hidden">
            <p className="text-center text-sm px-4 py-6">
              A mental health social network that is a family built on love,
              health, creativity, and change
            </p>
            <div className="mt-10 flex justify-center">
              <div>
                <Button />
                <img className="mt-[-11px]" src={DrippingPaint} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
