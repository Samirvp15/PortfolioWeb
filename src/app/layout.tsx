import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    template: '%s | SalexDev',
    default: 'SalexDev', // This will be the base title
  },
  description: "Created with Nextjs :)",
  icons: {
    icon: '/icon.png', // Make sure this file is in the public directory
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
