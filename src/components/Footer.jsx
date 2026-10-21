import Link from "next/link";
import { Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030817]">
      <div className="container-custom grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Code2 size={32} className="text-cyan-400" />
            <span className="text-2xl font-black">
              Code<span className="gradient-text">Agiles</span>
            </span>
          </div>
          <p className="max-w-sm leading-7 text-slate-400">
            Software development, digital marketing and technology solutions for
            businesses worldwide.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {[
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Portfolio", "#portfolio"],
              ["Training Academy", "#academy"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="text-slate-400 hover:text-cyan-400"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Start a Project</h3>
          <p className="mb-5 leading-7 text-slate-400">
            Have an idea? Let's discuss your requirements and build something
            great together.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-cyan-400"
          >
            Request a Quote <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 CodeAgiles. All rights reserved.
      </div>
    </footer>
  );
}
