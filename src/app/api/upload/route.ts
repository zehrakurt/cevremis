import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Dosya bulunamadı." },
        { status: 400 }
      );
    }

    // Dosya tipi kontrolü
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Sadece resim dosyaları yüklenebilir." },
        { status: 400 }
      );
    }

    // Dosya boyutu kontrolü (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Dosya boyutu 5MB'ı geçemez." },
        { status: 400 }
      );
    }

    // Dosya adını güvenli hale getir
    const originalName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const uniqueName = `${Date.now()}_${originalName}`;

    // Klasörü oluştur
    const uploadDir = path.join(process.cwd(), "public", "uploads", "products");
    await mkdir(uploadDir, { recursive: true });

    // Dosyayı kaydet
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);

    // Public URL döndür
    const url = `/uploads/products/${uniqueName}`;

    return NextResponse.json({ url, success: true });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Dosya yüklenirken hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}
