'use client';

import { motion } from 'framer-motion';
import {
  LineChart,
  Cpu,
  CalendarCheck,
  PhoneCall,
  Settings,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Bot,
  Building2,
  Hotel,
  Building,
  Clock,
  Zap,
  BadgeDollarSign,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Button, Input, Textarea } from '@/components/ui';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    brief: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
    'idle'
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', industry: '', brief: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">
              Pacific <span className="text-indigo-400">Automation</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="hover:text-indigo-300">
              Services
            </a>
            <a href="#industries" className="hover:text-indigo-300">
              Industries
            </a>
            <a href="#process" className="hover:text-indigo-300">
              Process
            </a>
            <a href="#results" className="hover:text-indigo-300">
              Results
            </a>
            <a href="#contact" className="hover:text-indigo-300">
              Contact
            </a>
          </nav>
          <a href="#contact" className="inline-flex">
            <Button>Book a Call</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl bg-indigo-600/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Automation that{' '}
              <span className="text-indigo-400">boosts profits</span> &
              simplifies business.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              Pacific Automation helps businesses implement AI-powered
              receptionists and smart scheduling systems that save time and
              increase revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex">
                <Button>Get a Proposal</Button>
              </a>
              <a href="tel:+17077758883" className="inline-flex">
                <Button className="bg-white/10 hover:bg-white/20 text-slate-100">
                  Book a Call
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Secure &
                compliant
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeDollarSign className="h-4 w-4 text-emerald-400" /> ROI
                focused
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" /> Launch in weeks
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Services
        </motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          We implement smart automation tools that streamline scheduling,
          reception, and client management.
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <PhoneCall className="h-5 w-5" /> AI Receptionists
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              24/7 automated reception that integrates with your scheduling
              platform and CRM to answer calls, messages, and book
              appointments.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <CalendarCheck className="h-5 w-5" /> Smart Scheduling
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Seamlessly manage bookings, confirmations, and reminders while
              reducing no-shows and improving customer satisfaction.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Cpu className="h-5 w-5" /> Custom AI Implementations
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Tailored AI automations to support operations, lead management,
              and communication — all aligned with your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Industries We Serve
        </motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Pacific Automation specializes in service-based and
          appointment-driven businesses.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Hotel className="h-5 w-5" /> Hospitality
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Streamline guest communication, reservations, and feedback with
              AI-driven assistance.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Building2 className="h-5 w-5" /> Real Estate & Leasing
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Automate tour scheduling, lead follow-ups, and tenant support
              workflows.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Building className="h-5 w-5" /> Appointment-Based Businesses
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              From salons to clinics — keep calendars full and clients engaged
              with personalized automation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Contact & Book a Call
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-10 items-start">
          {/* Left column */}
          <div>
            <p className="text-slate-300 max-w-xl">
              Reach out directly or use the form to schedule your free
              consultation.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-6">
              <div className="text-sm text-slate-400">Contact</div>
              <div className="mt-1 text-lg font-semibold">
                Spencer Yowell — Head of Client Services
              </div>
              <div className="mt-3 space-y-2 text-slate-300">
                <div>
                  Email:{' '}
                  <a
                    href="mailto:spenceryowell@gmail.com"
                    className="underline hover:text-indigo-300"
                  >
                    spenceryowell@gmail.com
                  </a>
                </div>
                <div>
                  Phone:{' '}
                  <a
                    href="tel:+17077758883"
                    className="underline hover:text-indigo-300"
                  >
                    +1 (707) 775-8883
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: contact form */}
          <form
            onSubmit={submit}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <Input
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Industry</label>
              <Input
                placeholder="Hospitality, real estate, clinic, etc."
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">
                What would you like to build?
              </label>
              <Textarea
                rows={5}
                placeholder="AI receptionist integrated with Square + Google Calendar..."
                value={form.brief}
                onChange={(e) => setForm({ ...form, brief: e.target.value })}
              />
            </div>
            <Button disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Submit'}
            </Button>
            {status === 'sent' && (
              <p className="text-emerald-300 text-sm">
                Thanks! Your message has been received.
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-300 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">
              Pacific <span className="text-indigo-400">Automation</span>
            </div>
            <p className="mt-2 text-slate-300">
              AI implementations that streamline operations and grow revenue.
            </p>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>AI Receptionists</li>
              <li>Smart Scheduling</li>
              <li>Custom AI Solutions</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>
                <a
                  href="mailto:spenceryowell@gmail.com"
                  className="hover:text-indigo-300 underline"
                >
                  spenceryowell@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17077758883"
                  className="hover:text-indigo-300 underline"
                >
                  +1 (707) 775-8883
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Pacific Automation. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-indigo-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
