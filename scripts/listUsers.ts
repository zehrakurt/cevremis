// scripts/listUsers.ts
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import * as path from "path";

const serviceAccount = require(path.resolve(__dirname, "../serviceAccountKey.json"));
initializeApp({ credential: cert(serviceAccount) });

async function list() {
  try {
    const listResult = await getAuth().listUsers(1000);
    console.log("Kullanıcı sayısı:", listResult.users.length);
    listResult.users.forEach(u => console.log(u.email));
  } catch (error) {
    console.error("Hata:", error);
  }
}
list();
