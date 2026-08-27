import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const FB_PIXEL_ID = "2071291693739667";

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
      <body>
        {children}

        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
