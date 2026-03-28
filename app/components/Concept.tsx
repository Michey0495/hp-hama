"use client";

export default function Concept() {
  return (
    <section id="concept" className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,8,1), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="reveal text-center mb-20">
          <p
            className="text-xs tracking-[0.5em] mb-4 opacity-40"
            style={{ fontFamily: "var(--font-kaisei)", color: "#C9A84C" }}
          >
            こだわり
          </p>
          <div className="gold-divider" />
        </div>

        {/* Story paragraphs */}
        <div className="space-y-20 md:space-y-28">
          <p
            className="reveal text-2xl md:text-3xl lg:text-4xl leading-loose tracking-wide"
            style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
          >
            備長炭、一本。
          </p>

          <p
            className="reveal reveal-delay-1 text-lg md:text-xl leading-loose tracking-wide opacity-80"
            style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
          >
            炉端焼きの命は、炭にある。
            <br />
            備長炭の遠赤外線が、素材の旨みを閉じ込める。
            <br />
            表面は香ばしく、中はふっくらと。
          </p>

          {/* Decorative: charcoal and waves */}
          <div className="reveal reveal-delay-2 flex justify-center">
            <svg
              width="220"
              height="60"
              viewBox="0 0 220 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-25"
            >
              {/* Wave lines (ocean) */}
              <path d="M0 15 Q25 8 50 15 Q75 22 100 15 Q125 8 150 15 Q175 22 200 15 L220 15" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
              <path d="M0 22 Q25 15 50 22 Q75 29 100 22 Q125 15 150 22 Q175 29 200 22 L220 22" stroke="#8B7535" strokeWidth="0.6" fill="none" />
              {/* Charcoal grill lines */}
              <line x1="30" y1="35" x2="190" y2="35" stroke="#C9A84C" strokeWidth="0.8" />
              <line x1="30" y1="42" x2="190" y2="42" stroke="#C9A84C" strokeWidth="0.8" />
              <line x1="30" y1="49" x2="190" y2="49" stroke="#C9A84C" strokeWidth="0.8" />
              {/* Ember dots */}
              <circle cx="70" cy="55" r="1.5" fill="#C9A84C" opacity="0.6" />
              <circle cx="110" cy="56" r="1.2" fill="#8B7535" opacity="0.5" />
              <circle cx="150" cy="54" r="1.5" fill="#E8C170" opacity="0.4" />
            </svg>
          </div>

          <p
            className="reveal reveal-delay-1 text-lg md:text-xl leading-loose tracking-wide opacity-80"
            style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
          >
            釧路の港から届く、その日の魚介。
            <br />
            ホッケ、サンマ、ホタテ、イカ。
            <br />
            北の海が育てた旨みを、炭火が引き出す。
          </p>

          <p
            className="reveal reveal-delay-2 text-2xl md:text-3xl lg:text-4xl leading-loose tracking-wide text-center"
            style={{
              fontFamily: "var(--font-kaisei)",
              color: "#F0EBE0",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, rgba(201,168,76,0.25) 60%)",
              }}
            >
              海と炭火が出会う場所。
            </span>
          </p>

          <p
            className="reveal reveal-delay-1 text-lg md:text-xl leading-loose tracking-wide opacity-80"
            style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
          >
            カウンターに座れば、
            <br />
            目の前で焼き上がる音と香りが広がる。
            <br />
            16時から始まるハッピーアワーで、
            <br />
            まずは一杯。釧路の夜が、ここから始まる。
          </p>
        </div>

        {/* Bottom decorative */}
        <div className="reveal mt-28 flex justify-center">
          <div className="flex items-center gap-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-kinsui opacity-30" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-25">
              <circle cx="12" cy="12" r="3" fill="#C9A84C" />
              <circle cx="12" cy="12" r="6" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-kinsui opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
