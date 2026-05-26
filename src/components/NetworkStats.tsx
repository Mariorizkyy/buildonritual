import React, { useState } from "react";
import { Globe, ArrowUpRight, Copy, Check, Terminal, ExternalLink, HelpCircle, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NetworkStatsProps {
  lang: "en" | "id";
}

export default function NetworkStats({ lang }: NetworkStatsProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const stats = [
    { label: lang === "id" ? "CHAIN ID RITUAL" : "RITUAL CHAIN ID", value: "1979", unit: "Legacy" },
    { label: lang === "id" ? "SIMBOL JARINGAN" : "NETWORK SYMBOL", value: "RITUAL", unit: "Coin" },
    { label: lang === "id" ? "STATUS AKTIF" : "NETWORK ENGINE STATE", value: "Sovereign", unit: "Consensus" },
    { label: lang === "id" ? "BIAYA INVERSI" : "INFERENCE ENCLAVE GAS", value: "0.01", unit: "RITUAL" }
  ];

  const links = [
    { name: lang === "id" ? "Dokumentasi Resmi" : "Developer Docs", url: "https://docs.ritualfoundation.org", desc: lang === "id" ? "Baca panduan integrasi, precompiles, dan SDK kami." : "Read the core integration guides, specs, and SDK workflows." },
    { name: lang === "id" ? "Eksplorer Jaringan" : "Chain Explorer", url: "https://explorer.ritualfoundation.org", desc: lang === "id" ? "Lacak block, transaksi, dan bukti matematis AI." : "Trace blocks, ledger gas, and verification proofs live." },
    { name: lang === "id" ? "Kran Test Token" : "Token Faucet", url: "https://faucet.ritualfoundation.org", desc: lang === "id" ? "Dapatkan saldo test RITUAL gratis untuk bereksperimen." : "Get a complementary, daily dose of test tokens to experiment." },
    { name: lang === "id" ? "Alat Penyedia (RPC)" : "Main RPC Gateway", url: "https://rpc.ritualfoundation.org", desc: lang === "id" ? "Hubungkan wallet MetaMask atau sistem Anda ke blockchain." : "Connect MetaMask, wallets, or app scripts directly onchain." },
    { name: lang === "id" ? "Skill Agen Mandiri" : "Autonomous Skills", url: "https://skills.ritualfoundation.org", desc: lang === "id" ? "Hubungkan agen cerdas Anda dengan Ritual Skills." : "Empower autonomous AI agents with specialized operational skills." }
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 1800);
  };

  return (
    <section id="network-stats" className="py-24 border-t border-b luxury-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Metrics Column (Left side) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-display tracking-[0.25em] text-emerald-deep font-semibold uppercase block mb-3">
                {lang === "id" ? "PARAMETER JARINGAN" : "ECOSYSTEM PARAMETERS"}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-charcoal tracking-tight mb-4">
                {lang === "id" ? "Sovereign AI Blockchain Node" : "Chain Parameters"}
              </h2>
              <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                {lang === "id" 
                  ? "Ritual beroperasi pada jaringan independen yang dirancang dari nol untuk menjamin kedaulatan komputasi dan verifikasi data AI tanpa bergantung pada raksasa big tech."
                  : "Ritual operates on custom high-efficiency distributed infrastructure designed purely to enforce computing sovereignty, ensuring your app can rely on AI permanently."
                }
              </p>
            </div>

            {/* Simple elegant grid of dials */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/45 border border-charcoal/5 p-5 relative group hover:border-[#1f5f4a]/30 transition-all">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-deep opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[9px] font-mono tracking-widest text-charcoal/40 block uppercase mb-1">
                    {stat.label}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-display font-semibold text-emerald-deep tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-mono text-charcoal/50">
                      {stat.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Ecosystem links (Right side) */}
          <div className="lg:col-span-7 bg-white/40 p-6 md:p-8 border border-charcoal/10 rounded-none relative">
            <div className="absolute top-4 right-4 text-emerald-deep/10">
              <Terminal className="w-16 h-16 stroke-[1]" />
            </div>
            
            <h3 className="text-sm font-display tracking-widest uppercase text-charcoal/80 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-deep rounded-full animate-pulse" />
              {lang === "id" ? "Portal Sumber Daya Utama" : "Key Gateway Resources"}
            </h3>

            <div className="space-y-4">
              {links.map((link, i) => (
                <div 
                  key={i}
                  className="p-4 bg-white/40 border border-charcoal/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-deep/20 hover:bg-white/70 transition-all group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-display font-medium text-charcoal group-hover:text-emerald-deep transition-colors">
                        {link.name}
                      </span>
                      <span className="text-[9px] font-mono bg-charcoal/5 text-charcoal/60 px-2 py-0.5 rounded-sm">
                        {link.url.replace("https://", "")}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal/60 font-sans leading-relaxed">
                      {link.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-xs">
                    <button
                      onClick={() => handleCopy(link.url, link.name)}
                      className="p-2 border border-charcoal/10 hover:border-emerald-deep text-charcoal hover:text-emerald-deep transition-colors bg-white hover:bg-emerald-deep/[0.02]"
                      title={lang === "id" ? "Salin URL" : "Copy URL"}
                    >
                      <AnimatePresence mode="wait">
                        {copiedText === link.name ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-emerald-deep text-[10px] uppercase font-bold flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </motion.span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </AnimatePresence>
                    </button>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-charcoal/10 hover:border-emerald-deep text-charcoal hover:text-emerald-deep transition-colors bg-white flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick config note for wallets */}
            <div className="mt-6 pt-5 border-t border-charcoal/[0.06] text-[11px] text-charcoal/50 leading-relaxed font-sans">
              <span className="font-semibold text-emerald-deep uppercase tracking-wider block mb-1">
                {lang === "id" ? "Bagi Pengembang (MetaMask Setup):" : "Metamask Chain Setup Reference:"}
              </span>
              RPC Node: <code className="bg-charcoal/5 text-charcoal/80 px-1 rounded">https://rpc.ritualfoundation.org/</code> | ChainID: <code className="bg-charcoal/5 text-charcoal/80 px-1 rounded">1979</code> | Symbol: <code className="bg-charcoal/5 text-charcoal/80 px-1 rounded">RITUAL</code>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
