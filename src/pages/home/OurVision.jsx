import React from "react";
import FormHomePage from "../../components/FormHomePage";
import PaintBrush from "../../assets/PaintBrushHome.png";
import PaintBrush2 from "../../assets/PaintBrushHome2.png";
import YellowLine from "../../assets/YellowCurveHome.png";

const OurVision = () => {
  return (
    <div>
      <img
        src={PaintBrush}
        alt=""
        className="w-full absolute md:block hidden -z-10 mt-[240px]"
      />
      <img
        src={PaintBrush2}
        alt=""
        className="w-full absolute md:hidden block -z-10 mt-[400px]"
      />
      <img
        src={YellowLine}
        alt=""
        className=" absolute -z-10 md:mt-[150px] mt-[620px] right-0 md:max-w-[300px] max-w-[50px]"
      />
      <div className="max-w-[1240px] text-white mx-auto lg:my-0 lg:mb-20 lg:mt-[100px] md:mt-[400px] mt-[200px] my-[100px]">
        <h2 className="mx-auto text-center font-['Outfit']  font-[900] md:text-[56px] text-3xl">
          Our Vision
        </h2>
        <p className="text-[#E2E2E2] md:text-xl py-6 font-['Roboto'] px-6 ">
          970 million people around the world struggle with mental illness and
          mental illness is still rapidly rising on a global scale. Mended will
          be a light in a dark world where mental health is frowned upon and
          stigmatized. We will normalize mental health, eradicate the stigma,
          and unite the world. At Mended, Love conquers all.
        </p>
        {/* <!-- component --> */}
        <div className="mt-[120px]">
          <p className="md:text-3xl text-xl text-white/80 text-center font-['Outfit']">
            Signup for pre launch user
          </p>
          <FormHomePage />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
