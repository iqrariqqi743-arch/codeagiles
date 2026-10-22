"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Phone,
  Play,
  Plus,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
  ShoppingCart,
  Cloud,
  Palette,
  GitBranch,
  Target,
  Lightbulb,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55 },
};
const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "Fast, scalable web applications tailored to business workflows, customers and operational needs.",
    tags: ["React", "Next.js", "Laravel"],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    desc: "Modern storefronts, product catalogs, checkout flows and admin experiences built around growth.",
    tags: ["Storefronts", "Dashboards", "Payments"],
  },
  {
    icon: Layers3,
    title: "Custom Business Software",
    desc: "Purpose-built platforms that simplify complex processes and bring teams, data and tools together.",
    tags: ["CRM", "ERP", "SaaS"],
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    desc: "Secure APIs, authentication, integrations and maintainable architectures for growing products.",
    tags: ["Node.js", "PHP", "REST APIs"],
  },
  {
    icon: Palette,
    title: "UI/UX & Frontend Engineering",
    desc: "Accessible, responsive interfaces that balance distinctive visual design with real usability.",
    tags: ["Design Systems", "UX", "Frontend"],
  },
  {
    icon: Cloud,
    title: "Deployment & Maintenance",
    desc: "Production deployment, CI/CD workflows, performance improvements and ongoing technical support.",
    tags: ["Cloud", "CI/CD", "Optimization"],
  },
];
const courses = [
  {
    number: "01",
    name: "Frontend Web Development",
    desc: "Build responsive websites and interactive interfaces with modern frontend tools.",
    topics: ["HTML & CSS", "JavaScript", "React", "Next.js"],
    level: "Beginner → Advanced",
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    name: "PHP & Laravel Development",
    desc: "Learn backend fundamentals, MVC, databases, authentication and production-ready APIs.",
    topics: ["Core PHP", "OOP", "Laravel", "MySQL"],
    level: "Beginner → Advanced",
    icon: Code2,
  },
  {
    number: "03",
    name: "Node.js Backend Development",
    desc: "Develop APIs, connect databases and implement secure application architecture.",
    topics: ["Node.js", "Express", "MongoDB", "JWT"],
    level: "Intermediate",
    icon: Server,
  },
  {
    number: "04",
    name: "Full Stack Web Development",
    desc: "Connect polished user interfaces with powerful backends through real-world projects.",
    topics: ["React / Next.js", "Node / Laravel", "Databases", "Deployment"],
    level: "Career Track",
    icon: Layers3,
  },
  {
    number: "05",
    name: "Python Programming",
    desc: "Develop problem-solving foundations and practical programming skills using Python.",
    topics: ["Python Basics", "OOP", "Data Handling", "Projects"],
    level: "Beginner Friendly",
    icon: Terminal,
  },
  {
    number: "06",
    name: "Databases & Developer Tools",
    desc: "Strengthen your engineering workflow with database design, Git and deployment basics.",
    topics: ["SQL", "MongoDB", "Git / GitHub", "DevOps Basics"],
    level: "All Levels",
    icon: Database,
  },
];
const process = [
  {
    n: "01",
    title: "Discover",
    desc: "Understand your goals, users, existing workflows and product requirements.",
  },
  {
    n: "02",
    title: "Plan & Design",
    desc: "Define the solution, user experience, architecture and development milestones.",
  },
  {
    n: "03",
    title: "Build & Iterate",
    desc: "Develop features in clear stages with feedback, testing and quality checks.",
  },
  {
    n: "04",
    title: "Launch & Improve",
    desc: "Deploy, monitor and refine your software as your needs evolve.",
  },
];
const faqs = [
  {
    q: "What kind of software projects can CodeAgiles help with?",
    a: "We focus on web applications, eCommerce platforms, custom business systems, frontend engineering, backend APIs and related deployment work. Share your requirements and we can discuss the right approach.",
  },
  {
    q: "Can I request a custom software solution?",
    a: "Yes. You can describe your business process, users, key features and desired timeline through the project inquiry email. We can then discuss scope and next steps.",
  },
  {
    q: "Are CodeAgiles training programs suitable for beginners?",
    a: "The learning paths cover beginner through advanced topics. Course content and recommended prerequisites vary by program. Contact us for current training availability and guidance.",
  },
  {
    q: "Will students work on practical projects?",
    a: "The proposed learning approach emphasizes hands-on exercises, real application patterns and portfolio-building projects rather than theory alone.",
  },
  {
    q: "How can I ask about enrollment or project pricing?",
    a: "Use the contact buttons to send an inquiry. Project pricing, course schedules and availability are discussed individually rather than listed as unverified fixed offers.",
  },
];
const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Portfolio", "#portfolio"],
  ["Academy", "#academy"],
  ["Courses", "#courses"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
const inquiry = (subject) =>
  `mailto:iqrariqqi741@gmail.com?subject=${encodeURIComponent(subject)}`;
function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 shrink-0"
      aria-label="CodeAgiles home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
        <Code2 size={25} strokeWidth={2.7} />
      </span>
      <span className="text-[22px] font-black tracking-tight">
        Code<span className="gradient-text">Agiles</span>
        <span className="block text-[9px] font-bold uppercase tracking-[2.2px] text-slate-400">
          Engineering & Academy
        </span>
      </span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a18]/90 backdrop-blur-xl">
      <div className="container-wide flex h-[78px] items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              {name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary hidden !px-4 !py-3 text-sm md:inline-flex"
        >
          Let's Talk <ArrowUpRight size={16} />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg border border-white/15 p-2 xl:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-wide flex flex-col gap-1 border-t border-white/10 py-4 xl:hidden">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/10"
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
function SectionHead({ eyebrow, title, desc, center = false }) {
  return (
    <motion.div
      {...fade}
      className={`mb-12 ${center ? "mx-auto max-w-3xl text-center" : ""}`}
    >
      <div className="eyebrow mb-4">
        <Sparkles size={15} />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      {desc && (
        <p className="muted mt-5 max-w-2xl text-base md:text-lg">{desc}</p>
      )}
    </motion.div>
  );
}
function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[555px]">
      <div className="orb absolute -right-3 -top-8 z-10 rounded-2xl border border-cyan-300/30 bg-[#101f34] px-4 py-3 shadow-2xl md:-right-7">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-200">
          <CheckCircle2 size={16} /> Production-ready thinking
        </div>
      </div>
      <div className="glass relative overflow-hidden rounded-[25px] shadow-[0_35px_100px_#0008]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
          <i className="h-3 w-3 rounded-full bg-red-400" />
          <i className="h-3 w-3 rounded-full bg-amber-400" />
          <i className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-4 text-xs text-slate-400">
            codeagiles / product-engineering
          </span>
        </div>
        <div className="grid grid-cols-[54px_1fr]">
          <div className="flex flex-col items-center gap-6 border-r border-white/10 py-7 text-slate-500">
            <Code2 size={20} />
            <Database size={19} />
            <GitBranch size={19} />
            <Layers3 size={19} />
          </div>
          <div className="min-w-0 px-5 py-6 font-mono text-[11px] leading-[2.25] text-slate-300 sm:px-7 sm:text-[13px]">
            <div>
              <span className="text-violet-300">const</span>{" "}
              <span className="text-cyan-300">buildFuture</span> ={" "}
              <span className="text-yellow-200">async</span> () =&gt; {"{"}
            </div>
            <div className="pl-4">
              <span className="text-violet-300">const</span> product = {"{"}
            </div>
            <div className="pl-8">
              design: <span className="text-emerald-300">'purposeful'</span>,
            </div>
            <div className="pl-8">
              code: <span className="text-emerald-300">'scalable'</span>,
            </div>
            <div className="pl-8">
              experience: <span className="text-emerald-300">'seamless'</span>,
            </div>
            <div className="pl-8">
              impact: <span className="text-emerald-300">'meaningful'</span>
            </div>
            <div className="pl-4">{"}"};</div>
            <div className="pl-4">
              <span className="text-violet-300">return await</span>{" "}
              <span className="text-cyan-300">launch</span>(product);
            </div>
            <div>{"}"};</div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />{" "}
              Ready to build something great
            </div>
          </div>
        </div>
      </div>
      <div
        className="orb absolute -bottom-8 -left-3 rounded-2xl border border-violet-400/30 bg-[#12182f] p-4 shadow-2xl md:-left-10"
        style={{ animationDelay: "-3s" }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-violet-400/15 p-3 text-violet-300">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="text-sm font-bold">Learn. Build. Grow.</p>
            <p className="text-xs text-slate-400">
              Practical IT learning paths
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Hero() {
  return (
    <section
      id="home"
      className="hero-glow grid-lines relative overflow-hidden pb-32 pt-20 md:pb-40 md:pt-28"
    >
      <div className="container-wide grid items-center gap-20 lg:grid-cols-[1.07fr_.93fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-bold tracking-wide text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />{" "}
            SOFTWARE ENGINEERING × IT EDUCATION
          </div>
          <h1 className="max-w-[780px] text-[clamp(45px,5.5vw,83px)] font-black leading-[1.06] tracking-[-3px]">
            We Build <span className="gradient-text">Digital Products.</span>
            <br />
            We Grow Tech Talent.
          </h1>
          <p className="muted mt-7 max-w-[610px] text-[17px] md:text-lg">
            CodeAgiles brings software development and practical IT learning
            together. From business-ready web applications to developer-focused
            training paths, we turn ideas into meaningful progress.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#services" className="btn-primary">
              Explore Our Services <ArrowRight size={18} />
            </a>
            <a href="#academy" className="btn-outline">
              Discover the Academy <GraduationCap size={18} />
            </a>
          </div>
          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" /> Modern web
              engineering
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" /> Practical
              learning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" />{" "}
              Quality-focused delivery
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="py-8"
        >
          <CodeWindow />
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full border-y border-white/10 bg-white/[.025] py-5">
        <div className="marquee-track text-sm font-black uppercase tracking-[2.5px] text-slate-400">
          {Array.from({ length: 2 }, (_, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              {[
                "Web Applications",
                "Custom Software",
                "Ecommerce",
                "Backend APIs",
                "Frontend Engineering",
                "IT Training",
                "Cloud & Deployment",
              ].map((item) => (
                <span key={item} className="flex items-center gap-10">
                  <Zap size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function TwoPillars() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHead
          eyebrow="One vision. Two disciplines."
          title={
            <>
              Technology solutions and{" "}
              <span className="gradient-text">technology education.</span>
            </>
          }
          desc="CodeAgiles is built around two complementary areas: creating useful digital solutions and making software skills more approachable through structured learning."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Rocket,
              num: "01 / SOFTWARE HOUSE",
              title: "Engineering solutions for ambitious ideas",
              desc: "We approach every product with attention to business needs, maintainable code and intuitive user experiences.",
              bullets: [
                "Websites, portals and web apps",
                "Custom software and integrations",
                "eCommerce and admin platforms",
              ],
              href: "#services",
              cta: "Explore engineering services",
              color: "cyan",
            },
            {
              icon: GraduationCap,
              num: "02 / IT TRAINING CENTER",
              title: "Practical skills for future developers",
              desc: "Learning paths designed around fundamentals, real development workflows and hands-on project experience.",
              bullets: [
                "Frontend and backend technologies",
                "Project-based learning approach",
                "Developer tools and career foundations",
              ],
              href: "#courses",
              cta: "Explore learning programs",
              color: "violet",
            },
          ].map((item) => (
            <motion.article
              key={item.num}
              {...fade}
              className="card relative overflow-hidden p-8 md:p-10"
            >
              <div
                className={`absolute -right-20 -top-24 h-60 w-60 rounded-full blur-[80px] ${item.color === "cyan" ? "bg-cyan-400/15" : "bg-violet-400/20"}`}
              />
              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <span className="eyebrow">{item.num}</span>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <item.icon size={27} className="text-cyan-200" />
                  </div>
                </div>
                <h3 className="max-w-md text-3xl font-extrabold leading-tight">
                  {item.title}
                </h3>
                <p className="muted mt-5">{item.desc}</p>
                <ul className="mt-7 space-y-3">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <Check size={16} className="text-cyan-300" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.href}
                  className="mt-9 inline-flex items-center gap-2 font-bold text-cyan-200 hover:text-white"
                >
                  {item.cta}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="section-pad bg-[#0a1021]">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="What we build"
            title={
              <>
                Software that solves{" "}
                <span className="gradient-text">real problems.</span>
              </>
            }
            desc="From early-stage product ideas to established business workflows, our engineering focus is on usability, performance and long-term maintainability."
          />
          <a
            href={inquiry("CodeAgiles — Software Project Inquiry")}
            className="btn-outline mb-12"
          >
            Discuss Your Project <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.045 }}
              className="card p-7"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <s.icon size={27} />
              </div>
              <h3 className="text-xl font-extrabold">{s.title}</h3>
              <p className="muted mt-4 min-h-[105px] text-sm">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={inquiry(`CodeAgiles — ${s.title} Inquiry`)}
                aria-label={`Inquire about ${s.title}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-200"
              >
                Let's discuss <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-wide">
        <SectionHead
          eyebrow="How we work"
          title={
            <>
              A clear process.{" "}
              <span className="gradient-text">Thoughtful execution.</span>
            </>
          }
          desc="Good software starts with understanding the problem. Our development approach is structured around clarity, collaboration and continuous improvement."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              {...fade}
              className="relative rounded-2xl border border-white/10 bg-white/[.035] p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-5xl font-black text-cyan-300/25">
                  {p.n}
                </span>
                {i < 3 && <ArrowRight size={20} className="text-cyan-300/60" />}
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="muted mt-3 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Stack() {
  return (
    <section className="border-y border-white/10 bg-[#0b1226] py-12">
      <div className="container-wide">
        <p className="eyebrow mb-7">Technologies we work with</p>
        <div className="flex flex-wrap gap-3">
          {[
            "PHP",
            "Laravel",
            "JavaScript",
            "React",
            "Next.js",
            "Vue.js",
            "Node.js",
            "Express",
            "Python",
            "MySQL",
            "MongoDB",
            "REST APIs",
            "Git",
            "Docker",
            "AWS",
          ].map((t) => (
            <span
              key={t}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
function Portfolio() {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container-wide">
        <SectionHead
          eyebrow="Selected experience"
          title={
            <>
              Experience shaped by{" "}
              <span className="gradient-text">real-world development.</span>
            </>
          }
          desc="A look at professional engineering work and project types informing the CodeAgiles approach. Past employment projects are shown as founder experience, not CodeAgiles client contracts."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.article {...fade} className="card overflow-hidden">
            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-violet-500/20">
              <div className="rounded-2xl border border-cyan-300/30 bg-[#091326]/70 p-7 text-center shadow-xl">
                <GraduationCap
                  className="mx-auto mb-3 text-cyan-300"
                  size={40}
                />
                <span className="font-extrabold">
                  Education Enrollment Platform
                </span>
              </div>
            </div>
            <div className="p-7">
              <span className="eyebrow !text-[10px]">
                Founder professional experience
              </span>
              <h3 className="mt-3 text-xl font-bold">
                Technicom — Netherlands
              </h3>
              <p className="muted mt-3 text-sm">
                Experience contributing to an education enrollment system using
                Laravel and Vue.js.
              </p>
              <a
                href="https://aanmelden.technicom.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200"
              >
                View website <ExternalLink size={15} />
              </a>
            </div>
          </motion.article>
          {[
            {
              icon: ShoppingCart,
              title: "eCommerce Application Development",
              desc: "Experience building storefront interfaces, product catalogs, customer flows and administration features.",
              tag: "Development experience",
            },
            {
              icon: Layers3,
              title: "Admin & Business Dashboards",
              desc: "Experience developing role-based dashboards, CRUD workflows, reporting interfaces and backend integrations.",
              tag: "Development experience",
            },
          ].map((p) => (
            <motion.article
              key={p.title}
              {...fade}
              className="card overflow-hidden"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-500/15">
                <div className="rounded-2xl border border-white/15 bg-[#091326]/70 p-7 text-center shadow-xl">
                  <p.icon className="mx-auto mb-3 text-violet-300" size={40} />
                  <span className="font-extrabold">{p.title}</span>
                </div>
              </div>
              <div className="p-7">
                <span className="eyebrow !text-[10px]">{p.tag}</span>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="muted mt-3 text-sm">{p.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200"
                >
                  Discuss similar work <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Academy() {
  return (
    <section
      id="academy"
      className="section-pad relative overflow-hidden bg-[#0a1021]"
    >
      <div className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-violet-500/10 blur-[90px]" />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fade}>
          <div className="eyebrow mb-4">
            <GraduationCap size={16} /> CodeAgiles IT Academy
          </div>
          <h2 className="section-title">
            Don't just learn to code.{" "}
            <span className="gradient-text">Learn to build.</span>
          </h2>
          <p className="muted mt-6 text-lg">
            Our training vision focuses on practical understanding: starting
            with fundamentals, building projects, working with modern tools and
            developing confidence to solve real problems.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                icon: Target,
                title: "Structured learning paths",
                desc: "Topics organized from core concepts toward real application development.",
              },
              {
                icon: Code2,
                title: "Project-first practice",
                desc: "Exercises and practical builds that connect theory with implementation.",
              },
              {
                icon: GitBranch,
                title: "Modern developer workflow",
                desc: "Version control, collaboration concepts and deployment foundations.",
              },
            ].map((x) => (
              <div key={x.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <x.icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold">{x.title}</h3>
                  <p className="muted mt-1 text-sm">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#courses" className="btn-primary mt-9">
            Explore Training Paths <ArrowRight size={18} />
          </a>
        </motion.div>
        <motion.div {...fade} className="card p-6 md:p-9">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="eyebrow">Learning roadmap</p>
              <h3 className="mt-2 text-2xl font-extrabold">
                From curiosity to capability
              </h3>
            </div>
            <BookOpen className="text-cyan-300" size={32} />
          </div>
          <div className="space-y-4">
            {[
              {
                n: "01",
                t: "Build your foundation",
                d: "Programming logic, HTML/CSS and essential tools.",
              },
              {
                n: "02",
                t: "Learn the technology",
                d: "Frameworks, databases, APIs and application structure.",
              },
              {
                n: "03",
                t: "Practice with projects",
                d: "Apply concepts through real development patterns.",
              },
              {
                n: "04",
                t: "Prepare to grow",
                d: "Improve your portfolio, workflow and problem-solving skills.",
              },
            ].map((s, i) => (
              <div
                key={s.n}
                className="relative flex gap-4 rounded-xl border border-white/10 bg-white/[.035] p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 font-black text-cyan-200">
                  {s.n}
                </span>
                <div>
                  <h4 className="font-bold">{s.t}</h4>
                  <p className="muted mt-1 text-xs">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Program schedules and enrollment availability are confirmed upon
            inquiry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
function Courses() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? courses : courses.slice(0, 3);
  return (
    <section id="courses" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Explore our programs"
            title={
              <>
                Build skills that{" "}
                <span className="gradient-text">move you forward.</span>
              </>
            }
            desc="Explore proposed training tracks covering modern frontend, backend, databases and full-stack development. Ask us about current availability."
          />
          <a
            href={inquiry("CodeAgiles — Training Programs Inquiry")}
            className="btn-outline mb-12"
          >
            Ask About Enrollment <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <article key={c.number} className="card flex flex-col p-7">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                  <c.icon size={27} />
                </div>
                <span className="font-mono text-sm font-bold text-slate-500">
                  {c.number}
                </span>
              </div>
              <span className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-300">
                {c.level}
              </span>
              <h3 className="text-2xl font-extrabold">{c.name}</h3>
              <p className="muted mt-4 flex-1 text-sm">{c.desc}</p>
              <div className="my-6 flex flex-wrap gap-2">
                {c.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={inquiry(`CodeAgiles — ${c.name} Course Inquiry`)}
                className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-cyan-200"
              >
                Request course details <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => setShowAll(!showAll)} className="btn-outline">
            {showAll ? "Show Fewer Programs" : "View All Training Programs"}{" "}
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="section-pad bg-[#0a1021]">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142c43] to-[#17132c] p-10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-[70px]" />
          <div className="relative flex min-h-[360px] flex-col justify-between">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
              <Code2 size={42} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[3px] text-cyan-200">
                Our philosophy
              </p>
              <h3 className="mt-4 text-4xl font-black leading-tight">
                Build with purpose.
                <br />
                <span className="gradient-text">Learn without limits.</span>
              </h3>
              <p className="muted mt-5">
                Practical engineering, thoughtful design and continuous
                learning.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div {...fade}>
          <div className="eyebrow mb-4">About CodeAgiles</div>
          <h2 className="section-title">
            A passion for engineering.{" "}
            <span className="gradient-text">A commitment to learning.</span>
          </h2>
          <p className="muted mt-6">
            CodeAgiles brings together two areas that naturally strengthen each
            other: delivering digital products and sharing the skills behind
            them. We believe strong technology should be understandable, useful
            and built to evolve.
          </p>
          <p className="muted mt-4">
            The initiative is led by a full-stack developer with 5+ years of
            professional web development experience across PHP, Laravel, Vue.js,
            React, Next.js and backend systems. That experience informs our
            approach to both software delivery and technical education.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-5">
              <ShieldCheck className="mb-3 text-cyan-300" />
              <h3 className="font-bold">Quality-minded engineering</h3>
              <p className="muted mt-2 text-sm">
                Maintainable code and user-centered thinking.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5">
              <Lightbulb className="mb-3 text-violet-300" />
              <h3 className="font-bold">Practical knowledge sharing</h3>
              <p className="muted mt-2 text-sm">
                Skills rooted in modern development workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad">
      <div className="container-wide grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <SectionHead
            eyebrow="Frequently asked questions"
            title={
              <>
                Questions?{" "}
                <span className="gradient-text">We have answers.</span>
              </>
            }
            desc="A few things you might want to know before starting a project or exploring a training path."
          />
          <a href="#contact" className="btn-outline">
            Still have a question? <ArrowRight size={17} />
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[.035]"
            >
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-bold"
              >
                <span>{f.q}</span>
                <span className="shrink-0 text-cyan-300">
                  {active === i ? <X size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {active === i && <p className="muted px-6 pb-6 text-sm">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#0a1021]">
      <div className="container-wide">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-[#142c43] via-[#141d3c] to-[#23153f] px-7 py-14 md:px-14 md:py-20"
        >
          <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-cyan-300/10 blur-[65px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <span className="eyebrow">Let's create something meaningful</span>
              <h2 className="mt-5 text-[clamp(35px,4.6vw,62px)] font-black leading-tight tracking-tight">
                Have an idea?{" "}
                <span className="gradient-text">Let's make it happen.</span>
              </h2>
              <p className="muted mt-5 max-w-xl">
                Whether you need a digital product or want to explore a training
                path, tell us what you're looking for. We'd love to hear from
                you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={inquiry("CodeAgiles — New Software Project")}
                  className="btn-primary"
                >
                  Start a Project <ArrowUpRight size={18} />
                </a>
                <a
                  href={inquiry("CodeAgiles — Training Inquiry")}
                  className="btn-outline"
                >
                  Ask About Training <GraduationCap size={18} />
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-[#071121]/60 p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-extrabold">Get in touch</h3>
              <p className="muted mt-3 text-sm">
                Send a short description of your project or the course you're
                interested in, and we'll take it from there.
              </p>
              <a
                className="mt-6 block break-all text-base font-bold text-cyan-200 hover:underline"
                href="mailto:iqrariqqi741@gmail.com"
              >
                iqrariqqi741@gmail.com
              </a>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs text-slate-400">
                Email inquiry is available now. A dedicated contact form can be
                connected when the backend is ready.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050814] pt-16">
      <div className="container-wide grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="muted mt-6 max-w-xs text-sm">
            Modern software engineering and practical IT education, brought
            together under one vision.
          </p>
          <a
            href="mailto:iqrariqqi741@gmail.com"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200"
          >
            <Mail size={16} /> Email CodeAgiles
          </a>
        </div>
        <div>
          <h3 className="mb-6 font-bold">Software House</h3>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            {[
              "Web Development",
              "eCommerce Solutions",
              "Custom Software",
              "Backend APIs",
              "UI/UX Engineering",
              "Deployment",
            ].map((t) => (
              <a href="#services" key={t} className="hover:text-cyan-200">
                {t}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-bold">IT Academy</h3>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            {[
              "Frontend Development",
              "PHP & Laravel",
              "Node.js Backend",
              "Full Stack",
              "Python Programming",
              "Databases & Tools",
            ].map((t) => (
              <a href="#courses" key={t} className="hover:text-cyan-200">
                {t}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-bold">Explore</h3>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            {links
              .filter(([n]) =>
                ["Home", "Portfolio", "About", "Contact"].includes(n),
              )
              .map(([n, h]) => (
                <a key={h} href={h} className="hover:text-cyan-200">
                  {n}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-slate-500">
          <span>© 2026 CodeAgiles. All rights reserved.</span>
          <span>Software Engineering ✦ IT Training ✦ Innovation</span>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-cyan-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TwoPillars />
        <Services />
        <Process />
        <Stack />
        <Portfolio />
        <Academy />
        <Courses />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
