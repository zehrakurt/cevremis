"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "./header-categories";

function MenuIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function HeaderMobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className="xl:hidden text-white hover:text-[#acc90b] p-2 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg z-50">
          <nav className="flex flex-col py-4 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className="px-6 py-3 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#acc90b] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Anasayfa
            </Link>

            <div className="px-6 py-3 text-[#01351f] font-bold border-b border-gray-50 bg-gray-50/50">
              Kategoriler
            </div>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.link}
                className="px-8 py-2.5 text-gray-600 hover:bg-[#f2f5e9] hover:text-[#acc90b] text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}

            <Link
              href="/hakkimizda"
              className="px-6 py-3 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#acc90b] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="px-6 py-3 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#acc90b] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
