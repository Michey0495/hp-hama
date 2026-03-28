"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&q=80"
          alt="イメージ写真"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/[0.6]" />
      </div>

      {/* Background glow layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center 60%, rgba(201,168,76,0.1) 0%, rgba(8,8,8,1) 60%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(139,117,53,0.05) 40%, transparent 65%)",
            animation: "hero-glow-breathe 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,26,26,0.12) 0%, transparent 60%)",
            animation: "hero-glow-breathe 5s ease-in-out infinite 1.5s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Vertical accent text */}
        <div
          className="vertical-text absolute -left-4 md:left-8 top-1/2 -translate-y-1/2 text-xs md:text-sm tracking-[0.3em] opacity-25"
          style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
        >
          備長炭と釧路の海
        </div>

        {/* Main title */}
        <div
          style={{
            animation: "hero-text-emerge 1.2s ease-out 0.3s both",
          }}
        >
          <p
            className="text-sm md:text-base tracking-[0.4em] mb-6 opacity-50"
            style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
          >
            釧路・炉端焼き
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-kaisei)",
              color: "#F0EBE0",
              textShadow:
                "0 0 60px rgba(201,168,76,0.35), 0 0 120px rgba(139,26,26,0.15)",
              letterSpacing: "0.15em",
            }}
          >
            浜
          </h1>
          <p
            className="text-xs md:text-sm tracking-[0.6em] opacity-35"
            style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
          >
            HAMA
          </p>
        </div>

        {/* Tagline */}
        <div
          className="mt-16 md:mt-20"
          style={{
            animation: "hero-text-emerge 1.2s ease-out 0.8s both",
          }}
        >
          <p
            className="text-base md:text-lg tracking-[0.2em] leading-relaxed opacity-65"
            style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
          >
            備長炭が照らす、釧路の海の幸。
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-35"
          style={{ animation: "hero-text-emerge 1s ease-out 1.5s both" }}
        >
          <span
            className="text-[10px] tracking-[0.4em]"
            style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
          >
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-kinsui to-transparent" />
        </div>
      </div>
    </section>
  );
}
