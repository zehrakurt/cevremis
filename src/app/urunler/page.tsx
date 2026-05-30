import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';

// Server component: fetch products from Firestore
async function fetchProducts() {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
}

export const generateMetadata = async () => {
  return {
    title: 'Ürünler',
    description: 'Tüm ürünlerimizi inceleyin',
  };
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#01351f]">Ürünler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/urunler/${product.id}`}
              className="group block bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48 mb-4 flex items-center justify-center">
                <img
                  src={product.image || '/placeholder.png'}
                  alt={product.name}
                  className="max-w-full max-h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-[#01351f] group-hover:text-[#acc90b] transition-colors">
                {product.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
