import React from "react";
import Button from "./YellowButton";

const FormHomePage = () => {
  return (
    <div>
      <div class="lg:max-w-[1024px] md:max-w-[500px] max-w-[350px] bg-[rgba(25,53,53,0.80)] shadow-[0px_2.2666666507720947px_34px_0px_rgba(0,0,0,.25)] border border-[rgba(151,213,213,0.20)] lg:rounded-[80px] rounded-2xl  py-4 lg:pb-6 pb-20 lg:px-6 mx-auto  mt-[40px] ">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div class="grid grid-cols-3 gap-4 lg:max-w-2xl max-w-[275px] lg:mx-6 font-['Roboto']">
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="name" className="text-white/75">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                placeholder="Full Name"
              />
            </div>

            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="University Name" className="text-white/75">
                University Name
              </label>
              <input
                id="University Name"
                type="text"
                className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                placeholder="University Name"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="Phone Number" className="text-white/75">
                Phone Number
              </label>
              <input
                id="Phone Number"
                type="text"
                className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div class="hidden lg:block lg:mt-4 pr-4">
            <Button />
          </div>
        </div>
      </div>
      <div class="flex justify-center lg:hidden mt-[-25px]">
        <Button />
      </div>
    </div>
  );
};

export default FormHomePage;
