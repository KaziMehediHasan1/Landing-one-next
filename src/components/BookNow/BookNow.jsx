import React from "react";

const BookNow = () => {
  return (
    <div className="w-[1530px] mx-auto mt-[600px]  font-inter p-8">
      <div className="flex h-[550px] justify-center ">
        <div
          style={{
            backgroundImage: `url("/images/book.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "800px",
            height: "500px",
          }}
          className="rounded-tl-lg rounded-bl-lg relative"
        >
          <div className="top-32 left-32 absolute">
            <h1 className="text-3xl leading-[40px] w-[250px] h-[130px]">Grab up to <span className="text-[#EB662B]">35% off</span> on your favorite Destination</h1>
            <p className="text-sm text-gray-400">Limited time offer, don't miss the opportunity</p>
            <button className="text-sm bg-[#EB662B] hover:bg-[#d48825] p-3 text-white rounded-lg mt-6 px-7">Book now</button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("/images/booknow.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "800px",
            height: "500px",
          }}
          className="rounded-tr-lg rounded-br-lg"
        ></div>
      </div>
    </div>
  );
};

export default BookNow;
