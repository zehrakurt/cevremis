"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  MapPin, 
  Layers, 
  Maximize2, 
  Heart, 
  ArrowLeft, 
  Sparkles,
  Play
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Helper function to extract YouTube/Vimeo embed URLs
const getEmbedUrl = (url: string) => {
  if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }
  return null;
};

// Ürün detayları verisi
const productsDetailData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Manuel Çöp Sıkıştırıcı, Taşınabilir Küçük Çöp Sıkıştırıcı",
    code: "MIS200",
    images: [
      { type: "image", url: "https://i.ebayimg.com/images/g/VFoAAOSw2QJn3P8u/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/VFoAAOSw2QJn3P8u/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/i0EAAOSwF4tn3P8v/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/i0EAAOSwF4tn3P8v/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/MFwAAOSwE8xn3P80/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/MFwAAOSwE8xn3P80/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/2UMAAOSwLPNn3P82/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/2UMAAOSwLPNn3P82/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/PIwAAOSwLQ9n3P84/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/PIwAAOSwLQ9n3P84/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/2BEAAOSwdV1n3P85/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/2BEAAOSwdV1n3P85/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/jlgAAOSwXtpn3P83/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/jlgAAOSwXtpn3P83/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/RMMAAOSwSc9n3P8~/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/RMMAAOSwSc9n3P8~/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/44EAAOSwmkpn3P9B/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/44EAAOSwmkpn3P9B/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/TjYAAOSwe4hn3P9C/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/TjYAAOSwe4hn3P9C/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/kLcAAOSw2bln3P9G/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/kLcAAOSw2bln3P9G/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/ES8AAOSw7qBn3P9F/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/ES8AAOSw7qBn3P9F/s-l140.webp" },
      { type: "image", url: "https://i.ebayimg.com/images/g/9N8AAOSwg75n3P9E/s-l1600.webp", thumb: "https://i.ebayimg.com/images/g/9N8AAOSwg75n3P9E/s-l140.webp" }
    ],
    highlights: [
      { icon: Layers, text: "Malzeme: Yüksek dayanımlı çelik" },
      { icon: MapPin, text: "Taşınabilir hafif tasarım" },
      { icon: Maximize2, text: "Hacim azaltma oranı: %30" }
    ],
    description: "Kolay taşınabilir ve pratik manuel çöp sıkıştırıcı. Evinizde, bahçenizde veya ofisinizde çöplerinizi kolayca sıkıştırarak çöp poşetlerinizden tasarruf edin. Dayanıklı metal gövde ve rahat kavrama kolu ile uzun ömürlü kullanım sunar.",
    details: {
      width: "25 cm",
      height: "60 cm",
      depth: "12 cm",
      weight: "2.4 kg"
    }
  },
  "2": {
    id: 2,
    name: "Titan 30 Çöp Sıkıştırıcı - Joseph Joseph",
    code: "MIS201",
    images: [
      { type: "video", url: "https://vimeo.com/309989995", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/3/0/309989995.jpg" },
      { type: "video", url: "https://www.youtube.com/watch?v=VMyfHsnSHRY", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/V/M/VMyfHsnSHRY.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/j/j/jj_titan_lifestyle-2_87451_2_3.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/j/j/jj_titan_lifestyle-2_87451_2_3.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/t/i/titan_how-to_compact_274_1.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/t/i/titan_how-to_compact_274_1.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/t/i/titan-trash-compactor-3-stone-is1_2.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/t/i/titan-trash-compactor-3-stone-is1_2.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/t/i/titan---shot-w_2_2.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/t/i/titan---shot-w_2_2.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/2/5/250118--titan-recycling-_-trash-compactor.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/2/5/250118--titan-recycling-_-trash-compactor.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/2/5/250118-titan-recycling-_-trash-compactor_3_.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/2/5/250118-titan-recycling-_-trash-compactor_3_.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/2/5/250118-titan-recycling-_-trash-compactor_4_.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/2/5/250118-titan-recycling-_-trash-compactor_4_.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/2/5/250118-titan-recycling-_-trash-compactor_5_.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/2/5/250118-titan-recycling-_-trash-compactor_5_.jpg" },
      { type: "image", url: "https://www.linenchest.com/media/catalog/product/cache/aa5994821b2f2d8394f708449f6ae92d/2/5/250118-titan-recycling-_-trash-compactor_7_.jpg", thumb: "https://www.linenchest.com/media/catalog/product/cache/89d4fb9bdd7ae43f293284bf3b1c562d/2/5/250118-titan-recycling-_-trash-compactor_7_.jpg" }
    ],
    highlights: [
      { icon: Layers, text: "Malzeme: Paslanmaz Çelik ve Dayanıklı Polimer" },
      { icon: Sparkles, text: "Patentli Hijyenik Sıkıştırma Sistemi" },
      { icon: Maximize2, text: "Çöpü 3 kata kadar sıkıştırır" }
    ],
    description: "Yenilikçi, ev tipi çöp sıkıştırma sistemi ile atık yönetimini kolaylaştırın. Patentli, hijyenik sıkıştırma mekanizması sayesinde standart çöp kutularına kıyasla 3 kata kadar daha fazla çöp alır. Bu sayede çöp kutunuzu daha seyrek boşaltır ve daha az poşet kullanırsınız. Yırtılma önleyici özel tasarımı sıkıştırma esnasında çöp poşetini korurken, değiştirilebilir koku filtresi hoş olmayan kokuları nötralize eder. Paslanmaz çelik şık tasarımıyla mutfağınıza uzun ömürlü ve modern bir dokunuş katar.",
    details: {
      width: "39 cm",
      height: "68 cm",
      depth: "34 cm",
      weight: "7.9 kg"
    }
  },
  "3": {
    id: 3,
    name: "Binzee Çöp Sıkıştırıcı - Atık Sıkıştırma Aparatı",
    code: "MIS202",
    images: [
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/e0d0d6/7225581037/il_794xN.7225581037_rbwy.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/e0d0d6/7225581037/il_75x75.7225581037_rbwy.jpg" },
      { type: "video", url: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Untitled_video_-_Made_with_Clipchamp_newwwwww_u8cgly.mp4", thumb: "https://v.etsystatic.com/video/upload/ar_1:1,c_fill,h_105,q_auto,w_105/Untitled_video_-_Made_with_Clipchamp_newwwwww_u8cgly.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/86df43/7225582033/il_794xN.7225582033_2e64.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/86df43/7225582033/il_75x75.7225582033_2e64.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/2b930f/7225582571/il_794xN.7225582571_ae37.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/2b930f/7225582571/il_75x75.7225582571_ae37.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/4ecae8/7225583183/il_794xN.7225583183_ps1k.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/4ecae8/7225583183/il_75x75.7225583183_ps1k.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/3478f7/7177596846/il_794xN.7177596846_i5tt.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/3478f7/7177596846/il_75x75.7177596846_i5tt.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/a68db4/7225584281/il_794xN.7225584281_nyvs.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/a68db4/7225584281/il_75x75.7225584281_nyvs.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/876d66/7225584557/il_794xN.7225584557_3j8d.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/876d66/7225584557/il_75x75.7225584557_3j8d.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/bba576/7225585571/il_794xN.7225585571_hkki.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/bba576/7225585571/il_75x75.7225585571_hkki.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/e7f8f4/7225597177/il_794xN.7225597177_cehi.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/e7f8f4/7225597177/il_75x75.7225597177_cehi.jpg" },
      { type: "image", url: "https://i.etsystatic.com/61926793/r/il/a1864d/7225594281/il_794xN.7225594281_p0he.jpg", thumb: "https://i.etsystatic.com/61926793/r/il/a1864d/7225594281/il_75x75.7225594281_p0he.jpg" }
    ],
    highlights: [
      { icon: Layers, text: "Malzeme: Geri Dönüştürülebilir Kauçuk ve Çelik" },
      { icon: Sparkles, text: "Türkiye'de İlk ve Tek Çöp Sıkıştırma Aparatı" },
      { icon: Maximize2, text: "Çöp kutusu hacmini %40'a kadar azaltır" }
    ],
    description: "Çöp kutularının taşmasından ve boşa harcanan alanlardan bıktınız mı? Evsel atıkları sıkıştırarak çöp kutusu hacmini %40'a kadar azaltan basit ama güçlü bir alet olan Binzee ile tanışın. Türkiye'de ilk ve tek olan bu yenilikçi tasarım, evlerin ve işletmelerin çöp toplama sıklığını azaltmasına, karbon etkisini düşürmesine ve çöp alanlarını daha temiz ve yönetilebilir tutmasına yardımcı olur.",
    details: {
      width: "30 cm",
      height: "82 cm",
      depth: "10 cm",
      weight: "3.5 kg"
    }
  },
  "4": {
    id: 4,
    name: "Ag-mac BP11 Çöp Sıkıştırıcı - 1100 Litre Atık Presi",
    code: "MIS203",
    images: [
      { type: "image", url: "https://www.agritelonline.co.uk/wp-content/uploads/2023/01/products-untitled_design_7_.png.webp", thumb: "https://www.agritelonline.co.uk/wp-content/uploads/2023/01/products-untitled_design_7_.png.webp" },
      { type: "image", url: "https://www.agritelonline.co.uk/wp-content/uploads/1100-compactor-3-1.jpg", thumb: "https://www.agritelonline.co.uk/wp-content/uploads/1100-compactor-3-1-150x100.jpg" },
      { type: "image", url: "https://www.agritelonline.co.uk/wp-content/uploads/1100-compactor-6-1.jpg", thumb: "https://www.agritelonline.co.uk/wp-content/uploads/1100-compactor-6-1-150x100.jpg" },
      { type: "image", url: "https://www.agritelonline.co.uk/wp-content/uploads/bin-press-AG-MAC-11002.jpg", thumb: "https://www.agritelonline.co.uk/wp-content/uploads/bin-press-AG-MAC-11002-150x100.jpg" }
    ],
    highlights: [
      { icon: Layers, text: "Malzeme: Ağır Hizmet Tipi Çelik Yapı" },
      { icon: Sparkles, text: "3:1 Oranında Güçlü Sıkıştırma" },
      { icon: Maximize2, text: "1100 Litre Tekerlekli Konteynerlerle Uyumlu" }
    ],
    description: "Ag-mac BP11 Çöp Presi, atık bertaraf maliyetlerini azaltmak için mükemmel bir çözümdür. 3:1'e kadar sıkıştırma oranıyla, hacmi en aza indirerek daha az çöp toplama sıklığı ve daha geniş depolama alanı sağlar. Standart 1100 litrelik tekerlekli çöp konteynerleri ile uyumludur ve dış mekan kullanımına uygundur. BP11, çalışma sırasında konteyner tekerleklerinin zarar görmesini önleyen özel bir taban plakasına sahiptir. Çift elle kontrol mekanizması ile maksimum güvenlik sağlar ve kullanımı son derece kolaydır.",
    details: {
      width: "116 cm",
      height: "186 cm",
      depth: "115 cm",
      weight: "220 kg"
    }
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || "3";
  const product = productsDetailData[id] || productsDetailData["3"];

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    details: true
  });
  const [isFavorited, setIsFavorited] = useState(false);

  const activeMedia = product.images[activeMediaIndex] || product.images[0];

  const handleThumbnailClick = (index: number) => {
    setActiveMediaIndex(index);
    setIsPlaying(false);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // WhatsApp yönlendirme linki
  const whatsappLink = `https://wa.me/905323801519?text=Merhaba,%20${product.code}%20kodlu%20${encodeURIComponent(product.name)}%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum.`;

  return (
    <div className="bg-[#fcfdfa] text-gray-800 font-sans min-h-screen py-12 font-poppins">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Üst Navigasyon ve Geri Tuşu */}
        <div className="flex items-center justify-start mb-8 border-b border-gray-100 pb-4">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#01351f] font-semibold transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Geri Dön
          </button>
        </div>

        {/* Ana Ürün Paneli */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          
          {/* Sol Sütun: Medya Galerisi */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 w-full">
            
            {/* Dikey Thumbnails - Büyük ekranda solda, mobilde altta */}
            {product.images.length > 1 && (
              <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-200 pr-2 font-poppins">
                {product.images.map((img: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border-2 transition-all flex-shrink-0 flex items-center justify-center ${
                      activeMediaIndex === idx ? "border-[#01351f] shadow-md scale-95" : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img src={img.thumb || img.url} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    {img.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Büyük Görsel / Video Alanı */}
            <div className="order-1 md:order-2 flex-1 relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center min-h-[350px] md:min-h-[500px] max-h-[550px]">
              
              {/* Favorilere Ekleme Butonu */}
              <button 
                onClick={() => setIsFavorited(!isFavorited)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md text-gray-500 hover:text-red-500 hover:scale-110 active:scale-95 transition-all"
                aria-label="Favorilere Ekle"
              >
                <Heart className={`w-6 h-6 transition-colors ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
              </button>

              {activeMedia.type === "video" ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 text-white cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <div className="w-20 h-20 bg-white/95 text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        <Play className="w-10 h-10 fill-current ml-1" />
                      </div>
                      <span className="mt-4 font-semibold text-lg drop-shadow-md">Videoyu Oynat</span>
                    </div>
                  )}
                  {isPlaying ? (
                    (() => {
                      const embedUrl = getEmbedUrl(activeMedia.url);
                      if (embedUrl) {
                        return (
                          <iframe
                            src={embedUrl}
                            className="w-full h-full border-0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        );
                      }
                      return (
                        <video
                          src={activeMedia.url}
                          controls
                          autoPlay
                          className="w-full h-full object-contain"
                          loop
                          muted
                        />
                      );
                    })()
                  ) : (
                    <img 
                      src={activeMedia.thumb || activeMedia.url} 
                      alt="Video Thumbnail" 
                      className="w-full h-full object-contain" 
                    />
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full p-6 flex items-center justify-center">
                  <img
                    src={activeMedia.url}
                    alt={product.name}
                    className="max-w-full max-h-[480px] object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Sağ Sütun: Bilgi ve Satış Paneli */}
          <div className="lg:col-span-5 flex flex-col gap-6 font-poppins">
            
            {/* Başlık ve KOD */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f5e9] text-[#01351f] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> ÇÖP SIKIŞTIRICI
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm mt-3">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-semibold font-mono">
                  KOD: {product.code}
                </span>
              </div>
            </div>

            {/* Highlightlar */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Öne Çıkan Özellikler</h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {product.highlights.map((h: any, idx: number) => {
                  const Icon = h.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50/50 p-2.5 rounded-xl border border-gray-50">
                      <div className="bg-white p-1.5 rounded-lg border border-gray-100 text-[#01351f] shadow-sm flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="leading-normal pt-0.5">{h.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Satın Alma / İletişim Aksiyonları */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#20ba59] hover:shadow-lg active:scale-98 transition-all text-center text-lg"
              >
                <FaWhatsapp className="w-6 h-6" /> WhatsApp ile Sipariş Ver
              </a>
            </div>

            {/* Accordion Listeler */}
            <div className="border-t border-gray-100 pt-4 mt-2 space-y-2">
              
              {/* Açıklama Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  onClick={() => toggleAccordion("details")}
                  className="w-full py-3 flex justify-between items-center text-left font-bold text-gray-900 hover:text-[#01351f] transition-colors"
                >
                  <span>Ürün Açıklaması ve Detayları</span>
                  <span className="text-xl">{openAccordions.details ? "−" : "+"}</span>
                </button>
                {openAccordions.details && (
                  <div className="pt-2 pb-4 text-sm text-gray-600 leading-relaxed space-y-4">
                    <p>{product.description}</p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2 font-medium">
                      <div className="grid grid-cols-2 py-1 border-b border-gray-100">
                        <span className="text-gray-400">Genişlik:</span>
                        <span className="text-gray-900 text-right">{product.details.width}</span>
                      </div>
                      <div className="grid grid-cols-2 py-1 border-b border-gray-100">
                        <span className="text-gray-400">Yükseklik:</span>
                        <span className="text-gray-900 text-right">{product.details.height}</span>
                      </div>
                      <div className="grid grid-cols-2 py-1 border-b border-gray-100">
                        <span className="text-gray-400">Derinlik:</span>
                        <span className="text-gray-900 text-right">{product.details.depth}</span>
                      </div>
                      <div className="grid grid-cols-2 py-1">
                        <span className="text-gray-400">Ağırlık:</span>
                        <span className="text-gray-900 text-right">{product.details.weight}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
