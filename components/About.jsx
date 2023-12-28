import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 lg:px-[170px] px-4 mt-8 font-primary">
      <div className="w-[400px] h-[500px] overflow-hidden rounded-lg">
        <img
          src="/about1.jpg"
          alt="Beauty Flawless Skin"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-5/12">
        <div className="mb-6 pb-3">
          <p className="text-[13px]">WHO WE ARE</p>
          <div className="h-[2px] w-[30px] bg-[#FAC97A]" />
          <h3 className="text-[40px] mb-3">ELIXIR GOLD</h3>
          <p className="text-black">
            At Elixir Gold Beauty And Skincare, we take pride in delivering
            high-quality skincare, haircare, babycare, and perfumery products
            that cater to the unique needs of our clients in Ghana and across
            the globe. Our commitment to nurturing healthy, beautiful skin
            drives our passion for selecting the most effective solutions
            available.
          </p>
        </div>
        <p className="text-black mb-6">
          We believe in more than just formulating products; we embrace and
          celebrate the entire beauty journey. Our ultimate joy is in the
          satisfaction and smiles of our clients, as we provide them with not
          just products, but a lifestyle of beauty and care.
        </p>
        <button className="px-4 py-2 bg-inherit text-black rounded border border-[#FAC97A] hover:bg-[#FAC97A] transition duration-300">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default About;
