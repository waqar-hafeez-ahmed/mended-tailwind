import React from "react";
import Img1 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img1.png";
import Img2 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img2.png";
import Img3 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img3.png";
import Img4 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img4.png";
import Img5 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img5.png";
import Img6 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img6.png";
import Img7 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img7.png";
import Img8 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img8.png";
import Img9 from "../../assets/ProfilePictures/MendedTeam/MendedTeam/Img9.png";
import TeamMember from "../../components/TeamMember";
import YellowPaint from "../../assets/YellowPaint.png";
import PaintBack from "../../assets/TeamPaint1.png";
import PaintBack2 from "../../assets/TeamPaint2.png";
import YellowLine from "../../assets/TeamPaint3.png";
import Dots from "../../assets/DotsTeam.png";
import TeamBack from "../../assets/TeamBgMob.png";
import OrangePaint from "../../assets/DripingPaint/FeatureO1.png";

const MendedTeam = () => {
  return (
    <div className="text-white max-w-[1240px] mx-auto py-8 font-['Outfit'] mt-10 md:mb-[200px] mb-[70px]">
      <img
        src={YellowPaint}
        alt=""
        className="right-0 absolute md:mt-[100px] mt-[140px] md:w-[300px] w-[170px]"
      />
      <div className="">
        <img
          src={PaintBack}
          alt=""
          className="absolute w-full left-0 h-[1150px]  mt-[380px] -z-[10] md:block hidden"
        />
        <img
          src={TeamBack}
          alt=""
          className="absolute w-full h-[1000px] mt-[330px] -z-[10] md:hidden block"
        />

        <img
          src={PaintBack2}
          alt=""
          className="absolute w-auto ml-[-100px] mt-[40px] -z-[9] md:block hidden"
        />
        <img
          src={YellowLine}
          alt=""
          className="absolute md:w-auto w-[140px] md:rotate-0 rotate-[20deg] left-0 md:ml-0 -ml-11 md:mt-[1100px] mt-[1150px] -z-[10] "
        />
        <img
          src={Dots}
          alt=""
          className="absolute w-auto right-0 mt-[900px] -z-[9] md:block hidden"
        />
        <img
          src={OrangePaint}
          alt=""
          className="absolute w-auto right-0 mt-[1950px] -z-[9] md:block hidden"
        />
      </div>
      <div>
        <h2 className="mx-auto text-center   font-[900] md:text-[56px] text-3xl mb-[-14px]">
          Mended Team
        </h2>
        <p className="md:text-3xl text-base mx-auto text-center md:max-w-[780px] py-10 font-sans font-light">
          A team connected by the passion of mental health and strengthened by
          the desire to change the world
        </p>

        <div className="grid md:grid-cols-3 grid-cols-2  mx-auto max-w-[990px] text-center mt-20">
          <div className="md:col-span-3 col-span-2 mx-auto">
            <TeamMember
              Img={Img1}
              title={"R. JORDAN PEREZ"}
              designation={"CEO & Founder"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img2}
              title={"D. Elauhn Barron"}
              designation={"Chief operations officer​"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img3}
              title={"W. Knox Cleveland"}
              designation={"Chief Creative Officer"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img4}
              title={"Tiffani Toombs"}
              designation={"Chief Compliance Officer"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img5}
              title={"Emilio Vega"}
              designation={"Chief Financial Officer"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img6}
              title={"Yahffa Jagrup"}
              designation={"Chief Technology Officer"}
            />
          </div>
          <div className="mx-auto">
            <TeamMember
              Img={Img7}
              title={"Sydney Carter "}
              designation={"Chief Marketing Officer"}
            />
          </div>
          <div className="md:col-span-3 col-span-2 mx-auto">
            <div className="md:mt-14 mt-8">
              <div className="flex flex-row px-12 md:gap-14 gap-16 ">
                <img
                  src={Img8}
                  alt=""
                  className="md:w-[125px]  w-[75px] mx-auto rounded-2xl md:mb-[-52px] mb-[-37px]"
                />
                <img
                  src={Img9}
                  alt=""
                  className="md:w-[125px] w-[75px] mx-auto text-center rounded-2xl md:mb-[-52px] mb-[-37px]"
                />
              </div>
              <div className="bg-[#011F19]/50  md:rounded-[30px] rounded-2xl border-[3px] border-white/30 py-5 ">
                <div className="flex flex-row md:px-12 px-4 md:gap-14 text-center">
                  <h3 className="md:text-xl text-xs -tracking-tight  md:mt-12 mt-8 uppercase text-center mx-auto">
                    Alexander Perez
                  </h3>

                  <h3 className=" md:text-xl text-xs text-center -tracking-tight  md:mt-12 mt-8 uppercase mx-auto">
                    Tanner Grimes
                  </h3>
                </div>
                <p className="text-white/70 py-2 -tracking-tight md:text-base text-xs">
                  Chiefs Youth Officers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MendedTeam;
