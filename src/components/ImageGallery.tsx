// src/components/ImageGallery.tsx
"use client";

import React, { useState } from "react";

type ImageGalleryProps = {
  images: string[];
  name: string;
};

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || "");

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
          alt={name}
          className="max-w-full max-h-full object-contain drop-shadow-md rounded-xl"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Large Image Viewport */}
      <div className="flex items-center justify-center bg-gray-50/50 rounded-2xl p-4 md:p-8 border border-gray-100 group min-h-[350px] md:min-h-[450px] overflow-hidden">
        <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <img
            src={activeImage}
            alt={name}
            className="max-w-full max-h-full object-contain drop-shadow-md rounded-xl select-none"
          />
        </div>
      </div>

      {/* Thumbnails Row (only show if there are multiple images) */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(imgUrl)}
              className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 bg-gray-50 flex items-center justify-center p-1 transition-all duration-200 focus:outline-none ${
                activeImage === imgUrl
                  ? "border-[#acc90b] shadow-md scale-95"
                  : "border-gray-200 hover:border-[#01351f]"
              }`}
            >
              <img
                src={imgUrl}
                alt={`${name} thumbnail ${idx + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
