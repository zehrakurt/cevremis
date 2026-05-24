// scripts/createAdminUser.ts
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import * as path from "path";

// Service account key dosyasının yolu (proje kök dizininde olmalı)
const serviceAccount = require(path.resolve(__dirname, "../serviceAccountKey.json"));

initializeApp({ credential: cert(serviceAccount) });

async function createAdmin() {
  try {
    const user = await getAuth().createUser({
      email: "cevremis@gmail.com",
      password: "cevremis2026",
    });
    console.log("✅ Admin kullanıcı oluşturuldu → UID:", user.uid);
  } catch (err: any) {
    if (err.code === "auth/email-already-exists") {
      console.log("⚠️ Kullanıcı zaten mevcut – yeni bir şey eklenmedi.");
    } else {
      console.error("❌ Kullanıcı oluşturulurken hata:", err);
    }
  }
}

createAdmin();
