"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Process", "#process"],
  ["Academy", "#academy"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b1b]/95 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between gap-5">
        <Link href="#home" className="flex items-center gap-3">
          <div className="gradient-button flex h-11 w-11 items-center justify-center rounded-xl">
            <Code2 size={25} />
          </div>
          <div>
            <p className="text-2xl font-black tracking-tight">
              Code<span className="gradient-text">Agiles</span>
            </p>
            <p className="text-[10px] tracking-[0.15em] text-slate-400">
              SOFTWARE • MARKETING • GROWTH
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="text-sm font-semibold text-slate-300 hover:text-cyan-400"
            >
              {name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="gradient-button hidden items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold lg:flex"
        >
          Get a Free Quote <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#09132a] px-6 py-4 lg:hidden">
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-3 text-slate-200"
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
