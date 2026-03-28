import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hp-hama.vercel.app"),
  title: "炉ばた 浜 | 釧路の備長炭炉端焼き",
  description:
    "北海道釧路市の炉端焼き「浜」。備長炭で焼き上げる釧路産の新鮮魚介。釧路駅から徒歩5分。16時から23時まで営業。ハッピーアワー16時〜18時。",
  keywords: ["炉端焼き", "釧路", "浜", "備長炭", "海鮮", "居酒屋", "釧路駅"],
  openGraph: {
    title: "炉ばた 浜 | 釧路の備長炭炉端焼き",
    description:
      "備長炭で焼き上げる、釧路の海の幸。炉ばた 浜。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&family=Zen+Maru+Gothic:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
