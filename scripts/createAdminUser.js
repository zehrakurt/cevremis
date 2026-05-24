// scripts/createAdminUser.js
const admin = require('firebase-admin');
const path = require('path');

// Load service account key (ensure the JSON file exists in project root)
const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(require(serviceAccountPath)) });

async function createAdmin() {
  try {
    const user = await admin.auth().createUser({
      email: 'cevremis@gmail.com',
      password: 'cevremis2026',
    });
    console.log('✅ Admin kullanıcı oluşturuldu → UID:', user.uid);
  } catch (err) {
    if (err.code === 'auth/email-already-exists') {
      console.log('⚠️ Kullanıcı zaten mevcut – yeni bir şey eklenmedi.');
    } else {
      console.error('❌ Kullanıcı oluşturulurken hata:', err);
    }
  }
}

createAdmin();
