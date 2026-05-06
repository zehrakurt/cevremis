"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis15000 Tekerlekli Plastik Kasa Tekne 2000A", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/2000a-min-228x228.jpg" },
  { id: 2, name: "mis15001 Tekerlekli Plastik Kasa Tekne 2000K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/2000k-min-228x228.jpg" },
  { id: 3, name: "mis15002 Tekerlekli Plastik Kasa Tekne 2500K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/2500k-min-228x228.jpg" },
  { id: 4, name: "mis15003 Tekerlekli Plastik Kasa Tekne 2700K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/2700k-min-228x228.jpg" },
  { id: 5, name: "mis15004 Tekerlekli Plastik Kasa Tekne 2900K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/2900k-min-228x228.jpg" },
  { id: 6, name: "mis15005 Tekerlekli Plastik Kasa Tekne 3200K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/3200k-min-228x228.jpg" },
  { id: 7, name: "mis15006 Tekerlekli Plastik Kasa Tekne 4400A", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/4400a-min-228x228.jpg" },
  { id: 8, name: "mis15007 Tekerlekli Plastik Kasa Tekne 4400K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/4400k-min-228x228.jpg" },
  { id: 9, name: "mis15008 Tekerlekli Plastik Kasa Tekne 5500K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/5500k-min-228x228.jpg" },
  { id: 10, name: "mis15009 Tekerlekli Plastik Kasa Tekne 6600A", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/6600a-min-228x228.jpg" },
  { id: 11, name: "mis15010 Tekerlekli Plastik Kasa Tekne 6600K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/6600k-min-228x228.jpg" },
  { id: 12, name: "mis15011 Tekerlekli Plastik Kasa Tekne 6770K", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/plastik-kasa/6770k-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function TekerlekliPlastikKasalarPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Tekerlekli Plastik Kasalar
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Endüstriyel tesisler, oteller ve tekstil atölyeleri için yüksek taşıma kapasiteli tekerlekli taşıma kasaları.
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
