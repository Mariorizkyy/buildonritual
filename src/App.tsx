import React, { useState } from "react";
import { 
  Compass, Globe, Layers, ArrowUpRight, HelpCircle, Activity, ShieldCheck, 
  ChevronDown, MessageSquare, BookOpen, Coins, ChevronRight, CheckCircle2, UserCheck, 
  Menu, X, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import custom sub-components
import BeginnerGuide from "./components/BeginnerGuide";
import EcosystemShowcase from "./components/EcosystemShowcase";
import DeveloperSkills from "./components/DeveloperSkills";
import OracleSection from "./components/OracleSection";
import NetworkStats from "./components/NetworkStats";

export default function App() {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // FAQ contents - cleansed of any Roman Emperor analogies, strictly source-grounded
  const faqData = lang === "id" ? [
    {
      q: "Kenapa proyek ini dinamakan 'BuildonRitual'?",
      a: "Nama 'Ritual' merujuk pada protokol eksekusi komputasi yang teratur, terstruktur, dan terekam secara permanen di blockchain. Dengan BuildonRitual, smart contract melakukan pemanggilan standar (ritual) ke kluster node AI terdesentralisasi offchain lalu menerima kembali jawaban matematis murni yang keabsahannya terjamin secara onchain."
    },
    {
      q: "Apakah saya harus menjalankan server khusus untuk menggunakannya?",
      a: "Sama sekali tidak. BuildonRitual dibangun sebagai middleware transparan yang tidak memberatkan dApp Anda. Pengembang dapat memicu model AI directly melalui EVM precompiles atau SDK terpadu di jaringan Ethereum, Arbitrum, maupun L2 lainnya."
    },
    {
      q: "Bagaimana cara kerja 'Proof of Inference'?",
      a: "Proof of Inference (Bukti Inferensi) adalah tanda tangan kriptografis unik yang dikeluarkan oleh node pemroses. Bukti ini memverifikasi secara matematis bahwa model AI tertentu dijalankan dengan parameter input yang tepat tanpa ada kecurangan atau manipulasi validator di balik layar."
    },
    {
      q: "Apa guna Faucet dan Explorer dalam menu parameter?",
      a: "Kami menyediakan Faucet bagi para developer untuk mengklaim test token RITUAL gratis guna mencoba pemicu onchain AI secara live, serta Explorer transparan sebagai buku kas publik untuk melacak riwayat bukti verifikasi dan konsumsi gas jaringan."
    }
  ] : [
    {
      q: "Why is this protocol named 'BuildonRitual'?",
      a: "The name 'Ritual' refers to structured, immutable execution sequences written directly on the blockchain ledger. BuildonRitual enables intelligent smart contracts to consistently invoke decentralized machine learning models offchain and receive verified, tamper-proof outputs backed by cryptographical validity."
    },
    {
      q: "Do I need to host complex personal server setups?",
      a: "Not at all. BuildonRitual is developed as an invisible, highly efficient layer-3 coprocessor middleware. Node operators host heavy neural networks globally, allowing web3 developers to summon AI using single-line smart-contract precompiles."
    },
    {
      q: "How does the 'Proof of Inference' protect my application?",
      a: "Proof of Inference functions as an unforgeable digital certificate. When a node delivers a model output, it generates a cryptographic receipt proving the specified model weights were calculated exactly as requested, blocking any possibility of validator fraud."
    },
    {
      q: "Who is the BuildonRitual suite built for?",
      a: "It is built for developers launching sovereign AI agent protocols onchain, trustless yield aggregators, dynamic gaming models with interactive non-playable characters, or any creator looking to remove centralized AI API gatekeepers from their tech stack."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-ivory text-charcoal flex flex-col relative overflow-x-hidden selection:bg-emerald-deep selection:text-ivory">
      
      {/* Decorative Top Accent Glow Ribbon */}
      <div className="h-[3px] bg-gradient-to-r from-emerald-deep via-muted-gold to-emerald-light w-full" />

      {/* Floating Language Ribbon Control */}
      <div className="bg-charcoal/5 border-b luxury-border px-6 py-2 flex justify-between items-center text-[11px] font-mono tracking-wider w-full z-30">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep animate-ping" />
          <span className="text-charcoal/60 uppercase">ACTIVE TESTNET INFRASTRUCTURE</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-charcoal/40 mr-1">LANGUAGE:</span>
          <button 
            onClick={() => setLang("en")} 
            className={`px-2 py-0.5 transition-all text-xs cursor-pointer ${lang === "en" ? "bg-emerald-deep text-ivory font-bold" : "text-charcoal/50 hover:text-charcoal"}`}
          >
            EN 🇬🇧
          </button>
          <button 
            onClick={() => setLang("id")} 
            className={`px-2 py-0.5 transition-all text-xs cursor-pointer ${lang === "id" ? "bg-emerald-deep text-ivory font-bold" : "text-charcoal/50 hover:text-charcoal"}`}
          >
            ID 🇮🇩
          </button>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 bg-ivory/80 backdrop-blur-md z-40 border-b luxury-border transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Brand Title with Custom Spacing */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="logo"
              className="w-8 h-8 rounded-full object-block"
            />
            <div className="flex flex-col">
             e <span className="font-display font-bold tracking-[0.1em] text-charcoal text-sm leading-none">BUILDONRITUAL</span>
              <span className="text-[8px] font-mono tracking-widest text-[#d4af37] uppercase leading-relaxed font-semibold">SOVEREIGN AI REVOLUTION</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs text-charcoal/80">
            <a href="#what-is-ritual" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "KONSEP RITUAL" : "CONCEPT"}
            </a>
            <a href="#ecosystem-showcase" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "EKOSISTEM" : "ECOSYSTEM"}
            </a>
            <a href="#developer-skills" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "KEMAMPUAN AGEN" : "DAPP SKILLS"}
            </a>
            <a href="#oracle-sandbox" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "DEMO INTERAKTIF" : "LIVE PLAYGROUND"}
            </a>
            <a href="#network-stats" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "PARAMETER JARINGAN" : "NETWORK PARAMS"}
            </a>
            <a href="#faq" className="hover:text-emerald-deep transition-colors tracking-widest">
              {lang === "id" ? "PERTANYAAN" : "FAQ"}
            </a>
          </nav>

          {/* Core Action Call */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://docs.ritualfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-ivory hover:bg-emerald-deep px-5 py-2.5 text-[10px] uppercase font-display tracking-widest transition-all cursor-pointer flex items-center gap-1.5 border border-charcoal hover:border-emerald-deep justify-center"
            >
              <span>{lang === "id" ? "MULAI MEMBANGUN" : "START BUILDING"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-gold" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-emerald-deep p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Menu Expanded Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t luxury-border bg-ivory font-mono text-xs px-6 py-6 space-y-4"
            >
              <a 
                href="#what-is-ritual" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● KONSEP RITUAL" : "● CORE CONCEPT"}
              </a>
              <a 
                href="#ecosystem-showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● SHOWCASE EKOSISTEM" : "● ECOSYSTEM SHOWCASE"}
              </a>
              <a 
                href="#developer-skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● KEMAMPUAN PRECOMPILE" : "● PRECOMPILE SKILLS"}
              </a>
              <a 
                href="#oracle-sandbox" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● DEMO INTERAKTIF" : "● LIVE PLAYGROUND"}
              </a>
              <a 
                href="#network-stats" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● PARAMETER JARINGAN" : "● NETWORK PARAMS"}
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal hover:text-emerald-deep"
              >
                {lang === "id" ? "● PERTANYAAN" : "● FAQ ACADEMY"}
              </a>
              <hr className="border-charcoal/10" />
              <a 
                href="https://docs.ritualfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-emerald-deep text-ivory py-3 text-[10px] tracking-widest uppercase font-display"
              >
                {lang === "id" ? "MULAI MEMBANGUN DI RITUAL" : "START BUILDING ON RITUAL"}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Container */}
        <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden border-b luxury-border">
          
          {/* Subtle Grid behind text */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f5f4a_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            
            {/* Visual Header Flag */}
            <div className="flex justify-center mb-8">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border border-emerald-deep/20 bg-emerald-deep/[0.03] px-4 py-1.5 rounded-full flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-muted-gold" />
                <span className="text-[10px] md:text-xs font-mono text-emerald-deep font-semibold tracking-wider uppercase">
                  {lang === "id" ? "KOMPUTASI AI BERDAULAT DI ATAS BLOCKCHAIN" : "SOVEREIGN AI DIRECTLY ONCHAIN"}
                </span>
              </motion.div>
            </div>

            {/* Giant Title Typography */}
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-bold text-4xl md:text-7xl tracking-normal text-charcoal sm:leading-none leading-tight mb-8"
              >
                {lang === "id" ? (
                  <>
                    Jalankan Model <span className="text-emerald-deep font-medium italic relative">AI</span> Secara <br />
                    Mandiri dan Bebas Manipulasi.
                  </>
                ) : (
                  <>
                    Autonomous <span className="text-emerald-deep font-medium italic relative">AI</span> Coprocessing <br />
                    for the Sovereign Internet.
                  </>
                )}
              </motion.h1>

              {/* Factual, source-grounded copywriting */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif italic text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed mb-10"
              >
                {lang === "id" ? (
                  "Hubungkan smart contract langsung ke model AI yang aman, permanen, dan tervalidasi kriptografis melalui Infernet SDK. Bebas intervensi gerbang sentral."
                ) : (
                  "Permanent AI enclaves directly routed to onchain contracts. Trigger secure offchain inference and assert mathematical proofs through simple precompiled Solidity lines."
                )}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
              >
                <a 
                  href="#oracle-sandbox"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-emerald-deep text-ivory hover:bg-emerald-deep/95 font-display text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 border border-emerald-deep shadow-md"
                >
                  <Compass className="w-3.5 h-3.5 text-muted-gold" />
                  <span>{lang === "id" ? "COBA KONSOL LIVE" : "TRY LIVE SIMULATOR"}</span>
                </a>
                <a 
                  href="#what-is-ritual"
                  className="w-full sm:w-auto text-center px-8 py-4 border border-charcoal/10 hover:border-emerald-deep text-charcoal hover:text-emerald-deep hover:bg-emerald-deep/[0.01] transition-all font-display text-xs tracking-widest uppercase"
                >
                  <span>{lang === "id" ? "STRUKTUR ARSITEKTUR" : "LEARN TECHNICAL DETAILS"}</span>
                </a>
              </motion.div>
            </div>

            {/* Cinematic abstract centerpiece: Beautiful geometric model representing nodes and onchain portal */}
            <div className="mt-20 relative flex justify-center items-center">
              
              {/* Emerald Backlight Halo */}
              <div className="absolute w-72 h-72 bg-emerald-deep/15 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute w-44 h-44 bg-muted-gold/10 rounded-full blur-[90px] pointer-events-none" />

              {/* Geometric Node & Decentrailized Cryptography Overlay */}
              <motion.div 
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full max-w-lg aspect-video flex justify-center items-center"
              >
                <svg viewBox="0 0 400 220" className="w-full max-w-sm drop-shadow-2xl">
                  {/* Outer framework connection lines */}
                  <polygon points="200,20 80,60 320,60" fill="none" stroke="#1f5f4a" strokeWidth="2" strokeDasharray="3,3" />
                  <line x1="90" y1="60" x2="310" y2="60" stroke="#1f5f4a" strokeWidth="3" />
                  
                  {/* Left node stream column */}
                  <rect x="120" y="60" width="16" height="100" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                  <line x1="128" y1="60" x2="128" y2="160" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="2,2" />
                  
                  {/* Right node stream column */}
                  <rect x="264" y="60" width="16" height="100" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                  <line x1="272" y1="60" x2="272" y2="160" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="2,2" />

                  {/* Central glowing AI Enclave Orb representing secure execution */}
                  <circle cx="200" cy="110" r="32" fill="#f5f1e8" stroke="#1f5f4a" strokeWidth="2.5" />
                  <circle cx="200" cy="110" r="24" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="4,4" />
                  
                  {/* Ring orbit */}
                  <ellipse cx="200" cy="110" rx="60" ry="15" fill="none" stroke="#1f5f4a" strokeWidth="1.2" opacity="0.45" />

                  {/* Network peer connections */}
                  <circle cx="140" cy="110" r="4.5" fill="#1f5f4a" />
                  <circle cx="260" cy="110" r="4.5" fill="#1f5f4a" />
                  
                  <path d="M140,110 L168,110 M232,110 L260,110" stroke="#1f5f4a" strokeWidth="1.5" strokeDasharray="2,2" />
                  
                  {/* Base substrate */}
                  <rect x="70" y="160" width="260" height="12" fill="none" stroke="#111" strokeWidth="2" />
                  <rect x="60" y="172" width="280" height="8" fill="#1f5f4a" />

                  {/* Code indicators */}
                  <text x="200" y="196" fill="#111" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="3" opacity="0.6">
                    INFERNET PROOF ACTIVE
                  </text>
                </svg>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Section 2: Beginner Guide */}
        <BeginnerGuide lang={lang} />

        {/* Section 2.5: Ecosystem Applications Showcase */}
        <EcosystemShowcase lang={lang} />

        {/* Section 2.8: Ritual Enshirned Developer Skills & Precompiles Map */}
        <DeveloperSkills lang={lang} />

        {/* Section 3: Interactive Sandbox Oracle Chatbot */}
        <OracleSection lang={lang} />

        {/* Section 4: Network stats */}
        <NetworkStats lang={lang} />

        {/* Section 5: Dynamic FAQ Academy */}
        <section id="faq" className="py-24 bg-white/20">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-xs font-display tracking-[0.2em] text-emerald-deep font-semibold uppercase block mb-3">
                {lang === "id" ? "AKADEMI PENGETAHUAN" : "FAQ INTEGRITY LIBRARY"}
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-medium text-charcoal tracking-tight mb-4">
                {lang === "id" ? "Pertanyaan Lazim Pengikut Baru" : "Core Queries Resolved"}
              </h2>
              <p className="font-serif italic text-sm text-charcoal/70">
                {lang === "id" ? "Informasi akurat ditarik langsung dari spesifikasi teknis platform." : "Demystifying modular layers with verified, reliable facts."}
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/50 border border-charcoal/5 rounded-none overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer hover:bg-emerald-deep/[0.015]"
                  >
                    <span className="font-display text-sm md:text-base font-semibold text-charcoal pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-deep transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-charcoal/70 font-sans leading-relaxed border-t border-charcoal/[0.04] bg-white/[0.15]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: CTA Section */}
        <section className="py-24 text-center border-t border-b luxury-border bg-emerald-deep text-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-[#164435] [background-image:radial-gradient(#1f5f4a_1.2px,transparent_1.2px)] opacity-[0.3] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
            <span className="text-xs font-display tracking-[0.25em] text-muted-gold font-semibold uppercase block">
              {lang === "id" ? "SERUAN BAGI CREATOR" : "FINAL WORKFLOW"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight max-w-xl mx-auto">
              {lang === "id" ? "Bangun Aplikasi AI Berdaulat Anda Sekarang." : "Build Permanently Sovereign Onchain AI."}
            </h2>
            <p className="font-serif italic text-lg text-[#b8dfd1] max-w-xl mx-auto">
              {lang === "id" 
                ? "Buka masa depan AI pintar di atas smart contract Anda hari ini. Bersama BuildonRitual." 
                : "Initiate smart computations on an uncollapsible node landscape. Become a builder today."
              }
            </p>

            <div className="pt-6">
              <a 
                href="https://docs.ritualfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-muted-gold text-charcoal hover:bg-white font-display text-xs tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span>{lang === "id" ? "AKSES DEVELOPE RITUAL" : "ACCESS CORE DOCUMENTS"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Elegant Footer */}
      <footer className="bg-[#111] text-white/50 py-16 border-t-2 border-muted-gold/20 font-sans">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/[0.05] pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-deep flex items-center justify-center font-bold text-xs border border-muted-gold/30">B</div>
              <span className="font-display tracking-[0.1em] font-semibold text-white/90">BUILDONRITUAL</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed font-sans">
              {lang === "id" 
                ? "Portal bimbingan interaktif pengenalan jaringan Ritual AI Coprocessor."
                : "A developer-oriented platform and sandbox for the Ritual decentralized AI execution stack."
              }
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 font-mono text-[10px] tracking-widest uppercase">
            <h4 className="text-xs font-display text-white/80 tracking-widest uppercase">{lang === "id" ? "NAVIGASI" : "INDEX"}</h4>
            <a href="#what-is-ritual" className="block text-white/40 hover:text-emerald-light transition-colors">CORE CONCEPT</a>
            <a href="#ecosystem-showcase" className="block text-white/40 hover:text-emerald-light transition-colors">ECOSYSTEM APPS</a>
            <a href="#developer-skills" className="block text-white/40 hover:text-emerald-light transition-colors">PRECOMPILE SKILLS</a>
            <a href="#oracle-sandbox" className="block text-white/40 hover:text-emerald-light transition-colors">LIVE SANDBOX</a>
            <a href="#network-stats" className="block text-white/40 hover:text-emerald-light transition-colors">CHAIN INFRASTRUCTURE</a>
            <a href="#faq" className="block text-white/40 hover:text-emerald-light transition-colors">ACADEMY & FAQ</a>
          </div>

          {/* Official URLs */}
          <div className="space-y-3 font-mono text-[10px] uppercase tracking-widest">
            <h4 className="text-xs font-display text-white/80 tracking-widest uppercase">{lang === "id" ? "TAUTAN UTAMA" : "CORE LINKS"}</h4>
            <a href="https://docs.ritualfoundation.org" target="_blank" rel="noopener" className="block text-white/40 hover:text-emerald-light transition-colors">DOCS GATEWAY</a>
            <a href="https://faucet.ritualfoundation.org" target="_blank" rel="noopener" className="block text-white/40 hover:text-emerald-light transition-colors">FAUCET CRADLE</a>
            <a href="https://explorer.ritualfoundation.org" target="_blank" rel="noopener" className="block text-white/40 hover:text-emerald-light transition-colors">BLOCK EXPLORER</a>
            <a href="https://rpc.ritualfoundation.org" target="_blank" rel="noopener" className="block text-white/40 hover:text-emerald-light transition-colors">JSON-RPC ENDPOINT</a>
          </div>

          {/* Network disclaimer */}
          <div className="space-y-3 text-xs leading-relaxed text-white/30">
            <h4 className="font-display text-xs text-white/80 tracking-widest uppercase">{lang === "id" ? "ID JARINGAN" : "CHAIN IDENTIFIERS"}</h4>
            <div>
              <span className="block font-semibold">Chain ID: 1979</span>
              <span className="block">Symbol: RITUAL</span>
              <span className="block text-[10px] italic mt-1 text-emerald-light/60 font-mono">Consensus Verified 100%</span>
            </div>
          </div>

        </div>

        {/* Legal copyright bar representation */}
        <div className="max-w-6xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/20 font-mono uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} BUILDONRITUAL PORTAL. ALL RIGHTS RESERVED.</span>
          <span className="mt-2 sm:mt-0 flex items-center gap-1">
            <span>INSPIRED BY RITUAL.NET</span>
            <span className="text-muted-gold">●</span>
            <span>DEVELOPER SANDBOX STUDY</span>
          </span>
        </div>

      </footer>

    </div>
  );
}
