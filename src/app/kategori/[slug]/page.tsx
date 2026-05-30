"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import "../category-style.css";

const ITEMS_PER_PAGE = 12;

export default function DynamicCategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [category, setCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!slug) return;

    const fetchCategoryAndProducts = async () => {
      try {
        setLoading(true);
        
        // 1. Try to load category from Firestore
        const catDocRef = doc(db, "categories", slug);
        const catSnapshot = await getDoc(catDocRef);

        let catData: any = null;
        let prodList: any[] = [];

        if (catSnapshot.exists()) {
          catData = catSnapshot.data();
          
          // Load products from Firestore
          const q = query(collection(db, "products"), where("categoryId", "==", slug));
          const prodSnapshot = await getDocs(q);
          prodList = prodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }

        setCategory(catData);
        // Sort products by SKU/code or name
        prodList.sort((a, b) => a.sku.localeCompare(b.sku, undefined, { numeric: true }));
        setProducts(prodList);
        setCurrentPage(1); // Reset page on category change
      } catch (err) {
        console.error("Error loading dynamic category/products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-[#01351F] animate-spin" />
        <p className="text-gray-500 font-medium font-poppins">Kategori Yükleniyor...</p>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 text-center px-4 font-poppins">
        <h2 className="text-2xl font-bold text-[#01351F]">Kategori Bulunamadı</h2>
        <p className="text-gray-500 max-w-md">Aradığınız kategori mevcut değil veya kaldırılmış olabilir.</p>
      </div>
    );
  }

  // Pagination calculations
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          {category.name}
        </h1>
        {slug === "trash-compactor" && (
          <p className="text-[#acc90b] text-xl md:text-2xl font-bold text-center mb-4 animate-pulse">
            TÜRKİYE'DE BİR İLK !
          </p>
        )}
        {category.description && (
          <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
            {category.description}
          </p>
        )}

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl w-full max-w-2xl">
            <p className="text-gray-400 font-medium">Bu kategoride henüz ürün bulunmamaktadır.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
            {currentProducts.map((p) => (
              <Link key={p.id} href={`/urunler/${p.id}`} className="premium-card group block">
                <div className="image-container">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="product-image"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </div>
                <div className="content-box">
                  <div className="sku-badge">
                    KOD: {p.sku}
                  </div>
                  <h3 className="product-name">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination Buttons */}
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
