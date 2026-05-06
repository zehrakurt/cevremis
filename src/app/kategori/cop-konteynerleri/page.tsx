"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis13000 1100 Litre Euro Kol Plastik Kapaklı Metal Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/21557f32-6ede-4602-8b93-a456f417f245-228x228.jpg" },
  { id: 2, name: "mis13001 2500 Litre Yer Üstü Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/yer-ustu/2500/2500-yer-ustu-1-228x228.jpg" },
  { id: 3, name: "mis13002 3000 Litre Yer Üstü Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/yer-ustu/3000/3000-yer-ustu-1-228x228.jpg" },
  { id: 4, name: "mis13003 3750 Litre Yer Üstü Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/yer-ustu/3750/3750-yer-ustu-1-228x228.jpg" },
  { id: 5, name: "mis13004 400 Litre Sıcak Daldırma Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/400-litre-sicak-daldirma-galvaniz-cop-konteyneri-1-min-228x228.jpg" },
  { id: 6, name: "mis13005 770 Litre Sıcak Daldırma Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/770-litre-sicak-daldirma-galvaniz-cop-konteyneri-1-min-228x228.jpg" },
  { id: 7, name: "mis13006 60 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/60ltre/yesil-228x228.jpg" },
  { id: 8, name: "mis13007 120 Litre Metal Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/kucuk-228x228.jpg" },
  { id: 9, name: "mis13008 240 Litre Metal Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/kucuk-228x228.jpg" },
  { id: 10, name: "mis13009 400 Litre Metal Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/orta-228x228.jpg" },
  { id: 11, name: "mis13010 800 Litre Metal Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/buyuk-228x228.jpg" },
  { id: 12, name: "mis13011 1100 Litre Metal Galvaniz Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/buyuk-228x228.jpg" },
  { id: 13, name: "mis13012 770 Lt. Pedallı Metal Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/metal-cöp-konteyner/pedalli-1-228x228.jpg" },
  { id: 14, name: "mis13013 100 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/80LİTRE/80-yesil-228x228.jpg" },
  { id: 15, name: "mis13014 100 Litre Plastik Pedallı Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/80%20litre%20pedallı/80-pedalli-yesil-228x228.jpg" },
  { id: 16, name: "mis13015 120 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK120/120-yesil-min-228x228.jpg" },
  { id: 17, name: "mis13016 120 Litre Plastik Çöp Konteyneri Beyaz", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK0120%20BEYAZ/beyaz-228x228.jpg" },
  { id: 18, name: "mis13017 120 Litre Plastik Pedallı Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PPCK120%20PEDALLI/yesil-min-228x228.jpg" },
  { id: 19, name: "mis13018 240 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK0240/240-litre-cop-konteyneri-yesil-min-228x228.jpg" },
  { id: 20, name: "mis13019 240 Litre Plastik Pedallı Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PPCK240%20/240-pedalli-yesil-min-228x228.jpg" },
  { id: 21, name: "mis13020 360 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK0360/360lt-copbidonu-600x600-min-min-228x228.png" },
  { id: 22, name: "mis13021 660 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK0660/DSC_0078-600x600-min-228x228.png" },
  { id: 23, name: "mis13022 770 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK0660/DSC_0078-600x600-min-228x228.png" },
  { id: 24, name: "mis13023 1100 Litre Plastik Çöp Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/PCK1100/1100-min-228x228.png" },
  { id: 25, name: "mis13024 400 Litre Plastik Mobil Çöp Konteynerleri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/plastik-cöp-konteyneri/400-litre/1-228x228.jpg" },
  { id: 26, name: "mis13025 5000 Litre Jaklı Yeraltı Çöp Konteyner Sistemi", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/yer-alti/5000/yer-alti-1-228x228.jpg" },
  { id: 27, name: "mis13026 5000 Litre Kare Jaklı Yeraltı Çöp Konteyner Sistemi", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-konteynerleri/yer-alti/5000k/yer-alti-kare-1-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function CopKonteynerleriPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Çöp Konteynerleri
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Belediyeler, siteler ve sanayi tesisleri için dayanıklı galvaniz ve plastik çöp konteynerleri.
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
