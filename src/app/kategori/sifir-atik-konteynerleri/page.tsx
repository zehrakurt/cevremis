"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis3000 45 Litre 5'li Plastik Sıfır Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 2, name: "mis3001 45 Litre Ambalaj Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/mavi-plastik-ambalaj-atiklari-228x228.jpg" },
  { id: 3, name: "mis3002 45 Litre Maske Eldiven Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/gri-plastik-maske-eldiven-atiklari-228x228.jpg" },
  { id: 4, name: "mis3003 45 Litre Metal Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/gri-metal-atiklar-228x228.jpg" },
  { id: 5, name: "mis3004 45 Litre Plastik Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/sari-plastik-atiklar-228x228.jpg" },
  { id: 6, name: "mis3005 45 Litre Tıbbi Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/tibbi-atik-1-228x228.jpg" },
  { id: 7, name: "mis3006 65 Litre 5'li Plastik Sıfık Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 8, name: "mis3007 65 Litre Ambalaj Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/mavi-plastik-ambalaj-atiklari-228x228.jpg" },
  { id: 9, name: "mis3008 65 Litre Maske Eldiven Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/gri-plastik-maske-eldiven-atiklari-228x228.jpg" },
  { id: 10, name: "mis3009 65 Litre Metal Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/gri-metal-atiklar-228x228.jpg" },
  { id: 11, name: "mis3010 65 Litre Plastik Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/sari-plastik-atiklar-228x228.jpg" },
  { id: 12, name: "mis3011 65 Litre Tıbbi Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/tibbi-atik-1-228x228.jpg" },
  { id: 13, name: "mis3012 120 Litre Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/120/120-litre-kagit-karton-atik-mavi-cop-konteyneri-min-228x228.jpg" },
  { id: 14, name: "mis3013 120 Litre Pedallı Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/120-pedalli/120-litre-pedalli-mavi-atik-kagit-karton-cop-konteyneri-min-228x228.jpg" },
  { id: 15, name: "mis3014 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası 3'lü Set", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/85-litre-3lu-plastik-sifir-atik-kovasi-1-228x228.jpg" },
  { id: 16, name: "mis3015 240 Litre Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/240/240-litre-kagit-karton-atik-metal-sifir-atik-konteyneri-min-228x228.jpg" },
  { id: 17, name: "mis3016 240 Litre Pedallı Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/240-pedalli/240-litre-pedalli-kagit-karton-atik-mavi-sifir-atik-konteyneri-min-228x228.jpg" },
  { id: 18, name: "mis3017 660 Litre Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/mavi-kagit-karton-atik-konteyneri-min-228x228.jpg" },
  { id: 19, name: "mis3018 770 Litre Geri Dönüşüm Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/mavi-kagit-karton-atik-konteyneri-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function SifirAtikKonteynerleriPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Sıfır Atık Konteynerleri
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Endüstriyel ve kurumsal kullanıma uygun geniş hacimli sıfır atık konteynerleri ile atık yönetimini profesyonelce yönetin.
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
