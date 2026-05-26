import React, { useState } from "react";
import { Terminal, Shield, Sparkles, Coins, Gamepad2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EcosystemShowcaseProps {
  lang: "en" | "id";
}

export default function EcosystemShowcase({ lang }: EcosystemShowcaseProps) {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = lang === "id" ? [
    {
      id: "agents",
      title: "Agen Otonom Berdaulat",
      icon: <Sparkles className="w-5 h-5 text-emerald-deep" />,
      tagline: "AGEN BERMUTASI NYATA PADA RITUAL",
      description: "Berbeda dengan bot tradisional yang dipandu API terpusat, agen otonom di BuildonRitual dijalankan langsung pada node independen yang aman. Agen dapat mengambil keputusan investasi DeFi secara independen berdasarkan parameter onchain dan memberikan bukti pengerjaan matematis yang valid kembali ke smart contract.",
      architecture: [
        "Inisiasi tugas otonom dipicu oleh smart contract trigger.",
        "Node runner memproses bobot ML dalam sandboxed Secure Enclave.",
        "Output kognitif dikirim kembali ke chain dengan zk-proof of inference."
      ],
      diagram: "Solidity Trigger ──> Infernet Enclave ──> Cryptographic Proof ──> Onchain Execution"
    },
    {
      id: "gaming",
      title: "Game AI-Native Terdesentralisasi",
      icon: <Gamepad2 className="w-5 h-5 text-emerald-deep" />,
      tagline: "LOGIKA NPC PERMANEN",
      description: "Menghadirkan Non-Playable Characters (NPC) dan sistem generasi dunia game yang murni dijalankan oleh representasi AI. Tidak ada risiko bagi admin game untuk melakukan kecurangan pada parameter AI, karena setiap respons karakter dihitung secara kredibel di luar rantai dan diverifikasi di dalam rantai.",
      architecture: [
        "Skenario pergerakan pemain diinput sebagai input parameter smart contract.",
        "Model Llama-3 menghasilkan jalur logis NPC secara offchain di Ritual node.",
        "Bukti Inferensi menjamin representasi visual dan status game tidak dimanipulasi."
      ],
      diagram: "Player Action ──> EVM Precompile ──> Offchain Model Weights ──> Game State Verification"
    },
    {
      id: "defi",
      title: "DeFi Bertenaga Machine Learning",
      icon: <Coins className="w-5 h-5 text-emerald-deep" />,
      tagline: "MANAJEMEN RISIKO LEVEL RUNTIME",
      description: "Memungkinkan pembentukan kolam likuiditas cerdas yang secara dinamis mengatur strategi yield dan kalkulasi premi asuransi otomatis menggunakan inferensi ML canggih. Data market offchain dievaluasi secara trustless untuk mengeksekusi rebalancing aset bebas manipulasi.",
      architecture: [
        "Protokol DeFi memicu cron kalkulator premi asuransi.",
        "Algoritma penilaian risiko diproses di cluster node Ritual yang terdistribusi.",
        "Solidity precompile mengesahkan keputusan alokasi aset setelah verifikasi proof sukses."
      ],
      diagram: "Liquidity State ──> Node Clustering ──> Verifiable Risk Computation ──> Automated Yield Rebalance"
    }
  ] : [
    {
      id: "agents",
      title: "Verifiable Autonomous Agents",
      icon: <Sparkles className="w-5 h-5 text-emerald-deep" />,
      tagline: "SOVEREIGN AGENT PROTOCOLS",
      description: "Unlike traditional API-dependent bots, sovereign agents built on BuildonRitual execute completely on independent distributed nodes. They make complex financial and structural decisions based on transparent onchain events, returning mathematically signed proofs of computation straight to your smart contracts.",
      architecture: [
        "Sovereign tasks triggered direct from smart contract state triggers.",
        "Decentralized node runners process ML model weights inside secure enclaves.",
        "Cognitive outputs and signed zk-proofs return to the client ledger securely."
      ],
      diagram: "Solidity Trigger ──> Infernet Enclave ──> Cryptographic Proof ──> Onchain Execution"
    },
    {
      id: "gaming",
      title: "AI-Native Web3 Gaming",
      icon: <Gamepad2 className="w-5 h-5 text-emerald-deep" />,
      tagline: "PERMANENT NPC LOGIC ENGINES",
      description: "Integrate complex offchain neural network logic directly into state-driven blockchain games. NPCs can generate dynamic quests, make strategic military formations, or negotiate assets with players, backed by open mathematical signatures proving no server-side tampering occurred.",
      architecture: [
        "Player quest choices are submitted through contract call parameters.",
        "Offchain model weights resolve dialogue and logic routes on independent nodes.",
        "Proof of Inference is submitted onchain to register verified state alterations."
      ],
      diagram: "Player Action ──> EVM Precompile ──> Offchain Model Weights ──> Game State Verification"
    },
    {
      id: "defi",
      title: "Machine Learning-Driven DeFi",
      icon: <Coins className="w-5 h-5 text-emerald-deep" />,
      tagline: "RUNTIME RISK ANALYSIS",
      description: "Enable intelligent smart pools to dynamically optimize yield strategy, balance collateral thresholds, and settle insurance premiums using advanced machine learning models. External market volatility metrics are computed and integrated trustlessly, excluding any potential for validator-side fraud.",
      architecture: [
        "DeFi pools issue automated requests to calculate risk indicators.",
        "Specialized Ritual nodes compute offchain risk profiles on live datasets.",
        "Solidity precompiled calls automatically execute rebalancing protocols upon verification of zk-outputs."
      ],
      diagram: "Liquidity State ──> Node Clustering ──> Verifiable Risk Computation ──> Automated Yield Rebalance"
    }
  ];

  return (
    <section id="ecosystem-showcase" className="py-24 bg-white/40 border-b luxury-border relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1f5f4a_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.25em] text-emerald-deep font-semibold uppercase block mb-3">
            {lang === "id" ? "STUDI KASUS EKOSISTEM" : "RITUAL ECOSYSTEM APPLICATIONS"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-charcoal tracking-tight mb-4">
            {lang === "id" ? "Aplikasi Kripto AI-Native Berdaulat" : "AI-Native Crypto Applications"}
          </h2>
          <p className="font-serif italic text-lg text-charcoal/70 max-w-2xl mx-auto">
            {lang === "id"
              ? "Bagaimana para perintis memanfaatkan infrastruktur desentralisasi BuildonRitual untuk mendobrak batasan web3 tradisional."
              : "Explore the precise architecture behind next-generation sovereign web3 protocols built on Ritual."
            }
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(idx)}
              className={`p-6 text-left border transition-all cursor-pointer flex flex-col justify-between relative rounded-none hover:border-emerald-deep/40 ${
                selectedCase === idx 
                  ? "bg-charcoal text-ivory border-charcoal" 
                  : "bg-white/60 text-charcoal border-charcoal/10"
              }`}
            >
              <div className="flex justify-between items-center w-full mb-4">
                <div className={`p-2.5 ${selectedCase === idx ? "bg-white/10" : "bg-emerald-deep/5"} rounded-none`}>
                  {c.icon}
                </div>
                <span className={`text-[9px] font-mono tracking-wider font-semibold uppercase ${selectedCase === idx ? "text-muted-gold" : "text-emerald-deep"}`}>
                  {c.tagline}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-display font-bold tracking-wider mb-1 uppercase">
                  {c.title}
                </h3>
                <p className={`text-[11px] font-mono ${selectedCase === idx ? "text-white/55" : "text-charcoal/50"}`}>
                  {lang === "id" ? "LIHAT DETAIL TEKNIS" : "VIEW TECHNICAL SCHEMATICS"}
                </p>
              </div>

              {selectedCase === idx && (
                <div className="absolute right-0 bottom-0 top-0 w-1 bg-emerald-deep h-full" />
              )}
            </button>
          ))}
        </div>

        {/* Technical Detail Card */}
        <div className="bg-white/80 border border-charcoal/10 p-6 md:p-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Descriptions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-emerald-deep font-semibold tracking-wider uppercase block mb-1">
                    {lang === "id" ? "URAIAN FUNGSIONAL" : "FUNCTIONAL SPECIFICATIONS"}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-charcoal tracking-tight mb-3">
                    {cases[selectedCase].title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                    {cases[selectedCase].description}
                  </p>
                </div>

                {/* Architecture Checklist */}
                <div>
                  <span className="text-[10px] font-mono text-charcoal/40 font-semibold tracking-wider uppercase block mb-3">
                    {lang === "id" ? "Langkah Aliran Komputasi" : "Computation Flow Sequence"}
                  </span>
                  <ul className="space-y-3">
                    {cases[selectedCase].architecture.map((step, sIdx) => (
                      <li key={sIdx} className="flex gap-2 text-xs text-charcoal/80 font-sans">
                        <span className="text-emerald-deep font-bold font-mono shrink-0 select-none">[{sIdx + 1}]</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Visual Flow Diagram in Code Window */}
              <div className="lg:col-span-5 bg-charcoal text-white/90 p-5 md:p-6 border border-charcoal relative">
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-light" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                      inference-flow.p2p
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-1 bg-emerald-deep" />
                    <span className="w-2.5 h-1 bg-muted-gold" />
                  </div>
                </div>

                {/* Schematic visualizer */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-white/30 block uppercase tracking-wider mb-2">
                      {lang === "id" ? "DIAGRAM ALIRAN DATA:" : "DATA SCHEMATIC INTERNET ROUTEING:"}
                    </span>
                    <div className="bg-[#111] p-4 text-[9.5px] font-mono text-emerald-light/90 border border-white/[0.03] break-words whitespace-pre-wrap leading-relaxed">
                      {cases[selectedCase].diagram}
                    </div>
                  </div>

                  <div className="bg-white/[0.02] p-4 border border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-light" />
                      <span className="text-[10px] font-mono text-muted-gold tracking-wider font-semibold uppercase">
                        {lang === "id" ? "Verifikasi Keadilan" : "TAMPER-PROOF GUARANTEE"}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-white/50 font-sans leading-relaxed">
                      {lang === "id"
                        ? "Seluruh data diverifikasi kriptografis di tingkat rantai dasar Ritual sebelum mengeksekusi parameter game atau pool keuangan."
                        : "All operations are cryptographically checked at baseline Ritual chain speed before any game or financial mutations occur onchain."
                      }
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
