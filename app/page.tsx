
'use client';

import { motion } from 'framer-motion';
import { LineChart, Cpu, CalendarCheck, PhoneCall, Settings, Sparkles, ShieldCheck, ArrowRight, Bot, Building2, Hotel, Building, Clock, Zap, BadgeDollarSign, Users } from 'lucide-react';
import { useState } from 'react';
import { Button, Input, Textarea } from '@/components/ui';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  const [form, setForm] = useState({ name: '', email: '', company: '', industry: '', brief: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'sent'|'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', industry: '', brief: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Elevate <span className="text-indigo-400">AI</span> Advisory</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="hover:text-indigo-300">Services</a>
            <a href="#industries" className="hover:text-indigo-300">Industries</a>
            <a href="#process" className="hover:text-indigo-300">Process</a>
            <a href="#results" className="hover:text-indigo-300">Results</a>
            <a href="#faq" className="hover:text-indigo-300">FAQ</a>
          </nav>
          <a href="#contact" className="inline-flex"><Button>Book a Free Consultation</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl bg-indigo-600/30"/>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              AI that <span className="text-indigo-400">increases profit</span> & streamlines operations.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              We integrate practical automation—like AI receptionists tied to your scheduling software—to reduce costs, lift revenue, and create unforgettable customer experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex"><Button>Get a Proposal <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
              <a href="#services" className="inline-flex"><Button className="bg-white/10 hover:bg-white/20 text-slate-100">Explore Services</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400"/> Secure & compliant</span>
              <span className="inline-flex items-center gap-2"><BadgeDollarSign className="h-4 w-4 text-emerald-400"/> ROI-first approach</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-emerald-400"/> Weeks, not months</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl p-6">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-4"><Bot className="h-5 w-5"/> AI Receptionist Demo (Concept)</div>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 mt-0.5"/>
                  <p><span className="text-slate-100">Customer:</span> “Do you have availability this Friday at 3pm?”</p>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarCheck className="h-5 w-5 mt-0.5"/>
                  <p><span className="text-slate-100">AI Receptionist:</span> “Yes — the 3pm slot is open. Should I book under Sarah Lee? I’ll send a confirmation & reminder.”</p>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 mt-0.5"/>
                  <p>Integrates with Calendly, Acuity, Square, Google Calendar, and custom schedulers via API.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Bar */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: LineChart, title: "+15–40%", text: "Average increase in booked appointments" },
            { icon: Clock, title: "-30–60%", text: "Reduction in response time & no‑shows" },
            { icon: Users, title: "+25%", text: "Customer satisfaction lift with 24/7 replies" },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-4">
              <stat.icon className="h-6 w-6"/>
              <div>
                <div className="text-xl font-semibold">{stat.title}</div>
                <div className="text-slate-300 text-sm">{stat.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">Services designed for measurable ROI</motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">We focus on pragmatic automations that shorten wait times, capture more demand, and reduce staffing costs — with clear metrics from day one.</p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold"><PhoneCall className="h-5 w-5"/> AI Receptionists</div>
            <p className="mt-3 text-slate-300 text-sm">24/7 voice, SMS, and chat receptionists that integrate with your scheduling platform to answer questions, qualify leads, and book appointments.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {[
                "Calendar integrations (Calendly, Acuity, Square, custom)",
                "Lead capture & CRM updates",
                "Reminders, rescheduling, and follow‑ups",
                "Bilingual options",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold"><CalendarCheck className="h-5 w-5"/> Smart Scheduling Platforms</div>
            <p className="mt-3 text-slate-300 text-sm">End‑to‑end appointment workflows: inbound requests, availability, confirmations, payment links, and post‑visit follow‑ups — all automated.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {[
                "No‑show reduction via adaptive reminders",
                "Multi‑location & timezone support",
                "Sync with Google/Outlook/Apple Calendar",
                "Analytics on conversion & utilization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold"><Cpu className="h-5 w-5"/> Custom AI Implementations</div>
            <p className="mt-3 text-slate-300 text-sm">We tailor AI to your workflows: knowledge assistants, operations copilots, document automation, analytics, and more.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {[
                "CRM & POS integrations",
                "Internal knowledgebots & SOP copilots",
                "Data extraction & reporting",
                "Human‑in‑the‑loop controls",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">Built for your industry</motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">We specialize in appointment‑driven businesses where rapid response and smooth scheduling have outsized impact on revenue.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Hotel, title: "Hospitality", text: "Concierge chat, reservation handling, waitlist automation, upsell prompts, and feedback capture for hotels, restaurants, and venues." },
            { icon: Building2, title: "Service‑Based Real Estate", text: "Lead qualification, tour scheduling, screening, and follow‑ups for property management, leasing offices, and real‑estate services." },
            { icon: Building, title: "Appointment‑Based Businesses", text: "Clinics, spas, salons, dental, legal, home services: AI reception + scheduling to reduce no‑shows and keep calendars full." },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 font-semibold"><item.icon className="h-5 w-5"/> {item.title}</div>
              <p className="mt-3 text-slate-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">Our implementation process</motion.h2>
        <div className="mt-10 grid lg:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Discovery", text: "30–45 min consult to map goals, systems, and KPIs." },
            { step: "2", title: "Design", text: "Solution blueprint, data & integration plan, success metrics." },
            { step: "3", title: "Deploy", text: "Build, connect, and pilot with guardrails + human handoff." },
            { step: "4", title: "Optimize", text: "Monitor analytics, A/B prompts, and expand use‑cases." },
          ].map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-indigo-300">Step {s.step}</div>
              <div className="text-lg font-semibold mt-1">{s.title}</div>
              <p className="text-slate-300 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">Recent wins</motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">A snapshot of outcomes from AI receptionist and scheduling rollouts. Your mileage will vary; we instrument every deployment for measurable impact.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: "Boutique Hotel — Front‑Desk Automation", metric: "+28% bookings", bullets: ["Instant replies for reservation inquiries", "Upsell prompts increased room upgrades", "OTA and direct booking sync"] },
            { title: "Leasing Office — Lead Capture", metric: "-42% response time", bullets: ["AI qualifies leads 24/7", "Tours scheduled automatically", "CRM entries with notes"] },
            { title: "Dental Clinic — No‑Show Reduction", metric: "-35% no‑shows", bullets: ["Adaptive reminders via SMS", "Easy rescheduling", "Insurance & forms pre‑visit"] },
          ].map((cs, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{cs.title}</div>
              <div className="inline-flex items-center gap-2 text-emerald-300 font-semibold mt-2"><LineChart className="h-4 w-4"/>{cs.metric}</div>
              <ul className="space-y-2 text-sm text-slate-300 mt-3">
                {cs.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">FAQ</motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            { q: "How fast can we go live?", a: "Most pilots launch in 2–4 weeks depending on integrations and data readiness." },
            { q: "Which schedulers do you support?", a: "Popular tools like Calendly, Acuity, Square, Google Calendar, Outlook, and most custom systems via API or Zapier/Make." },
            { q: "Is the AI secure?", a: "We follow least‑privilege access, encryption in transit, and configurable data retention. Optional on‑prem or VPC hosting." },
            { q: "Do you replace staff?", a: "We augment teams by handling repetitive tasks, freeing humans for high‑value interactions, and ensuring clean handoffs." },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{item.q}</div>
              <p className="text-slate-300 text-sm mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight">Book a free AI consultation</motion.h2>
            <p className="mt-3 text-slate-300 max-w-xl">Tell us about your business, goals, and existing tools. We’ll return a concise proposal with scope, integrations, and a timeline.</p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              {["Clear, fixed‑scope pilot","Integration plan & KPIs","Security & compliance outline"].map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </div>
          <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <Input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <Input required type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <Input placeholder="Company name" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
            </div>
            <div>
              <label className="text-sm text-slate-300">Industry</label>
              <Input placeholder="Hospitality, real estate, clinic, etc." value={form.industry} onChange={e=>setForm({...form, industry:e.target.value})} />
            </div>
            <div>
              <label className="text-sm text-slate-300">What would you like to build?</label>
              <Textarea rows={5} placeholder="AI receptionist integrated with Square + Google Calendar; reduce no‑shows; capture after‑hours leads…" value={form.brief} onChange={e=>setForm({...form, brief:e.target.value})} />
            </div>
            <Button disabled={status==='loading'}>{status==='loading' ? 'Sending…' : 'Request Proposal'}</Button>
            {status==='sent' && <p className="text-emerald-300 text-sm">Thanks! We received your request.</p>}
            {status==='error' && <p className="text-rose-300 text-sm">Something went wrong. Please try again.</p>}
            <p className="text-xs text-slate-400">By submitting, you agree to be contacted about your request. We respect your privacy.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">Elevate <span className="text-indigo-400">AI</span> Advisory</div>
            <p className="mt-2 text-slate-300">Practical AI implementations that raise your bottom line.</p>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>AI Receptionists</li>
              <li>Smart Scheduling Platforms</li>
              <li>Custom AI Implementations</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Industries</div>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>Hospitality</li>
              <li>Service‑Based Real Estate</li>
              <li>Appointment‑Based Businesses</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} Elevate AI Advisory. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-indigo-300">Privacy</a>
            <a href="#" className="hover:text-indigo-300">Terms</a>
            <a href="#contact" className="hover:text-indigo-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
