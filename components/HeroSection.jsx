import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5205669/pexels-photo-5205669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative flex items-center h-full">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-white max-w-[700px] flex flex-col items-start gap-y-6 font-semibold">
            <p className="text-[16px] font-medium mb-2">
              WELCOME TO
              <span className="text-[#FAC97A] font-bold ml-2">ELIXIR GOLD</span>
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[38px] font-bold mb-4 leading-">
              Turn Heads With
              <span className="text-[#FAC97A] font-bold ml-2">
                Radiant Skin!
              </span>{" "}
            </h1>
            <p className="text-gray-300 text-[16px] font-semibold">
              Discover the simple secret to glowing skin. Our skincare brings
              out your natural beauty with every use. Feel fresh, look great,
              and shine with confidence.
            </p>
            <button className="mt-4 bg-inherit text-white font-semibold py-3 px-8 border-2 border-[#FAC97A] rounded shadow hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
