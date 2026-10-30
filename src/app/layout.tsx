import type { Metadata } from "next";
/*
 * Font choice: Roboto Slab (Google Fonts, free).
 * Preferred Museo Slab is commercial (https://fonts.adobe.com/fonts/museo-slab);
 * we use next/font/google Roboto Slab as the closest openly available slab serif.
 * Documentation: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ughe-slab",
});

export const metadata: Metadata = {
  title: "UGHE Test Web App",
  description:
    "University of Global Health Equity — assessment homepage powered by Django and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
