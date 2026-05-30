import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Clipboard } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

type Product = {
  id: string;
  name: string;
  image: string;
  sku: string;
  categoryId?: string;
  images?: string[];
};

async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const snap = await getDoc(doc(db, "products", id));
    if (!snap.exists()) return null;
    return { id: snap.id, ...(snap.data() as any) } as Product;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  return {
    title: product ? `${product.name} - Çevremis` : "Ürün Bulunamadı - Çevremis",
    description: product ? `${product.name} ürününe ait detaylar ve kod bilgisi.` : "Ürün bulunamadı.",
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center font-poppins">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-[#01351f] mb-3">Ürün Bulunamadı</h1>
          <p className="text-gray-500 mb-6">Aradığınız ürün veritabanında mevcut değil veya silinmiş olabilir.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#01351f] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#acc90b] hover:text-[#01351f] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Anasayfaya Dön
          </Link>
        </div>
      </section>
    );
  }

  // Generate WhatsApp message URL
  const whatsAppMessage = `Merhaba, ${product.name} (Kod: ${product.sku}) ürünü hakkında bilgi alabilir miyim?`;
  const whatsAppUrl = `https://wa.me/905323801519?text=${encodeURIComponent(whatsAppMessage)}`;

  // Fallback to product.image if product.images doesn't exist
  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100/50 py-16 font-poppins">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href={product.categoryId ? `/kategori/${product.categoryId}` : "/"}
            className="inline-flex items-center gap-2 text-[#01351f] hover:text-[#acc90b] font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Kategoriye Geri Dön
          </Link>
        </div>

        {/* Product Card Container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 md:p-12 relative">
          
          {/* Subtle decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#acc90b]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01351f]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Left Column: Interactive Image Gallery */}
          <div className="md:col-span-7">
            <ImageGallery images={galleryImages} name={product.name} />
          </div>

          {/* Right Column: Details (span 5) */}
          <div className="md:col-span-5 flex flex-col justify-center">
            
            {/* Tag / Category Badge */}
            <div className="mb-4">
              <span className="bg-[#acc90b]/10 text-[#01351f] border border-[#acc90b]/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase inline-block">
                Ürün Detayı
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#01351f] tracking-tight leading-tight mb-4">
              {product.name}
            </h1>

            {/* Product Code (SKU) */}
            <div className="bg-[#01351f]/5 border border-[#01351f]/10 rounded-2xl p-4 md:p-6 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 block mb-1 uppercase tracking-wider">
                  Ürün Kodu (SKU)
                </span>
                <span className="text-xl md:text-2xl font-mono font-bold text-[#01351f] tracking-wide">
                  {product.sku}
                </span>
              </div>
              <div className="bg-[#acc90b] text-[#01351f] w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-md">
                KOD
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                WhatsApp ile Sipariş Ver / Bilgi Al
              </a>
              <Link
                href="/iletisim"
                className="w-full bg-[#01351f] hover:bg-black text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
              >
                İletişime Geç
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
