import React from "react";
import Button from "../../components/YellowButton";

const Form = () => {
  return (
    <div className="mx-auto my-52">
      <div>
        <p className="text-3xl max-sm:text-2xl max-sm:px-10 font-Outfit font-medium text-center mx-auto text-white">
          Signup to become a Mender member
        </p>
        <div className="flex flex-col mx-auto max-sm:px-8 px-14 py-8 pb-20 max-sm:mx-6 rounded-3xl border border-[#97D5D5]/20 bg-[#193535]/80 mt-8 max-w-[718px]">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-white/75 font-Roboto font-medium text-lg"
            >
              Name
            </label>
            <div className="grid md:grid-cols-2 md:gap-8 gap-3 mt-2">
              <div>
                <input
                  id="name"
                  type="text"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="">
                <input
                  id="name"
                  type="text"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          {/* Date of birth */}
          <div className="mt-4">
            <label
              htmlFor="date"
              className="text-white/75 font-Roboto font-medium text-lg"
            >
              Date of Birth
            </label>
            <div className="grid md:grid-cols-3 md:gap-4 gap-3 mt-2">
              <div>
                <select
                  name="date"
                  id="date"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                >
                  <option value="Day">Month</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                </select>
              </div>
              <div>
                <select
                  name="date"
                  id="date"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                >
                  <option value="Day">Day</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                </select>
              </div>
              <div>
                <select
                  name="date"
                  id="date"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                >
                  <option value="Day">Year</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                </select>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="mt-4">
            <label
              htmlFor="Contact"
              className="text-white/75 font-Roboto font-medium text-lg"
            >
              Contact Information
            </label>
            <div className="grid md:grid-cols-2 md:gap-8 gap-3 mt-2">
              <div>
                <input
                  id="Contact"
                  type="text"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                  placeholder="Phone Number"
                />
              </div>
              <div className="">
                <input
                  id="name"
                  type="text"
                  className="rounded-md lg:p-3 p-2 md:text-xs w-full"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center -mt-6">

          <Button/>
          </div>
      </div>
    </div>
  );
};

export default Form;
