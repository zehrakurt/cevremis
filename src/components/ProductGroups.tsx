import React from "react";
import Link from "next/link";

const productGroups = [
  {
    id: 1,
    title: "Sıfır Atık Kutuları",
    text: "Sıfır atık kutuları, evde ve iş yerinde atıkları kaynağında ayrıştırarak çevreyi korumanın en etkili yoludur. Doğaya zarar vermeyen bu kutularla sürdürülebilir yaşama güçlü bir adım atabilirsiniz.",
    image: "/assets/setler.png",
    link: "/kategori/sifir-atik-kutulari",
    isBig: true,
    objectMode: "object-contain bg-[#0a0a0a]",
  },
  {
    id: 2,
    title: "Sıfır Atık Setleri",
    text: "Geri dönüşüm bilincini artıran ve atık yönetimini profesyonel hale getiren çok bölmeli sıfır atık setleri. Şık tasarımlarıyla ofis ve kamu alanları için ideal çözümler.",
    image: "/assets/setler2.png",
    link: "/kategori/sifir-atik-setleri",
    isBig: true,
    objectMode: "object-contain bg-[#0a0a0a]",
  },
  {
    id: 3,
    title: "Çöp Kovaları",
    text: "Günlük yaşamda oluşan atıkların hijyenik ve düzenli bir şekilde toplanmasını sağlayan, dayanıklı ve estetik çöp kovası modelleri.",
    image: "/assets/kovalar.png",
    link: "/kategori/cop-kovalari",
    isBig: false,
    objectMode: "object-cover",
  },
  {
    id: 4,
    title: "Çöp Konteynerleri",
    text: "Geniş kapasiteli, dış mekan şartlarına dayanıklı ve taşıma kolaylığı sağlayan tekerlekli çöp konteyneri çözümleri.",
    image: "/assets/konteyner.png",
    link: "/kategori/cop-konteynerleri",
    isBig: false,
    objectMode: "object-cover",
  },
  {
    id: 5,
    title: "Tıbbi Atık Ürünleri",
    text: "Hastane ve klinik gibi sağlık kuruluşları için uluslararası standartlara uygun, güvenli tıbbi atık toplama ekipmanları.",
    image: "/assets/tibbi.png",
    link: "/kategori/tibbi-atik-urunleri",
    isBig: false,
    objectMode: "object-cover",
  },
  {
    id: 6,
    title: "Variller",
    text: "Endüstriyel depolama ve taşıma ihtiyaçlarınız için farklı kapasitelerde, yüksek mukavemetli plastik varil modelleri.",
    image: "/assets/varil.png",
    link: "/kategori/variller",
    isBig: false,
    objectMode: "object-cover",
  },
];

export default function ProductGroups() {
  return (
    <section className="py-20 mb-8 font-poppins bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#01351F] relative inline-block">
            Ürünlerimiz
            <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#ACC90B]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productGroups.map((group) => (
            <div
              key={group.id}
              className={`${
                group.isBig 
                  ? "md:col-span-2 flex flex-col md:flex-row bg-[#000000]" 
                  : "md:col-span-1 relative h-[350px] md:h-[450px]"
              } group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl`}
            >
              {group.isBig ? (
                // Big Banner: Text Left, Image Right
                <>
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white order-2 md:order-1 bg-[#000000]">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#ACC90B] transition-colors uppercase tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/80 mb-8 font-medium leading-relaxed">
                      {group.text}
                    </p>
                    <div>
                      <Link
                        href={group.link}
                        className="inline-block bg-[#ACC90B] text-[#01351F] font-bold py-4 px-12 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
                      >
                        Ürünleri Gör
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-[450px] relative order-1 md:order-2 overflow-hidden bg-[#000000]">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </>
              ) : (
                // Small Banner: Overlay Design
                <>
                  <div className="absolute inset-0">
                    <img
                      src={group.image}
                      alt={group.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${group.objectMode}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#ACC90B] transition-colors uppercase tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-6 line-clamp-3 font-medium leading-relaxed">
                      {group.text}
                    </p>
                    <Link
                      href={group.link}
                      className="inline-block bg-[#ACC90B] text-[#01351F] font-bold py-3 px-10 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                      Ürünleri Gör
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
