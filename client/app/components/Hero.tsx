import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = () => {
  return (
    <div className="w-full 1000px:flex items-center relative hero_animation">
      {/* Hero Animation Circle */}
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] border-radius: 50%"></div>

      {/* Left Section - Image */}
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
        <Image
          src={require("../../public/a_3d_teenager_studying_on_a_futuristic.jpeg")}
          alt="Hero Graphic"
          className="object-contain rounded-full 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-[10] translate-x-[10%]"
        />
      </div>

      {/* Right Section - Text and Actions */}
      <div className="1000px:w-[60%] flex flex-col items-center text-center 1000px:text-left mt-[150px] 1000px:mt-0">
        {/* Title */}
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[55%] 1100px:w-[78%]">
          Improve Your Online Learning Experience Better Instantly
        </h2>

        {/* Subtitle */}
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] mt-4 1500px:!w-[55%] 1100px:!w-[78%]">
          We have 40k+ Online courses & 500K+ registered students. Find your
          desired Courses from them.
        </p>

        {/* Search Input */}
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative mt-6">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>

        {/* Client Logos */}
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center mt-8">
          <Image
            src={require("../../public/client-2.jpg")}
            alt="Client Logo 1"
            className="rounded-full"
          />
          <Image
            src={require("../../public/client-3.jpg")}
            alt="Client Logo 2"
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../public/client-1.jpg")}
            alt="Client Logo 3"
            className="rounded-full ml-[-20px]"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] pl-3 text-[18px] font-[600]">
            500K+ People already trusted us.{" "}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
