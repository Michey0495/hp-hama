"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/menu", label: "お品書き" },
  { href: "/info", label: "店舗情報" },
  { href: "/contact", label: "お問合せ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-sumi/90 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-wider transition-opacity hover:opacity-70"
          style={{ fontFamily: "var(--font-kaisei)", color: "#F0EBE0" }}
        >
          浜
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-widest transition-colors hover:text-kinsui ${
                pathname === item.href ? "text-kinsui" : ""
              }`}
              style={{
                fontFamily: "var(--font-kaisei)",
                color: pathname === item.href ? "#C9A84C" : "#F0EBE0",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0154646544"
            className="text-sm px-4 py-2 border rounded tracking-wider transition-all hover:bg-kinsui/20 hover:border-kinsui"
            style={{
              fontFamily: "var(--font-kaisei)",
              color: "#F0EBE0",
              borderColor: "rgba(201,168,76,0.4)",
            }}
          >
            ご予約
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 bg-shiro transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-shiro transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-shiro transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(8,8,8,0.95)" }}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg tracking-widest"
              style={{
                fontFamily: "var(--font-kaisei)",
                color: pathname === item.href ? "#C9A84C" : "#F0EBE0",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0154646544"
            className="text-lg px-6 py-3 border rounded tracking-wider"
            style={{
              fontFamily: "var(--font-kaisei)",
              color: "#F0EBE0",
              borderColor: "#C9A84C",
            }}
          >
            ご予約 0154-64-6544
          </a>
        </nav>
      </div>
    </header>
  );
}
