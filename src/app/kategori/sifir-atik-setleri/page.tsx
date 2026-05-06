"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../category-style.css";

const products = [
  { id: 1, name: "mis1000 45 Litre 5'li Plastik Sıfır Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 2, name: "mis1001 65 Litre 5'li Plastik Sıfır Atık Konteyner Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-konteyner/45-65/5li-set-228x228.jpg" },
  { id: 3, name: "mis1002 3'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/3lu-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 4, name: "mis1003 4'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/4lu-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 5, name: "mis1004 3'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/3lu-plastik-sifir-atik-geri-donusum-kovasi-70-litre-min-228x228.jpg" },
  { id: 6, name: "mis1005 4'lü Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/4lu-min-228x228.jpg" },
  { id: 7, name: "mis1006 6'lı Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 50 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/6li-plastik-sifir-atik-geri-donusum-kovasi-50-litre-228x228.jpg" },
  { id: 8, name: "mis1007 5'li Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/5li-min-228x228.jpg" },
  { id: 9, name: "mis1008 6'lı Plastik Sıfır Atık Geri Dönüşüm Kovası Seti 70 Litre", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/70LT%20PLASTİK/6li-min-228x228.jpg" },
  { id: 10, name: "mis1009 85 Litre Plastik Pedallı Sıfır Atık Geri Dönüşüm Kovası 3'lü Set", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-kovalari/85-litre-3lu-plastik-sifir-atik-kovasi-1-228x228.jpg" },
  { id: 11, name: "mis1010 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1001c/1001C-min-228x228.jpg" },
  { id: 12, name: "mis1011 Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1001A-min-228x228.jpg" },
  { id: 13, name: "mis1012 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1001B-min-228x228.jpg" },
  { id: 14, name: "mis1013 3’LÜ Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1002B-min-228x228.jpg" },
  { id: 15, name: "mis1014 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/100C/1003C/1003C-min-228x228.jpg" },
  { id: 16, name: "mis1015 Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1003A-min-228x228.jpg" },
  { id: 17, name: "mis1016 3'Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1003B-min-228x228.jpg" },
  { id: 18, name: "mis1017 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1004C/1004C-min-228x228.jpg" },
  { id: 19, name: "mis1018 Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1004A-min-228x228.jpg" },
  { id: 20, name: "mis1019 3’LÜ Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1004B-min-228x228.jpg" },
  { id: 21, name: "mis1020 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1005c/1005C-min-228x228.jpg" },
  { id: 22, name: "mis1021 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1005A-min-228x228.jpg" },
  { id: 23, name: "mis1022 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1005B-min-228x228.jpg" },
  { id: 24, name: "mis1023 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1006C/1006C-min-228x228.jpg" },
  { id: 25, name: "mis1024 Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1006A-min-228x228.jpg" },
  { id: 26, name: "mis1025 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1006B-min-228x228.jpg" },
  { id: 27, name: "mis1026 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1007C/1007C-min-228x228.jpg" },
  { id: 28, name: "mis1027 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1007A-min-228x228.jpg" },
  { id: 29, name: "mis1028 3’LÜ Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1007B-min-228x228.jpg" },
  { id: 30, name: "mis1029 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1008C/1008C-min-228x228.jpg" },
  { id: 31, name: "mis1030 4’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1008A-min-228x228.jpg" },
  { id: 32, name: "mis1031 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1008B-min-228x228.jpg" },
  { id: 33, name: "mis1032 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1009C/1009C-min-228x228.jpg" },
  { id: 34, name: "mis1033 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1009A-min-228x228.jpg" },
  { id: 35, name: "mis1034 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1009B-min-228x228.jpg" },
  { id: 36, name: "mis1035 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1010C/1010C-min-228x228.jpg" },
  { id: 37, name: "mis1036 4’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1010A-min-228x228.jpg" },
  { id: 38, name: "mis1037 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1010B-min-228x228.jpg" },
  { id: 39, name: "mis1038 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1011C/1011C-min-228x228.jpg" },
  { id: 40, name: "mis1039 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1011A-min-228x228.jpg" },
  { id: 41, name: "mis1040 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1011B-min-228x228.jpg" },
  { id: 42, name: "mis1041 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1012C/1012C-min-228x228.jpg" },
  { id: 43, name: "mis1042 4’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1012A-min-228x228.jpg" },
  { id: 44, name: "mis1043 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1012B-min-228x228.jpg" },
  { id: 46, name: "mis1045 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1013A-min-228x228.jpg" },
  { id: 47, name: "mis1046 3’Lü Boyalı Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1011B-min-228x228.jpg" },
  { id: 49, name: "mis1048 4'Lü Paslanmaz Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1014A-min-228x228.jpg" },
  { id: 50, name: "mis1049 3’Lü Paslanmaz Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1012B-min-228x228.jpg" },
  { id: 52, name: "mis1051 4'Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1015A-min-228x228.jpg" },
  { id: 53, name: "mis1052 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1015B-min-228x228.jpg" },
  { id: 54, name: "mis1053 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1016C/1016C-min-228x228.jpg" },
  { id: 55, name: "mis1054 4’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1016A-min-228x228.jpg" },
  { id: 56, name: "mis1055 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1016B-min-228x228.jpg" },
  { id: 57, name: "mis1056 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1017C/1017C-min-228x228.jpg" },
  { id: 58, name: "mis1057 4’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1017A-min-228x228.jpg" },
  { id: 59, name: "mis1058 3'Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1017B-min-228x228.jpg" },
  { id: 60, name: "mis1059 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1018C/1018C-min-228x228.jpg" },
  { id: 61, name: "mis1060 Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1018A-min-228x228.jpg" },
  { id: 62, name: "mis1061 3'Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1018B-min-228x228.jpg" },
  { id: 64, name: "mis1063 4’Lü Boyalı Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1017A-min-228x228.jpg" },
  { id: 65, name: "mis1064 3'Lü Boyalı Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1017B-min-228x228.jpg" },
  { id: 67, name: "mis1066 Paslanmaz Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1018A-min-228x228.jpg" },
  { id: 68, name: "mis1067 3'Lü Paslanmaz Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1018B-min-228x228.jpg" },
  { id: 69, name: "mis1068 Boyalı 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1021C/1021C-min-228x228.jpg" },
  { id: 70, name: "mis1069 Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1021A-min-228x228.jpg" },
  { id: 71, name: "mis1070 3’Lü Boyalı Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1021B-min-228x228.jpg" },
  { id: 72, name: "mis1071 Paslanmaz 2 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/1022C/1022C-min-228x228.jpg" },
  { id: 73, name: "mis1072 4’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/1022A-min-228x228.jpg" },
  { id: 74, name: "mis1073 3’Lü Paslanmaz Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/toros%20genel/3lü/1022B-min-228x228.jpg" },
  { id: 76, name: "mis1075 Paslanmaz 4 Bölmeli Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/SAS1848/1848-min-228x228.jpg" },
  { id: 78, name: "mis1077 3'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-301-min-228x228.jpg" },
  { id: 79, name: "mis1078 3'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-302-min-228x228.jpg" },
  { id: 80, name: "mis1079 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-316a-min-228x228.png" },
  { id: 81, name: "mis1080 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-316b-min-228x228.jpg" },
  { id: 82, name: "mis1081 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-319a-min-228x228.png" },
  { id: 83, name: "mis1082 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-319b-min-228x228.png" },
  { id: 84, name: "mis1083 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-319c-min-228x228.png" },
  { id: 85, name: "mis1084 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-319d-min-228x228.png" },
  { id: 86, name: "mis1085 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-320a-min-228x228.png" },
  { id: 87, name: "mis1086 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-321a-min-228x228.jpg" },
  { id: 88, name: "mis1087 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-321b-min-228x228.png" },
  { id: 89, name: "mis1088 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-322a-min-228x228.jpg" },
  { id: 90, name: "mis1089 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-322b-min-228x228.jpg" },
  { id: 91, name: "mis1090 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-322c-min-228x228.jpg" },
  { id: 92, name: "mis1091 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-322d-min-228x228.jpg" },
  { id: 93, name: "mis1092 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-323a-min-228x228.png" },
  { id: 94, name: "mis1093 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-323b-min-228x228.png" },
  { id: 95, name: "mis1094 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-324a-min-228x228.png" },
  { id: 96, name: "mis1095 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-324b-min-228x228.png" },
  { id: 97, name: "mis1096 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-325a-min-228x228.png" },
  { id: 98, name: "mis1097 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-325b-min-228x228.png" },
  { id: 99, name: "mis1098 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-326a-min-228x228.png" },
  { id: 100, name: "mis1099 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-326b-min-228x228.png" },
  { id: 101, name: "mis1100 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-327a-min-228x228.png" },
  { id: 102, name: "mis1101 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-327b-min-228x228.png" },
  { id: 103, name: "mis1102 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-327c-min-228x228.png" },
  { id: 104, name: "mis1103 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-327d-min-228x228.png" },
  { id: 105, name: "mis1104 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-328a-min-228x228.png" },
  { id: 106, name: "mis1105 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-328b-min-228x228.png" },
  { id: 107, name: "mis1106 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-328c-min-228x228.png" },
  { id: 108, name: "mis1107 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-328d-min-228x228.png" },
  { id: 109, name: "mis1108 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-329a-min-228x228.png" },
  { id: 110, name: "mis1109 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-329b-min-228x228.png" },
  { id: 111, name: "mis1110 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-330a-min-228x228.png" },
  { id: 112, name: "mis1111 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-331a-min-228x228.jpg" },
  { id: 113, name: "mis1112 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-331b-min-228x228.png" },
  { id: 114, name: "mis1113 4'Lü Sıfır Atık Geri Dönüşüm Seti", image: "https://www.sifiratikkovalari.com/image/cache/catalog/urunler/sifir-atik-setleri/ucelmetal/zk-332a-min-228x228.png" },
];

const ITEMS_PER_PAGE = 12;

export default function SifirAtikSetleriPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="products-section min-h-screen py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="title-main text-4xl md:text-5xl text-center">
          Sıfır Atık Setleri
        </h1>
        <p className="description-text text-lg md:text-xl max-w-3xl text-center mb-16">
          Çeşitli sıfır atık setleri ile sürdürülebilir yaşam tarzınızı destekleyin. 
          Setlerde çöp kutuları, geri dönüşüm kutuları ve aksesuarlar bulunur.
        </p>

        {/* Product cards for Sıfır Atık Setleri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {selectedProducts.map((p) => (
            <div key={p.id} className="premium-card group">
              <div className="image-container">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image"
                />
              </div>
              <div className="content-box">
                <div className="sku-badge">
                  KOD: {p.name.split(" ")[0]}
                </div>
                <h3 className="product-name">
                  {p.name.substring(p.name.indexOf(" ") + 1)}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-nav"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="pagination-nav"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
