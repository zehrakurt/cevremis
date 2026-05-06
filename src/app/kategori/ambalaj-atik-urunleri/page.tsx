"use client";

import React, { useState } from "react";
import "../category-style.css";

export default function AmbalajAtikUrunleriPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products = [
    { id: 1, name: "mis11000 45 Litre Ambalaj Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/mavi-plastik-ambalaj-atiklari-228x228.jpg" },
    { id: 2, name: "mis11001 65 Litre Ambalaj Atık Plastik Sıfır Atık Konteyneri", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/mavi-plastik-ambalaj-atiklari-228x228.jpg" },
    { id: 3, name: "mis11002 Ambalaj Atık Kumbarası 3000 Litre Vinçli Model", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/ambalaj-kumbarasi/3000-litre-vincli-ambalaj-atik-kumbarasi-min-228x228.jpg" },
    { id: 4, name: "mis11003 Ambalaj Atık Kumbarası 3000 Litre Vinçsiz Model", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/ambalaj-kumbarasi/3000-litre-vincsiz-ambalaj-atik-kumbarasi-min-228x228.jpg" },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Ambalaj Atık Ürünleri
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Kağıt, plastik ve metal ambalaj atıklarının geri dönüşümü için profesyonel çözümler.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {currentProducts.map((p) => (
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
      </div>
    </section>
  );
}
