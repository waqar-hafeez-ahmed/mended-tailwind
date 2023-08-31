import React from "react";
import Img from "../../assets/BecomeMember/Main picture.png";
import Button from "../../components/YellowButton";

const Member = () => {
  return (
    <section className="max-w-[1320px] md:mt-20 mx-auto">
      <div className="flex max-sm:flex-col-reverse md:px-10 justify-between items-center">
        <div className="flex flex-col flex-wrap max-w-1/2 px-6">
          <h1 className="md:text-6xl font-bold font-Outfit text-white block max-sm:hidden">
            Become a Mender
          </h1>
          <p className="font-Roboto md:text-lg tracking-wide  text-[#E2E2E2] max-w-4xl md:mt-8 max-sm:text-center">
            Join the Mended family and make a lasting impact on young lives.
            Together, let's tackle mental health challenges and create a
            brighter future. Empower the new generation and be a catalyst for
            positive change. Join us at Mended today and help shape a better
            world.
          </p>
          <div className="mt-12 max-sm:flex max-sm:justify-center">
            <Button />
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl text-center font-bold font-Outfit text-white hidden max-sm:block tracking-wide">
            Become A Mender
          </h1>
          <div className="mt-8">
            <img src={Img} alt="" width={900} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
