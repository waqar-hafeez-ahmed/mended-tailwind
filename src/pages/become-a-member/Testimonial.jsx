import React from "react";
import quotes from "../../assets/BecomeMember/quotes.svg";
import quotes2 from "../../assets/BecomeMember/quotes2.svg";
import tes1 from "../../assets/BecomeMember/tes1.png";
import tes2 from "../../assets/BecomeMember/tes2.png";
import tes3 from "../../assets/BecomeMember/tes3.png";
import tes4 from "../../assets/BecomeMember/tes4.png";
import tes5 from "../../assets/BecomeMember/tes5.png";

const Testimonial = () => {
  return (
    <section>
      <h1 className="font-black font-Outfit text-5xl max-sm:text-3xl text-center text-white -mb-5 max-sm:-mb-4 ">
        Testimonials
      </h1>
      <div
        className="border-2 border-[#FFEB72]/40 bg-gradient-to-b from-white/10
       to-black/50 py-8 md:px-10 px-4 max-w-[1100px] rounded-3xl mx-auto max-sm:mx-3 bg-opacity-30 mb-20"
      >
        <div className="mt-20 ">
          <div className="md:ml-20 max-sm:w-[28px]">
            <img src={quotes} alt="" />
          </div>

          <p className="font-Roboto text-2xl max-sm:text-lg text-white text-center mx-auto font-light max-w-[750px] max-sm:px-4 max-sm:mt-4">
            Mended is providing me the opportunity to reach a larger range of
            clients in my state. In my personal opinion, Mended is brilliant.
            Game changer for us professionals.
          </p>
          <div className="flex justify-end md:mr-20  ">
            <img src={quotes2} alt="" className="max-sm:w-[28px]" />
          </div>
        </div>
        <div className="flex md:gap-20 gap-10 items-center justify-center mt-20">
          <div className="md:block hidden">
            <img src={tes3} alt="" width={50} />
          </div>
          <div className="max-sm:w-[54px]">
            <img src={tes2} alt="" width={67} />
          </div>
          <div className="max-sm:w-[82px]">
            <img src={tes1} alt="" width={104} />
          </div>
          <div className="max-sm:w-[54px]">
            <img src={tes4} alt="" width={67} />
          </div>
          <div className="md:block hidden">
            <img src={tes5} alt="" width={50} />
          </div>
        </div>
        <div className="mb-10">
          {" "}
          <h1 className="text-2xl max-sm:text-base font-bold font-Outfit text-white text-center mt-4">
            Miranda
          </h1>
          <p className="font-Poppins  text-white text-center opacity-80 text-lg max-sm:text-sm">
            Psychologist, PhD
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
