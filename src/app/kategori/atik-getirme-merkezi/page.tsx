"use client";

import React, { useState } from "react";
import "../category-style.css";

export default function AtikGetirmeMerkeziPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products = [
    { id: 1, name: "mis10000 2. Sınıf Atık Getirme Merkezi 002", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/atik-getirme-merkezi/buyuk-atik-getirme-merkezi-1-min-228x228.jpg" },
    { id: 2, name: "mis10001 3. Sınıf Atık Getirme Merkezi 003", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/atik-getirme-merkezi/kucuk-atik-getirme-merkezi-1-min-228x228.jpg" },
    { id: 3, name: "mis10002 Mobil Atık Getirme Merkezi", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/atik-getirme-merkezi/mobil-atik-2-228x228.jpg" },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Atık Getirme Merkezi
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Belediyeler ve büyük tesisler için geniş kapsamlı atık toplama ve ayrıştırma merkezleri.
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
