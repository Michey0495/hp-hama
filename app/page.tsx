"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Menu from "./components/Menu";
import Access from "./components/Access";
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
          <Menu />
          <Access />
        </main>
        <Footer />
      </div>
    </>
  );
}
