import React from "react";
import AdvisorsCard from "../../components/AdvisorsCard";
import { advisors, youthAdvisor } from "../../constant";

const Advisors = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex-col items-center justify-center md:mt-52 mt-20 md:mb-40 mb-20">
      <h2 className="text-center font-bold md:text-5xl max-sm:text-3xl text-white z-10 font-Outfit mb-10">
        Our Advisors
      </h2>
      <div>
        <h3 className="text-center font-medium md:text-3xl text-xl z-10 font-Outfit md:mt-20 text-[#FCCD24]">
          Youth Advisory Board
        </h3>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-w-[1140px] mx-auto max-sm:mx-3  md:gap-6 gap-2 md:mt-14 mt-8">
          {youthAdvisor.map((member) => (
            <AdvisorsCard Img={member.Img} name={member.name} />
          ))}
        </div>
      </div>
      <div className="mt-40">
        <h3 className="text-center font-medium md:text-3xl text-xl z-10 font-Outfit md:mt-20 text-[#FCCD24]">
          Advisory Board
        </h3>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-w-[1140px] mx-auto max-sm:mx-3 md:gap-6 gap-2 md:mt-14 mt-8">
          {advisors.map((member) => (
            <AdvisorsCard Img={member.Img} name={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
