import React from "react";
import Link from "next/link";

const productGroups = [
  {
    id: 1,
    title: "Sıfır Atık Kutuları",
    text: "Sıfır atık kutuları, evde ve iş yerinde atıkları kaynağında ayrıştırarak çevreyi korumanın en etkili yoludur. Doğaya zarar vermeyen bu kutularla sürdürülebilir yaşama güçlü bir adım atabilirsiniz.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/sifir-atik-kutulari.jpg",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/10/mobil1-1.jpg",
    link: "/kategori/sifir-atik-kutulari/",
    isBig: true,
  },
  {
    id: 2,
    title: "Geri Dönüşüm Kutuları",
    text: "Geri Dönüşüm Kutuları, atıkları kaynağında ayırmanın en pratik ve görünür yoludur. Geri Dönüşüm Kutuları hem evlerde hem iş yerlerinde düzen sağlar, karışık atıkların israfını önler ve geri kazanım süreçlerini hızlandırır.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/12/geri-donusum.jpg",
    mobileImage: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/12/mobil-kategori.webp",
    link: "/kategori/geri-donusum-kutulari/",
    isBig: true,
  },
  {
    id: 3,
    title: "Çöp Kovaları",
    text: "Çöp kovası, günlük yaşamda oluşan atıkların hijyenik ve düzenli bir şekilde toplanmasını sağlayan temel temizlik ekipmanıdır. Evlerden iş yerlerine kadar her alanda kullanılır.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/yanmaz-cop-kovasi-143.webp",
    link: "/kategori/cop-kovalari/",
    isBig: false,
  },
  {
    id: 4,
    title: "Bahçe Tipi Çöp Kutuları",
    text: "Bahçe tipi çöp kutuları, dış mekânlarda atıkları düzenli ve hijyenik şekilde toplamanızı sağlar. Geri dönüşüme uygun tasarımlarıyla sıfır atık hedefinize katkı sunar.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/bahce-tipi-cop-kutulari.jpg",
    link: "/kategori/bahce-tipi-cop-kutulari/",
    isBig: false,
  },
  {
    id: 5,
    title: "Ayaklı Küllük",
    text: "Ayaklı küllük, sigara izmaritlerinin çevreye zarar vermesini önleyen şık ve işlevsel bir çözümdür. Sıfır atık anlayışına uygun bu ürün, temiz alanlar oluşturur.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/ayakli-kulluk.jpg",
    link: "/kategori/ayakli-kulluk/",
    isBig: false,
  },
  {
    id: 6,
    title: "Pedallı Çöp Kutuları",
    text: "Pedallı çöp kutuları, hijyenik ve pratik kullanımıyla atık yönetimini kolaylaştırır. Ellerle temas etmeden açılabilen bu kutular, çevreci bir yaşam sunar.",
    image: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/pedalli.jpg",
    link: "/kategori/pedalli-cop-kutulari/",
    isBig: false,
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
                group.isBig ? "md:col-span-2" : "md:col-span-1"
              } group relative overflow-hidden rounded-2xl shadow-lg h-[350px] md:h-[450px]`}
            >
              {/* Image */}
              <picture className="absolute inset-0">
                {group.mobileImage && (
                  <source media="(max-width: 768px)" srcSet={group.mobileImage} />
                )}
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </picture>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Text Area */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:max-w-2xl text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#ACC90B] transition-colors">
                  {group.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-6 line-clamp-3 md:line-clamp-none">
                  {group.text}
                </p>
                <Link
                  href={group.link}
                  className="inline-block bg-[#ACC90B] text-[#01351F] font-bold py-3 px-8 rounded-full hover:bg-white transition-colors"
                >
                  Ürünleri Gör
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
