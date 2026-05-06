"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis2000 6'lı Sıfır Atık Geri Dönüşüm Kutusu Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/6li-min-228x228.jpg" },
  { id: 2, name: "mis2001 4'lü Sıfır Atık Geri Dönüşüm Kutusu Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/4lu-min-228x228.jpg" },
  { id: 3, name: "mis2002 2'li Sıfır Atık Geri Dönüşüm Kutusu Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/2li-min-228x228.jpg" },
  { id: 4, name: "mis2003 3'lü Sıfır Atık Geri Dönüşüm Kutusu Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/3lu-min-228x228.jpg" },
  { id: 5, name: "mis2004 Cam Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/yesil-min-228x228.jpg" },
  { id: 6, name: "mis2005 Kağıt Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/mavi-min-228x228.jpg" },
  { id: 7, name: "mis2006 Metal Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/gri-min-228x228.jpg" },
  { id: 8, name: "mis2007 Organik Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/kahve-min-228x228.jpg" },
  { id: 9, name: "mis2008 Evsel Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/siyah-min-228x228.jpg" },
  { id: 10, name: "mis2009 Plastik Sıfır Atık Geri Dönüşüm Kutusu 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kutulari/sari-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function SifirAtikKutulariPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Sıfır Atık Kutuları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Sıfır atık kutuları, evde ve iş yerinde atıkları kaynağında ayrıştırarak çevreyi korumanın en etkili yoludur. 
          Geri dönüşüm süreçlerini hızlandırın.
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
