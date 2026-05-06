"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis8000 Atık İlaç Toplama Kutusu", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/atik-ilac-toplama-kutusu-228x228.jpg" },
  { id: 2, name: "mis8001 Atık İlaç Toplama Kutusu 54 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/ilac/atik-ilac-1-min-228x228.jpg" },
  { id: 3, name: "mis8002 20 Litre Atık Pil Toplama Kumbarası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/pil-atik/20-litre-228x228.jpg" },
  { id: 4, name: "mis8003 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Pil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/pil-kirmizi-228x228.jpg" },
  { id: 5, name: "mis8004 120 Litre İlaç Atık Geri Dönüşüm Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/1-228x228.jpg" },
  { id: 6, name: "mis8005 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Pil Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/kirmizi-pil-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function IlacVePilAtikKovalariPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          İlaç ve Pil Atık Kovaları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Güvenli ve yönetmeliklere uygun tıbbi atık, ilaç ve pil toplama çözümleri.
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
