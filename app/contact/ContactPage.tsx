"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useCallback } from "react";

export default function ContactPage() {
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
              お問い合わせ
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: "#F0EBE0",
                letterSpacing: "0.15em",
              }}
            >
              ご予約
            </h1>
            <div className="gold-divider" />
          </div>
        </section>

        {/* Phone CTA section */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-6">
            <div className="reveal text-center space-y-10">
              <p
                className="text-lg md:text-xl tracking-wider leading-relaxed opacity-80"
                style={{
                  fontFamily: "var(--font-kaisei)",
                  color: "#F0EBE0",
                }}
              >
                ご予約・お問い合わせはお電話にて承ります。
              </p>

              {/* Phone number - large and tappable */}
              <a
                href="tel:0154646544"
                className="inline-flex flex-col items-center gap-4 px-12 py-8 border rounded-sm transition-all duration-300 hover:bg-kinsui/20 group"
                style={{
                  borderColor: "#C9A84C",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:scale-110"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span
                  className="text-3xl md:text-4xl font-bold tracking-wider"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#F0EBE0",
                  }}
                >
                  0154-64-6544
                </span>
                <span
                  className="text-sm tracking-widest opacity-50"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#C9A84C",
                  }}
                >
                  タップして発信
                </span>
              </a>

              <div className="space-y-3">
                <p
                  className="text-base tracking-wider opacity-60"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#F0EBE0",
                  }}
                >
                  営業時間 16:00〜23:00（L.O. 22:30）
                </p>
                <p
                  className="text-base tracking-wider opacity-60"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#F0EBE0",
                  }}
                >
                  定休日 不定休
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal text-center mb-12">
              <p
                className="text-xs tracking-[0.5em] mb-4 opacity-40"
                style={{
                  fontFamily: "var(--font-kaisei)",
                  color: "#C9A84C",
                }}
              >
                アクセス
              </p>
              <div className="gold-divider" />
            </div>

            <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div className="space-y-6 text-center md:text-left">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#F0EBE0",
                      letterSpacing: "0.1em",
                    }}
                  >
                    炉ばた 浜
                  </h2>
                  <p
                    className="text-xs tracking-[0.4em] opacity-30"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#C9A84C",
                    }}
                  >
                    ROBATA HAMA
                  </p>
                </div>
                <p
                  className="text-base tracking-wider opacity-80"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#F0EBE0",
                  }}
                >
                  北海道釧路市北大通13-1
                </p>
                <p
                  className="text-base tracking-wider opacity-60"
                  style={{
                    fontFamily: "var(--font-kaisei)",
                    color: "#F0EBE0",
                  }}
                >
                  JR釧路駅 北口より徒歩約5分
                </p>
              </div>

              {/* Map */}
              <div
                className="w-full aspect-square md:aspect-video rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E9%87%A7%E8%B7%AF%E5%B8%82%E5%8C%97%E5%A4%A7%E9%80%9A13-1&output=embed&hl=ja"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(0.3) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="炉ばた浜 所在地"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
