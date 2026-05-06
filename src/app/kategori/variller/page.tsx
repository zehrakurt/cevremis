"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis16000 20 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/20-min-228x228.jpg" },
  { id: 2, name: "mis16001 120 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/120-min-228x228.jpg" },
  { id: 3, name: "mis16002 150 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/150-min-228x228.jpg" },
  { id: 4, name: "mis16003 220 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/220-min-228x228.jpg" },
  { id: 5, name: "mis16004 30 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/30-min-228x228.jpg" },
  { id: 6, name: "mis16005 60 Litre Plastik Varil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/VARİLLER/60-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function VarillerPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Variller
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Sıvı ve katı depolama ihtiyaçlarınız için farklı kapasitelerde dayanıklı plastik varil çözümleri.
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {selectedProducts.map((p) => (
            <div key={p.id} className="premium-card group">
              <div className="image-container">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image"
                />
              </div>
              <div className="content-box">
                <div className="sku-badge">
                  KOD: {p.name.split(" ")[0]}
                </div>
                <h3 className="product-name">
                  {p.name.substring(p.name.indexOf(" ") + 1)}
                </h3>
              </div>
            </div>
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
