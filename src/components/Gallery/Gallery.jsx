import React from "react";

const Gallery = () => {
  return (
    <div className="w-[1320px] mx-auto h-[550px] font-inter p-5">
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-semibold">Popular things to do</h1>
        <p className="text-sm pt-1">See all</p>
      </div>
      {/** Grid Gallery started **/}
      <div className="grid grid-cols-6 gap-6 grid-rows-2 pt-5">
        <div
          style={{
            backgroundImage: `url("/images/grid/6.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative"
        >
          <h1 className="text-white text-[14px] absolute top-[160px] left-4">
            Cruises
          </h1>
        </div>

        <div
          style={{
            backgroundImage: `url("/images/grid/1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "440px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative col-span-2 row-span-2"
        >
          <h1 className="text-white text-[14px] absolute top-[310px] left-4">
            Beach Tours
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url("/images/grid/2.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative col-span-3"
        >
          <h1 className="text-white text-[14px] absolute top-[310px] left-4">
            City Tours
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url("/images/grid/3.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "205px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative"
        >
          4
        </div>
        <div
          style={{
            backgroundImage: `url("/images/grid/4.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "210px",
            width: "200px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative"
        >
          5
        </div>
        <div
          style={{
            backgroundImage: `url("/images/grid/5.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "210px",
            width: "410px",
          }}
          className="rounded-lg opacity-80 hover:opacity-100 duration-150 relative col-span-2"
        >
          6
        </div>
      </div>
      {/** Grid Gallery end **/}
    </div>
  );
};

export default Gallery;
