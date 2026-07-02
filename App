import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "فرصة | Fursa — منصة الفرص المتكاملة في عُمان",
  description:
    "فرصة هي أول منصة عُمانية متكاملة تربط الطلاب والخريجين والمواطنين بالجامعات والشركات والجهات الحكومية عبر التدريب، الوظائف، المنح، والتوجيه المهني بالذكاء الاصطناعي.",
  keywords: [
    "فرصة",
    "Fursa",
    "وظائف عمان",
    "تدريب",
    "منح دراسية",
    "توظيف بالذكاء الاصطناعي",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
