import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  List,
  X,
  CheckCircle,
  CaretDown,
} from "@phosphor-icons/react";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "../components/Reveal";
import { ContactIcon } from "../components/ContactIcons";
import {
  profile,
  about,
  stats,
  ventures,
  education,
  achievements,
  skillGroups,
  contacts,
  faqs,
} from "../data/portfolio";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Path" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Design1() {
  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    }),
    []
  );

  return (
    <div className="relative min-h-[100dvh] bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/25 selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.07),transparent_50%)]"
        aria-hidden
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Path />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-[3px] bg-zinc-100 text-[11px] font-bold tracking-tight text-zinc-950">
            {profile.monogram}
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            {profile.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-[3px] px-3 py-2 text-[13.5px] font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-[3px] bg-zinc-100 px-4 py-2.5 text-[13.5px] font-semibold text-zinc-950 transition-transform active:translate-y-[1px] md:inline-flex"
          >
            {profile.heroCta.secondary}
            <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-[3px] border border-zinc-800 text-zinc-100 transition-colors hover:bg-zinc-900 md:hidden"
          >
            {open ? (
              <X weight="bold" className="h-4 w-4" />
            ) : (
              <List weight="bold" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border-t border-zinc-800 bg-zinc-950 md:hidden"
      >
        <div className="flex flex-col p-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-[3px] px-3 py-3 text-base font-medium text-zinc-100 hover:bg-zinc-900"
            >
              {n.label}
              <ArrowUpRight className="h-4 w-4 opacity-40" />
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative mx-auto max-w-[1200px] px-5 pt-20 pb-24 sm:px-8 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-emerald-500 uppercase">
              {profile.roles.join(" / ")}
            </span>
          </Reveal>

          <motion.h1
            aria-label={profile.fullName}
            className="mt-6 font-sans text-[clamp(2.8rem,7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-zinc-100"
          >
            <Line text="Mian Muhammad" reduce={reduce} />
            <Line text="Talha Suleman" reduce={reduce} delay={0.08} className="text-emerald-500 italic leading-[1.1] pb-1" />
          </motion.h1>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.7] text-zinc-400">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[3px] bg-zinc-100 px-5 py-3.5 text-[14.5px] font-semibold text-zinc-950 transition-transform active:translate-y-[1px]"
              >
                {profile.heroCta.primary}
                <ArrowUpRight weight="bold" className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[3px] border border-zinc-700 px-5 py-3.5 text-[14.5px] font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
              >
                {profile.heroCta.secondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal x={20} delay={0.15}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-zinc-800 bg-zinc-900 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <img
                src="https://picsum.photos/seed/talha-operator-portrait/900/1125"
                alt="Portrait placeholder for Mian Muhammad Talha Suleman. TODO: replace with a real photo."
                loading="eager"
                className="h-full w-full object-cover grayscale-[15%] contrast-105"
              />
            </div>
            <div className="absolute -left-3 -bottom-3 hidden h-16 w-16 rounded-[3px] border border-emerald-500/40 bg-zinc-950 sm:block" />
            <div className="absolute -right-3 -top-3 hidden h-10 w-10 rounded-full border border-zinc-700/50 bg-zinc-950 sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Line({
  text,
  delay = 0,
  reduce,
  className = "",
}: {
  text: string;
  delay?: number;
  reduce: boolean | null;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: delay + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/* ----------------------------- ABOUT ----------------------------- */

function About() {
  return (
    <section id="about" className="border-t border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="max-w-[18ch] font-sans text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-zinc-100 sm:max-w-[24ch]">
            {about.statement}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[52ch] text-[17px] leading-[1.75] text-zinc-400">
            {about.statementFollow}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-[48ch] space-y-5 text-[15.5px] leading-[1.8] text-zinc-400">
            {about.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-zinc-800 bg-zinc-800">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-zinc-900 p-6">
                <div className="font-sans text-[2rem] font-semibold tracking-[-0.03em] text-zinc-100">
                  {s.value}
                </div>
                <div className="mt-1 text-[12.5px] font-medium text-zinc-500">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <div className="overflow-hidden rounded-[3px] border border-zinc-800">
              <img
                src="https://picsum.photos/seed/talha-operator-workspace/1100/720"
                alt="Workspace photo placeholder. TODO: replace with a real image of Mian Muhammad Talha Suleman or a workspace."
                loading="lazy"
                className="aspect-[16/10] w-full object-cover grayscale-[15%]"
              />
            </div>
            <div className="overflow-hidden rounded-[3px] border border-zinc-800">
              <img
                src="https://picsum.photos/seed/talha-operator-build/800/720"
                alt="Build photo placeholder. TODO: replace with a real image."
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover grayscale-[15%] sm:aspect-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- WORK (ventures) ----------------------------- */

function Work() {
  return (
    <section id="work" className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-sans text-[2.2rem] font-semibold tracking-[-0.03em] text-zinc-100 sm:text-[2.8rem]">
            What I'm building
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-zinc-800 border-t border-zinc-800">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.04} y={18}>
              <article className="group grid gap-2 py-7 transition-colors sm:grid-cols-[0.4fr_2fr] sm:gap-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[12px] text-zinc-500 sm:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <StatusTag status={v.status} />
                </div>
                <div>
                  <h3 className="flex items-baseline gap-2.5 text-[1.5rem] font-semibold tracking-[-0.02em] text-zinc-100">
                    <span className="hidden font-mono text-[13px] font-normal text-zinc-500 sm:inline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {v.name}
                    <ArrowUpRight
                      weight="bold"
                      className="h-5 w-5 -translate-x-1 text-emerald-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.7] text-zinc-400">
                    {v.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {v.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusTag({ status }: { status: string }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[3px] border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide uppercase ${
        live
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-zinc-700 bg-zinc-900 text-zinc-500"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-zinc-500"}`}
      />
      {status}
    </span>
  );
}

/* ----------------------------- SKILLS ----------------------------- */

function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-sans text-[2.2rem] font-semibold tracking-[-0.03em] text-zinc-100 sm:text-[2.8rem]">
            Skills and capabilities
          </h2>
          <p className="mt-5 max-w-[60ch] text-[15.5px] leading-[1.7] text-zinc-400">
            A blend of technical capability, business sense, and entrepreneurial drive.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="flex items-center gap-2 text-[12.5px] font-medium tracking-tight text-zinc-500">
                <span className="h-px w-6 bg-emerald-500/60" />
                {g.title}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-[3px] border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-[13.5px] font-medium text-zinc-100 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PATH (education + achievements) ----------------------------- */

function Path() {
  return (
    <section id="education" className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Education timeline */}
          <div>
            <Reveal>
              <h2 className="font-sans text-[2.2rem] font-semibold tracking-[-0.03em] text-zinc-100 sm:text-[2.8rem]">
                Learning by doing
              </h2>
            </Reveal>
            <div className="mt-12 relative pl-8">
              <span className="absolute left-[3px] top-1 bottom-1 w-px bg-zinc-800" aria-hidden />
              {education.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.06} y={18}>
                  <div className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[7px] top-2 h-3 w-[2px] rounded-full bg-emerald-500" />
                    <div className="font-mono text-[11.5px] font-medium tracking-[0.12em] text-emerald-500 uppercase">
                      {e.label}
                    </div>
                    <h3 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.02em] text-zinc-100">
                      {e.title}
                    </h3>
                    <p className="mt-2.5 max-w-[44ch] text-[14.5px] leading-[1.7] text-zinc-400">
                      {e.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <Reveal>
              <h2 className="font-sans text-[2.2rem] font-semibold tracking-[-0.03em] text-zinc-100 sm:text-[2.8rem]">
                What I've unlocked
              </h2>
            </Reveal>
            <StaggerGroup className="mt-12 divide-y divide-zinc-800 border-t border-zinc-800">
              {achievements.map((a) => (
                <StaggerItem key={a.title} className="flex gap-3.5 py-5">
                  <CheckCircle
                    weight="duotone"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                  />
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-tight text-zinc-100">{a.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.65] text-zinc-400">
                      {a.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */

function FAQ() {
  return (
    <section id="faq" className="border-t border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr]">
          <Reveal>
            <div>
              <h2 className="font-sans text-[2.2rem] font-semibold tracking-[-0.03em] text-zinc-100 sm:text-[2.8rem]">
                Common questions
              </h2>
              <p className="mt-4 max-w-[40ch] text-[15.5px] leading-[1.7] text-zinc-400">
                Quick answers about who I am, what I do, and how we can work together.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-zinc-800 border-t border-zinc-800">
            {faqs.map((f, i) => (
              <Reveal key={f.question} delay={i * 0.05} y={16}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 outline-none">
                    <h3 className="pr-6 text-[1.05rem] font-semibold tracking-[-0.01em] text-zinc-100">
                      {f.question}
                    </h3>
                    <CaretDown
                      weight="bold"
                      className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="pb-5 text-[15px] leading-[1.7] text-zinc-400">
                    {f.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ----------------------------- */

function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-5 py-28 sm:px-8 lg:py-36">
        <Reveal>
          <p className="font-sans text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-zinc-100">
            Let's build something
            <br />
            <span className="text-emerald-500 italic">worth building.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.7] text-zinc-400">
            Open to collaborations, university opportunities, investment conversations, and business partnerships.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c) =>
            c.href === "#" ? (
              <StaggerItem key={c.label} className="bg-zinc-900">
                <div className="flex items-center gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[3px] border border-zinc-700 bg-zinc-900 text-zinc-100">
                    <ContactIcon name={c.icon} weight="regular" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] font-medium tracking-[0.1em] text-zinc-500 uppercase">
                      {c.label}
                    </div>
                    <div className="truncate text-[15px] font-medium text-zinc-100">
                      {c.value}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ) : (
              <StaggerItem key={c.label} className="bg-zinc-900">
                <a
                  href={c.href}
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-zinc-800"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[3px] bg-emerald-500/10 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-zinc-950">
                    <ContactIcon name={c.icon} weight="bold" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] font-medium tracking-[0.1em] text-zinc-500 uppercase">
                      {c.label}
                    </div>
                    <div className="truncate text-[15px] font-medium text-zinc-100">
                      {c.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    weight="bold"
                    className="ml-auto h-4 w-4 text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-400"
                  />
                </a>
              </StaggerItem>
            )
          )}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-sans text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-none tracking-[-0.03em] text-zinc-100">
              {profile.shortName.split(" ")[0]}{" "}
              <span className="text-emerald-500">
                {profile.shortName.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <p className="mt-3 text-[14px] text-zinc-500">
              {profile.roles.join(", ")} based in {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {contacts
              .filter((c) => c.icon !== "location")
              .map((c) =>
                c.href === "#" ? null : (
                  <a
                    key={c.label}
                    href={c.href}
                    aria-label={c.label}
                    className="grid h-11 w-11 place-items-center rounded-[3px] border border-zinc-800 bg-zinc-900 text-zinc-100 transition-colors hover:bg-emerald-500 hover:text-zinc-950"
                  >
                    <ContactIcon name={c.icon} weight="regular" className="h-5 w-5" />
                  </a>
                )
              )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-[13px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-mono tracking-tight">© 2026</span>{" "}
            {profile.fullName}
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-zinc-100 underline-offset-4 hover:underline"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
