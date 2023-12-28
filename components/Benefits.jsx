import React from "react";
import Image from "next/image";
import { BiBadgeCheck, BiCheckCircle } from "react-icons/bi";

const Benefits = () => {
  return (
    <div className="lg:px-[200px] mt-[80px] font-primary px-4">
      <div className="text-center">
        <h3 className="text-[30px]">Benefits of using our products</h3>

        <div className="flex items-center flex-col md:flex-row mt-[70px]">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1 items-start">
              <BiBadgeCheck className=" text-[#FAC97A] text-[30px]" />
              <h4>Revitalized Complexion</h4>
              <p className="text-[13px] text-left">
                Regular use of our skincare line can rejuvenate your skin,
                leaving it looking more vibrant and youthful. The active
                ingredients work to gently exfoliate dead skin cells, promoting
                a radiant and healthy glow
              </p>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <BiBadgeCheck className=" text-[#FAC97A] text-[30px]" />
              <h4>Deep Nourishment</h4>
              <p className="text-[13px] text-left">
                Our products are infused with essential vitamins and nutrients
                that penetrate deep into the skin. This deep nourishment helps
                to repair and regenerate skin cells, resulting in a softer,
                smoother complexion
              </p>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <BiBadgeCheck className=" text-[#FAC97A] text-[30px]" />
              <h4>Balanced Skin Health</h4>
              <p className="text-[13px] text-left">
                Whether your skin is dry, oily, or combination, our products
                work to balance your skin’s natural oils, reducing problems such
                as acne and blemishes, and promoting overall skin health
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative md:w-[400px] md:h-[400px] rounded-tl-[150px] overflow-hidden">
              <Image
                src="/e7.jpg"
                alt=""
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
