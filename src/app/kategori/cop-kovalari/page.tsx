"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis14000 20 Litre Pelican Slim Pedallı Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/pelican/P-11-600x600-228x228.jpg" },
  { id: 2, name: "mis14001 60 Litre Pelican Slim Pedallı Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/pelican/P-11-600x600-228x228.jpg" },
  { id: 3, name: "mis14002 9 Litre Pelican Slim Pedallı Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/pelican/P-11-600x600-228x228.jpg" },
  { id: 4, name: "mis14003 Dış Mekan Çöp Kovası 1701", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/1701-min-228x228.jpg" },
  { id: 5, name: "mis14004 Dış Mekan Çöp Kovası BDM-108", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-108-min-228x228.jpg" },
  { id: 6, name: "mis14005 Dış Mekan Çöp Kovası BDM-110", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-110-min-228x228.jpg" },
  { id: 7, name: "mis14006 Dış Mekan Çöp Kovası BDM-112", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-112-min-228x228.jpg" },
  { id: 8, name: "mis14007 Dış Mekan Çöp Kovası BDM-113", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-113-min-228x228.jpg" },
  { id: 9, name: "mis14008 Dış Mekan Çöp Kovası BDM-114", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-114-min-228x228.jpg" },
  { id: 10, name: "mis14009 Dış Mekan Çöp Kovası BDM-148", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/bdm-148-min-228x228.jpg" },
  { id: 11, name: "mis14010 Dış Mekan Çöp Kovası PDM-106", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/pdm-106-min-228x228.jpg" },
  { id: 12, name: "mis14011 Dış Mekan Çöp Kovası PDM-132", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/dis-mekan/pdm-132-min-228x228.jpg" },
  { id: 13, name: "mis14012 40 Litre İç Mekan Plastik Çöp Kovası 7142", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/ic-mekan/7142-min-228x228.jpg" },
  { id: 14, name: "mis14013 65 Litre İç Mekan Plastik Çöp Kovası 7143", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/ic-mekan/7143-min-228x228.jpg" },
  { id: 15, name: "mis14014 85 Litre İç Mekan Plastik Çöp Kovası 7144", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/ic-mekan/7144-min-228x228.jpg" },
  { id: 16, name: "mis14015 İç Mekan Plastik Çöp Kovası 7553", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/cöp-kovalarıi/ic-mekan/7553-min-228x228.jpg" },
  { id: 17, name: "mis14016 SAK 127 Torpil Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-127-min-228x228.jpg" },
  { id: 18, name: "mis14017 SAK 127A Torpil Çöp Kovası Boyalı", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-127a-min-228x228.jpg" },
  { id: 19, name: "mis14018 SAK 128 Torpil Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-128-min-228x228.jpg" },
  { id: 20, name: "mis14019 SAK 128A Torpil Çöp Kovası Boyalı", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-128a-min-228x228.jpg" },
  { id: 21, name: "mis14020 SAK 129 Torpil Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-129-min-228x228.jpg" },
  { id: 22, name: "mis14021 SAK 129A Torpil Çöp Kovası Boyalı", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-129a-min-228x228.jpg" },
  { id: 23, name: "mis14022 SAK 132 Genel Mekan Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/genel-cop-kovasi-sk-132-min-228x228.jpg" },
  { id: 24, name: "mis14023 SAK 195 Genel Mekan Çöp Kovası Delikli", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/delikli-model-cop-kovasi-sk-195-min-228x228.jpg" },
  { id: 25, name: "mis14024 SAK 196 Genel Mekan Çöp Kovası Delikli", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/delikli-model-cop-kovasi-sk-196-min-228x228.jpg" },
  { id: 26, name: "mis14025 SAK 197 Genel Mekan Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/genel-cop-kovasi-sk-197-min-228x228.jpg" },
  { id: 27, name: "mis14026 SAK 198 Genel Mekan Çöp Kovası", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/genel-cop-kovasi-sk-198-min-228x228.jpg" },
  { id: 28, name: "mis14027 SAK 199 Genel Mekan Çöp Kovası Küllüklü", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/kulluklu-cop-kovasi-sk-199-min-228x228.jpg" },
  { id: 29, name: "mis14028 SAK 200 D Çöp Kovası Küllüklü", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/d-tipi-kulluklu-cop-kovasi-sk-200-min-228x228.jpg" },
  { id: 30, name: "mis14029 SAK 201 Genel Mekan Çöp Kovası Küllüklü", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/torpil-tipi-cop-kovasi-sk-127-min-228x228.jpg" },
];

const ITEMS_PER_PAGE = 12;

export default function CopKovalariPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Çöp Kovaları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Ev, ofis ve dış mekan kullanımı için estetik ve dayanıklı çöp kovası çözümleri.
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
