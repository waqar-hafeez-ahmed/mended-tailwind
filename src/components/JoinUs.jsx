import React from "react";
import Button from "./YellowButton";

const JoinUs = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto text-white font-Outfit py-8 md:my-20 my-8 px-4 text-center ">
      <div className="max-w-[1000px] mx-auto md:py-14 py-8 rounded-[30px] border-4 border-[rgba(151,213,213,0.20)] bg-gradient-to-b  from-white/20 to-black/20 ] ">
        <h1 className="md:text-[55px] text-xl leading-tight font-black text-center md:pb-6 pb-2 max-w-[654px] mx-auto">
          Join us to change the world together
        </h1>
      </div>
      <div className="mt-[-22px]">
        <Button />
      </div>
    </div>
  );
};

export default JoinUs;
