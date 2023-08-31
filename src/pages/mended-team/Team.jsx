import React from "react";
import { teamProfile } from "../../constant";
import TeamMember from "../../components/TeamMember";
import  {img1, img8, img9}  from "../../assets/ProfilePictures/MendedTeam/MendedTeam";


const Team = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex-col items-center justify-center">
      <div className=" md:hidden block">
        <h2 className="text-center font-bold text-3xl text-white z-10 font-Outfit">
          Advocate
        </h2>
      </div>
      <p className="md:text-2xl text-white md:font-light text-center md:mt-20 mt-8 max-w-3xl mx-auto px-4">
        A team connected by the passion of mental health and strengthened by the
        desire to change the world
      </p>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-14 gap-2 px-2 mx-auto max-w-[990px] text-center md:mt-20 mt-4 text-white font-Outfit">
          <div className="md:col-span-3 col-span-2 mx-auto">
            <TeamMember
              padding={6}
              Img={img1}
              title={"R. JORDAN PEREZ"}
              designation={"CEO & Founder"}
            />
          </div>
          {teamProfile.map((member) => (
            <div>
              <TeamMember
                Img={member.Img}
                title={member.title}
                designation={member.designation}
              />
            </div>
          ))}
          <div className="md:col-span-3 col-span-2 mx-auto">
            <div className="md:mt-14 mt-8">
              <div className="flex flex-row px-12 md:gap-14 gap-16 ">
                <img
                  src={img8}
                  alt=""
                  className="md:w-[125px]  w-[75px] mx-auto rounded-2xl md:mb-[-52px] mb-[-37px]"
                />
                <img
                  src={img9}
                  alt=""
                  className="md:w-[125px] w-[75px] mx-auto text-center rounded-2xl md:mb-[-52px] mb-[-37px]"
                />
              </div>
              <div className="bg-[#14302f]/80  md:rounded-[30px] rounded-2xl border-[3px] border-white/30 py-5 ">
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
    </section>
  );
};

export default Team;
