import React from "react";
import { FaShieldAlt, FaTags, FaTruck, FaSmile, FaBuilding } from "react-icons/fa";

const trustItems = [
  {
    id: 1,
    title: "Güvenli Ödeme",
    icon: <FaShieldAlt size={28} />,
  },
  {
    id: 2,
    title: "Uygun Fiyat",
    icon: <FaTags size={28} />,
  },
  {
    id: 3,
    title: "Hızlı Kargo",
    icon: <FaTruck size={28} />,
  },
  {
    id: 4,
    title: "%100 Memnuniyet",
    icon: <FaSmile size={28} />,
  },
  {
    id: 5,
    title: "Kurumsal Tedarik",
    icon: <FaBuilding size={28} />,
  },
];

export default function MiddleBanner() {
  return (
    <section className="pt-4 pb-16 bg-white font-poppins">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(1,53,31,0.3)] h-auto md:h-[180px] group">
          {/* Background Image */}
          <img
            src="/trust_banner_dark.png"
            alt="Trust Banner Dark"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Dark Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#01351F]/90 via-[#01351F]/60 to-[#01351F]/90 backdrop-blur-[2px]"></div>

          {/* Glowing Borders Effect */}
          <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ACC90B]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ACC90B]/50 to-transparent"></div>

          {/* Content Area */}
          <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-around py-10 md:py-0 px-6 gap-8 md:gap-4">
            {trustItems.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center gap-4 group/item cursor-default"
              >
                <div className="text-[#ACC90B] drop-shadow-[0_0_10px_rgba(172,201,11,0.5)] group-hover/item:scale-125 group-hover/item:text-white transition-all duration-500 ease-out">
                  {item.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-sm md:text-base tracking-wider uppercase group-hover/item:text-[#ACC90B] transition-colors duration-300">
                    {item.title}
                  </span>
                  <div className="w-0 h-[2px] bg-[#ACC90B] group-hover/item:w-full transition-all duration-300 mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
