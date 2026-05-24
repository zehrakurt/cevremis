"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  User 
} from "firebase/auth";
import { 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where 
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { 
  Folder, 
  ShoppingBag, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit, 
  Search, 
  Loader2, 
  Lock, 
  Mail, 
  Check, 
  AlertCircle,
  Upload,
  ImageIcon,
  X
} from "lucide-react";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Login Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab: 'categories' | 'products'
  const [activeTab, setActiveTab] = useState<"categories" | "products">("categories");

  // Database States
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [dbLoading, setDbLoading] = useState(false);

  // Category Form State
  const [catName, setCatName] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [editingCatId, setEditingCatId] = useState<string | null>(null);

  // Product Form State
  const [prodName, setProdName] = useState("");
  const [prodSku, setProdSku] = useState("");
  const [prodImage, setProdImage] = useState(""); // Mevcut/kaydedilmiş URL
  const [prodImageFile, setProdImageFile] = useState<File | null>(null); // Yeni seçilen dosya
  const [prodImagePreview, setProdImagePreview] = useState(""); // Önizleme URL'si
  const [prodImageUploading, setProdImageUploading] = useState(false);
  const [prodImageUploadProgress, setProdImageUploadProgress] = useState(0);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [prodCatId, setProdCatId] = useState("");
  const [editingProdId, setEditingProdId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filters & Search
  const [prodSearch, setProdSearch] = useState("");
  const [prodFilterCat, setProdFilterCat] = useState("");


  // Track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch data if logged in
  useEffect(() => {
    if (user) {
      fetchCategories();
      fetchProducts();
    }
  }, [user]);

  const fetchCategories = async () => {
    try {
      setDbLoading(true);
      const snapshot = await getDocs(collection(db, "categories"));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort alphabetically
      list.sort((a: any, b: any) => a.name.localeCompare(b.name));
      setCategories(list);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setDbLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setDbLoading(true);
      const snapshot = await getDocs(collection(db, "products"));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(list);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setDbLoading(false);
    }
  };

  // Safe Slug Generation
  const slugify = (text: string) => {
    const trMap: Record<string, string> = {
      'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'I': 'i', 'İ': 'i',
      'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u'
    };
    for (const key in trMap) {
      text = text.replace(new RegExp(key, 'g'), trMap[key]);
    }
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  };

  const handleCatNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCatName(val);
    if (!editingCatId) {
      setCatSlug(slugify(val));
    }
  };

  // Login handler with Self-Healing Auth
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error("Sign-in failed. Error code:", err.code, err.message);
      
      // Self-healing: if credentials match the admin target but user is not found, auto-create it
      if (
        (err.code === "auth/user-not-found" || err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/operation-not-allowed") && 
        email === "cevremis@gmail.com" && 
        password === "cevremis2026"
      ) {
        try {
          console.log("Auto-creating admin user cevremis@gmail.com...");
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (createErr: any) {
          console.error("Auto-creation failed:", createErr);
          setAuthError(
            `Otomatik yönetici hesabı oluşturulamadı. Hata Kodu: ${createErr.code}. Hata Mesajı: ${createErr.message}. \n\nLütfen Firebase Console -> Authentication -> Sign-in method sekmesinde 'Email/Password' (E-posta/Şifre) sağlayıcısını etkinleştirdiğinizden emin olun.`
          );
        }
      } else {
        setAuthError(`Giriş başarısız. Hata Kodu: ${err.code}. Mesaj: ${err.message}`);
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // CRUD Category
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!catName || !catSlug) return;

    try {
      const catData = {
        name: catName,
        slug: catSlug,
        description: catDesc,
        link: `/kategori/${catSlug}`
      };

      await setDoc(doc(db, "categories", catSlug), catData);
      
      // Reset Form
      setCatName("");
      setCatSlug("");
      setCatDesc("");
      setEditingCatId(null);
      
      fetchCategories();
    } catch (err: any) {
      alert("Kategori kaydedilirken hata oluştu: " + err.message);
    }
  };

  const handleEditCategory = (cat: any) => {
    setEditingCatId(cat.id);
    setCatName(cat.name);
    setCatSlug(cat.slug);
    setCatDesc(cat.description || "");
  };

  const handleDeleteCategory = async (slug: string) => {
    if (!confirm("Bu kategoriyi silmek istediğinize emin misiniz? Altındaki ürünlerin kategori eşleşmeleri silinecektir.")) return;
    try {
      await deleteDoc(doc(db, "categories", slug));
      fetchCategories();
    } catch (err: any) {
      alert("Kategori silinirken hata oluştu: " + err.message);
    }
  };

  // Resim dosyası seçme işleyicisi
  const handleImageFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Lütfen geçerli bir resim dosyası seçin (JPG, PNG, WEBP, vb.).");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Dosya boyutu 5MB'ı geçemez.");
      return;
    }
    setProdImageFile(file);
    const previewUrl = URL.createObjectURL(file);
    setProdImagePreview(previewUrl);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => setIsDraggingOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageFileSelect(file);
  };

  const handleRemoveImage = () => {
    setProdImageFile(null);
    setProdImagePreview("");
    setProdImage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Sunucuya resim yükleme (API route)
  const uploadImageToServer = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Resim yüklenemedi.");
    }

    const data = await response.json();
    return data.url;
  };

  // CRUD Product
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodName || !prodSku || !prodCatId) {
      alert("Lütfen ürün adı, kod (SKU) ve kategori alanlarını doldurun.");
      return;
    }

    try {
      let finalImageUrl = prodImage.trim() || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80";

      // Eğer yeni dosya seçildiyse önce sunucuya yükle
      if (prodImageFile) {
        setProdImageUploading(true);
        setProdImageUploadProgress(0);
        try {
          setProdImageUploadProgress(30);
          finalImageUrl = await uploadImageToServer(prodImageFile);
          setProdImageUploadProgress(100);
        } catch (uploadErr: any) {
          alert("Resim yüklenirken hata oluştu: " + uploadErr.message);
          setProdImageUploading(false);
          return;
        }
        setProdImageUploading(false);
      }

      const prodData = {
        sku: prodSku.trim(),
        name: prodName.trim(),
        image: finalImageUrl,
        categoryId: prodCatId,
        createdAt: new Date().toISOString()
      };

      if (editingProdId) {
        await updateDoc(doc(db, "products", editingProdId), prodData);
      } else {
        await addDoc(collection(db, "products"), prodData);
      }

      // Reset Form
      setProdName("");
      setProdSku("");
      setProdImage("");
      setProdImageFile(null);
      setProdImagePreview("");
      setProdImageUploadProgress(0);
      setProdCatId("");
      setEditingProdId(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      fetchProducts();
    } catch (err: any) {
      alert("Ürün kaydedilirken hata oluştu: " + err.message);
    }
  };

  const handleEditProduct = (prod: any) => {
    setEditingProdId(prod.id);
    setProdSku(prod.sku);
    setProdName(prod.name);
    setProdImage(prod.image); // Mevcut resim URL'si
    setProdImagePreview(prod.image); // Önizlemede göster
    setProdImageFile(null); // Yeni dosya seçilmedi
    setProdCatId(prod.categoryId);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (err: any) {
      alert("Ürün silinirken hata oluştu: " + err.message);
    }
  };

  // İptal işlemi için resim state'lerini de temizle
  const handleCancelEditProduct = () => {
    setEditingProdId(null);
    setProdName("");
    setProdSku("");
    setProdImage("");
    setProdImageFile(null);
    setProdImagePreview("");
    setProdImageUploadProgress(0);
    setProdCatId("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };


  // Filtered Products List
  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      (p.name?.toLowerCase().includes(prodSearch.toLowerCase())) ||
      (p.sku?.toLowerCase().includes(prodSearch.toLowerCase()));
    
    const matchesCat = prodFilterCat ? p.categoryId === prodFilterCat : true;

    return matchesSearch && matchesCat;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#021f12] text-white flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-[#acc90b] animate-spin" />
        <p className="text-lg font-medium tracking-wide">Yönetim Paneli Yükleniyor...</p>
      </div>
    );
  }

  // Not Authenticated: Render Login Page
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#021f12] via-[#01351f] to-[#0a0a0a] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#acc90b]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#01351f]/40 rounded-full blur-3xl -z-10"></div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#acc90b]/10 border border-[#acc90b]/20 mb-4">
              <Lock className="w-8 h-8 text-[#acc90b]" />
            </div>
            <h1 className="text-3xl font-bold text-white font-poppins">Yönetici Girişi</h1>
            <p className="text-white/60 text-sm mt-2">Çevremis Web Sitesi Yönetim Paneli</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2" htmlFor="email">
                E-posta Adresi
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/30 focus:border-[#acc90b] focus:ring-1 focus:ring-[#acc90b] transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2" htmlFor="password">
                Şifre
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/30 focus:border-[#acc90b] focus:ring-1 focus:ring-[#acc90b] transition-all outline-none"
                />
              </div>
            </div>

            {authError && (
              <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 p-3.5 rounded-xl text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#acc90b] text-[#01351f] font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
            >
              {authLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Giriş Yapılıyor...
                </>
              ) : (
                "Giriş Yap"
              )}
            </button>
          </form>

        </div>
      </div>
    );
  }

  // Authenticated Dashboard Layout
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-poppins">
      {/* Top Header */}
      <header className="bg-[#01351f] text-white py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Yönetim Paneli</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">{user.email}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-[#acc90b] hover:bg-white text-[#01351f] hover:text-[#01351f] transition-colors py-2 px-4 rounded-xl font-bold text-sm shadow-md cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("categories")}
            className={`flex items-center gap-3 w-full p-4 rounded-xl font-semibold transition-all text-left ${
              activeTab === "categories"
                ? "bg-[#01351f] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-[#01351f]/5 border border-gray-200"
            }`}
          >
            <Folder className="w-5 h-5" />
            Kategoriler ({categories.length})
          </button>
          
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-3 w-full p-4 rounded-xl font-semibold transition-all text-left ${
              activeTab === "products"
                ? "bg-[#01351f] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-[#01351f]/5 border border-gray-200"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            Ürünler ({products.length})
          </button>
          
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
          
          {/* TAB 1: CATEGORIES */}
          {activeTab === "categories" && (
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-[#01351f]">Kategorileri Yönet</h2>
                <p className="text-sm text-gray-500">Mevcut kategorileri düzenleyin veya yeni ekleyin</p>
              </div>

              {/* Form & List Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Category Form */}
                <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-xl p-5 h-fit">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {editingCatId ? "Kategoriyi Düzenle" : "Yeni Kategori Ekle"}
                  </h3>
                  
                  <form onSubmit={handleSaveCategory} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori Adı</label>
                      <input
                        type="text"
                        value={catName}
                        onChange={handleCatNameChange}
                        placeholder="Örn: Sıfır Atık Kutuları"
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Slug / Link Yolu</label>
                      <input
                        type="text"
                        value={catSlug}
                        onChange={(e) => setCatSlug(slugify(e.target.value))}
                        placeholder="Örn: sifir-atik-kutulari"
                        required
                        disabled={!!editingCatId}
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] disabled:bg-gray-150 disabled:text-gray-400 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Açıklama</label>
                      <textarea
                        value={catDesc}
                        onChange={(e) => setCatDesc(e.target.value)}
                        placeholder="Kategori hakkında kısa açıklama..."
                        rows={4}
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] text-sm"
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-[#01351f] text-white py-2 px-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        Kaydet
                      </button>
                      {editingCatId && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCatId(null);
                            setCatName("");
                            setCatSlug("");
                            setCatDesc("");
                          }}
                          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-bold text-sm hover:bg-gray-450 transition-colors"
                        >
                          İptal
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Categories Table */}
                <div className="lg:col-span-2 overflow-x-auto">
                  {dbLoading && categories.length === 0 ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="w-8 h-8 text-[#01351f] animate-spin" />
                    </div>
                  ) : categories.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                      <p className="text-gray-400">Veritabanında kategori bulunamadı.</p>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200 text-xs uppercase font-bold text-gray-500 bg-gray-55/30">
                          <th className="py-3 px-4">Kategori Adı</th>
                          <th className="py-3 px-4">Slug</th>
                          <th className="py-3 px-4">Açıklama</th>
                          <th className="py-3 px-4 text-right">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((cat) => (
                          <tr key={cat.id} className="border-b border-gray-100 hover:bg-gray-50 text-sm">
                            <td className="py-3 px-4 font-bold text-gray-800">{cat.name}</td>
                            <td className="py-3 px-4 text-gray-500 font-mono text-xs">{cat.slug}</td>
                            <td className="py-3 px-4 text-gray-500 max-w-[200px] truncate">{cat.description}</td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => handleEditCategory(cat)}
                                  className="p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors cursor-pointer"
                                  title="Düzenle"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteCategory(cat.slug)}
                                  className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors cursor-pointer"
                                  title="Sil"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS */}
          {activeTab === "products" && (
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-[#01351f]">Ürünleri Yönet</h2>
                <p className="text-sm text-gray-500">Mevcut ürünleri düzenleyin, arayın veya yeni ekleyin</p>
              </div>

              {/* Filters / Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-4.5 h-4.5 text-gray-400" />
                  <input
                    type="text"
                    value={prodSearch}
                    onChange={(e) => setProdSearch(e.target.value)}
                    placeholder="Ürün adı veya kod ara..."
                    className="w-full bg-white border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm outline-none focus:border-[#01351f]"
                  />
                </div>
                
                <div className="w-full md:w-64">
                  <select
                    value={prodFilterCat}
                    onChange={(e) => setProdFilterCat(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-[#01351f]"
                  >
                    <option value="">Tüm Kategoriler</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form & List Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Product Form */}
                <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-xl p-5 h-fit">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {editingProdId ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}
                  </h3>
                  
                  <form onSubmit={handleSaveProduct} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Ürün Kodu (SKU)</label>
                      <input
                        type="text"
                        value={prodSku}
                        onChange={(e) => setProdSku(e.target.value)}
                        placeholder="Örn: mis2000"
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] text-sm font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Ürün Adı</label>
                      <input
                        type="text"
                        value={prodName}
                        onChange={(e) => setProdName(e.target.value)}
                        placeholder="Örn: 6'lı Sıfır Atık Geri Dönüşüm Kutusu"
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori</label>
                      <select
                        value={prodCatId}
                        onChange={(e) => setProdCatId(e.target.value)}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#01351f] text-sm"
                      >
                        <option value="">Kategori Seçin</option>
                        {categories.map((c) => (
                          <option key={c.id} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Resim Yükleme Alanı */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Ürün Resmi</label>
                      
                      {/* Gizli dosya input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="hidden"
                        id="prod-image-file-input"
                      />

                      {/* Önizleme veya Yükleme Alanı */}
                      {prodImagePreview ? (
                        <div className="relative group">
                          <img
                            src={prodImagePreview}
                            alt="Ürün resmi önizleme"
                            className="w-full h-36 object-contain border border-gray-200 rounded-lg bg-gray-50"
                          />
                          {/* Değiştir / Kaldır butonları */}
                          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-white text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow flex items-center gap-1 hover:bg-gray-100"
                            >
                              <Upload className="w-3 h-3" />
                              Değiştir
                            </button>
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow flex items-center gap-1 hover:bg-red-600"
                            >
                              <X className="w-3 h-3" />
                              Kaldır
                            </button>
                          </div>
                          {prodImageFile && (
                            <p className="text-xs text-gray-500 mt-1 truncate">📎 {prodImageFile.name}</p>
                          )}
                        </div>
                      ) : (
                        /* Drag & Drop / Tıklama Alanı */
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={`w-full h-36 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                            isDraggingOver
                              ? "border-[#01351f] bg-[#01351f]/5"
                              : "border-gray-300 bg-gray-50 hover:border-[#01351f] hover:bg-[#01351f]/5"
                          }`}
                        >
                          <div className={`p-2.5 rounded-full transition-colors ${
                            isDraggingOver ? "bg-[#01351f]/10" : "bg-gray-200"
                          }`}>
                            <ImageIcon className={`w-6 h-6 ${
                              isDraggingOver ? "text-[#01351f]" : "text-gray-400"
                            }`} />
                          </div>
                          <div className="text-center">
                            <p className="text-xs font-semibold text-gray-600">
                              {isDraggingOver ? "Bırakın!" : "Resim sürükleyin veya tıklayın"}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WEBP · Maks 5MB</p>
                          </div>
                        </div>
                      )}

                      {/* Upload İlerleme Çubuğu */}
                      {prodImageUploading && (
                        <div className="mt-2 space-y-1">
                          <div className="flex justify-between text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Loader2 className="w-3 h-3 animate-spin" />
                              Resim yükleniyor...
                            </span>
                            <span>%{prodImageUploadProgress}</span>
                          </div>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#01351f] h-full transition-all duration-300"
                              style={{ width: `${prodImageUploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        disabled={prodImageUploading}
                        className="flex-1 bg-[#01351f] text-white py-2 px-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {prodImageUploading ? (
                          <><Loader2 className="w-4 h-4 animate-spin" />Yükleniyor...</>
                        ) : (
                          <><Check className="w-4 h-4" />Kaydet</>
                        )}
                      </button>
                      {editingProdId && (
                        <button
                          type="button"
                          onClick={handleCancelEditProduct}
                          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-bold text-sm hover:bg-gray-400 transition-colors"
                        >
                          İptal
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Products Grid/Table */}
                <div className="lg:col-span-2">
                  {dbLoading && products.length === 0 ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="w-8 h-8 text-[#01351f] animate-spin" />
                    </div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                      <p className="text-gray-400">Aranan kriterlere uygun ürün bulunamadı.</p>
                    </div>
                  ) : (
                    <div className="max-h-[600px] overflow-y-auto border border-gray-200 rounded-xl">
                      <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-white shadow-sm z-10">
                          <tr className="border-b border-gray-200 text-xs uppercase font-bold text-gray-500 bg-gray-50">
                            <th className="py-3 px-4">Görsel</th>
                            <th className="py-3 px-4">Kod / SKU</th>
                            <th className="py-3 px-4">Ürün Adı</th>
                            <th className="py-3 px-4">Kategori</th>
                            <th className="py-3 px-4 text-right">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map((p) => {
                            const cat = categories.find(c => c.slug === p.categoryId);
                            return (
                              <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50 text-sm">
                                <td className="py-2 px-4">
                                  <img 
                                    src={p.image} 
                                    alt={p.name} 
                                    className="w-12 h-12 object-contain border border-gray-100 rounded bg-gray-50/50"
                                    onError={(e) => {
                                      // Fallback image
                                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=100&q=80";
                                    }}
                                  />
                                </td>
                                <td className="py-2 px-4 font-mono font-bold text-[#01351f] text-xs">{p.sku}</td>
                                <td className="py-2 px-4 text-gray-800 font-medium max-w-[200px] truncate" title={p.name}>{p.name}</td>
                                <td className="py-2 px-4 text-gray-500 text-xs font-semibold">{cat ? cat.name : p.categoryId}</td>
                                <td className="py-2 px-4 text-right">
                                  <div className="flex justify-end gap-1.5">
                                    <button
                                      onClick={() => handleEditProduct(p)}
                                      className="p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors cursor-pointer"
                                      title="Düzenle"
                                    >
                                      <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteProduct(p.id)}
                                      className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors cursor-pointer"
                                      title="Sil"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}


        </main>
      </div>
    </div>
  );
}
