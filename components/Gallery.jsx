"use client";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";

const imagePaths = [
  "/e2.jpg",
  "/e3.jpg",
  "/e10.jpg",
  "/e4.jpg",
  "/e6.jpg",
  "/e7.jpg",
  "/e8.jpg",
  "/e9.jpg",
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgIndex: 0 });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, imgIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const showNext = () => {
    setLightbox({
      ...lightbox,
      imgIndex: (lightbox.imgIndex + 1) % imagePaths.length,
    });
  };

  const showPrev = () => {
    setLightbox({
      ...lightbox,
      imgIndex: (lightbox.imgIndex - 1 + imagePaths.length) % imagePaths.length,
    });
  };

  return (
    <div className="font-primary mt-[80px]">
      <h3 className=" text-center text-[30px] mb-[20px]">Our Gallery</h3>
      <div className="flex flex-wrap justify-center gap-4 px-2 lg:px-[170px]">
        {imagePaths.map((src, index) => (
          <div
            key={src}
            onClick={() => openLightbox(index)}
            className="lg:h-[200px] w-full md:w-[200px] overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className="cursor-pointer object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-[600px] max-h-full">
            <img
              src={imagePaths[lightbox.imgIndex]}
              alt={`Image ${lightbox.imgIndex}`}
              className="max-h-full max-w-full"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-4 text-white text-2xl"
              onClick={showPrev}
            >
              &#10094;
            </button>
            <button
              className="absolute right-4 text-white text-2xl"
              onClick={showNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
      <div className="text-center mt-8">
        <p>Follow us on instagram</p>
        {/* <AiFillInstagram /> */}
      </div>
    </div>
  );
};

export default Gallery;
