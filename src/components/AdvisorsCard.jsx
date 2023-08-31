import React from "react";

const AdvisorsCard = ({Img, name}) => {
  return (
    <div className="mt-4 ">
      <div className="flex justify-center mx-auto md:mb-[-70px] max-sm:mb-[-45px] max-sm:max-w-[90px] ">
        <img
          src={Img}
          alt=""
          width={125}
          height={125}
          className=" rounded-3xl "
        />
      </div>
      <div className="md:px-2 px-[4px] bg-[#14302f]/80  md:rounded-[20px] rounded-2xl border-[2px] border-white/30 py-5 ">
        <p className="mt-16 max-sm:mt-10 max-sm:-mb-3 uppercase text-white max-w-[120px] max-sm:max-w-[60px] mx-auto font-Outfit font-medium text-2xl max-sm:text-sm text-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AdvisorsCard;
