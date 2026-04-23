/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Palette, 
  TrendingUp, 
  Factory, 
  ArrowRight, 
  ChevronRight,
  Zap
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const NewsletterHeader = () => (
  <header className="border-b border-gray-200 py-8 px-6 lg:px-20 bg-neutral-100/80 backdrop-blur-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center rounded-sm">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Monthly Edition</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-black uppercase">
          AI <span className="text-indigo-600">PULSE</span> <span className="text-gray-300">/ APR 2026</span>
        </h1>
      </div>
    </div>
  </header>
);

const SectionHeading = ({ icon: Icon, title, subtitle, colorClass = "text-black" }: { icon: any, title: string, subtitle: string, colorClass?: string }) => (
  <div className="flex flex-col mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 bg-neutral-200 rounded-lg ${colorClass.replace('text-', 'bg-').replace('600', '100')}`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <h2 className={`text-4xl font-bold tracking-tight ${colorClass}`}>{title}</h2>
    </div>
    <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">{subtitle}</p>
  </div>
);

const IndustrySection = ({ industry, image, title, company, impact, details, colorClass = "text-black" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-gray-100 last:border-0"
  >
    <div className="lg:col-span-5 space-y-6">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      </div>
      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full ${colorClass}`}>
          Featured Release
        </span>
        <span className="text-xs font-medium text-gray-400">{company}</span>
      </div>
    </div>
    
    <div className="lg:col-span-7 flex flex-col justify-center">
      <h3 className={`text-4xl font-bold mb-6 leading-tight transition-colors ${colorClass}`}>
        {title}
      </h3>
      <div className="space-y-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          {details}
        </p>
        <div className="pt-6 border-t border-neutral-200">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Impact Analysis</h4>
          <p className={`font-bold text-lg ${colorClass}`}>{impact}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Conclusion = () => (
  <footer className="py-24 px-6 lg:px-20 border-t border-neutral-200 text-center flex flex-col items-center">
    <div className="max-w-2xl">
      <div className="w-12 h-1 bg-indigo-600 mx-auto mb-12" />
      <h2 className="text-4xl font-bold mb-8 text-black tracking-tight uppercase">The New <span className="text-indigo-600">AI S-Curve</span></h2>
      <p className="text-2xl text-gray-700 leading-relaxed mb-12">
        As we close April 2026, the trend is clear: AI is no longer a standalone tool but an <span className="text-black font-bold">invisible substrate</span> of modern industry. Companies that are successfully leveraging these commercial models today aren't just saving costs—they're fundamentally redefining the limits of human-machine collaboration across every vertical, from creative direction to heavy industrial automation. The "Fast Follower" era is ending; those who integrate AI into their core logic now are setting the standard for the next decade of production.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-gray-900 selection:bg-black selection:text-white">
      <NewsletterHeader />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-1.5 bg-indigo-50 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-500 mb-6 font-mono">
            Strategic Overview // Q2 2026
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.1] max-w-5xl">
            This month, AI moved from <span className="font-extrabold text-rose-500 underline decoration-rose-200 underline-offset-8">PROMPT</span> to <span className="font-extrabold text-blue-600 italic underline decoration-blue-200 underline-offset-8">PROCESS</span>. 
          </h2>
          <p className="mt-8 text-2xl text-gray-700 max-w-4xl leading-relaxed">
            As commercial adoption hits a structural turning point, we are witnessing the transition of generative models from "creative novelties" into "operational substrates." In April 2026, the focus has shifted from what an AI can say to what an AI can <span className="text-black font-semibold">execute</span> autonomously within complex vertical workflows.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-violet-600" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-violet-600">Design</h4>
                <p className="text-sm text-gray-600">Reimagining video editing through generative fill and lighting-aware consistency.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600">Finance</h4>
                <p className="text-sm text-gray-600">Automating complex thematic portfolio construction and multi-million dollar customer query loops.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-amber-600" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-amber-600">Manufacturing</h4>
                <p className="text-sm text-gray-600">Democratizing PLC code development with natural-language industrial copilots.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <section id="design" className="py-10">
          <SectionHeading 
            icon={Palette} 
            title="Design & Creativity" 
            subtitle="The creative industry has entered the 'Hyper-Iteration' phase. AI models are now managing the grunt work of asset scaling, allowing designers to focus on high-level narrative and strategy."
            colorClass="text-violet-600"
          />
          <IndustrySection 
            industry="Design"
            image="https://i.imgur.com/Me7fAVf.png"
            title="Firefly for Video: The Ultimate Assistant"
            company="Adobe Systems"
            impact="60% time reduction in technical motion design tasks."
            details="Adobe's latest Firefly release introduces dynamic generative fill for high-resolution video, allowing editors to add or remove elements across entire sequences with lighting-aware consistency. Beyond simple editing, the new 'Generative Extend' feature allows creators to extend the duration of clips by synthesizing new frames, effectively solving the common issue of 'too-short' source material for complex transitions. This integration effectively turns standard video editing into a multi-layered scene composition workflow powered by natural language."
            colorClass="text-violet-600"
          />
        </section>

        <section id="finance" className="py-10">
          <SectionHeading 
            icon={TrendingUp} 
            title="Finance & Fintech" 
            subtitle="Efficiency is reaching logarithmic scales in retail banking and investment research as specialized financial LLMs integrate with legacy data stacks."
            colorClass="text-emerald-600"
          />
          <IndustrySection 
            industry="Finance"
            image="https://i.imgur.com/arA2c5Z.png"
            title="IndexGPT: Redefining Portfolio Magic"
            company="JP Morgan Chase"
            impact="$40M projected annual savings in customer operations."
            details="JP Morgan's IndexGPT enables institutional clients to construct hyper-specific thematic portfolios by analyzing massive datasets of market correlations that human analysts often miss. Simultaneously, the retail sector is being transformed by AI assistants like Klarna's, which now handles two-thirds of all customer service interactions. The system doesn't just answer FAQs; it manages complex refund disputes and delivery tracking, achieving a 'resolution time' that is 4x faster than human-led chat while maintaining higher customer satisfaction scores."
            colorClass="text-emerald-600"
          />
        </section>

        <section id="manufacturing" className="py-10">
          <SectionHeading 
            icon={Factory} 
            title="Smart Manufacturing" 
            subtitle="Digital twins and industrial copilots are narrowing the gap between engineer intent and factory floor execution."
            colorClass="text-amber-600"
          />
          <IndustrySection 
            industry="Manufacturing"
            image="https://i.imgur.com/IPhhbu7.png"
            title="The Industrial Copilot Expansion"
            company="Siemens & Microsoft"
            impact="15% increase in production throughput via AI-led diagnostics."
            details="Siemens has expanded its Industrial Copilot across the full TIA Portal, enabling technicians to write, debug, and optimize PLC code using natural language. This is bridging a critical skills gap, allowing factory managers to update automation logic without specialized external consultants. The copilot also provides real-time diagnostics, translating machine error codes into actionable repair steps, which significantly reduces 'Mean Time to Repair' (MTTR) and enables a more proactive maintenance culture on the assembly line."
            colorClass="text-amber-600"
          />
        </section>
      </main>

      <Conclusion />

      {/* Aesthetic Accents */}
      <div className="fixed bottom-8 left-8 hidden lg:block">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300">Newsletter Protocol ID: 004-PR-2026</span>
          <div className="w-32 h-[1px] bg-gray-100" />
        </div>
      </div>
      
      <div className="fixed top-1/2 -right-12 -translate-y-1/2 rotate-90 hidden xl:block">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-200">INTELLIGENCE REPORT // CONFIDENTIAL // APR 2026</span>
      </div>
    </div>
  );
}
