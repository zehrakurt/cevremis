"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis4000 Atık Floresan Kutusu", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/atik-floresan-kutusu-228x228.jpg" },
  { id: 2, name: "mis4001 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1001D-min-228x228.jpg" },
  { id: 3, name: "mis4002 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1002D-min-228x228.jpg" },
  { id: 4, name: "mis4003 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1003D-min-228x228.jpg" },
  { id: 5, name: "mis4004 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1004D-min-228x228.jpg" },
  { id: 6, name: "mis4005 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1005D-min-228x228.jpg" },
  { id: 7, name: "mis4006 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1006D-min-228x228.jpg" },
  { id: 8, name: "mis4007 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1007D-min-228x228.jpg" },
  { id: 9, name: "mis4008 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1008D-min-228x228.jpg" },
  { id: 10, name: "mis4009 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1009D-min-228x228.jpg" },
  { id: 11, name: "mis4010 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1010D-min-228x228.jpg" },
  { id: 12, name: "mis4011 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1011D-min-228x228.jpg" },
  { id: 13, name: "mis4012 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1012D-min-228x228.jpg" },
  { id: 14, name: "mis4013 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1017D-min-228x228.jpg" },
  { id: 15, name: "mis4014 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1018D-min-228x228.jpg" },
  { id: 16, name: "mis4015 Boyalı Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1021D-min-228x228.jpg" },
  { id: 17, name: "mis4016 Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1022D-min-228x228.jpg" },
  { id: 18, name: "mis4017 Açık Kapak Paslanmaz Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1023-min-228x228.jpg" },
  { id: 19, name: "mis4018 Yaylı Kapak Paslanmaz Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1024-min-228x228.jpg" },
  { id: 20, name: "mis4019 Sallanır Kapak Paslanmaz Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/tekli/1025-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function TekliSifirAtikKovalariPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Tekli Sıfır Atık Kovaları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Tekli kullanım için ideal, estetik ve dayanıklı sıfır atık geri dönüşüm kovaları. İç ve dış mekanlara uygun modeller.
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
