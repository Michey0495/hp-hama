"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Footer from "./components/Footer";
import SmokeParticles from "./components/SmokeParticles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

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
    if (loading) return;
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading, observerCallback]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        ref={mainRef}
        className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Header />
        <SmokeParticles />
        <main>
          <Hero />
          <Concept />

          {/* Quick info & navigation cards */}
          <section className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
              {/* Business hours highlight */}
              <div className="reveal text-center mb-20">
                <div
                  className="inline-block py-6 px-10 border"
                  style={{ borderColor: "rgba(201,168,76,0.25)" }}
                >
                  <p
                    className="text-sm tracking-[0.3em] mb-2 opacity-40"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#C9A84C",
                    }}
                  >
                    営業時間
                  </p>
                  <p
                    className="text-xl md:text-2xl tracking-wider"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#F0EBE0",
                    }}
                  >
                    16:00〜23:00
                  </p>
                  <p
                    className="text-sm tracking-wider mt-2 opacity-50"
                    style={{
                      fontFamily: "var(--font-maru)",
                      color: "#F0EBE0",
                    }}
                  >
                    L.O. 22:30 ／ 不定休
                  </p>
                </div>
              </div>

              {/* Navigation cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <NavCard
                  href="/menu"
                  title="お品書き"
                  titleEn="MENU"
                  description="備長炭の炉端焼き、新鮮なお刺身、地酒各種"
                  delay={1}
                />
                <NavCard
                  href="/info"
                  title="店舗情報"
                  titleEn="INFO"
                  description="所在地・営業時間・アクセス方法"
                  delay={2}
                />
                <NavCard
                  href="/contact"
                  title="ご予約"
                  titleEn="CONTACT"
                  description="お電話にてご予約・お問い合わせ"
                  delay={3}
                />
              </div>
            </div>
          </section>

          {/* Map preview */}
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

              <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left space-y-4">
                  <p
                    className="text-lg md:text-xl tracking-wider opacity-80"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#F0EBE0",
                    }}
                  >
                    北海道釧路市北大通13-1
                  </p>
                  <p
                    className="text-base tracking-wider opacity-50"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#F0EBE0",
                    }}
                  >
                    JR釧路駅 北口より徒歩約5分
                  </p>
                  <a
                    href="tel:0154646544"
                    className="inline-flex items-center gap-3 mt-4 text-lg tracking-wider transition-colors hover:text-kinsui"
                    style={{
                      fontFamily: "var(--font-kaisei)",
                      color: "#C9A84C",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    0154-64-6544
                  </a>
                </div>

                <div
                  className="w-full aspect-video rounded-sm overflow-hidden"
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
      </div>
    </>
  );
}

function NavCard({
  href,
  title,
  titleEn,
  description,
  delay,
}: {
  href: string;
  title: string;
  titleEn: string;
  description: string;
  delay: number;
}) {
  return (
    <Link
      href={href}
      className={`reveal reveal-delay-${delay} block p-8 border rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-kinsui/40 group cursor-pointer`}
      style={{ borderColor: "rgba(201,168,76,0.15)" }}
    >
      <p
        className="text-[10px] tracking-[0.4em] mb-3 opacity-30 transition-opacity group-hover:opacity-60"
        style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
      >
        {titleEn}
      </p>
      <h3
        className="text-xl md:text-2xl font-bold mb-3 tracking-wider transition-colors group-hover:text-kinsui"
        style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
      >
        {title}
      </h3>
      <p
        className="text-sm opacity-50 tracking-wider"
        style={{ fontFamily: "var(--font-maru)", color: "#F0EBE0" }}
      >
        {description}
      </p>
    </Link>
  );
}
