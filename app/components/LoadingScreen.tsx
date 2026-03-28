"use client";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sumi"
      style={{
        animation: "loading-fade-out 0.6s ease 2.0s forwards",
      }}
    >
      {/* Gold glow rings */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.35) 0%, rgba(232,193,112,0.1) 50%, transparent 70%)",
            animation: "gold-pulse 2s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.5) 0%, rgba(139,117,53,0.2) 60%, transparent 80%)",
            animation: "gold-glow-spread 1.8s ease-out forwards",
          }}
        />
        <div
          className="absolute w-16 h-16 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,193,112,0.9) 0%, rgba(201,168,76,0.4) 50%, transparent 80%)",
            animation: "gold-pulse 1.5s ease-in-out infinite 0.3s",
          }}
        />
        <span
          className="relative z-10 text-4xl md:text-5xl font-bold tracking-widest"
          style={{
            fontFamily: "var(--font-kaisei)",
            color: "#F0EBE0",
            animation: "text-reveal 1.6s ease-out 0.6s both",
            textShadow: "0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(232,193,112,0.3)",
          }}
        >
          浜
        </span>
      </div>

      {/* Tiny floating sparks */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#C9A84C" : "#E8C170",
            left: `${20 + ((i * 37 + 13) % 60)}%`,
            bottom: `${10 + ((i * 23 + 7) % 30)}%`,
            animation: `float-smoke ${4 + (i % 4)}s ease-out ${(i * 0.7) % 3}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
