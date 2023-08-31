import React from "react";
import Img from "../../assets/BecomeMember/Other 19.png";
import Img2 from "../../assets/BecomeMember/Mender2.png";
import Img3 from "../../assets/BecomeMember/mended3.png";
import Img4 from "../../assets/BecomeMember/mended4.png";



const Features = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-14">
      <div className="flex flex-col justify-center md:pr-20">
        {/* What is Mender */}
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
          <div className="mx-auto ">
            <img
              src={Img}
              alt=""
              width={430}
              className="max-sm:h-[280px] max-sm:mr-4 max-sm:w-[260px]"
            />
          </div>
          <div className="max-sm:text-center ">
            <h2 className="text-4xl max-sm:text-2xl max-sm:-mt-20 text-[#FF7811] font-Outfit font-[700] ">
              What Is A Mender
            </h2>
            <p className="font-Roboto text-xl max-sm:px-4 max-sm:text-sm text-white/80 max-w-[488px] md:mt-4 max-sm:mt-2">
              A mender is a licensed mental health professional that has decided
              to join the Mended family
            </p>
          </div>
        </div>
        {/* What does mender do */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-auto mt-10">
          <div className="max-sm:text-center ">
            <h2 className="text-4xl max-sm:text-2xl max-sm:-mt-10 text-[#4CB6D8] font-Outfit font-[700] ">
              What Is A Mender
            </h2>
            <p className="font-Roboto text-xl max-sm:px-4 max-sm:text-sm text-white/80 max-w-[488px] md:mt-4 max-sm:mt-2">
              A mender offers mental health services to our users! Users are
              able to find menders 24’7, so if you’re a night owl, you will also
              have the ability to do late night sessions!
            </p>
          </div>
          <div className="mx-auto -mt-14">
            <img
              src={Img2}
              alt=""
              width={430}
              className="max-sm:h-[260px] max-sm:ml-14 max-sm:w-[260px] "
            />
          </div>
        </div>
        {/* How does a Mender get paid?  */}
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
          <div className="mx-auto ">
            <img
              src={Img3}
              alt=""
              width={430}
              className="max-sm:h-[280px] max-sm:mr-12 max-sm:w-[260px]"
            />
          </div>
          <div className="max-sm:text-center ">
            <h2 className="text-4xl max-sm:text-2xl max-sm:-mt-20 text-[#FB2659] font-Outfit font-[700] ">
              How does a Mender get paid?
            </h2>
            <p className="font-Roboto text-xl max-sm:px-4 max-sm:text-sm text-white/80 max-w-[488px] md:mt-4 max-sm:mt-2">
              A mender gets paid on a sliding scale! They get paid per minute,
              and are able to find INSTANT clients
            </p>
          </div>
        </div>
        {/* How will Menders change the world?  */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-auto mt-10">
          <div className="max-sm:text-center ">
            <h2 className="text-4xl max-sm:text-2xl max-sm:-mt-10 text-[#FCCD24] font-Outfit font-[700] max-sm:px-4">
              How will Menders change the world?
            </h2>
            <p className="font-Roboto text-xl max-sm:px-4 max-sm:text-sm text-white/80 max-w-[488px] md:mt-4 max-sm:mt-2">
              A mender offers mental health services to our users! Users are
              able to find menders 24’7, so if you’re a night owl, you will also
              have the ability to do late night sessions!
            </p>
          </div>
          <div className="mx-auto -mt-14">
            <img
              src={Img4}
              alt=""
              width={430}
              className="max-sm:h-[260px] max-sm:ml-14 max-sm:w-[260px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
