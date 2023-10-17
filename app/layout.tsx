import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteMe",
  description:
    "Application for collecting your ideas and thoughts.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.ico",
        href: "/logo.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.ico",
        href: "/logo-dark.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="noteme-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
