import Image from "next/image";
import React from "react";
import { CiLocationOn, CiStar } from "react-icons/ci";

const TopTrending = () => {
  //** cards data **//
  const tours = [
    {
      city: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      review: "243",
      days: "4",
      from: "158",
    },
    {
      city: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      review: "288",
      days: "5",
      from: "188",
    },
    {
      city: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      review: "358",
      days: "4",
      from: "255",
    },
    {
      city: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      review: "408",
      days: "9",
      from: "655",
    },
  ];
  return (
    <div className="w-[1520px] mx-auto h-[600px] font-inter p-5 bg-[#F5F5F5] mt-16 rounded-xl">
      <div className="w-[1320px] mx-auto h-[470px] pt-12">
        <div className="flex items-center justify-between px-6 ">
          <h1 className="text-3xl font-semibold">Find Popular Tours</h1>
          <p className="text-sm pt-1">See all</p>
        </div>
        <div className="grid grid-cols-4 gap-5 px-5 pt-10">
          {tours.map((tour, index) => (
            <div
              key={tour.days}
              className="w-[280px] h-[370px] border rounded-xl p-3"
            >
              <div className="w-[245px] h-[176px] border mx-auto rounded-lg">
                <Image
                  alt="tours card"
                  height={190}
                  width={280}
                  className="rounded-lg"
                  src={`/images/tours/${index + 1}.png`}
                />
              </div>
              <div className="mt-3 ml-1 space-y-2">
                <div className="flex items-center space-x-5">
                  <CiLocationOn size={20} />
                  <p className="text-[#717171] text-[12px]">{tour.city}</p>
                </div>
                <h1 className="text-[#05073C] font-medium">
                  {tour.title.slice(0, 40)}
                </h1>
                <div className="text-sm flex space-x-4">
                  <div className="flex items-center">
                    {tour.review > 200 && tour.review <= 500
                      ? Array(5)
                          .fill()
                          .map((_, index) => (
                            <CiStar
                              key={index}
                              size={20}
                              className="text-[#EB662B]"
                            />
                          ))
                      : tour.review > 200 && tour.review > 500
                      ? Array(3)
                          .fill()
                          .map((_, index) => (
                            <CiStar
                              key={index}
                              size={20}
                              className="text-[#EB662B]"
                            />
                          ))
                      : null}
                  </div>
                  <p>{2.2}</p>
                  <p>({tour.review})</p>
                </div>
                <div className="border-b-[1px] w-full border-gray-100 pt-2"></div>
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-gray-500">{tour.days} days</p>
                  <p className="text-[13px] text-gray-500">${tour.from}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTrending;
