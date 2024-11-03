import Image from "next/image";

const Dest = () => {
  //** Trending destinations cards data **/
  const dests = [
    {
      title: "Paris",
      tourist: "100+ Tours",
    },
    {
      title: "Singapore",
      tourist: "300+ Tours",
    },
    {
      title: "Roma",
      tourist: "400+ Tours",
    },
    {
      title: "Bangkok",
      tourist: "100+ Tours",
    },
    {
      title: "Phuket",
      tourist: "200+ Tours",
    },
    {
      title: "Tokyo",
      tourist: "700+ Tours",
    },
    {
      title: "Cappadocia",
      tourist: "900+ Tours",
    },
  ];
  return (
    <div className="w-[1320px] mx-auto h-[300px] font-inter p-8">
      <h1 className="text-3xl font-semibold pb-6">Trending destinations</h1>
      <div className="grid grid-cols-7 gap-16">
        {dests.map((dest, index) => (
          <div key={dest.title} className="w-[125px] h-[180px] space-y-1">
            <Image
              alt="destinations"
              height={120}
              width={120}
              src={`/images/destination/${index + 1}.png`}
              className=""
            />
            <h1 className="text-center">{dest.title}</h1>
            <p className="text-center text-xs">{dest.tourist}</p>
          </div>
        ))}
      </div>
      <div className="text-center">dd</div>
    </div>
  );
};

export default Dest;
