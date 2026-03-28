"use client";

export default function SmokeParticles() {
  const particles = [
    { left: 8, delay: 0, duration: 9, size: 4, color: "rgba(201,168,76,0.25)", variant: false },
    { left: 22, delay: 2.5, duration: 11, size: 3, color: "rgba(139,117,53,0.2)", variant: true },
    { left: 38, delay: 4, duration: 8, size: 3.5, color: "rgba(201,168,76,0.2)", variant: false },
    { left: 52, delay: 1, duration: 10, size: 3, color: "rgba(232,193,112,0.15)", variant: true },
    { left: 68, delay: 3, duration: 12, size: 4, color: "rgba(139,117,53,0.2)", variant: false },
    { left: 82, delay: 5, duration: 9, size: 3, color: "rgba(201,168,76,0.2)", variant: true },
    { left: 14, delay: 6, duration: 10, size: 2.5, color: "rgba(139,117,53,0.15)", variant: false },
    { left: 48, delay: 7, duration: 11, size: 3, color: "rgba(201,168,76,0.2)", variant: true },
    { left: 73, delay: 3.5, duration: 8, size: 2.5, color: "rgba(232,193,112,0.15)", variant: false },
    { left: 33, delay: 8, duration: 13, size: 3, color: "rgba(139,117,53,0.2)", variant: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            left: `${p.left}%`,
            bottom: "5%",
            animation: `${p.variant ? "float-smoke-drift" : "float-smoke"} ${p.duration}s ease-out ${p.delay}s infinite`,
            opacity: 0,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
