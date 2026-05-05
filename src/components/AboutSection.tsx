import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#01351F] mb-8 relative inline-block">
              Hakkımızda
              <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#ACC90B]"></span>
            </h2>
            
            <div className="space-y-6 text-[#04150D]">
              <h1 className="text-3xl font-bold text-[#01351F]">Çevremis</h1>
              <p className="leading-relaxed">
                <strong>Çevremis</strong> olarak; sürdürülebilir bir gelecek için çevreye duyarlı, uzun ömürlü ve yönetmeliklere uygun ürünler tasarlıyor, üretiyor ve sizlere sunuyoruz. Amacımız, işletmelerin ve bireylerin atık yönetimini daha kolay, pratik ve estetik hale getirerek sıfır atık bilincini yaygınlaştırmak.
              </p>
              
              <p className="font-semibold">Ürün yelpazemiz;</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sıfır Atık Kutuları ve Geri Dönüşüm Kutuları</strong></li>
                <li><strong>Endüstriyel Çöp Kovaları ve Pedallı Çözümler</strong></li>
                <li><strong>Ayaklı Küllük Modelleri</strong></li>
                <li><strong>Metal ve Paslanmaz Atık Üniteleri</strong></li>
                <li><strong>Otel, Restoran ve Kafe Ekipmanları</strong></li>
                <li><strong>Islak Hacim Ekipmanları</strong></li>
              </ul>
              
              <p className="leading-relaxed">
                ile her sektörün ihtiyacına uygun çözümler sunmaktayız. Ürünlerimiz; işletmeler, oteller, restoranlar, kamu kurumları, AVM’ler, hastaneler ve endüstriyel alanlarda güvenle kullanılmaktadır.
              </p>
              
              <p className="leading-relaxed">
                Misyonumuz, çevre dostu ürünlerimizi modern tasarım anlayışı ve dayanıklı malzeme kullanımı ile birleştirerek hem işletmelere profesyonel atık yönetimi çözümleri sunmak hem de ülkemizin sıfır atık hedeflerine katkıda bulunmak.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link 
                href="/hakkimizda" 
                className="bg-[#01351F] text-white py-3 px-10 rounded-full font-bold hover:bg-[#04150D] transition-colors shadow-lg"
              >
                Hakkımızda
              </Link>
              <Link 
                href="/iletisim" 
                className="bg-[#ACC90B] text-[#01351F] py-3 px-10 rounded-full font-bold hover:bg-[#97BE49] transition-colors shadow-lg"
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <img 
                src="https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/hakkimizda-gorsel2.png" 
                alt="Çevremis Hakkımızda"
                className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ACC90B]/10 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#01351F]/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
