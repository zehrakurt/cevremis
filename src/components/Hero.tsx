"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Çevremis",
    description: "Sıfır atık, kaynakların verimli bir şekilde kullanılarak atık miktarını en aza indirmeyi hedefleyen bir yaklaşımdır. Bu sistem, geri dönüşüm, yeniden kullanım ve kompostlama gibi yöntemlerle atıkların çevreye zarar vermeden yönetilmesini amaçlar.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1035b-web.webp",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1035b-500x500.webp",
    tabletImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1035b.webp",
    showButton: true,
  },
  {
    id: 2,
    title: "Çevremis",
    description: "Sıfır atık yaklaşımı, atık yönetiminde sürdürülebilir bir yol izler ve doğal kaynakların korunmasına katkıda bulunur. Sürdürülebilir bir gelecek için modern atık çözümleri sunuyoruz.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1018b-web.webp",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1018b-mobil-500x500.webp",
    tabletImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1018b-mobil.webp",
    showButton: true,
  },
  {
    id: 3,
    title: "Çevremis",
    description: "Gelecek nesillere daha temiz bir dünya bırakmak için atıklarımızı kaynağında ayrıştırıyoruz. Estetik ve fonksiyonel geri dönüşüm kutuları ile yaşam alanlarınıza değer katıyoruz.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1033a-web.webp",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1033a-500x500.webp",
    tabletImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/1033a.webp",
    showButton: true,
  },
  {
    id: 4,
    title: "Çevremis",
    description: "Sıfır atık prensipleriyle atık yönetiminde yenilikçi adımlar atın. Doğa dostu ürünlerimizle çevresel ayak izinizi azaltın.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/banner-1.webp",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/banner-1-mobil-500x500.webp",
    tabletImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/banner-1-mobil.webp",
    showButton: false, // In the snippet, one item didn't have a button
  },
  {
    id: 5,
    title: "Çevremis",
    description: "Atıkların çevreye zarar vermeden yönetilmesini amaçlayan çözümlerimizle tanışın. Sürdürülebilirlik odaklı yaklaşımımızla fark yaratıyoruz.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/sifir-atik-banner-1.webp",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/mobil-bg2-500x500.jpg",
    tabletImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/mobil-bg2.jpg",
    showButton: true,
  }
];

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] font-poppins overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <picture>
                  <source media="(max-width: 575px)" srcSet={slide.mobileImage} />
                  <source media="(max-width: 768px)" srcSet={slide.tabletImage} />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-right md:object-center"
                  />
                </picture>
                {/* Gradient overlay for text readability while keeping the image vibrant */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-lg md:max-w-2xl text-left">
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <div className="text-2xl text-white mb-8 font-medium leading-relaxed drop-shadow-lg">
                    <p>{slide.description}</p>
                  </div>
                  {slide.showButton && (
                    <Link
                      href="/iletisim"
                      className="inline-block bg-[#97BE49] hover:bg-[#acc90b] text-[#01351F] font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      İletişime Geç
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #ACC90B !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}
