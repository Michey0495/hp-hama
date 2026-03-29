"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useCallback } from "react";

const MENU_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真：炉端焼き",
  },
  {
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真：海鮮",
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真：日本酒",
  },
  {
    src: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=640&h=640&fit=crop&q=80",
    alt: "イメージ写真：刺身",
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
      { name: "本日の焼き魚", price: "時価" },
      { name: "ホッケ開き" },
      { name: "ホタテバター焼き" },
      { name: "イカ丸焼き" },
      { name: "サンマ塩焼き" },
      { name: "エビ串" },
      { name: "つぶ貝焼き" },
      { name: "シシャモ" },
    ],
  },
  {
    title: "お刺身",
    titleEn: "SASHIMI",
    items: [
      { name: "本日の刺身盛り合わせ", price: "時価" },
      { name: "ホタテ刺身" },
      { name: "サーモン刺身" },
      { name: "タコ刺身" },
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
      { name: "焼きおにぎり" },
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

export default function MenuPage() {
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="text-xs tracking-[0.5em] mb-4 opacity-40"
              style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
            >
              お品書き
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#F0EBE0",
                letterSpacing: "0.15em",
              }}
            >
              品書
            </h1>
            <div className="gold-divider" />
          </div>
        </section>

        {/* Menu content */}
        <section className="relative pb-32 md:pb-40">
          <div className="washi-bg relative">
            <div
              className="absolute -top-24 left-0 right-0 h-24"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,8,8,1), #F0EBE0)",
              }}
            />

            <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
              {/* Happy Hour banner */}
              <div
                className="reveal mb-16 text-center py-6 border-y"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <p
                  className="text-sm tracking-[0.3em] mb-1"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#8B7535",
                  }}
                >
                  HAPPY HOUR
                </p>
                <p
                  className="text-lg md:text-xl tracking-wider"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#080808",
                  }}
                >
                  16:00 - 18:00 お得なハッピーアワー
                </p>
              </div>

              {/* Photo gallery */}
              <div className="reveal grid grid-cols-2 gap-4 mb-16">
                {MENU_PHOTOS.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
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
                  <div
                    key={category.title}
                    className="reveal"
                    style={{ transitionDelay: `${catIdx * 0.15}s` }}
                  >
                    <div className="flex items-end gap-4 mb-8">
                      <h2
                        className="text-2xl md:text-3xl font-semibold"
                        style={{
                          fontFamily: "var(--font-kaisei)",
                          color: "#080808",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {category.title}
                      </h2>
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
                        <li
                          key={item.name}
                          className="menu-item pl-4 flex justify-between items-baseline"
                        >
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
                              style={{
                                fontFamily: "var(--font-maru)",
                                color: "#555",
                              }}
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
              <div
                className="reveal mt-16 text-center py-6 border-y"
                style={{ borderColor: "rgba(201,168,76,0.2)" }}
              >
                <p
                  className="text-base tracking-wider"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#555",
                  }}
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
                background:
                  "linear-gradient(to top, rgba(8,8,8,1), #F0EBE0)",
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
