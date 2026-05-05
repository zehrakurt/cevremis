"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md font-sans">
      {/* Header Top - Hidden on Mobile */}
      <div className="hidden xl:block bg-[#acc90b] text-[#04150d] py-2">
        <div className="container mx-auto px-6 md:px-12 flex justify-end items-center gap-6">
          {/* Socials */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Youtube"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaYoutube size={18} />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <FaLinkedin size={18} />
              </a>
            </li>
          </ul>

          {/* Contacts */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="tel:+905323801519"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Phone size={16} />
              <span>0532 380 15 19</span>
            </a>
            <a
              href="mailto:cevremis@gmail.com"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Mail size={16} />
              <span>cevremis@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="bg-[#01351f] py-4 border-b border-[#04150d]">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="block">
            <img
              src="https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/sifir-atik-header-logo.png"
              alt="Çevremis Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-[#acc90b] font-semibold transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              href="/urunler"
              className="text-white hover:text-[#acc90b] font-semibold transition-colors"
            >
              Ürünler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-white hover:text-[#acc90b] font-semibold transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="text-white hover:text-[#acc90b] font-semibold transition-colors"
            >
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
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
          <nav className="flex flex-col py-4">
            <Link
              href="/"
              className="px-6 py-3 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#acc90b] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              href="/urunler"
              className="px-6 py-3 text-gray-700 hover:bg-[#f2f5e9] hover:text-[#acc90b] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ürünler
            </Link>
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
            <div className="mt-4 px-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
               <a
                href="tel:+905323801519"
                className="flex items-center gap-3 text-gray-600"
              >
                <Phone size={18} className="text-[#acc90b]" />
                <span>0532 380 15 19</span>
              </a>
              <a
                href="mailto:cevremis@gmail.com"
                className="flex items-center gap-3 text-gray-600"
              >
                <Mail size={18} className="text-[#acc90b]" />
                <span>cevremis@gmail.com</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
