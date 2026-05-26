import React, { useState } from "react";
import { Shield, Cpu, ArrowRight, Layers, HelpCircle, FileText, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BeginnerGuideProps {
  lang: "en" | "id";
}

export default function BeginnerGuide({ lang }: BeginnerGuideProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "pillars" | "why">("architecture");

  const content = {
    en: {
      title: "What is BuildonRitual?",
      subtitle: "The framework to connect onchain smart contracts with offchain AI models, built with sovereign integrity.",
      tabArchitecture: "Ritual Architecture",
      tabPillars: "How it Works",
      tabWhy: "Why it Matters",
      infernetTitle: "1. Infernet Framework",
      infernetDesc: "Infernet is the foundation of Ritual's technology. It allows developers to request AI model inference (like LLMs or custom image generators) directly from existing smart contracts on any EVM blockchain, without central intermediaries.",
      precompileTitle: "2. EVM Precompiles",
      precompileDesc: "Instead of writing complex custom bridges, Ritual integrates precompiled smart contract functions. This allows any onchain program to trigger an AI model with just a single simple line of Solidity code.",
      proofTitle: "3. Proof of Inference",
      proofDesc: "To ensure safety, nodes must supply a cryptographic proof alongside the AI output. These mathematical certificates guarantee that the designated AI model was executed honestly and without database tampering.",
      portalTitle: "The Portal Pipeline",
      portalDesc: "Acts as the central message-dispatching architecture. It connects layer-1 and layer-2 blockchains directly to the Ritual network, routing inputs and asynchronous requests to the underlying nodes.",
      nodesTitle: "Decentralized Enclaves",
      nodesDesc: "Rather than depending on single centralized servers, Ritual relies on a distributed collective of nodes around the globe that process machine learning workloads safely inside secure execution enclaves.",
      coProcessorTitle: "AI Coprocessing",
      coProcessorDesc: "Ritual serves as an external execution environment (a coprocessor). It receives queries from the blockchain layer, computes them offchain using targeted machine learning models, and feeds the verified outputs directly back into the blockchain state.",
      whyTraditionalTitle: "Centralized AI (Censored & Fragile)",
      whyTraditionalItem1: "Dependence on private, black-box APIs (e.g., OpenAI, AWS models) that can change or shut down.",
      whyTraditionalItem2: "Impossible to audit. You can never verify how they actually computed the AI-generated results.",
      whyTraditionalItem3: "Susceptible to single point of failure, unexpected rate limiting, and arbitrary data censorship.",
      whyRitualTitle: "Ritual System (Verifiable & Sovereign)",
      whyRitualItem1: "Completely decentralized. No single centralized corporation can alter or censor your running algorithms.",
      whyRitualItem2: "Transparent cryptographic validation proving that the AI executed exactly the correct parameters requested.",
      whyRitualItem3: "Sovereign Web3 infrastructure. Enables permanent AI assets and autonomous agents that can outlast their creators."
    },
    id: {
      title: "Apa itu BuildonRitual?",
      subtitle: "Kerangka kerja untuk menghubungkan smart contract onchain dengan model AI offchain secara mandiri dan aman.",
      tabArchitecture: "Arsitektur Ritual",
      tabPillars: "Cara Kerja",
      tabWhy: "Mengapa Penting?",
      infernetTitle: "1. Infernet Framework",
      infernetDesc: "Infernet adalah fondasi teknologi utama Ritual. Sistem ini memungkinkan developer memanggil komputasi AI (seperti analisis data, teks, atau gambar) langsung dari dalam smart contract di blockchain mana pun tanpa perantara pusat.",
      precompileTitle: "2. EVM Precompiles",
      precompileDesc: "Tanpa perlu membuat jembatan (bridge) custom yang rumit, Ritual mengintegrasikan fungsi precompiled bawaan. Program smart contract Anda dapat memanggil model AI hanya dengan satu baris kode Solidity biasa.",
      proofTitle: "3. Proof of Inference",
      proofDesc: "Untuk menjamin kejujuran, setiap node wajib menyetor bukti matematis kriptografis. Sertifikat berharga ini membuktikan bahwa model AI diproses secara jujur oleh node tanpa manipulasi data.",
      portalTitle: "Sistem Portal Jaringan",
      portalDesc: "Bertindak sebagai gerbang terpadu yang menghubungkan jaringan blockchain eksternal (L1/L2) langsung ke dalam infrastruktur Ritual untuk transmisi data cepat.",
      nodesTitle: "Enklave Node Mandiri",
      nodesDesc: "Daripada bergantung pada satu server pusat, workload AI didistribusikan ke ribuan node komputer independen di seluruh dunia yang memproses AI secara aman dalam ruang komputasi khusus.",
      coProcessorTitle: "AI Coprocessing",
      coProcessorDesc: "Ritual bertindak sebagai koproresor AI. Sistem ini bertugas mengolah kalkulasi kecerdasan buatan yang berat secara offchain, lalu mengembalikan hasilnya dengan segel verifikasi kembali ke blockchain.",
      whyTraditionalTitle: "Sistem AI Sentral (Tertutup & Rentan)",
      whyTraditionalItem1: "Sangat tergantung pada korporasi besar (seperti OpenAI, Google Cloud) yang sewaktu-waktu bisa mematikan kunci API Anda.",
      whyTraditionalItem2: "Sulit diaudit. Anda tidak pernah tahu apakah model AI tersebut dimodifikasi di balik layar atau tidak.",
      whyTraditionalItem3: "Rentan terhadap pemadaman server, kenaikan biaya sepihak, dan penyensoran data pengguna.",
      whyRitualTitle: "Sistem Terbuka Ritual (Terverifikasi & Abadi)",
      whyRitualItem1: "Terdesentralisasi secara penuh. Tidak ada satu pun perusahaan yang dapat menyensor atau mematikan dApp Anda.",
      whyRitualItem2: "Verifikasi kriptografis transparan yang menjamin bahwa AI memproses input persis sesuai instruksi aslinya.",
      whyRitualItem3: "Infrastruktur Web3 berdaulat. Memungkinkan penciptaan agen AI pintar mandiri yang abadi onblockchain."
    }
  };

  const t = lang === "id" ? content.id : content.en;

  return (
    <section id="what-is-ritual" className="py-24 border-t border-b luxury-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-sm font-display tracking-[0.25em] text-emerald-deep font-semibold block mb-3">
            {lang === "id" ? "BIMBINGAN ARSITEKTUR" : "ARCHITECTURE ACADEMY"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-charcoal tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="font-serif italic text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center border-b border-charcoal/10 max-w-xl mx-auto mb-16 p-1">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex-1 py-3 text-xs md:text-sm font-display tracking-widest uppercase transition-all duration-300 relative ${
              activeTab === "architecture" ? "text-emerald-deep font-bold" : "text-charcoal/40 hover:text-charcoal/80"
            }`}
          >
            {t.tabArchitecture}
            {activeTab === "architecture" && (
              <motion.div
                layoutId="activeGuideTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-deep"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("pillars")}
            className={`flex-1 py-3 text-xs md:text-sm font-display tracking-widest uppercase transition-all duration-300 relative ${
              activeTab === "pillars" ? "text-emerald-deep font-bold" : "text-charcoal/40 hover:text-charcoal/80"
            }`}
          >
            {t.tabPillars}
            {activeTab === "pillars" && (
              <motion.div
                layoutId="activeGuideTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-deep"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`flex-1 py-3 text-xs md:text-sm font-display tracking-widest uppercase transition-all duration-300 relative ${
              activeTab === "why" ? "text-emerald-deep font-bold" : "text-charcoal/40 hover:text-charcoal/80"
            }`}
          >
            {t.tabWhy}
            {activeTab === "why" && (
              <motion.div
                layoutId="activeGuideTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-deep"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Content Pane */}
        <div className="min-h-[460px]">
          <AnimatePresence mode="wait">
            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Step 1: Infernet Framework */}
                <div className="bg-white/45 p-8 border border-charcoal/5 rounded-none flex flex-col justify-between hover:border-emerald-deep/20 transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 bg-[#fdfaf2] border border-charcoal/10 flex items-center justify-center mb-6 group-hover:border-emerald-deep/40 transition-colors">
                      <span className="font-mono text-emerald-deep font-bold text-sm">INF</span>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3 text-charcoal">{t.infernetTitle}</h3>
                    <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                      {t.infernetDesc}
                    </p>
                  </div>
                  <div className="pt-6 font-mono text-[10px] text-emerald-deep font-semibold flex items-center gap-1.5 mt-4 border-t border-charcoal/5">
                    <span>CORE FRAMEWORK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Step 2: EVM Precompiles */}
                <div className="bg-white/45 p-8 border border-charcoal/5 rounded-none flex flex-col justify-between hover:border-emerald-deep/20 transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 bg-[#fdfaf2] border border-charcoal/10 flex items-center justify-center mb-6 group-hover:border-emerald-deep/40 transition-colors">
                      <span className="font-mono text-emerald-deep font-bold text-sm">PRE</span>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3 text-charcoal">{t.precompileTitle}</h3>
                    <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                      {t.precompileDesc}
                    </p>
                  </div>
                  <div className="pt-6 font-mono text-[10px] text-emerald-deep font-semibold flex items-center gap-1.5 mt-4 border-t border-charcoal/5">
                    <span>ONCHAIN PRECOMPILES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Step 3: Sealed Proof of Inference */}
                <div className="bg-white/45 p-8 border border-charcoal/5 rounded-none flex flex-col justify-between hover:border-emerald-deep/20 transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 bg-[#fdfaf2] border border-charcoal/10 flex items-center justify-center mb-6 group-hover:border-emerald-deep/40 transition-colors">
                      <span className="font-mono text-emerald-deep font-bold text-sm">PRF</span>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3 text-charcoal">{t.proofTitle}</h3>
                    <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                      {t.proofDesc}
                    </p>
                  </div>
                  <div className="pt-6 font-mono text-[10px] text-muted-gold font-semibold flex items-center gap-1.5 mt-4 border-t border-charcoal/5">
                    <span>TRUSTLESS VALIDITY</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-deep" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "pillars" && (
              <motion.div
                key="pillars"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Portal */}
                <div className="bg-white/35 p-8 border border-charcoal/5 rounded-none hover:border-emerald-deep/30 transition-all duration-300">
                  <div className="w-10 h-10 border border-emerald-deep/20 flex items-center justify-center mb-6 text-emerald-deep bg-emerald-deep/5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display text-charcoal mb-3">{t.portalTitle}</h3>
                  <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                    {t.portalDesc}
                  </p>
                  <div className="mt-6 p-3 bg-charcoal/[0.02] border-l border-emerald-deep text-[11px] font-mono text-emerald-deep">
                    infernet.requestSystem(modelId, inputData);
                  </div>
                </div>

                {/* Nodes */}
                <div className="bg-white/35 p-8 border border-charcoal/5 rounded-none hover:border-emerald-deep/30 transition-all duration-300">
                  <div className="w-10 h-10 border border-emerald-deep/20 flex items-center justify-center mb-6 text-emerald-deep bg-emerald-deep/5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display text-charcoal mb-3">{t.nodesTitle}</h3>
                  <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                    {t.nodesDesc}
                  </p>
                  <div className="mt-6 p-3 bg-charcoal/[0.02] border-l border-emerald-deep text-[11px] font-mono text-emerald-deep">
                    secure enclaves consensus (1979)
                  </div>
                </div>

                {/* Coprocessing */}
                <div className="bg-white/35 p-8 border border-charcoal/5 rounded-none hover:border-emerald-deep/30 transition-all duration-300">
                  <div className="w-10 h-10 border border-emerald-deep/20 flex items-center justify-center mb-6 text-emerald-deep bg-emerald-deep/5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display text-charcoal mb-3">{t.coProcessorTitle}</h3>
                  <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                    {t.coProcessorDesc}
                  </p>
                  <div className="mt-6 p-3 bg-charcoal/[0.02] border-l border-emerald-deep text-[11px] font-mono text-emerald-deep">
                    inference output =&gt; assertProof()
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "why" && (
              <motion.div
                key="why"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Traditional */}
                <div className="border border-charcoal/5 bg-charcoal/[0.02] p-8 md:p-10">
                  <h3 className="text-sm font-display uppercase tracking-widest text-charcoal/40 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {t.whyTraditionalTitle}
                  </h3>
                  <ul className="space-y-4 text-sm text-charcoal/70 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 font-mono">✕</span>
                      <span>{t.whyTraditionalItem1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 font-mono">✕</span>
                      <span>{t.whyTraditionalItem2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 font-mono">✕</span>
                      <span>{t.whyTraditionalItem3}</span>
                    </li>
                  </ul>
                </div>

                {/* Ritual Way */}
                <div className="border border-[#1f5f4a]/20 bg-emerald-deep/[0.02] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 text-emerald-deep/5 pointer-events-none tracking-tighter select-none font-display text-9xl">
                    RIT
                  </div>
                  <h3 className="text-sm font-display uppercase tracking-widest text-emerald-deep mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-deep" />
                    {t.whyRitualTitle}
                  </h3>
                  <ul className="space-y-4 text-sm text-charcoal/80 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-deep mt-1 font-mono">✓</span>
                      <span>{t.whyRitualItem1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-deep mt-1 font-mono">✓</span>
                      <span>{t.whyRitualItem2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-deep mt-1 font-mono">✓</span>
                      <span>{t.whyRitualItem3}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
