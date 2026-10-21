"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
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
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const services = [
  {
    name: "PHP & Laravel Development",
    desc: "Custom Laravel applications, MVC architecture, Eloquent ORM, authentication and business workflows.",
    icon: Code2,
    color: "#ff7188",
    tech: ["PHP", "Laravel", "Sanctum"],
  },
  {
    name: "React, Next.js & Vue.js",
    desc: "Modern frontend applications, interactive dashboards, responsive interfaces and API integrations.",
    icon: Monitor,
    color: "#49d9ff",
    tech: ["React", "Next.js", "Vue.js"],
  },
  {
    name: "Node.js & Python Backend",
    desc: "Backend development, secure REST APIs, authentication and third-party service integrations.",
    icon: Server,
    color: "#a28cff",
    tech: ["Node.js", "Express", "Python"],
  },
  {
    name: "Ecommerce Development",
    desc: "Product catalogs, shopping carts, checkout flows, payments, inventory and order management.",
    icon: ShoppingCart,
    color: "#f6b65d",
    tech: ["Ecommerce", "Payments", "APIs"],
  },
  {
    name: "LMS & Education Platforms",
    desc: "Student enrollment, course registration, learning workflows and educational administration systems.",
    icon: GraduationCap,
    color: "#6ee7b7",
    tech: ["EdTech", "Laravel", "Vue.js"],
  },
  {
    name: "Database & API Solutions",
    desc: "MySQL and MongoDB development, REST, GraphQL, OAuth, webhooks and database optimization.",
    icon: Database,
    color: "#b88cff",
    tech: ["MySQL", "MongoDB", "GraphQL"],
  },
  {
    name: "Admin & Business Systems",
    desc: "Custom dashboards, CRUD applications, reporting interfaces and operational software.",
    icon: BriefcaseBusiness,
    color: "#54c9ff",
    tech: ["Dashboards", "RBAC", "CRUD"],
  },
  {
    name: "Cloud & Deployment",
    desc: "Application deployment, Docker, AWS, GitHub Actions, CI/CD and ongoing maintenance.",
    icon: Rocket,
    color: "#f58ad7",
    tech: ["AWS", "Docker", "CI/CD"],
  },
];

const courses = [
  {
    name: "HTML5, CSS3 & Responsive Design",
    category: "Frontend",
    level: "Beginner",
    topics: "HTML, CSS, Bootstrap, Tailwind CSS, responsive layouts",
    icon: Globe2,
  },
  {
    name: "JavaScript Programming",
    category: "Programming",
    level: "Beginner to Advanced",
    topics: "ES6+, DOM, events, AJAX, fetch, async/await",
    icon: Code2,
  },
  {
    name: "Core PHP Development",
    category: "Backend",
    level: "Beginner",
    topics: "PHP syntax, forms, sessions, authentication, CRUD",
    icon: Terminal,
  },
  {
    name: "OOP PHP",
    category: "Backend",
    level: "Intermediate",
    topics: "Classes, objects, inheritance, interfaces, traits, SOLID",
    icon: Layers3,
  },
  {
    name: "Laravel Framework",
    category: "Backend",
    level: "Intermediate",
    topics: "MVC, Eloquent, migrations, validation, APIs, Sanctum",
    icon: Code2,
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Intermediate",
    topics: "JSX, components, hooks, state, routing, API calls",
    icon: Monitor,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Intermediate",
    topics: "App Router, layouts, SSR, data fetching, deployment",
    icon: Globe2,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: "Intermediate",
    topics: "Components, Vue Router, Vuex, API integration",
    icon: Layers3,
  },
  {
    name: "Node.js & Express.js",
    category: "Backend",
    level: "Intermediate",
    topics: "Express, middleware, REST APIs, JWT, authentication",
    icon: Server,
  },
  {
    name: "SQL & MySQL",
    category: "Database",
    level: "Beginner to Advanced",
    topics: "SQL queries, joins, relationships, indexing, optimization",
    icon: Database,
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    topics: "Collections, documents, Mongoose, queries, aggregation",
    icon: Database,
  },
  {
    name: "Python Programming",
    category: "Programming",
    level: "Beginner",
    topics: "Syntax, conditions, loops, functions, OOP fundamentals",
    icon: Terminal,
  },
  {
    name: "Full Stack Web Development",
    category: "Full Stack",
    level: "Advanced",
    topics: "Frontend, backend, databases, APIs, authentication",
    icon: Workflow,
  },
  {
    name: "Git, GitHub & DevOps",
    category: "DevOps",
    level: "Intermediate",
    topics: "Git, GitHub Actions, Docker, CI/CD, AWS basics",
    icon: Rocket,
  },
];

