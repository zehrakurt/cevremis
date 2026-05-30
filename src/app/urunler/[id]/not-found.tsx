// src/app/urunler/[id]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#01351f] mb-4">Ürün bulunamadı</h1>
        <p className="text-lg mb-6">Aradığınız ürün mevcut değil.</p>
        <Link href="/urunler" className="text-blue-600 hover:underline">
          Ürünler sayfasına dön
        </Link>
      </div>
    </section>
  );
}
