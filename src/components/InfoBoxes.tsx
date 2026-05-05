import React from "react";

const infoItems = [
  {
    id: 1,
    title: "Sürdürülebilirlik",
    text: "Sürdürülebilirlik, doğaya <br /> saygılı üretim ve tüketimle geleceği korumanın en etkili yoludur.",
    icon: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/icon1-1.png",
  },
  {
    id: 2,
    title: "Sıfır Atık",
    text: "Çevremis ile doğaya dost adımlar<br /> atın , sürdürülebilir bir yaşam için fark yaratın.",
    icon: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/icon1.png",
  },
  {
    id: 3,
    title: "Geri Dönüşüm",
    text: "Geri dönüşümle atıkları azaltın, <br /> Çevremis ile çevreye katkı sağlayan adımlar atın.",
    icon: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/icon1.png",
  },
  {
    id: 4,
    title: "Çevre Dostu",
    text: "Çevre dostu seçimlerle <br /> doğayı koruyun, Çevremis ile sürdürülebilir yaşama adım atın.",
    icon: "https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/icon1.png",
  },
];

export default function InfoBoxes() {
  return (
    <section className="bg-[#04150D] py-[60px] pb-[48px] mb-[80px] font-poppins">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center -mx-[15px]">
          {infoItems.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mb-[24px]"
            >
              <div className="flex items-start gap-[16px]">
                <div className="flex-shrink-0 w-[32px]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-auto block object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#ACC90B] text-[20px] font-semibold italic mb-[10px] leading-[1.2]">
                    {item.title}
                  </h3>
                  <p
                    className="text-white text-[16px] leading-[1.6] font-normal opacity-100"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
