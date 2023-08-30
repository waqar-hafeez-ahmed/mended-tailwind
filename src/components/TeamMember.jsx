import React from "react";

const TeamMember = (props) => {
  return (
    <div className="md:mt-14 mt-8">
      <img
        src={props.Img}
        alt=""
        className="md:w-[125px] w-[75px] mx-auto rounded-2xl md:mb-[-52px] mb-[-37px]"
      />
      <div className="md:px-6 px-[4px] bg-[#011F19]/50 md:rounded-[30px] rounded-2xl border-[3px] border-white/30 py-5 ">
        <h3 className=" md:text-xl text-xs -tracking-tight  md:mt-12 mt-8 uppercase">
          {props.title}
        </h3>
        <p className="text-white/70 py-2 -tracking-tight md:text-base text-xs ">
          {props.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
