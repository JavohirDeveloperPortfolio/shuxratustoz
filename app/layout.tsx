import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shuxrat Eshmurodov — Bepul video darslik",
  description:
    "Tugmani bosing va Telegram bot orqali bepul video darslikni oling. Telefondan bir bosishda ochiladi.",
  openGraph: {
    title: "Shuxrat Eshmurodov — Bepul video darslik",
    description:
      "Videoni koʻrish uchun tugmani bosing — bot ochiladi va darslik yuboriladi.",
    type: "website",
    locale: "uz_UZ",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070a15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
