import React from "react";
import Phone1 from "../../assets/Phone1.png";
import Phone2 from "../../assets/Phone2.png";
import Phone3 from "../../assets/Phone3.png";
import Phone4 from "../../assets/Phone4.png";
import Phone5 from "../../assets/Phone5.png";
import Dots from "../../assets/DotsFeatures.png";
import paint1 from "../../assets/DripingPaint/FeatureY1.png";
import paint2 from "../../assets/DripingPaint/FeatureY2.png";
import paint3 from "../../assets/DripingPaint/FeatureY3png.png";
import paint4 from "../../assets/DripingPaint/FeatureY4.png";
import paint5 from "../../assets/DripingPaint/FeatureY5.png";
import Ellips from "../../assets/EllipseFeatures.png";
import Dots2 from "../../assets/DotsFeatures2.png";
import LeftPaint from "../../assets/FeaturesleftPaint.png";
import RightPaint from "../../assets/FeaturesRightPaint.png";

const Features = () => {
  return (
    <div className="max-w-[1240px] w-full py-16 px-4 text-white mx-auto ">
      <div className="">
        <img
          src={Dots2}
          alt=""
          className="absolute md:h-[600px] w-[100px] right-0 mt-[600px]"
        />
        <img
          src={Ellips}
          alt=""
          className="absolute md:h-[800px] h-[600px] opacity-70 right-0 md:mt-[220px] mt-[400px]"
        />
      </div>
      <img
        src={LeftPaint}
        alt=""
        className="absolute h-[700px] left-0 mt-[600px] md:block hidden"
      />
      <img
        src={RightPaint}
        alt=""
        className="absolute left-0 mt-[2500px] md:hidden block"
      />

      <h2 className="mx-auto text-center font-['Outfit']  font-[900] md:text-[56px] text-3xl mb-[-14px]">
        Features
      </h2>
      <img src={Dots} alt="" className="absolute w-[150px] md:block hidden" />
      <div className="flex flex-col container mx-auto bg-gradient-to-b  from-white/5 from-20% to-black/20 backdrop-blur-xs border-2 border-[#FFEB72] rounded-3xl text-center py-8 ">
        <div className="flex md:flex-row flex-col justify-center md:gap-[90px] max-w-[950px] mx-auto text-left items-center pt-10 ">
          <div className="flex justify-start items-end">
            <img
              src={Phone1}
              alt="/"
              className="md:max-w-[250px] max-w-[200px]"
            />
            <img
              src={paint1}
              alt=""
              className="absolute md:ml-[-50px] ml-[-35px] md:mb-[70px] mb-[40px] -z-[10] md:w-[120px] w-[90px]"
            />
          </div>
          <div className="md:max-w-[50%] mx-3 md:text-left text-center">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 ">
              Home
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm ">
              Allows users to create inspirational videos to share with the
              mended community. You can also watch videos of users who are
              nearby.
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col justify-center md:gap-[90px] max-w-[950px] mx-auto text-left items-center pt-10 ">
          <div className="hidden md:block md:w-[50%] mx-3">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 ">
              Support groups
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm ">
              Allows users to connect with other users who share similar
              challenges. Users are also able to upload videos, pictures, and
              play games with people in their support groups. Users can only
              join 1 support group at a time so that they can get to know all of
              the people in their support group.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <img
              src={Phone2}
              alt="/"
              className="md:max-w-[250px] max-w-[200px]"
            />
            <img
              src={paint2}
              alt=""
              className="absolute md:mr-[-40px] mr-[-30px] md:mb-[90px] mb-[70px] -z-[10] md:w-[110px] w-[80px]"
            />
          </div>

          <div className="md:hidden mx-3">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 text-center">
              Support groups
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm text-center ">
              Allows users to connect with other users who share similar
              challenges. Users are also able to upload videos, pictures, and
              play games with people in their support groups. Users can only
              join 1 support group at a time so that they can get to know all of
              the people in their support group.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:gap-[90px] max-w-[950px] mx-auto text-left items-center pt-10 ">
          <div className="flex justify-start items-end">
            <img
              src={Phone3}
              alt="/"
              className="md:max-w-[250px] max-w-[200px]"
            />
            <img
              src={paint3}
              alt=""
              className="absolute md:ml-[-20px] ml-[-4px] md:mb-[125px] mb-[70px] -z-[10] md:w-[70px] w-[45px]"
            />
          </div>
          <div className="md:max-w-[50%] mx-3 md:text-left text-center">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 ">
              Mending Locations Map
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm ">
              Allows users to decompress and explore the real world around them.
              All mending locations are vetted by licensed psychologists.
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col justify-center md:gap-[90px] max-w-[950px] mx-auto text-left items-center pt-10 ">
          <div className="hidden md:block md:w-[50%] mx-3">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 ">
              Instant Therapy
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm ">
              Users are able to receive instant therapy in the exact moment it
              is needed and can request group therapy within their support
              groups.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <img
              src={Phone4}
              alt="/"
              className="md:max-w-[250px] max-w-[200px]"
            />
            <img
              src={paint4}
              alt=""
              className="absolute md:mr-[-20px] mr-[-30px] md:mb-[90px] mb-[70px] -z-[10] md:w-[110px] w-[70px]"
            />
          </div>
          <div className="md:hidden mx-3">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 text-center">
              Instant Therapy
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm text-center ">
              Users are able to receive instant therapy in the exact moment it
              is needed and can request group therapy within their support
              groups.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:gap-[90px] max-w-[950px] mx-auto text-left items-center pt-10 ">
          <div className="flex justify-start items-end">
            <img
              src={Phone5}
              alt="/"
              className="md:max-w-[250px] max-w-[200px]"
            />
            <img
              src={paint5}
              alt=""
              className="absolute md:ml-[-35px] ml-[-20px] md:mb-[90px] mb-[30px] -z-[10] md:w-[120px] w-[80px]"
            />
          </div>
          <div className="md:max-w-[50%] mx-3 md:text-left text-center">
            <h1 className="font-['Outfit'] font-bold text-[#FCCD24] md:text-4xl text-2xl py-3 ">
              Gifting Space
            </h1>
            <p className="md:text-xl font-['Roboto'] text-white/80 text-sm ">
              Users are able to purchase gifts for other users through our
              mended gifting space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
