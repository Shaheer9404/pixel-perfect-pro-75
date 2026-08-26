import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactForm } from "@/components/ContactForm";
import { LogoMark, Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "devstack studios — Workflow Automation & AI Agents" },
      {
        name: "description",
        content:
          "devstack studios builds workflow automation, systems integration, and AI agents for growing businesses. Fewer manual steps, cleaner data, faster operations.",
      },
      { property: "og:title", content: "devstack studios — Workflow Automation & AI Agents" },
      {
        property: "og:description",
        content:
          "Automation, systems integration, and AI agents that remove manual work from growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Workflow Automation",
    body: "We map the manual steps your team repeats every week and replace them with reliable, monitored automations.",
    points: ["Approvals & handoffs", "Document generation", "Scheduled reporting"],
  },
  {
    title: "Systems Integration",
    body: "Your CRM, ERP, billing, and support tools kept in sync with clean data flowing in one direction.",
    points: ["API & webhook pipelines", "Data migrations", "Single source of truth"],
  },
  {
    title: "AI Agents",
    body: "Purpose-built agents that draft, classify, and triage inside your existing processes — with a human in the loop.",
    points: ["Inbox & ticket triage", "Document extraction", "Internal knowledge assistants"],
  },
  {
    title: "Internal Tools",
    body: "Lightweight dashboards and portals so operations stop living in spreadsheets and shared inboxes.",
    points: ["Ops dashboards", "Client portals", "Role-based access"],
  },
];

const process = [
  { step: "01", title: "Audit", body: "A short discovery to map processes, systems, and where the hours actually go." },
  { step: "02", title: "Blueprint", body: "A prioritised plan with scope, effort, and the expected time saved per workflow." },
  { step: "03", title: "Build", body: "Iterative delivery in two-week cycles, with working automations you can review early." },
  { step: "04", title: "Operate", body: "Monitoring, documentation, and handover — plus optional ongoing support." },
];

const stats = [
  { value: "40+", label: "Workflows shipped" },
  { value: "12k", label: "Manual hours removed" },
  { value: "2 wks", label: "Typical first release" },
  { value: "99.9%", label: "Automation uptime" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/70">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1088}
            aria-hidden="true"
            className="animate-kenburns absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
            <p className="eyebrow hero-enter">devstack studios</p>
            <h1
              className="hero-enter mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Workflow automation, systems integration, and{" "}
              <span className="text-gradient-accent">AI agents</span> for growing businesses.
            </h1>
            <p
              className="hero-enter mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              We take the repetitive work out of your operations — connecting the tools you already
              use, automating the steps in between, and putting AI to work where it genuinely pays
              off.
            </p>
            <div
              className="hero-enter mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#contact"
                className="rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book an automation audit
              </a>
              <a
                href="#services"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-mint"
              >
                Explore services
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border/70 bg-surface/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold tracking-tight text-mint">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built around how your business actually runs
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="card-surface p-7">
                <LogoMark className="mb-6" />
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 grid gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-secondary-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="scroll-mt-24 border-y border-border/70 bg-surface/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Process</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A clear path from manual to automated
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {process.map((p) => (
                <div key={p.step} className="border-t border-border pt-6">
                  <span className="text-sm font-semibold tracking-widest text-primary">
                    {p.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A small studio, senior delivery
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                devstack studios is an engineering studio focused on operations. We work directly
                with founders and ops leads — no layers, no handoffs to junior teams. Every
                engagement starts with understanding the process before writing a line of code.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We document everything we build and hand over full ownership, so your automations
                stay maintainable long after the project ends.
              </p>
            </div>
            <div className="card-surface p-8">
              <ul className="grid gap-5">
                {[
                  "Fixed-scope pilots so you can start small",
                  "Documentation and handover included by default",
                  "Monitoring and alerting on every automation",
                  "Security-conscious integrations, least-privilege access",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-secondary-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border/70 bg-surface/40 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Tell us where the manual work is
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Send a short note about your current process and we'll come back with where
                automation would pay off first.
              </p>
              <dl className="mt-8 grid gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a
                      href="mailto:hello@devstack.studio"
                      className="font-medium text-mint transition-opacity hover:opacity-80"
                    >
                      hello@devstack.studio
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="font-medium text-foreground">+92 300 0000000</dd>
                </div>
              </dl>
            </div>
            <div className="card-surface p-7 hover:translate-y-0 hover:shadow-none">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} devstack studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
