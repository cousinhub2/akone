import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "AK ONE | Conseil RH & Coaching",
  description: "Transformez vos défis RH en leviers de croissance. Conseil stratégique, DRH à temps partiel et Coaching de dirigeants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-647WGGK6RF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-647WGGK6RF');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
