import React from "react";

const AdvocateCard = ({ ImgL, ImgR, nameL, nameR, college }) => {
  return (
    <div className="md:mt-14 mt-8">
      <div className="flex flex-1 gap-4 justify-between md:px-12 px-3 md:mb-[-70px] max-sm:mb-[-52px] text-center font-Outfit text-white">
        <div>
          <img
            src={ImgL}
            alt=""
            width={125}
            height={125}
            className=" rounded-2xl "
          />
          <h3 className=" text-sm max-sm:text-[8px]  -tracking-tight max-sm:leading-normal  uppercase lg:mt-4">
            {nameL}
          </h3>
        </div>
        <div>
          <img
            src={ImgR}
            alt=""
            width={125}
            height={125}
            className=" rounded-2xl "
          />
          <h3 className="  text-sm max-sm:text-[8px] -tracking-tight   max-sm:leading-normal  uppercase lg:mt-4">
            {nameR}
          </h3>
        </div>
      </div>
      <div className="md:px-6 px-[4px] bg-[#193535]/80 md:rounded-[30px] rounded-2xl border-2 border-white/30 py-5 ">
        <div className="mt-20 max-sm:mt-10 max-sm:-mb-3 px-4 text-center">
          <p className="text-[#8CDBDA]  font-Outfit font-medium text-2xl max-sm:text-xs ">
            {college}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvocateCard;
