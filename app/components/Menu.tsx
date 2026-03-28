"use client";

import Image from "next/image";

const MENU_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真",
  },
  {
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真",
  },
];

interface MenuCategory {
  title: string;
  titleEn: string;
  items: { name: string; price?: string }[];
}

const MENU_DATA: MenuCategory[] = [
  {
    title: "炉端焼き",
    titleEn: "ROBATA",
    items: [
      { name: "本日の焼き魚" },
      { name: "ホッケ開き" },
      { name: "ホタテバター焼き" },
      { name: "イカ丸焼き" },
      { name: "サンマ塩焼き" },
      { name: "エビ串" },
    ],
  },
  {
    title: "お刺身",
    titleEn: "SASHIMI",
    items: [
      { name: "本日の刺身盛り合わせ" },
      { name: "ホタテ刺身" },
      { name: "サーモン刺身" },
    ],
  },
  {
    title: "一品料理",
    titleEn: "IPPIN",
    items: [
      { name: "枝豆" },
      { name: "冷奴" },
      { name: "ポテトサラダ" },
      { name: "漬物盛り合わせ" },
    ],
  },
  {
    title: "お飲み物",
    titleEn: "DRINK",
    items: [
      { name: "生ビール" },
      { name: "日本酒（地酒各種）" },
      { name: "焼酎" },
      { name: "ハイボール" },
      { name: "サワー各種" },
      { name: "ソフトドリンク" },
    ],
  },
];

function WaveDivider() {
  return (
    <svg
      width="100%"
      height="8"
      viewBox="0 0 400 8"
      preserveAspectRatio="none"
      className="my-4 opacity-30"
    >
      <path
        d="M0 4 Q50 1 100 4 Q150 7 200 4 Q250 1 300 4 Q350 7 400 4"
        stroke="#C9A84C"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative py-32 md:py-40">
      <div className="washi-bg relative">
        <div
          className="absolute -top-24 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to bottom, rgba(8,8,8,1), #F0EBE0)",
          }}
        />

        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          {/* Section title */}
          <div className="reveal text-center mb-20">
            <p
              className="text-xs tracking-[0.5em] mb-3 opacity-40"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#8B7535",
              }}
            >
              お品書き
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#080808",
                letterSpacing: "0.1em",
              }}
            >
              品書
            </h2>
            <div
              className="gold-divider"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #C9A84C, #E8C170, #C9A84C, transparent)",
              }}
            />
          </div>

          {/* Happy Hour banner */}
          <div className="reveal mb-16 text-center py-6 border-y" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
            <p
              className="text-sm tracking-[0.3em] mb-1"
              style={{ fontFamily: "var(--font-kaisei)", color: "#8B7535" }}
            >
              HAPPY HOUR
            </p>
            <p
              className="text-lg md:text-xl tracking-wider"
              style={{ fontFamily: "var(--font-kaisei)", color: "#080808" }}
            >
              16:00 - 18:00 お得なハッピーアワー
            </p>
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-2 gap-4 mb-16">
            {MENU_PHOTOS.map((photo) => (
              <div key={photo.src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            ))}
          </div>

          {/* Menu categories */}
          <div className="space-y-16">
            {MENU_DATA.map((category, catIdx) => (
              <div key={category.title} className="reveal" style={{ transitionDelay: `${catIdx * 0.15}s` }}>
                <div className="flex items-end gap-4 mb-8">
                  <h3
                    className="text-2xl md:text-3xl font-semibold"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#080808",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {category.title}
                  </h3>
                  <span
                    className="text-[10px] tracking-[0.3em] pb-1 opacity-30"
                    style={{
                      fontFamily: "var(--font-maru)",
                      color: "#555",
                    }}
                  >
                    {category.titleEn}
                  </span>
                </div>

                <WaveDivider />

                <ul className="space-y-4 mt-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="menu-item pl-4 flex justify-between items-baseline">
                      <span
                        className="text-base md:text-lg tracking-wider"
                        style={{
                          fontFamily: "var(--font-kaisei)",
                          color: "#333",
                        }}
                      >
                        {item.name}
                      </span>
                      {item.price && (
                        <span
                          className="text-sm opacity-50 ml-4"
                          style={{ fontFamily: "var(--font-maru)", color: "#555" }}
                        >
                          {item.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Price range note */}
          <div className="reveal mt-16 text-center py-6 border-y" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
            <p
              className="text-base tracking-wider"
              style={{ fontFamily: "var(--font-kaisei)", color: "#555" }}
            >
              お一人様 ¥4,000〜¥5,000 程度
            </p>
          </div>

          {/* Bottom note */}
          <div className="reveal mt-10 text-center">
            <p
              className="text-sm opacity-50"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#555",
              }}
            >
              ※ 仕入れ状況により内容が変わる場合がございます
            </p>
            <p
              className="text-sm opacity-50 mt-1"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#555",
              }}
            >
              ※ 価格はお気軽にお尋ねください
            </p>
          </div>
        </div>

        <div
          className="absolute -bottom-24 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to top, rgba(8,8,8,1), #F0EBE0)",
          }}
        />
      </div>
    </section>
  );
}
