"use client";

import React, { useState } from "react";
import { Users, CheckCircle } from "lucide-react";

const stats = [
  {
    number: "20",
    title: "Yıllık Tecrube",
  },
  {
    number: "500",
    title: "Mutlu Müşteri",
  },
  {
    number: "2000",
    title: "Ton Atığın Geri Kazanımına Katkı",
  },
];

export default function ContactFormSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="home-contact-area" className="bg-[#04150D] relative min-h-[600px] flex items-center font-poppins mt-32 mb-20 py-16 lg:py-0 z-30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Form Box (Lime Green) */}
          <div className="w-full lg:w-[400px] bg-[#ACC90B] rounded-[50px] p-10 lg:-mt-48 shadow-2xl relative z-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#04150D]">Sizi Arayalım!</h2>
            </div>

            {formSubmitted ? (
              <div className="bg-white/20 rounded-[30px] p-8 text-center">
                <CheckCircle className="w-16 h-16 text-[#04150D] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[#04150D] mb-2">Başarıyla Gönderildi!</h4>
                <p className="text-[#04150D]/80 text-sm">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-[#04150D] text-sm font-semibold hover:underline"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form 
                id="home-contact-form"
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
                <input 
                  type="text" 
                  name="name"
                  placeholder="Adınız Soyadınız:" 
                  required
                  className="w-full bg-white border-none rounded-md py-4 px-5 text-sm text-gray-700 focus:outline-none placeholder-gray-400"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-Posta Adresiniz:" 
                  required
                  className="w-full bg-white border-none rounded-md py-4 px-5 text-sm text-gray-700 focus:outline-none placeholder-gray-400"
                />
                <div className="relative flex items-center">
                  <div className="absolute left-4 flex items-center gap-2 border-r border-gray-100 pr-3">
                    <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-5" />
                    <span className="text-[13px] font-bold text-gray-600">+90</span>
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="5XX XXX XX XX"
                    className="w-full bg-white border-none rounded-md py-4 pl-20 px-5 text-sm text-gray-700 focus:outline-none"
                  />
                </div>
                <textarea 
                  name="message"
                  placeholder="Mesajınız:" 
                  rows={3}
                  required
                  className="w-full bg-white border-none rounded-md py-4 px-5 text-sm text-gray-700 focus:outline-none resize-none placeholder-gray-400"
                ></textarea>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#04150D] text-white font-bold py-4 rounded-md hover:bg-[#01351F] transition-all uppercase text-sm tracking-[3px] mt-4"
                >
                  GÖNDER
                </button>
              </form>
            )}
          </div>

          {/* Stats Area */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-10 lg:py-0 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-start">
                  <span className="text-xl md:text-2xl mt-1 mr-1">+</span>
                  {stat.number}
                </div>
                <div className="text-[12px] md:text-[14px] font-medium leading-tight mb-6 max-w-[120px] h-10 flex items-center justify-center">
                  {stat.title}
                </div>
                <Users className="w-10 h-10 text-white opacity-80" />
              </div>
            ))}
          </div>

          {/* Far Right Image - Adjusted to fit within section */}
          <div className="hidden xl:flex items-center justify-end w-[450px]">
            <img 
              src="https://www.sifiratiksepeti.com/wp-content/uploads/2025/08/form-gorsel.png" 
              alt="form-gorsel" 
              className="w-full h-auto object-contain scale-110 translate-x-10" 
            />
          </div>

        </div>
      </div>

    </section>
  );
}
