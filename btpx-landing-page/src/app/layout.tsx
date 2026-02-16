import type { Metadata } from "next";
import { Titillium_Web, Poppins } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transforme seu SAP com BTP, IA e Clean Core | Prime Control",
  description: "Especialistas em transformação SAP com IA, Joule, SAP BTP e Clean Core. A Prime Control moderniza seu ambiente SAP para evoluir com segurança e escala.",
  metadataBase: new URL('https://www.primecontrol.com.br'), // Replace with actual URL if different
  openGraph: {
    title: "Transforme seu SAP com BTP, IA e Clean Core | Prime Control",
    description: "Especialistas em transformação SAP com IA, Joule, SAP BTP e Clean Core. A Prime Control moderniza seu ambiente SAP para evoluir com segurança e escala.",
    url: 'https://www.primecontrol.com.br',
    siteName: 'Prime Control',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Transforme seu SAP com BTP, IA e Clean Core | Prime Control",
    description: "Especialistas em transformação SAP com IA, Joule, SAP BTP e Clean Core.",
    creator: '@primecontrol', // Replace with actual handle if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png', // Ensure this exists or use a default
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${titillium.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
