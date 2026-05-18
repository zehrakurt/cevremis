"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const categories = [
  { name: "Sıfır Atık Kutuları", link: "/kategori/sifir-atik-kutulari" },
  { name: "Boyalı Sıfır Atık Kutuları", link: "/kategori/boyali-sifir-atik-kutulari" },
  { name: "Paslanmaz Sıfır Atık Kovaları", link: "/kategori/paslanmaz-sifir-atik-kovalari" },
  { name: "Plastik Sıfır Atık Kovaları", link: "/kategori/plastik-sifir-atik-kovalari" },
  { name: "İlaç ve Pil Atık Kovaları", link: "/kategori/ilac-ve-pil-atik-kovalari" },
  { name: "Sıfır Atık Setleri", link: "/kategori/sifir-atik-setleri" },
  { name: "Atık Getirme Merkezi", link: "/kategori/atik-getirme-merkezi" },
  { name: "Ambalaj Atık Ürünleri", link: "/kategori/ambalaj-atik-urunleri" },
  { name: "Tıbbi Atık Ürünleri", link: "/kategori/tibbi-atik-urunleri" },
  { name: "Sıfır Atık Konteynerleri", link: "/kategori/sifir-atik-konteynerleri" },
  { name: "Tekli Sıfır Atık Kovaları", link: "/kategori/tekli-sifir-atik-kovalari" },
  { name: "Çöp Kovaları", link: "/kategori/cop-kovalari" },
  { name: "Çöp Konteynerleri", link: "/kategori/cop-konteynerleri" },
  { name: "Variller", link: "/kategori/variller" },
  { name: "Çöp Sıkıştırıcı", link: "/kategori/trash-compactor" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md font-sans">
      {/* Header Top - Hidden on Mobile */}
      <div className="hidden xl:block bg-[#acc90b] text-[#04150d] py-2">
        <div className="container mx-auto px-6 md:px-12 flex justify-end items-center gap-6">
          {/* Socials */}
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Youtube" className="hover:opacity-70 transition-opacity">
                <FaYoutube size={18} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <FaLinkedin size={18} />
              </a>
            </li>
          </ul>

          {/* Contacts */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="tel:+905323801519" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Phone size={16} />
              <span>0532 380 15 19</span>
            </a>
            <a href="mailto:cevremis@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Mail size={16} />
              <span>cevremis@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="bg-[#01351f] py-4 border-b border-[#04150d]">
        <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="block ml-[-1rem] md:ml-0">
            <img
              src="/LOGO.png"
              alt="Çevremis Logo"
              className="h-[120px] md:h-[200px] w-auto object-contain my-[-3rem] md:my-[-5.5rem] relative z-10 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#acc90b] font-semibold transition-colors">
              Anasayfa
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1 text-white hover:text-[#acc90b] font-semibold transition-colors">
                Kategoriler <ChevronDown size={16} />
              </button>

              {/* Dropdown Menu - Controlled by CSS group-hover */}
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-3 mt-0 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                {/* Bridge to prevent closing on gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>

                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.link}
                    className="block px-6 py-2.5 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#01351f] font-medium transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/hakkimizda" className="text-white hover:text-[#acc90b] font-semibold transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-white hover:text-[#acc90b] font-semibold transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white hover:text-[#acc90b] p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
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
    </header>
  );
}
