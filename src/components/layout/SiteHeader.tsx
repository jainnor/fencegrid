"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top banner: brand green with blur, same as nav */}
      <div
        className="w-full text-center text-white text-xs md:text-sm py-1 backdrop-blur-md"
        style={{ backgroundColor: "var(--brand-green-80)" }}
      >
        Florida’s Trusted Fence Company
      </div>

      {/* Translucent, blurred nav bar in brand green */}
      <div
        className="w-full backdrop-blur-md shadow-sm"
        style={{ backgroundColor: "var(--brand-green-80)" }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-1 text-white text-[1.1rem]">
        {/* Logo en vez de FenceGrid */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/gallery/05logowobackwhite.png"
            alt="FenceGrid Logo"
            width={176}
            height={44}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#services" className="hover:opacity-80">Our Services</Link>
          <Link href="#gallery" className="hover:opacity-80">Project Gallery</Link>
          <Link href="#process" className="hover:opacity-80">Installation Process</Link>
          <Link href="#models" className="hover:opacity-80">Fence Styles</Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-lg px-[1.15rem] py-[0.44rem] bg-black text-white text-[1.265rem]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center rounded-md border px-3 py-2 text-white border-white/60"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-t text-white backdrop-blur-sm"
          style={{ backgroundColor: "var(--brand-green-95)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2 text-sm">
            <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="#gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="#process" onClick={() => setOpen(false)}>Process</Link>
            <Link href="#models" onClick={() => setOpen(false)}>Models & Sizes</Link>
            <Link
              href="#contact"
              className="inline-flex w-max rounded-lg px-4 py-2 bg-black text-white mt-1"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
