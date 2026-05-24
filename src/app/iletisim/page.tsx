"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Iletisim() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="font-poppins bg-[#fcfcfc]">
      {/* Banner & Breadcrumbs Header */}
      <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden flex flex-col justify-end">
        <img 
          src="https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/banner-1.jpg" 
          alt="İletişim Banner" 
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 mb-12">
          <nav className="flex items-center text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="mx-2 w-4 h-4" />
            <span className="text-[#ACC90B] font-semibold">İletişim</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            İletişim
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Main Content */}
            <div className="lg:w-2/3 xl:w-3/4">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {/* Phone Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#01351F] rounded-3xl translate-x-[-8px] translate-y-[-8px] md:translate-x-[-12px] md:translate-y-[-12px]"></div>
                    <div className="relative bg-[#f4f4f4] rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] shadow-sm border border-gray-100 hover:translate-x-2 hover:translate-y-2 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#01351F] rounded-full flex items-center justify-center text-white border-[4px] border-[#ACC90B] mb-6">
                        <Phone size={32} />
                      </div>
                      <a href="tel:+905323801519" className="text-[17px] font-semibold text-[#04150D] hover:text-[#ACC90B] transition-colors leading-relaxed">
                        +90 532 380 15 19
                      </a>
                    </div>
                  </div>

                  {/* Mail Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#01351F] rounded-3xl translate-x-[-8px] translate-y-[-8px] md:translate-x-[-12px] md:translate-y-[-12px]"></div>
                    <div className="relative bg-[#f4f4f4] rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] shadow-sm border border-gray-100 hover:translate-x-2 hover:translate-y-2 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#01351F] rounded-full flex items-center justify-center text-white border-[4px] border-[#ACC90B] mb-6">
                        <Mail size={32} />
                      </div>
                      <a href="mailto:cevremis@gmail.com" className="text-[17px] font-semibold text-[#04150D] hover:text-[#ACC90B] transition-colors leading-relaxed break-all">
                        cevremis@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#01351F] rounded-3xl translate-x-[-8px] translate-y-[-8px] md:translate-x-[-12px] md:translate-y-[-12px]"></div>
                    <div className="relative bg-[#f4f4f4] rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] shadow-sm border border-gray-100 hover:translate-x-2 hover:translate-y-2 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#01351F] rounded-full flex items-center justify-center text-white border-[4px] border-[#ACC90B] mb-6">
                        <MapPin size={32} />
                      </div>
                      <p className="text-[15px] font-semibold text-[#04150D] leading-relaxed">
                        Sokullu Mehmetpaşa Mah. Ahmet Haşim Cad. No:25/A<br />
                        Dikmen - Çankaya, Ankara
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <p className="inline-block px-6 py-2 bg-[#ACC90B] text-[#01351F] font-bold rounded-full text-sm">
                    “Türkiye genelindeki tüm illere gönderim sağlamaktayız.”
                  </p>
                </div>

                {/* Map */}
                <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3533967812234!2d32.825224!3d39.885642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0d6d53e0d3%3A0x7d0e3a6c5e5e5e5e!2zU29rdWxsdSBNZWhtZXRwYcWfYSBNYWguLCBBaG1ldCBIYcWfaW0gQ2FkLiBObzoyNSwgMDY0NTAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1714765000000!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:w-1/3 xl:w-1/4">
              <aside className="sticky top-32 space-y-8">
                <div className="bg-[#01351F] rounded-3xl p-8 text-white shadow-xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold italic tracking-tight">Sizi Arayalım!</h3>
                    <div className="w-12 h-1 bg-[#ACC90B] mt-2"></div>
                  </div>

                  {formSubmitted ? (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-3xl p-8 text-center">
                      <CheckCircle className="w-16 h-16 text-[#ACC90B] mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">Başarıyla Gönderildi!</h4>
                      <p className="text-white/80 text-sm">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 text-[#ACC90B] text-sm font-semibold hover:underline"
                      >
                        Yeni Mesaj Gönder
                      </button>
                    </div>
                  ) : (
                    <form 
                      id="contact-form"
                      className="space-y-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const formData = new FormData(form);
                        
                        try {
                          const response = await fetch("https://formspree.io/f/xgoqlyoj", {
                            method: "POST",
                            body: formData,
                            headers: {
                              Accept: "application/json",
                            },
                          });
                          
                          if (response.ok) {
                            setFormSubmitted(true);
                            form.reset();
                          } else {
                            alert("Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
                          }
                        } catch (error) {
                          alert("Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
                        }
                      }}
                    >
                      <input type="hidden" name="_subject" value="Yeni İletişim Formu Mesajı" />
                      
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase text-white/60 ml-1">Ad Soyad</label>
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Adınız Soyadınız:" 
                          required
                          className="w-full bg-[#04150D] border-none rounded-xl py-3 px-4 text-sm text-white focus:ring-1 focus:ring-[#ACC90B] transition-all outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase text-white/60 ml-1">E-Posta</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="E-Mail:" 
                          required
                          className="w-full bg-[#04150D] border-none rounded-xl py-3 px-4 text-sm text-white focus:ring-1 focus:ring-[#ACC90B] transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase text-white/60 ml-1">Telefon</label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3 flex items-center gap-1 border-r border-white/10 pr-2">
                            <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-4" />
                            <span className="text-[11px] font-bold">+90</span>
                          </div>
                          <input 
                            type="tel" 
                            name="phone"
                            placeholder="5XX XXX XX XX"
                            className="w-full bg-[#04150D] border-none rounded-xl py-3 pl-16 px-4 text-sm text-white focus:ring-1 focus:ring-[#ACC90B] transition-all outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase text-white/60 ml-1">Mesajınız</label>
                        <textarea 
                          name="message"
                          placeholder="Mesajınız:" 
                          rows={2}
                          required
                          className="w-full bg-[#04150D] border-none rounded-xl py-3 px-4 text-sm text-white focus:ring-1 focus:ring-[#ACC90B] transition-all outline-none resize-none"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-[#ACC90B] text-[#01351F] font-bold py-3 rounded-xl hover:bg-white transition-all uppercase text-xs tracking-widest mt-4"
                      >
                        GÖNDER
                      </button>
                    </form>
                  )}
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
