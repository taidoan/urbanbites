import type { Metadata } from "next";
import { Poppins, Teko } from "next/font/google";
import "./../styles/index.scss";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-body',
});

const teko = Teko({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const metadata: Metadata = {
  title: {
    template: '%s | Urban Bites',
    default: 'Urban Bites',
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${teko.variable}`}>{children}

    </body>
    </html>
  );
}