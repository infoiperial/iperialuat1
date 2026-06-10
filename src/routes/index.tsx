import { createFileRoute } from "@tanstack/react-router";
import {
  Server,
  Cloud,
  Headphones,
  Shield,
  Wifi,
  Network,
  Laptop,
  Mail,
  Users,
  Wrench,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Search,
  Palette,
  Share2,
} from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import cloudImg from "@/assets/cloud.jpg";
import supportImg from "@/assets/support.jpg";
import marketingImg from "@/assets/digital-marketing.jpg";
import logoAsset from "@/assets/iperial-logo.png.asset.json";
const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  component: HomePage,
});

const infrastructureServices = [
  { icon: Server, title: "Server Management & Support", desc: "Full lifecycle support for on-premise or hosted servers, including deployment, maintenance and troubleshooting." },
  { icon: Network, title: "Structured Cabling & Network Hardware", desc: "Installation and design of structured cabling systems to support networking and telecom infrastructure." },
  { icon: Shield, title: "Firewall Deployment & Management", desc: "Provision and configuration of firewall appliances to bolster network defences." },
  { icon: Wifi, title: "Wi-Fi & Wireless Infrastructure", desc: "Installation, configuration and optimisation of enterprise-grade Wi-Fi systems." },
  { icon: Network, title: "Network Management", desc: "Routers, switches, monitoring systems and ongoing network performance upkeep." },
  { icon: Laptop, title: "Device Procurement & Support", desc: "Sourcing business-grade laptops and desktops, with multi-platform support across PC, Mac and mobile." },
];

const cloudServices = [
  { icon: Cloud, title: "Cloud Migration & Deployment", desc: "Seamless transition of data, applications and services to cloud platforms with minimal disruption." },
  { icon: Network, title: "Multi-Cloud & Hybrid Management", desc: "Configuration, integration and ongoing support for multi-cloud and hybrid environments." },
  { icon: Mail, title: "Microsoft 365 & Google Workspace", desc: "Setup, licensing, user management and optimisation of the leading productivity platforms." },
];

const supportServices = [
  { icon: Headphones, title: "Remote Support", desc: "Rapid-response assistance for technical issues via phone, email or remote access." },
  { icon: Wrench, title: "On-Site Support", desc: "In-person troubleshooting and maintenance for hardware, software and network issues." },
  { icon: Users, title: "User Account & Access Management", desc: "Creation, modification and secure management of user accounts and permissions." },
  { icon: Laptop, title: "Hardware & Software Troubleshooting", desc: "Diagnosis and repair of desktops, laptops, servers, printers and applications." },
  { icon: Mail, title: "Email & Comms Support", desc: "Email setup, migration and unified communications assistance." },
];

