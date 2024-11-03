"use client";
import { PiMapPinLineThin } from "react-icons/pi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="max-w-[1800px] mx-auto font-inter">
      <div
        style={{
          backgroundImage: `url("/images/header.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "1600px",
          height: "700px",
        }}
        className="rounded-3xl mt-2 relative clip-curve"
      >
        <div className="absolute top-[190px] left-[450px] w-[700px] mx-auto space-y-12">
          <div className="space-y-3 w-[690px] text-center">
            <h1 className="text-white text-5xl font-semibold">
              Your world of joy
            </h1>
            <p className=" text-gray-200 text-[12px] text-center">
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere
            </p>
          </div>

          {/** search card start **/}
          <div className="bg-white w-[720px] h-[70px] rounded-xl px-5 space-x-3 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="btn btn-sm outline outline-1 outline-blue-300 hover:text-white hover:bg-gray-700 w-12 h-12">
                <PiMapPinLineThin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#05073C]">Where</h2>
                <p className="text-[10px] text-[#05073C]">
                  Search destinations
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="btn btn-sm outline outline-1 outline-blue-300 hover:text-white hover:bg-gray-700 w-12 h-12">
                <BsCalendar2Date className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#05073C]">When</h2>
                <p className="text-[10px] text-[#05073C]">
                  February 05 ~ March 14
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="btn btn-sm outline outline-1 outline-blue-300 hover:text-white hover:bg-gray-700 w-12 h-12">
                <MdOutlineTour className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#05073C]">
                  Tour Type
                </h2>
                <p className="text-[10px] text-[#05073C]">All tour</p>
              </div>
            </div>
            <div className="bg-[#EB662B] w-[200px] h-[50px] rounded-xl cursor-pointer">
              <div className="text-center py-[12px] text-white flex items-center justify-between px-5">
                <CiSearch size={25} />
                <button>Search</button>
              </div>
            </div>
          </div>
          {/** search card end **/}
        </div>
      </div>
    </div>
  );
};

export default Header;
