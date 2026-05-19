"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import "../category-style.css";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

// Trash Compactor ürünleri
const products = [
  {
    id: 1,
    name: "Manuel Çöp Sıkıştırıcı, Taşınabilir Küçük Çöp Sıkıştırıcı",
    code: "MIS200",
    image: "https://i.ebayimg.com/images/g/VFoAAOSw2QJn3P8u/s-l500.webp",
  },
  {
    id: 2,
    name: "Titan 30 Çöp Sıkıştırıcı",
    code: "MIS201",
    image: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/j/j/jj_titan_lifestyle-2_87451_2_3.jpg",
  },
  {
    id: 3,
    name: "Binzee Çöp Sıkıştırıcı - Atık Sıkıştırma Aparatı",
    code: "MIS202",
    image: "https://i.etsystatic.com/61926793/r/il/e0d0d6/7225581037/il_794xN.7225581037_rbwy.jpg",
  },
  {
    id: 4,
    name: "Ag-mac BP11 Çöp Sıkıştırıcı - 1100 Litre Atık Presi",
    code: "MIS203",
    image: "https://www.agritelonline.co.uk/wp-content/uploads/2023/01/products-untitled_design_7_.png.webp",
  },
];

const ITEMS_PER_PAGE = 12;

export default function TrashCompactorPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center font-poppins">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Çöp Sıkıştırıcı
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-6">
          Dayanıklı ve etkili çöp sıkıştırıcı çözümleriyle atıklarınızı daha az hacimde toplar, alan tasarrufu sağlar.
        </p>

        {/* Typewriter Effect */}
        <div className="flex flex-col items-center justify-center mb-16 mt-4">
          <TypewriterEffectSmooth
            words={[
              { text: "TÜRKİYE'DE", className: "text-[#20ba59] font-extrabold tracking-wider font-poppins" },
              { text: "BİR", className: "text-[#20ba59] font-extrabold tracking-wider font-poppins" },
              { text: "İLK!", className: "text-[#20ba59] font-extrabold tracking-wider font-poppins" },
            ]}
            className="my-0"
            cursorClassName="bg-[#20ba59]"
          />
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {selectedProducts.map((p) => (
            <Link key={p.id} href={`/kategori/trash-compactor/${p.id}`} className="premium-card group block">
              <div className="image-container">
                <img src={p.image} alt={p.name} className="product-image" />
              </div>
              <div className="content-box">
                <div className="sku-badge">KOD: {p.code}</div>
                <h3 className="product-name">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-nav"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="pagination-nav"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