const digitalMarketingServices = [
  { icon: Search, title: "Site SEO", desc: "On-page and technical SEO audits, keyword strategy and optimisation to improve search visibility and drive organic traffic." },
  { icon: Palette, title: "Graphics & Video", desc: "Professional brand assets, marketing graphics and promotional video production for digital campaigns." },
  { icon: Share2, title: "Socials", desc: "Social media management, content scheduling and audience engagement across all major platforms." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[oklch(0.13_0.03_255/0.7)] backdrop-blur-xl">
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex h-full items-center">
            <img
              src={logoImg}
              alt="Iperial logo"
              className="h-[72px] w-auto max-h-full object-contain"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#mission" className="transition hover:text-white">Mission</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="mailto:info@iperial.com"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[oklch(0.15_0.05_255)] shadow-lg transition hover:scale-105 md:inline-flex"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Fiber optic data streams"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.04_255/0.95)] via-[oklch(0.13_0.05_252/0.85)] to-[oklch(0.13_0.05_252/0.5)]" />
        </div>

        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.16_220)] shadow-[0_0_12px_oklch(0.78_0.16_220)]" />
              Technology Solutions
            </div>
            <h1 className="font-[Space_Grotesk] text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              Dependable IT,<br />
              <span className="bg-gradient-to-r from-white via-[oklch(0.85_0.12_220)] to-[oklch(0.7_0.2_240)] bg-clip-text text-transparent">
                built around you.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              Helping small businesses and individuals with their technological requirements — infrastructure, cloud and support, delivered by a team that picks up the phone.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.55_0.2_245)] to-[oklch(0.7_0.16_220)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
              >
                Explore our services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@iperial.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Talk to an engineer
              </a>
            </div>

            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[
                { k: "10+", v: "Years of experience" },
                { k: "24/7", v: "Remote response" },
                { k: "UK", v: "Nationwide coverage" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-[Space_Grotesk] text-3xl font-bold text-white md:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-sm text-white/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="border-y border-border bg-background py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.46_0.18_248)]">Our mission</p>
            <h2 className="mt-3 font-[Space_Grotesk] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              A dependable partner for today and tomorrow.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our mission is to provide reliable, customer-focused IT solutions that help businesses and individuals succeed in the digital world. With over a decade of experience, we combine deep expertise with personalised service to deliver tailored, cost-effective support.
            </p>
            <p>
              Built on trust, transparency and quality — we aim to be your dependable technology partner for today's needs and tomorrow's challenges.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {["Free initial consultation", "Transparent pricing", "Vendor-neutral advice", "Master-level expertise"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[oklch(0.46_0.18_248)]" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[oklch(0.98_0.005_250)] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.46_0.18_248)]">What we do</p>
            <h2 className="mt-3 font-[Space_Grotesk] text-4xl font-bold tracking-tight md:text-5xl">Our services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              End-to-end technology and marketing services across infrastructure, cloud, support and digital growth — delivered with care.
            </p>
          </div>

          {/* Infrastructure */}
          <ServiceBlock
            number="01"
            tag="Infrastructure & Hardware"
            title="The backbone of your business."
            image={infraImg}
            imageAlt="Modern data center server racks"
            items={infrastructureServices}
          />

          {/* Cloud */}
          <ServiceBlock
            number="02"
            tag="Cloud Systems Management"
            title="Modern cloud, sensibly delivered."
            image={cloudImg}
            imageAlt="Cloud computing network visualisation"
            items={cloudServices}
            reverse
          />

          {/* Support */}
          <ServiceBlock
            number="03"
            tag="IT Support"
            title="Help when it matters most."
            image={supportImg}
            imageAlt="IT support engineer at workstation"
            items={supportServices}
          />

          {/* Digital Marketing */}
          <ServiceBlock
            number="04"
            tag="Digital Marketing"
            title="Grow your presence online."
            image={marketingImg}
            imageAlt="Digital marketing analytics and creative tools"
            items={digitalMarketingServices}
            reverse
          />
        </div>
      </section>

      {/* About / Coverage */}
      <section id="about" className="bg-[oklch(0.13_0.03_255)] py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.16_220)]">Coverage</p>
            <h2 className="mt-3 font-[Space_Grotesk] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Nationwide remote support. On-site across the South East.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              Iperial Technology Solutions offers nationwide remote IT support, with on-site assistance primarily delivered across the South East of England. Based in Surrey.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[oklch(0.78_0.16_220)]" /> Surrey, United Kingdom</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-[oklch(0.78_0.16_220)]" /> info@iperial.com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Surrey", v: "HQ" },
              { k: "London", v: "On-site" },
              { k: "Kent", v: "On-site" },
              { k: "Sussex", v: "On-site" },
              { k: "Hampshire", v: "On-site" },
              { k: "UK-wide", v: "Remote" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-[oklch(0.78_0.16_220/0.5)] hover:bg-white/[0.06]">
                <div className="font-[Space_Grotesk] text-2xl font-bold">{c.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative isolate overflow-hidden bg-background py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.2_0.07_252)] via-[oklch(0.3_0.12_245)] to-[oklch(0.55_0.18_230)] p-12 text-white shadow-[var(--shadow-elegant)] md:p-16">
            <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[oklch(0.78_0.16_220/0.35)] blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[oklch(0.55_0.2_245/0.4)] blur-3xl" />
            <div className="relative">
              <h2 className="font-[Space_Grotesk] text-4xl font-bold tracking-tight md:text-5xl">
                Let's talk about your technology.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                Free, no-obligation consultation. Tell us what's working — and what isn't — and we'll suggest the right next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@iperial.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[oklch(0.15_0.05_255)] shadow-lg transition hover:scale-[1.02]"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@iperial.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> Book a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[oklch(0.13_0.03_255)] py-12 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Iperial logo"
              className="h-[72px] w-auto object-contain"
            />
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Iperial Technology Solutions. All rights reserved.</p>
          <a href="mailto:info@iperial.com" className="text-sm transition hover:text-white">info@iperial.com</a>
        </div>
      </footer>
    </div>
  );
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

function ServiceBlock({
  number,
  tag,
  title,
  image,
  imageAlt,
  items,
  reverse,
}: {
  number: string;
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  items: ServiceItem[];
  reverse?: boolean;
}) {
  return (
    <div className="mt-24 grid items-start gap-12 lg:grid-cols-[5fr_7fr]">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="sticky top-24">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.03_255/0.6)] to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-[Space_Grotesk] text-6xl font-bold text-white/90">{number}</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.46_0.18_248)]">{tag}</p>
            <h3 className="mt-2 font-[Space_Grotesk] text-3xl font-bold tracking-tight md:text-4xl">{title}</h3>
          </div>
        </div>
      </div>

      <div className={`grid gap-4 sm:grid-cols-2 ${reverse ? "lg:order-1" : ""}`}>
        {items.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[oklch(0.46_0.18_248/0.4)] hover:shadow-[var(--shadow-card)]"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.55_0.2_245)] to-[oklch(0.78_0.16_220)] text-white shadow-md">
              <Icon className="h-5 w-5" />
            </div>
            <h4 className="font-[Space_Grotesk] text-base font-semibold leading-snug">{title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
