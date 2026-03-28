"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p
              className="text-2xl font-bold tracking-wider mb-1"
              style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
            >
              炉ばた 浜
            </p>
            <p
              className="text-xs tracking-[0.4em] opacity-30"
              style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
            >
              ROBATA HAMA
            </p>
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm opacity-50" style={{ fontFamily: "var(--font-maru)" }}>
              北海道釧路市北大通13-1
            </p>
            <p className="text-sm opacity-50" style={{ fontFamily: "var(--font-maru)" }}>
              TEL{" "}
              <a href="tel:0154646544" className="hover:opacity-80 transition-opacity">
                0154-64-6544
              </a>
            </p>
            <p className="text-sm opacity-50" style={{ fontFamily: "var(--font-maru)" }}>
              16:00〜23:00（L.O. 22:30） ／ 不定休
            </p>
          </div>

          <div className="w-12 h-px bg-kinsui opacity-20" />

          <p className="text-xs opacity-30" style={{ fontFamily: "var(--font-maru)" }}>
            本サイトは
            <a
              href="https://ezoai.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              EZOAI
            </a>
            によるデモ制作です
          </p>

          <p className="text-[10px] opacity-20" style={{ fontFamily: "var(--font-maru)" }}>
            ※掲載写真はイメージです。実際の料理・店内とは異なります。
          </p>

          <p className="text-[10px] opacity-20" style={{ fontFamily: "var(--font-maru)" }}>
            &copy; 炉ばた 浜
          </p>
        </div>
      </div>
    </footer>
  );
}
