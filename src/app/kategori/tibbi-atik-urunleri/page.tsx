"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis12000 45 Litre Tıbbi Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/tibbi-atik-1-228x228.jpg" },
  { id: 2, name: "mis12001 65 Litre Tıbbi Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/tibbi-atik-1-228x228.jpg" },
  { id: 3, name: "mis12002 10 Litre Oval Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/tibbi-atik-kovasi-40-lt-pedalli-228x228.jpg" },
  { id: 4, name: "mis12003 15 Litre Oval Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/tibbi-atik-kovasi-40-lt-pedalli-228x228.jpg" },
  { id: 5, name: "mis12004 120 Litre Maske ve Eldiven Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/120-litre-pedalli-maske-eldiven-atik-konteyneri-228x228.jpg" },
  { id: 6, name: "mis12005 120 Litre Tıbbi Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/120-lt-plastik-tibbi_06.04.2019_cf6011e-228x228.jpg" },
  { id: 7, name: "mis12006 240 Litre Tıbbi Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/240-lt-tibbi-atik_06.04.2019_653be13-228x228.jpg" },
  { id: 8, name: "mis12007 40 Litre Pedallı Metal Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/e089e0a6-11f0-43ff-aed6-a9c5b2015e0f-228x228.jpg" },
  { id: 9, name: "mis12008 45 Litre Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/45-65-85-litre-maske-eldiven-atik-kovalari-3-228x228.jpg" },
  { id: 10, name: "mis12009 50 Litre Maske ve Eldiven Atık Kutusu", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/50-litre-maske-eldiven-228x228.jpg" },
  { id: 11, name: "mis12010 50 Litre Pedallı Metal Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/e089e0a6-11f0-43ff-aed6-a9c5b2015e0f-228x228.jpg" },
  { id: 12, name: "mis12011 65 Litre Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/45-65-85-litre-maske-eldiven-atik-kovalari-3-228x228.jpg" },
  { id: 13, name: "mis12012 660 Litre Tıbbi Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/660-lt-plastik-tibb--atik_06.04.2019_3da618b-228x228.jpg" },
  { id: 14, name: "mis12013 70 Litre Pedallı Metal Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/e089e0a6-11f0-43ff-aed6-a9c5b2015e0f-228x228.jpg" },
  { id: 15, name: "mis12014 70 Litre Plastik Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/20200417_233452-228x228.jpg" },
  { id: 16, name: "mis12015 40 Litre Oval Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/tibbi-atik-kovasi-40-lt-pedalli-228x228.jpg" },
  { id: 17, name: "mis12016 770 Litre Tıbbi Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/770-lt-tibbi-atik_06.04.2019_492b66d-228x228.jpg" },
  { id: 18, name: "mis12017 85 Litre Maske ve Eldiven Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/85-litre-maske-eldiven-atik-konteyneri-228x228.jpg" },
  { id: 19, name: "mis12018 85 Litre Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/45-65-85-litre-maske-eldiven-atik-kovalari-3-228x228.jpg" },
  { id: 20, name: "mis12019 90 Litre Pedallı Metal Maske ve Eldiven Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/e089e0a6-11f0-43ff-aed6-a9c5b2015e0f-228x228.jpg" },
  { id: 21, name: "mis12020 45 Litre Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/85-litre-tibbi-atik-2-228x228.jpg" },
  { id: 22, name: "mis12021 65 Litre Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/85-litre-tibbi-atik-2-228x228.jpg" },
  { id: 23, name: "mis12022 85 Litre Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/85-litre-tibbi-atik-2-228x228.jpg" },
  { id: 24, name: "mis12023 25 Litre Oval Plastik Tıbbi Atık Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/tibbi-atik-kovasi-40-lt-pedalli-228x228.jpg" },
  { id: 25, name: "mis12024 1100 Litre Plastik Tıbbi Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/TIBBİ%20ATIK/770-lt-tibbi-atik_06.04.2019_492b66d-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function TibbiAtikUrunleriPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Tıbbi Atık Ürünleri
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Sağlık kuruluşları için yönetmeliklere uygun, güvenli tıbbi atık ve maske-eldiven toplama üniteleri.
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
