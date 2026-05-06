"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis7000 12 Litre 2'Li Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-20-min-228x228.jpg" },
  { id: 2, name: "mis7001 12 Litre 2'Li Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-21-min-228x228.jpg" },
  { id: 3, name: "mis7002 12 Litre 3'Lü Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-30-min-228x228.jpg" },
  { id: 4, name: "mis7003 12 Litre 3'Lü Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-31-min-228x228.jpg" },
  { id: 5, name: "mis7004 12 Litre 3'Lü Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-32-min-228x228.jpg" },
  { id: 6, name: "mis7005 12 Litre 3'Lü Roomcycle Sıfır Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/roomcycle/roomcycle-33-min-228x228.jpg" },
  { id: 7, name: "mis7006 4'Lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 60 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/4lu-min-228x228.jpg" },
  { id: 8, name: "mis7007 45 Litre 5'li Plastik Sıfır Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 9, name: "mis7008 5'Li Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 60 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/5li-min-228x228.jpg" },
  { id: 10, name: "mis7009 60 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Cam", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/yesil-cam-min-228x228.jpg" },
  { id: 11, name: "mis7010 60 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Kağıt", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/mavi-kagit-min-228x228.jpg" },
  { id: 12, name: "mis7011 60 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Metal", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/gri-maske-hijyen-min-228x228.jpg" },
  { id: 13, name: "mis7012 60 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Plastik", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-litre/sari-plastik-min-228x228.jpg" },
  { id: 14, name: "mis7013 60 Litre Recycler Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/60-recycler/P-12-600x600-228x228.jpg" },
  { id: 15, name: "mis7014 65 Litre 5'li Plastik Sıfır Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 16, name: "mis7015 3'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/3lu-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 17, name: "mis7016 4'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/4lu-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 18, name: "mis7017 3'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/3lu-plastik-sifir-atik-geri-donusum-kovasi-70-litre-min-228x228.jpg" },
  { id: 19, name: "mis7018 4'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/4lu-min-228x228.jpg" },
  { id: 20, name: "mis7019 6'lı Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/6li-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 21, name: "mis7020 5'li Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/5li-min-228x228.jpg" },
  { id: 22, name: "mis7021 6'lı Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/6li-min-228x228.jpg" },
  { id: 23, name: "mis7022 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası 3'lü Set", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/85-litre-3lu-plastik-sifir-atik-kovasi-1-228x228.jpg" },
  { id: 24, name: "mis7023 50 Litre Moblen Plastik Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50LTMOBLENPLASTİK/50-lt-cam_03.04.2019_005c068-228x228.jpg" },
  { id: 25, name: "mis7024 50 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Cam", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50-litre/cam-yesil-min-228x228.jpg" },
  { id: 26, name: "mis7025 50 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Kağıt", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50-litre/kagit-mavi-min-228x228.jpg" },
  { id: 27, name: "mis7026 50 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Metal", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50-litre/metal-gri-min-228x228.jpg" },
  { id: 28, name: "mis7027 50 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Organik", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50-litre/organik-kahve-min-228x228.jpg" },
  { id: 29, name: "mis7028 50 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Plastik", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/50-litre/plastik-sari-min-228x228.jpg" },
  { id: 30, name: "mis7029 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Cam", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/yesil-cam-228x228.jpg" },
  { id: 31, name: "mis7030 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Kağıt", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/mavi-kagit-228x228.jpg" },
  { id: 32, name: "mis7031 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Metal", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/gri-metal-228x228.jpg" },
  { id: 33, name: "mis7032 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Organik", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/kahve-organik-228x228.jpg" },
  { id: 34, name: "mis7033 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Pil", image: "https://www.sifiratikkovalari.com/image/cache/catalog/pil-kirmizi-228x228.jpg" },
  { id: 35, name: "mis7034 70 Litre Plastik Sıfır Atık Geri Dönüşüm Kovası Plastik", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/sari-plastik-228x228.jpg" },
  { id: 36, name: "mis7035 70 Litre Plastik Sıfır Atık Kovası (Geri Dönüştürülemeyen)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/siyah-geri-donusmeyen-228x228.jpg" },
  { id: 37, name: "mis7036 80 Litre Moblen Plastik Sıfır Atık Geri Dönüşüm Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/80-lt-plastik_28.03.2019_f758085-228x228.jpg" },
  { id: 38, name: "mis7037 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Cam Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/plastik-sari-228x228.jpg" },
  { id: 39, name: "mis7038 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Tıbbi Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/turuncu-tibbi-atik-228x228.jpg" },
  { id: 40, name: "mis7039 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Çöp Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/siyah-geri-donusmeyen-228x228.jpg" },
  { id: 41, name: "mis7040 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Metal Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/gri-metal-228x228.jpg" },
  { id: 42, name: "mis7041 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Kağıt Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/kagit-mavi-228x228.jpg" },
  { id: 43, name: "mis7042 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Pil Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/kirmizi-pil-228x228.jpg" },
  { id: 44, name: "mis7043 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Plastik Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/plastik-sari-228x228.jpg" },
  { id: 45, name: "mis7044 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Organik Atık)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/organik-kahve-228x228.jpg" },
  { id: 46, name: "mis7045 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası (Cam Atıklar)", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/85-litre/yesil-cam-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function PlastikSifirAtikKovalariPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Plastik Sıfır Atık Kovaları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Hafif, dayanıklı ve ekonomik plastik sıfır atık geri dönüşüm kovaları ile atık yönetimi artık daha kolay.
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
