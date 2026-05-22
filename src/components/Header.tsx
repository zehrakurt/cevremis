import type { ReactNode } from "react";
import Link from "next/link";
import { categories } from "./header-categories";
import {
  ChevronDownIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from "./header-icons";

type HeaderProps = {
  mobileNav?: ReactNode;
};

export default function Header({ mobileNav }: HeaderProps) {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#021f12] text-white py-2 text-xs md:text-sm font-semibold tracking-wide border-b border-[#acc90b]/10">
        <div className="container mx-auto px-4 md:px-12 w-full flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-center">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#acc90b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#acc90b]"></span>
            </span>
            <span className="text-white font-medium">Ankara İçi Ücretsiz Teslimat</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#acc90b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <span className="text-white/90 font-medium">Türkiye'nin Her Yerine Sağlam Kargo Sistemi</span>
          </span>
        </div>
      </div>

      {/* Header Top - Responsive and Visible on both Mobile & Desktop */}
      <div className="bg-[#acc90b] text-[#04150d] py-2">
        <div className="container mx-auto px-4 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-6">
            {/* Slogan */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm font-bold tracking-wide italic font-poppins shrink-0">
              <span className="text-base animate-pulse">🌱</span>
              <span>Çevre için Çevremis, mis gibi çevre için!</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-6 w-full md:w-auto">
              {/* Socials - Hidden on small mobile screens to keep it clean */}
              <ul className="hidden sm:flex items-center gap-4 shrink-0">
                <li>
                  <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Youtube" className="hover:opacity-70 transition-opacity">
                    <YoutubeIcon />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                    <LinkedinIcon />
                  </a>
                </li>
              </ul>

              {/* Contacts */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 sm:gap-x-6 text-xs sm:text-sm font-semibold">
                <a href="tel:+905323801519" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity whitespace-nowrap">
                  <PhoneIcon />
                  <span>0532 380 15 19</span>
                </a>
                <a href="mailto:cevremis@gmail.com" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity whitespace-nowrap">
                  <MailIcon />
                  <span>cevremis@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
 <div className="bg-[#01351f] py-4 border-b border-[#04150d]">
  <div className="container mx-auto pl-0 pr-4 md:pl-2 md:pr-12 flex justify-between items-center">
    
    {/* Logo */}
    <Link href="/" className="block">
      <img
        src="/LOGO.png"
        alt="Çevremis Logo"
className="h-[120px] md:h-[200px] w-auto object-contain my-[-3rem] md:my-[-5.5rem] relative z-10 drop-shadow-sm block -ml-6"      />
    </Link>


          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#acc90b] font-semibold transition-colors">
              Anasayfa
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1 text-white hover:text-[#acc90b] font-semibold transition-colors">
                Kategoriler <ChevronDownIcon />
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

          {mobileNav}
        </div>
      </div>
    </header>
  );
}
