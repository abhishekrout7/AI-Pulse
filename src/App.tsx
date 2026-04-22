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
  Share2, 
  Mail, 
  ChevronRight,
  Zap,
  Globe,
  Layers,
  MessageSquare,
  ShieldCheck,
  X,
  Send,
  Loader2
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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
      <div className="flex items-center gap-4">
        <button id="share-btn" className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
        <button id="subscribe-btn" className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Subscribe
        </button>
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

const DeepDive = () => (
  <section className="bg-neutral-200/50 py-24 px-6 lg:px-20 rounded-3xl my-10 border border-neutral-200 overflow-hidden relative">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="text-black w-5 h-5" />
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Global Use Case</span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            Predictive <br /><span className="text-blue-600">Maintenance</span> <span className="text-gray-400">2.0</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The integration of <span className="text-black font-semibold">multi-modal AI</span> has transformed static sensors into proactive advisors. We're seeing a shift from <span className="text-rose-500 font-bold">"Fixing when broken"</span> to <span className="text-emerald-600 font-bold">"Optimizing before failure."</span>
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Real-time sonic anomaly detection in jet engines",
              "Visual thermal tracking for high-load power grids",
              "Automated parts ordering via supply-chain LLMs"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-900 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                {item}
              </li>
            ))}
          </ul>
          <button id="read-more" className="group flex items-center gap-2 text-black font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
            Read the full whitepaper <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
            <div className="relative border-4 border-black p-8 bg-neutral-50 h-full flex flex-col justify-between">
              <div>
                <Layers className="w-10 h-10 mb-6" />
                <span className="text-lg font-mono mb-2 block text-gray-400">SYS_V2.0_READY</span>
                <h4 className="text-2xl font-bold uppercase tracking-tight">Performance Metrics</h4>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-black transition-all duration-1000" />
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span>EFFICIENCY</span>
                  <span>+25%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} className="h-full bg-blue-600 transition-all duration-1000 delay-300" />
                </div>
                <div className="flex justify-between text-sm font-mono text-blue-600">
                  <span>DOWNTIME REDUCTION</span>
                  <span>-40%</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100 text-xs font-mono text-gray-400">
                DATA SOURCE: NVIDIA OMNIVERSE CLOUD 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

const AIChatAnalyst = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm your AI Pulse Analyst. Ask me anything about this month's AI developments in Design, Finance, or Manufacturing." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are a financial and tech analyst for the AI Pulse newsletter. 
          Context for this month (April 2026):
          1. Design: Adobe Firefly Video Generative Fill, Canva Magic Studio updates.
          2. Finance: JP Morgan IndexGPT, Klarna's AI saving $40M.
          3. Manufacturing: Siemens Industrial Copilot expansion.
          4. Case Study: Predictive Maintenance 2.0 (Sonic/Thermal tracking).
          
          User Question: ${userMsg}` }] }
        ]
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I couldn't process that. Please try again." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Please check your API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] p-4 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold uppercase tracking-widest text-xs whitespace-nowrap">
          Talk to Analyst
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-[70] flex flex-col border-l border-gray-200"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-black text-white">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-bold uppercase tracking-widest text-sm">AI Pulse Analyst</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-800 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-black text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AI trends..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-black hover:bg-gray-100 rounded-lg disabled:opacity-30"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-gray-400 text-center uppercase tracking-widest">
                Powered by Gemini 3 Flash
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-gray-900 selection:bg-black selection:text-white">
      <NewsletterHeader />
      <AIChatAnalyst />
      
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

        <DeepDive />
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
