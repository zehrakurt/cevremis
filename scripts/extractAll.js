const fs = require('fs');
const path = require('path');

const KATEGORI_DIR = path.join(__dirname, '../src/app/kategori');

// From src/components/header-categories.ts
const staticCategories = [
  { name: "Sıfır Atık Kutuları", slug: "sifir-atik-kutulari" },
  { name: "Boyalı Sıfır Atık Kutuları", slug: "boyali-sifir-atik-kutulari" },
  { name: "Paslanmaz Sıfır Atık Kovaları", slug: "paslanmaz-sifir-atik-kovalari" },
  { name: "Plastik Sıfır Atık Kovaları", slug: "plastik-sifir-atik-kovalari" },
  { name: "İlaç ve Pil Atık Kovaları", slug: "ilac-ve-pil-atik-kovalari" },
  { name: "Sıfır Atık Setleri", slug: "sifir-atik-setleri" },
  { name: "Atık Getirme Merkezi", slug: "atik-getirme-merkezi" },
  { name: "Ambalaj Atık Ürünleri", slug: "ambalaj-atik-urunleri" },
  { name: "Tıbbi Atık Ürünleri", slug: "tibbi-atik-urunleri" },
  { name: "Sıfır Atık Konteynerleri", slug: "sifir-atik-konteynerleri" },
  { name: "Tekli Sıfır Atık Kovaları", slug: "tekli-sifir-atik-kovalari" },
  { name: "Çöp Kovaları", slug: "cop-kovalari" },
  { name: "Çöp Konteynerleri", slug: "cop-konteynerleri" },
  { name: "Variller", slug: "variller" },
  { name: "Çöp Sıkıştırıcı", slug: "trash-compactor" }
];

function extractData() {
  const result = {
    categories: [],
    products: []
  };

  const folders = fs.readdirSync(KATEGORI_DIR);
  
  for (const folder of folders) {
    const pagePath = path.join(KATEGORI_DIR, folder, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf8');

    // Extract products
    // Find const products = [ ... ]
    let productsText = "";
    const startIdx = content.indexOf('products = [');
    if (startIdx !== -1) {
      let bracketCount = 1;
      let i = content.indexOf('[', startIdx);
      let endIdx = -1;
      for (let j = i + 1; j < content.length; j++) {
        if (content[j] === '[') bracketCount++;
        else if (content[j] === ']') bracketCount--;

        if (bracketCount === 0) {
          endIdx = j;
          break;
        }
      }
      if (endIdx !== -1) {
        productsText = content.substring(i, endIdx + 1);
      }
    }

    let parsedProducts = [];
    if (productsText) {
      try {
        // Evaluate products array safely
        parsedProducts = eval(`(${productsText})`);
      } catch (err) {
        console.error(`Error parsing products in folder ${folder}:`, err.message);
      }
    }

    // Extract H1 title and description
    let categoryName = "";
    const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (titleMatch) {
      categoryName = titleMatch[1].replace(/\{[^}]+\}/g, '').replace(/<[^>]+>/g, '').trim();
    }
    
    if (!categoryName) {
      const catObj = staticCategories.find(c => c.slug === folder);
      categoryName = catObj ? catObj.name : folder;
    }

    let categoryDesc = "";
    const descMatch = content.match(/<p className="description-text[^>]*>([\s\S]*?)<\/p>/);
    if (descMatch) {
      categoryDesc = descMatch[1].replace(/\{[^}]+\}/g, '').replace(/<[^>]+>/g, '').trim();
    }

    result.categories.push({
      id: folder,
      name: categoryName,
      description: categoryDesc,
      slug: folder
    });

    for (const prod of parsedProducts) {
      // Split name to find SKU and display name
      const firstSpace = prod.name.indexOf(" ");
      const sku = firstSpace !== -1 ? prod.name.substring(0, firstSpace) : "MIS";
      const name = firstSpace !== -1 ? prod.name.substring(firstSpace + 1) : prod.name;
      
      result.products.push({
        id: `${folder}_${prod.id}`,
        sku: sku,
        name: name,
        image: prod.image,
        categoryId: folder
      });
    }
  }

  // Save to migration-data.json
  const outPath = path.join(__dirname, '../src/lib/migration-data.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Successfully extracted ${result.categories.length} categories and ${result.products.length} products to ${outPath}`);
}

extractData();
