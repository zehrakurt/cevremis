import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hakkimizda() {
  return (
    <div className="font-poppins bg-[#fcfcfc]">
      {/* Banner & Breadcrumbs Header */}
      <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden flex flex-col justify-end">
        <img 
          src="https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/banner-1.jpg" 
          alt="Hakkımızda Banner" 
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 mb-12">
          <nav className="flex items-center text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="mx-2 w-4 h-4" />
            <span className="text-[#ACC90B] font-semibold">Hakkımızda</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Hakkımızda
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Post Main Content */}
            <article className="prose prose-lg max-w-none text-[#04150D]">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <p className="mb-6 leading-relaxed">
                  <strong>Çevremis</strong> olarak; sürdürülebilir bir gelecek için çevreye duyarlı, uzun ömürlü ve yönetmeliklere uygun ürünler tasarlıyor, üretiyor ve sizlere sunuyoruz. Amacımız, işletmelerin ve bireylerin atık yönetimini daha kolay, pratik ve estetik hale getirerek sıfır atık bilincini yaygınlaştırmak.
                </p>
                
                <p className="font-bold text-xl text-[#01351F] mb-4">Ürün yelpazemiz;</p>
                <ul className="list-disc pl-6 space-y-3 mb-8 marker:text-[#ACC90B]">
                  <li><strong>Sıfır Atık Kutuları ve Geri Dönüşüm Setleri</strong></li>
                  <li><strong>Endüstriyel Çöp Kovaları ve Pedallı Çözümler</strong></li>
                  <li><strong>Ayaklı Küllük Modelleri</strong></li>
                  <li><strong>Metal ve Paslanmaz Atık Üniteleri</strong></li>
                  <li><strong>Otel, Restoran ve Kafe Ekipmanları</strong></li>
                  <li><strong>Islak Hacim Ekipmanları</strong></li>
                </ul>
                
                <p className="mb-6 leading-relaxed">
                  ile her sektörün ihtiyacına uygun çözümler sunmaktayız. Ürünlerimiz; işletmeler, oteller, restoranlar, kamu kurumları, AVM’ler, hastaneler ve endüstriyel alanlarda güvenle kullanılmaktadır.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Misyonumuz, çevre dostu ürünlerimizi modern tasarım anlayışı ve dayanıklı malzeme kullanımı ile birleştirerek hem işletmelere profesyonel atık yönetimi çözümleri sunmak hem de ülkemizin sıfır atık hedeflerine katkıda bulunmaktır.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutarak; Türkiye’nin dört bir yanına hızlı sevkiyat ve profesyonel destek ile hizmet veriyoruz.
                </p>
                
                <p className="font-bold text-[#01351F] mt-10 text-lg border-l-4 border-[#ACC90B] pl-4 italic">
                  Çevremis olarak sizleri de sürdürülebilir geleceğin bir parçası olmaya davet ediyoruz.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
