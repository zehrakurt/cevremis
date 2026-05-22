import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white font-poppins">
      {/* Footer Center - Links & Contact (Dark Green) */}
      <div className="py-16 bg-[#04150D]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Menüler */}
            <div>
              <h4 className="text-[#ACC90B] text-xl font-bold mb-8 italic">Menüler</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="hover:text-[#ACC90B] transition-colors">Anasayfa</Link>
                <Link href="/kategori/sifir-atik-setleri" className="hover:text-[#ACC90B] transition-colors">Sıfır Atık Setleri</Link>
                <Link href="/hakkimizda" className="hover:text-[#ACC90B] transition-colors">Hakkımızda</Link>
                <Link href="/iletisim" className="hover:text-[#ACC90B] transition-colors">İletişim</Link>
              </nav>
            </div>

            {/* Ürünler */}
            <div>
              <h4 className="text-[#ACC90B] text-xl font-bold mb-8 italic">Ürünler</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/kategori/sifir-atik-kutulari" className="hover:text-[#ACC90B] transition-colors">Sıfır Atık Kutuları</Link>
                <Link href="/kategori/boyali-sifir-atik-kutulari" className="hover:text-[#ACC90B] transition-colors">Boyalı Kutular</Link>
                <Link href="/kategori/paslanmaz-sifir-atik-kovalari" className="hover:text-[#ACC90B] transition-colors">Paslanmaz Kovalar</Link>
                <Link href="/kategori/tibbi-atik-urunleri" className="hover:text-[#ACC90B] transition-colors">Tıbbi Atık Ürünleri</Link>
                <Link href="/kategori/cop-konteynerleri" className="hover:text-[#ACC90B] transition-colors">Çöp Konteynerleri</Link>
                <Link href="/kategori/variller" className="hover:text-[#ACC90B] transition-colors">Variller</Link>
              </nav>
            </div>

            {/* İletişim */}
            <div>
              <h4 className="text-[#ACC90B] text-xl font-bold mb-8 italic">İletişim</h4>
              <div className="flex flex-col gap-6">
                <a 
                  href="https://maps.app.goo.gl/CMLtXFYVFTyrfURZ9" 
                  target="_blank" 
                  className="flex items-start gap-3 hover:text-[#ACC90B] transition-colors"
                >
                  <MapPin className="text-[#ACC90B] shrink-0" size={20} />
                  <span className="text-sm leading-relaxed">Sokullu Mehmetpaşa Mah. Ahmet Haşim Cad. No:25/A Dikmen - Çankaya, Ankara</span>
                </a>
                <a 
                  href="mailto:cevremis@gmail.com" 
                  className="flex items-center gap-3 hover:text-[#ACC90B] transition-colors"
                >
                  <Mail className="text-[#ACC90B] shrink-0" size={20} />
                  <span className="text-sm">cevremis@gmail.com</span>
                </a>
                <a 
                  href="tel:+905323801519" 
                  className="flex items-center gap-3 hover:text-[#ACC90B] transition-colors"
                >
                  <Phone className="text-[#ACC90B] shrink-0" size={20} />
                  <span className="text-sm">0532 380 15 19</span>
                </a>
              </div>
            </div>

            {/* Harita */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ACC90B]/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3533967812234!2d32.825224!3d39.885642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0d6d53e0d3%3A0x7d0e3a6c5e5e5e5e!2zU29rdWxsdSBNZWhtZXRwYcWfYSBNYWguLCBBaG1ldCBIYcWfaW0gQ2FkLiBObzoyNSwgMDY0NTAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1714765000000!5m2!1str!2str" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Slogan and Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-4">
            <p className="text-[#ACC90B] font-bold text-lg italic tracking-wider font-poppins">
              "Çevre için Çevremis, mis gibi çevre için!"
            </p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Çevremis. Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
