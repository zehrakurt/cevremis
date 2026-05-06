"use client";

import React, { useState } from "react";
import "../category-style.css";

export default function SifirAtikPanolariPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products = [
    { id: 1, name: "mis9000 Sıfır Atık Geri Dönüşüm Panosu 2'li", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-panosu/2li-sifir-atik-panosu-min-228x228.jpg" },
    { id: 2, name: "mis9001 Sıfır Atık Geri Dönüşüm Panosu 3'lü", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-panosu/3lu-sifir-atik-panosu-min-228x228.jpg" },
    { id: 3, name: "mis9002 Sıfır Atık Geri Dönüşüm Panosu 4'lü", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-panosu/4lu-sifir-atik-panosu-min-228x228.jpg" },
    { id: 4, name: "mis9003 Sıfır Atık Geri Dönüşüm Panosu 5'li", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-panosu/5li-sifir-atik-panosu-min-228x228.jpg" },
    { id: 5, name: "mis9004 Sıfır Atık Geri Dönüşüm Panosu 6'lı", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-panosu/6li-sifir-atik-panosu-min-228x228.jpg" },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Sıfır Atık Panoları
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Atık ayrıştırma bilincini artıran, bilgilendirici ve dayanıklı sıfır atık panoları.
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
