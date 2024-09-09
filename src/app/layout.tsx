import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GridSmallBackground } from "@/components/ui/grid-small-bg";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ian Troy Portfolio",
  description: "Ian Troy Pahilga web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <GridSmallBackground className="fixed min-w-full h-[100vh]" />
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
