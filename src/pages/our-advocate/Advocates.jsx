import React from "react";
import AdvocateCard from "../../components/AdvocateCard";
import { advocateInfo } from "../../constant";
import wall from "../../assets/Advocates/LoveWall.png";

const Advocates = () => {
  return (
    <section className="mx-auto my-7 flex items-center flex-col bg-adv-bg bg-no-repeat">
      <div className=" max-w-screen-xl grid sm:grid-cols-3 grid-cols-2 gap-4 max-sm:gap-2 max-sm:px-2  ">
        {advocateInfo.map((info) => (
          <div>
            <AdvocateCard
              ImgL={info.img1URL}
              ImgR={info.img2URL}
              nameL={info.name1}
              nameR={info.name2}
              college={info.school}
            />
          </div>
        ))}
      </div>
      <div className="-z-10 -mt-8 -mb-52 max-sm:-mb-32">
        <img src={wall} alt="" width={627} className="-z-100 " />
      </div>
    </section>
  );
};

export default Advocates;
