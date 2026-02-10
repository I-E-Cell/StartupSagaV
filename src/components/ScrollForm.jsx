import React from "react";
import scrollImg from "../assets/images/formbg.webp";

export default function ScrollForm() {
  return (
    <div className="h-fit w-full flex justify-center items-center px-4 ">
      <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] min-h-fit">

        {/* Scroll Background */}
        <img src={scrollImg} alt="scroll" className="absolute inset-0 w-full h-full object-fill" />

        {/* Form Area inside scroll */}
        <div className="relative flex flex-col px-6 sm:px-8 md:px-12 py-12 sm:py-14 md:py-16 mx-6 sm:mx-8 md:mx-12 my-3">
                <h2 className="text-center font-[superMario] text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-3 sm:mb-4">Sponsor Us!</h2>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <label className="font-[superMario] text-black text-xs sm:text-sm">Individual Name</label>
                    <input type="text" name="" id="" placeholder="Enter Name" className="w-full bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none border-2 border-black/20 shadow-sm focus:border-[#E0B83A] transition text-xs sm:text-sm" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <label className="font-[superMario] text-black text-xs sm:text-sm">Company Name</label>
                    <input type="text" name="" id="" placeholder="Enter Company" className="w-full bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none border-2 border-black/20 shadow-sm focus:border-[#E0B83A] transition text-xs sm:text-sm" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <label className="font-[superMario] text-black text-xs sm:text-sm">Email</label>
                    <input type="email" name="" id="" placeholder="Enter Email" className="w-full bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none border-2 border-black/20 shadow-sm focus:border-[#E0B83A] transition text-xs sm:text-sm" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <label className="font-[superMario] text-black text-xs sm:text-sm">Phone Number</label>
                    <input type="tel" name="" id="" placeholder="Enter Phone" className="w-full bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none border-2 border-black/20 shadow-sm focus:border-[#E0B83A] transition text-xs sm:text-sm" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <label className="font-[superMario] text-black text-xs sm:text-sm">Schedule a Meet</label>
                    <input type="datetime-local" name="" id="" className="w-full bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none border-2 border-black/20 shadow-sm focus:border-[#E0B83A] transition text-xs sm:text-sm" />
                </div>
                <div className="flex justify-center mt-1 sm:mt-2">
                    <button
                        type="submit"
                        className="font-[superMario] text-black bg-[#E0B83A] px-6 sm:px-8 py-1.5 sm:py-2 rounded-full border-2 border-black/30 shadow-[0_3px_0_#8A6A12] active:translate-y-[2px] active:shadow-[0_1px_0_#8A6A12] transition text-xs sm:text-sm"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