const stack = [
  "PHP",
  "Laravel",
  "JavaScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Python",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "GraphQL",
  "Docker",
  "AWS",
];

const navLinks = [
  ["Home", "#home"],
  ["Software House", "#software"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["IT Training", "#academy"],
  ["Courses", "#courses"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const reveal = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
};

function Heading({ label, children, desc }) {
  return (
    <motion.div {...reveal} className="mb-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
        <Sparkles size={14} />
        {label}
      </span>
      <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
        {children}
      </h2>
      {desc && (
        <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
          {desc}
        </p>
      )}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 110;
      let current = "#home";

      for (const [, href] of navLinks) {
        const section = document.getElementById(href.slice(1));

        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;

          if (top <= scrollPosition) {
            current = href;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = "#contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-4">
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3"
        >
          <div className="gradient-btn flex h-11 w-11 items-center justify-center rounded-xl">
            <Code2 size={25} />
          </div>

          <div>
            <div className="text-xl font-black">
              Code<span className="gradient-text">Agiles</span>
            </div>

            <div className="text-[9px] font-semibold tracking-wider text-slate-400">
              SOFTWARE HOUSE • IT TRAINING
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map(([name, href]) => {
            const isActive = activeSection === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-cyan-400 transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className="gradient-btn hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-bold md:flex"
        >
          Get in Touch <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 p-2 xl:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0b1430] px-6 py-4 xl:hidden">
          {navLinks.map(([name, href]) => {
            const isActive = activeSection === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
                aria-current={isActive ? "location" : undefined}
                className={`block border-b border-white/5 px-3 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-l-2 border-l-cyan-400 bg-cyan-400/10 text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {name}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[590px]">
      <div className="absolute -inset-6 rounded-full bg-purple-600/25 blur-[85px]" />

      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="overflow-hidden rounded-2xl border-[5px] border-[#354875] bg-[#0a1430] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#15213e] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-3 text-[10px] text-slate-400">
              CodeAgiles / Engineering Workspace
            </span>
          </div>

          <div className="grid grid-cols-[65px_1fr] sm:grid-cols-[115px_1fr]">
            <div className="border-r border-white/10 bg-[#0b1630] p-3">
              <Code2 size={23} className="mb-8 text-cyan-400" />
              {[Monitor, Database, Server, ShieldCheck].map((Icon, i) => (
                <div
                  key={i}
                  className="mb-4 rounded-lg bg-white/5 p-3 text-slate-400"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>

            <div className="min-w-0 p-4 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                Software Engineering
              </p>
              <h3 className="mt-3 text-xl font-black sm:text-3xl">
                Build Better.
                <br />
                <span className="gradient-text">Scale Smarter.</span>
              </h3>
              <p className="mt-3 text-xs text-slate-400">
                Modern applications • Reliable APIs • Practical solutions
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  ["Frontend", "Next.js"],
                  ["Frontend", "Vue.js"],
                  ["Frontend", "React.js"],
                  ["Backend", "Laravel"],
                  ["Database", "MySQL"],
                ].map(([label, value]) => (
                  <div
                    key={`${label}-${value}`}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-[9px] text-slate-400">{label}</p>
                    <p className="mt-2 text-xs font-bold text-cyan-300">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-[#111e3d] p-4">
                <p className="mb-4 text-xs font-bold">
                  Technology Architecture
                </p>
                <div className="flex h-24 items-end gap-2">
                  {[40, 65, 52, 82, 61, 90, 74, 98, 70, 87].map((height, i) => (
                    <span
                      key={i}
                      style={{ height: `${height}%` }}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-400"
                    />
                  ))}
                </div>
                <p className="mt-3 text-[9px] text-slate-500">
                  Illustrative dashboard interface
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-3 w-[105%] -translate-x-[2.5%] rounded-b-xl bg-gradient-to-b from-slate-400 to-slate-700" />
      </motion.div>

      <div className="absolute -bottom-7 -left-2 rounded-xl border border-purple-400/40 bg-[#211647] p-4 shadow-xl sm:-left-6">
        <GraduationCap size={25} className="text-purple-300" />
        <p className="mt-2 text-xs font-bold">IT Training Center</p>
        <p className="text-[10px] text-slate-400">Learn • Build • Grow</p>
      </div>

      <div className="absolute -right-2 -top-8 rounded-xl border border-cyan-400/40 bg-[#0c2a47] p-4 shadow-xl sm:-right-5">
        <Code2 size={25} className="text-cyan-300" />
        <p className="mt-2 text-xs font-bold">Software Solutions</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-bg grid-bg scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div className="site-container grid items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-200">
            <Sparkles size={15} />
            SOFTWARE HOUSE & IT TRAINING CENTER
          </span>

          <h1 className="mt-8 text-[clamp(2.7rem,5vw,5.1rem)] font-black leading-[1.08] tracking-tight">
            Building Powerful
            <br />
            <span className="gradient-text">Digital Solutions.</span>
            <br />
            Developing
            <br />
            Future Talent.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            From Laravel-powered business applications to modern React and
            Next.js platforms, CodeAgiles combines software engineering
            expertise with practical IT education.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#software"
              className="gradient-btn inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold"
            >
              Software Services <ArrowUpRight size={18} />
            </a>

            <a
              href="#academy"
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-4 text-sm font-bold hover:bg-purple-500/10"
            >
              IT Training Center <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-400" />
              Custom Software
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-purple-400" />
              Full Stack Training
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="site-container grid gap-6 py-20 lg:grid-cols-2">
      <motion.a
        {...reveal}
        href="#services"
        className="group rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#103360] to-[#0b1631] p-8"
      >
        <Code2 size={38} className="text-cyan-300" />
        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-cyan-300">
          Department 01
        </p>
        <h2 className="mt-3 text-3xl font-black">Software House</h2>
        <p className="mt-4 leading-8 text-slate-300">
          Web applications, Laravel development, ecommerce, education platforms,
          business software, APIs and databases.
        </p>
        <span className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-300">
          Explore Services <ArrowUpRight size={18} />
        </span>
      </motion.a>

      <motion.a
        {...reveal}
        href="#courses"
        className="group rounded-3xl border border-purple-400/30 bg-gradient-to-br from-[#422063] to-[#10142f] p-8"
      >
        <GraduationCap size={38} className="text-purple-300" />
        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-purple-300">
          Department 02
        </p>
        <h2 className="mt-3 text-3xl font-black">IT Training Center</h2>
        <p className="mt-4 leading-8 text-slate-300">
          HTML, CSS, JavaScript, Core PHP, OOP, Laravel, React, Next.js,
          Node.js, SQL, MySQL and full-stack development.
        </p>
        <span className="mt-7 inline-flex items-center gap-2 font-bold text-purple-300">
          Explore Courses <ArrowUpRight size={18} />
        </span>
      </motion.a>
    </section>
  );
}

function Services() {
  return (
    <section id="software" className="scroll-mt-24 bg-[#09122a] py-24">
      <div id="services" className="site-container scroll-mt-24">
        <Heading
          label="Software House"
          desc="Our technical services are aligned with the founder's professional experience in full-stack engineering, ecommerce, EdTech and business applications."
        >
          Software Engineering
          <br />
          <span className="gradient-text">Built Around Your Business.</span>
        </Heading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.name}>
                <motion.a
                  {...reveal}
                  transition={{
                    duration: 0.45,
                    delay: (index % 4) * 0.04,
                  }}
                  href="#contact"
                  className="premium-card flex h-full flex-col rounded-2xl p-6"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{
                      color: item.color,
                      background: `${item.color}18`,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{item.name}</h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 flex items-center gap-2 text-sm font-bold text-cyan-300">
                    Discuss Project
                    <ArrowUpRight size={17} />
                  </span>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section className="border-y border-white/10 bg-[#0c1735] py-16">
      <div className="site-container text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
          Technology Stack
        </p>
        <h2 className="mt-4 text-3xl font-black">Technologies We Work With</h2>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "Technicom Enrollment Platform",
      category: "Education Technology",
      description:
        "Professional experience developing student registration, course enrollment, billing-related workflows and education management functionality.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      icon: GraduationCap,
      link: "https://aanmelden.technicom.nl/",
      gradient: "from-blue-600 to-indigo-900",
    },
    {
      id: 2,
      title: "Ecommerce Applications",
      category: "Professional Experience",
      description:
        "Experience building product catalogs, cart functionality, checkout workflows, order management and payment integrations.",
      tags: ["Laravel", "APIs", "Frontend"],
      icon: ShoppingCart,
      link: null,
      gradient: "from-rose-600 to-purple-900",
    },
    {
      id: 3,
      title: "Admin & Business Systems",
      category: "Professional Experience",
      description:
        "Experience developing CRUD applications, dashboards, role-based workflows and API-driven business interfaces.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      icon: BriefcaseBusiness,
      link: null,
      gradient: "from-cyan-600 to-blue-900",
    },
  ];

  return (
    <section id="portfolio" className="site-container scroll-mt-24 py-24 px-5">
      <Heading
        label="Selected Experience"
        desc="These examples reflect the founder's previous professional work and areas of expertise. They are not presented as CodeAgiles client contracts."
      >
        Experience That
        <br />
        <span className="gradient-text">Supports Our Vision.</span>
      </Heading>

      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.map((project) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="premium-card overflow-hidden rounded-2xl"
            >
              <div
                className={`grid-bg flex h-52 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="rounded-2xl border border-white/30 bg-white/10 p-8 backdrop-blur">
                  <Icon size={58} />
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">{project.title}</h3>

                <p className="mt-3 min-h-32 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300"
                  >
                    Visit Project
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section
      id="academy"
      className="scroll-mt-24 border-y border-white/10 bg-[#11132e] py-24"
    >
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...reveal}>
          <Heading
            label="CodeAgiles IT Training Center"
            desc="Practical, project-focused learning paths built around real software development technologies."
          >
            Learn Programming.
            <br />
            <span className="gradient-text">Build Real Skills.</span>
          </Heading>

          <div className="space-y-4">
            {[
              "Core PHP, OOP PHP and Laravel",
              "HTML, CSS, JavaScript and responsive design",
              "React.js, Next.js and Vue.js",
              "Node.js, Express and REST APIs",
              "SQL, MySQL, MongoDB and database design",
              "Git, GitHub, Docker and deployment",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-purple-300"
                />
                <p className="text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <a
            href="#courses"
            className="gradient-btn mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold"
          >
            Browse All Courses <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div
          {...reveal}
          className="rounded-3xl border border-purple-400/25 bg-gradient-to-br from-[#29174f] to-[#0c1a3b] p-7 sm:p-9"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <GraduationCap size={37} className="text-purple-300" />
            <div>
              <h3 className="text-xl font-bold">Full Stack Learning Path</h3>
              <p className="text-xs text-slate-400">
                Proposed training curriculum
              </p>
            </div>
          </div>

          {[
            ["01", "Frontend Fundamentals", "HTML, CSS, JavaScript"],
            ["02", "PHP & Object-Oriented Programming", "Core PHP, OOP, MySQL"],
            ["03", "Laravel Backend Development", "MVC, Eloquent, REST APIs"],
            ["04", "Modern JavaScript Frameworks", "React, Next.js, Vue.js"],
            ["05", "Backend & Database Integration", "Node.js, SQL, MongoDB"],
            ["06", "Practical Full Stack Project", "Build, test and deploy"],
          ].map(([num, title, detail]) => (
            <div
              key={num}
              className="mt-3 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-xs font-black text-purple-200">
                {num}
              </span>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs text-slate-400">{detail}</p>
              </div>
            </div>
          ))}

          <p className="mt-5 text-xs text-slate-400">
            Course schedules, fees and admissions will be announced separately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Courses() {
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Programming",
    "Full Stack",
    "DevOps",
  ];

  const filteredCourses = courses.filter((course) => {
    if (category === "All") {
      return true;
    }

    return course.category === category;
  });

  const visibleCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, 8);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setShowAll(false);
  };

  return (
    <section id="courses" className="site-container scroll-mt-24 py-24">
      <Heading
        label="Professional IT Courses"
        desc="Explore proposed training programs based on the technologies in our founder's professional background."
      >
        Explore Our <span className="gradient-text">Training Programs.</span>
      </Heading>

      {/* Course Categories */}
      <div className="mb-9 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handleCategoryChange(item)}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
              category === item
                ? "gradient-btn text-white"
                : "border border-white/15 bg-white/5 text-slate-300 hover:border-purple-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleCourses.map((course, index) => {
          const Icon = course.icon;

          return (
            <article
              key={`${course.name}-${index}`}
              className="premium-card flex h-full flex-col rounded-2xl p-6"
            >
              {/* Course Icon & Level */}
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl bg-purple-500/15 p-3 text-purple-300">
                  <Icon size={28} />
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-400">
                  {course.level}
                </span>
              </div>

              {/* Course Category */}
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-300">
                {course.category}
              </p>

              {/* Course Title */}
              <h3 className="mt-2 text-lg font-bold">{course.name}</h3>

              {/* Course Topics */}
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                {course.topics}
              </p>

              {/* Course Inquiry */}
              <a
                href={`mailto:iqrariqqi741@gmail.com?subject=${encodeURIComponent(
                  `CodeAgiles Training Inquiry: ${course.name}`,
                )}`}
                className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-purple-300 hover:text-white"
              >
                Course Inquiry
                <ArrowUpRight size={17} />
              </a>
            </article>
          );
        })}
      </div>

      {/* No Courses Found */}
      {filteredCourses.length === 0 && (
        <div className="py-12 text-center text-slate-400">
          No courses found in this category.
        </div>
      )}

      {/* View All / Show Less */}
      {filteredCourses.length > 8 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-8 py-3 font-bold text-purple-200 transition hover:bg-purple-500/10"
          >
            {showAll ? "Show Less" : "View All Courses"}

            <ChevronDown
              size={18}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/10 bg-[#09122a] py-24"
    >
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...reveal}>
          <Heading
            label="About CodeAgiles"
            desc="A technology brand bringing software engineering and practical IT education together."
          >
            Driven by Experience.
            <br />
            <span className="gradient-text">Focused on the Future.</span>
          </Heading>

          <p className="leading-8 text-slate-300">
            CodeAgiles is founded on a full-stack engineering background
            covering Laravel, PHP, Node.js, Python, React.js, Next.js, Vue.js,
            databases, API integrations, ecommerce and education technology.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Our goal is to build reliable digital solutions for businesses and
            create practical learning opportunities for aspiring technology
            professionals.
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#13294d] to-[#181330] p-8"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-7">
            <div className="gradient-btn flex h-16 w-16 items-center justify-center rounded-2xl">
              <Code2 size={33} />
            </div>
            <div>
              <h3 className="text-2xl font-black">Iqrar Ahmad</h3>
              <p className="mt-1 text-sm text-cyan-300">
                Founder • Full Stack Developer
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="gradient-text text-5xl font-black">7+</p>
            <p className="mt-2 text-sm text-slate-400">
              Years of professional software development experience
            </p>
          </div>

          <div className="mt-7 space-y-4">
            {[
              "Laravel, Vue.js, React.js and Next.js",
              "Ecommerce and education management systems",
              "REST APIs, GraphQL and payment integrations",
              "MySQL, MongoDB and deployment workflows",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`CodeAgiles Inquiry - ${form.type}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInquiry: ${form.type}\n\n${form.message}`,
    );

    window.location.href = `mailto:iqrariqqi741@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="site-container scroll-mt-24 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Heading
            label="Contact CodeAgiles"
            desc="Whether you need custom software or want information about our proposed IT courses, we'd love to hear from you."
          >
            Let's Build
            <br />
            <span className="gradient-text">Something Meaningful.</span>
          </Heading>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:iqrariqqi741@gmail.com?subject=Software%20Project%20Inquiry"
              className="premium-card rounded-2xl p-6"
            >
              <Code2 size={30} className="text-cyan-300" />
              <h3 className="mt-5 font-bold">Start a Project</h3>
              <p className="mt-2 text-sm text-slate-400">
                Discuss your software requirements.
              </p>
              <ArrowUpRight className="mt-5 text-cyan-300" />
            </a>

            <a
              href="mailto:iqrariqqi741@gmail.com?subject=IT%20Training%20Inquiry"
              className="premium-card rounded-2xl p-6"
            >
              <GraduationCap size={30} className="text-purple-300" />
              <h3 className="mt-5 font-bold">Training Inquiry</h3>
              <p className="mt-2 text-sm text-slate-400">
                Ask about courses and enrollment plans.
              </p>
              <ArrowUpRight className="mt-5 text-purple-300" />
            </a>
          </div>

          <a
            href="mailto:iqrariqqi741@gmail.com"
            className="mt-8 flex items-center gap-3 text-slate-300 hover:text-cyan-300"
          >
            <Mail size={21} />
            iqrariqqi741@gmail.com
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card rounded-3xl p-7 sm:p-9"
        >
          <h3 className="text-2xl font-black">Send an Inquiry</h3>

          <div className="mt-7 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Full Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email Address
              </label>
              <input
                id="email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="type" className="mb-2 block text-sm">
                Inquiry Type
              </label>
              <select
                id="type"
                required
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-[#14213e] px-5 py-4 outline-none focus:border-cyan-400"
              >
                <option value="">Select an option</option>
                <option value="Software Project">Software Project</option>
                <option value="IT Training">IT Training</option>
                <option value="Laravel Development">Laravel Development</option>
                <option value="Ecommerce Development">
                  Ecommerce Development
                </option>
                <option value="API Integration">API Integration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or training needs..."
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="gradient-btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold"
            >
              Prepare Email Inquiry <ArrowUpRight size={18} />
            </button>

            <p className="text-xs leading-6 text-slate-400">
              This opens your email application. Direct database submissions
              will be added with the Node.js backend.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030613]">
      <div className="site-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Code2 size={30} className="text-cyan-300" />
            <span className="text-2xl font-black">
              Code<span className="gradient-text">Agiles</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Software House & IT Training Center.
            <br />
            Building Digital Solutions. Developing Future Talent.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm text-slate-400 hover:text-cyan-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Our Expertise</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <p>PHP & Laravel Development</p>
            <p>React, Next.js & Node.js</p>
            <p>Ecommerce & Business Software</p>
            <p>Core PHP, OOP & Laravel Training</p>
            <p>SQL, MySQL & MongoDB</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 CodeAgiles. All rights reserved.
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
        <Departments />
        <Services />
        <Technologies />
        <Portfolio />
        <Academy />
        <Courses />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
