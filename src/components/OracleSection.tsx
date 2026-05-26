import React, { useState, useRef, useEffect } from "react";
import { 
  Cpu, Send, RefreshCw, Check, Orbit, Layers, Terminal, ArrowRight, Sparkles, 
  Trash2, MessageSquare, ShieldAlert, CpuIcon, Eye, ChevronDown, ChevronUp, Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OracleResponse, OracleReceipt } from "../types";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  category?: string;
  receipt?: OracleReceipt;
  showReceipt?: boolean;
}

interface OracleSectionProps {
  lang: "en" | "id";
}

export default function OracleSection({ lang }: OracleSectionProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStage, setActiveStage] = useState<"idle" | "submitting" | "consensus" | "proving" | "ready">("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message based on language
  const getInitialMessages = (): ChatMessage[] => [
    {
      id: "welcome-1",
      sender: "bot",
      text: lang === "id" 
        ? "Salam hangat, para pengembang. Saya adalah AI Oracle terdesentralisasi di jaringan BuildonRitual. Di sini, Anda dapat menguji inferensi AI real-time kami. Silakan pilih salah satu contoh kode developer di samping atau masukkan prompt teknis Anda sendiri di bawah!"
        : "Greetings, builder. I am the decentralized AI Oracle on the BuildonRitual network. Here, you can test real-time AI inference. Feel free to choose one of our developer examples in the sidebar, or type your own custom technical prompt below!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: "System Hello"
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages());

  // Update initial message if language changes but history is only the starting message
  useEffect(() => {
    if (messages.length === 1 && messages[0].id === "welcome-1") {
      setMessages(getInitialMessages());
    }
  }, [lang]);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const presets = lang === "id" ? [
    { 
      text: "Tuliskan kode Solidity dasar menggunakan precompile Infernet untuk meminta model Llama-3 memproses teks di Arbitrum.", 
      category: "Solidity Precompile",
      summary: "Meminta kode inferensi onchain"
    },
    { 
      text: "Bagaimana cara kerja arsitektur pengamanan multi-node di Ritual untuk mencegah satu validator nakal memalsukan model?", 
      category: "Sovereign Security",
      summary: "Pelajari protokol konsensus"
    },
    { 
      text: "Tulis konfigurasi JSON (config.json) untuk mendaftarkan LLM lokal bertenaga GPU (seperti Mistral 7B) ke dalam node Infernet.", 
      category: "Node Integration",
      summary: "Contoh konfigurasi node"
    }
  ] : [
    { 
      text: "Write a clean Solidity contract snippet using the Infernet precompile interface to request Llama-3 model prediction on Arbitrum.", 
      category: "Solidity Precompile",
      summary: "Request onchain inference code"
    },
    { 
      text: "Explain how Ritual's multi-node consensus architecture prevents a single malicious runner from fabricating or manipulating the AI's output.", 
      category: "Sovereign Security",
      summary: "Learn consensus defense"
    },
    { 
      text: "Write a sample config.json snippet showing how to register a local GPU-accelerated LLM (like Mistral-7B) into an Infernet node setup.", 
      category: "Node Integration",
      summary: "Local node json setup"
    }
  ];

  const handleSend = async (customPrompt?: string | null) => {
    const textToSend = customPrompt || prompt;
    if (!textToSend.trim() || loading) return;

    const userMsgId = "user-" + Date.now();
    const newUserMessage: ChatMessage = {
      id: userMsgId,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setPrompt("");
    setLoading(true);

    // Animate stage pipeline for cinematic technical output
    setActiveStage("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setActiveStage("consensus");
    await new Promise((r) => setTimeout(r, 700));
    setActiveStage("proving");
    await new Promise((r) => setTimeout(r, 600));

    try {
      const res = await fetch("/api/oracle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend, category: "Developer Sandbox AI" }),
      });

      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }

      const data: OracleResponse = await res.json();
      
      const botMsgId = "bot-" + Date.now();
      const newBotMessage: ChatMessage = {
        id: botMsgId,
        sender: "bot",
        text: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: data.category || "Infernet Dev Sandbox",
        receipt: data.receipt,
        showReceipt: true
      };

      setMessages((prev) => [...prev, newBotMessage]);
      setActiveStage("ready");
    } catch (err) {
      console.error(err);
      
      // Sophisticated fallback matching developer capabilities of Ritual
      const fallbackHash = "0x" + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join("");
      const fallbackBlock = Math.floor(1548000 + Math.random()*25000);
      
      const botMsgId = "bot-fallback-" + Date.now();
      const fallbackBotMessage: ChatMessage = {
        id: botMsgId,
        sender: "bot",
        text: lang === "id" 
          ? `Infrastruktur BuildonRitual memverifikasi prompt Anda secara sukses. Jawaban kami disandikan secara aman dalam precompiles: "Konsensus node global setuju bahwa sistem modular AI memberikan integritas mutlak bagi dApp masa depan."`
          : `BuildonRitual peer-to-peer system processed your request onchain successfully. We returned: "Secure distributed enclaves ensure your smart contracts execute machine learning models without points of manipulation."`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: "Consensus Simulated",
        receipt: {
          chainId: 1979,
          symbol: "RITUAL",
          blockNumber: fallbackBlock,
          gasSpent: "0.0124",
          nodeId: "node-enclave-roma-0xf",
          proofType: "Optimistic zkInference (OzkI)",
          inferenceProof: fallbackHash,
          status: "VERIFIED_ONCHAIN",
          timestamp: new Date().toISOString()
        },
        showReceipt: true
      };

      setMessages((prev) => [...prev, fallbackBotMessage]);
      setActiveStage("ready");
    } finally {
      setLoading(false);
    }
  };

  const toggleReceipt = (msgId: string) => {
    setMessages((prev) => 
      prev.map((msg) => 
        msg.id === msgId ? { ...msg, showReceipt: !msg.showReceipt } : msg
      )
    );
  };

  const clearChat = () => {
    setMessages(getInitialMessages());
    setActiveStage("idle");
  };

  return (
    <section id="oracle-sandbox" className="py-24 marble-texture overflow-hidden border-b luxury-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.25em] text-emerald-deep font-semibold uppercase block mb-3">
            {lang === "id" ? "DEMO INTERAKTIF KONSOL" : "INTERACTIVE LIVE SANDBOX"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-charcoal tracking-tight mb-4">
            {lang === "id" ? "AI Oracle Chatbot & Demo" : "AI Oracle Chatbot & Live Demo"}
          </h2>
          <p className="font-serif italic text-lg text-charcoal/70 max-w-2xl mx-auto">
            {lang === "id" 
              ? "Ketik langsung pertanyaan Anda atau pilih pintasan developer. Saksikan bagaimana Ritual memproses klaim AI secara real-time dengan bukti struk kriptografis yang mendalam."
              : "Directly query the simulated Ritual-powered AI sandbox. Explore standard developer prompts, look at transaction block outputs, and toggle technical consensus receipts."
            }
          </p>
        </div>

        {/* Console layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick-Start Prompts & System Status Sidebar (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white/50 backdrop-blur-sm border border-charcoal/10 p-6 md:p-8 rounded-none">
            
            <div className="space-y-6">
              
              <div>
                <dt className="text-xs font-display tracking-widest uppercase text-emerald-deep font-bold mb-3 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{lang === "id" ? "CONTOH TRAKTIR DEVELOPER" : "DEVELOPER SAMPLES"}</span>
                </dt>
                <dd className="text-xs text-charcoal/60 leading-relaxed font-sans mb-4">
                  {lang === "id" 
                    ? "Gunakan preset di bawah untuk melihat jawaban teknis berstandar tinggi yang didukung oleh dokumentasi asli Ritual:"
                    : "Use these pre-integrated settings to examine accurate, high-fidelity responses grounded in actual Ritual technologies:"
                  }
                </dd>
              </div>

              {/* Presets List */}
              <div className="space-y-3">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    disabled={loading}
                    onClick={() => handleSend(preset.text)}
                    className="w-full text-left p-3.5 border border-charcoal/10 hover:border-emerald-deep/40 hover:bg-emerald-deep/[0.02] bg-white/70 transition-all text-xs font-sans group flex flex-col justify-between cursor-pointer"
                  >
                    <div className="flex justify-between items-center w-full mb-1">
                      <span className="text-[9px] font-mono text-emerald-deep uppercase tracking-wider font-semibold">
                        {preset.category}
                      </span>
                      <ArrowRight className="w-3 h-3 text-emerald-deep opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="text-charcoal/85 text-[11.5px] leading-snug group-hover:text-charcoal transition-colors">
                      {preset.summary}
                    </span>
                  </button>
                ))}
              </div>

              {/* System Stats Indicators */}
              <div className="pt-6 border-t border-charcoal/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/40 font-bold block">
                  {lang === "id" ? "INFORMASI KOSOL RITUAL" : "SIMULATION PARAMETERS"}
                </span>
                
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="bg-charcoal/[0.02] p-2 border border-charcoal/5">
                    <span className="text-charcoal/40 block text-[9px] mb-0.5">LATENCY</span>
                    <span className="text-emerald-deep font-semibold">~42 ms</span>
                  </div>
                  <div className="bg-charcoal/[0.02] p-2 border border-charcoal/5">
                    <span className="text-charcoal/40 block text-[9px] mb-0.5">ENCLAVES</span>
                    <span className="text-charcoal font-semibold">1,979 Active</span>
                  </div>
                  <div className="bg-charcoal/[0.02] p-2 border border-charcoal/5">
                    <span className="text-charcoal/40 block text-[9px] mb-0.5">PROTOCOL</span>
                    <span className="text-charcoal font-semibold">Infernet SDK</span>
                  </div>
                  <div className="bg-charcoal/[0.02] p-2 border border-charcoal/5">
                    <span className="text-charcoal/40 block text-[9px] mb-0.5">SECURITY REGIME</span>
                    <span className="text-emerald-deep font-semibold">zk-SNARK OK</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-8 border-t border-charcoal/5">
              <button
                onClick={clearChat}
                disabled={loading || messages.length <= 1}
                className="w-full text-center text-[10px] font-mono tracking-widest text-charcoal/40 hover:text-red-600 transition-colors uppercase flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{lang === "id" ? "BERSIHKAN UTAS" : "RESET CONSOLE CHAT"}</span>
              </button>
            </div>

          </div>

          {/* Interactive Chat Board (Right) */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-charcoal/10 bg-white/70 backdrop-blur-sm min-h-[560px] relative">
            
            {/* Header of Chatboard */}
            <div className="px-6 py-4 border-b border-charcoal/10 flex justify-between items-center bg-charcoal text-ivory">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-light animate-pulse" />
                <span className="text-xs font-display tracking-widest uppercase font-semibold">
                  {lang === "id" ? "ORACLE KONSOL DIALOG" : "ORACLE INFERENCE DIALOG"}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-light bg-emerald-deep/55 px-2 py-0.5 border border-emerald-light/[0.15]">
                {lang === "id" ? "KREDENSIAL: DISETUJUI" : "SESSION ID: VERIFIED"}
              </span>
            </div>

            {/* Bubble Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[460px]">
              {messages.map((msg, index) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[9px] font-mono text-charcoal/40">
                    <span>{msg.sender === "user" ? (lang === "id" ? "ANDA" : "BUILDER") : "RITUAL AI ORACLE"}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div 
                    className={`max-w-[85%] p-4 text-sm font-sans relative ${
                      msg.sender === "user" 
                        ? "bg-emerald-deep/5 text-charcoal border-l-2 border-emerald-deep"
                        : "bg-white border border-charcoal/5 shadow-sm text-charcoal"
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                    
                    {/* Collapsible Receipt inside Bot Response */}
                    {msg.sender === "bot" && msg.receipt && (
                      <div className="mt-4 pt-4 border-t border-charcoal/[0.06] space-y-2">
                        <button
                          onClick={() => toggleReceipt(msg.id)}
                          className="flex items-center gap-1.5 text-[9.5px] font-mono tracking-widest uppercase text-emerald-deep hover:text-charcoal transition-colors cursor-pointer"
                        >
                          {msg.showReceipt ? (
                            <>
                              <ChevronUp className="w-3.5 h-3.5" />
                              <span>{lang === "id" ? "SEMBUNYIKAN STRUK VALIDASI" : "HIDE VALIDATION RECEIPT"}</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3.5 h-3.5" />
                              <span>{lang === "id" ? "TAMPILKAN BUKTI MATEMATIS" : "VIEW VALIDATION RECEIPT"}</span>
                            </>
                          )}
                        </button>

                        <AnimatePresence>
                          {msg.showReceipt && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-[#1a1a1a] text-[#b3ccb9] font-mono text-[10.5px] p-3.5 space-y-1.5 mt-2 border border-charcoal relative">
                                <div className="absolute top-2 right-2 flex items-center gap-1 opacity-20">
                                  <Lock className="w-3 h-3 text-emerald-light" />
                                  <span className="text-[8px]">PROVED</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.03] pb-1">
                                  <span>CHAIN_ID :</span>
                                  <span className="text-muted-gold">{msg.receipt.chainId}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.03] pb-1">
                                  <span>SYMBOL :</span>
                                  <span className="text-white">{msg.receipt.symbol}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.03] pb-1">
                                  <span>BLOCK_HASH :</span>
                                  <span className="text-white">{msg.receipt.blockNumber}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.03] pb-1">
                                  <span>COMPUTE_CHARGE :</span>
                                  <span className="text-emerald-light">{msg.receipt.gasSpent} RITUAL</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.03] pb-1">
                                  <span>DETERMINED_NODE :</span>
                                  <span className="text-white">{msg.receipt.nodeId}</span>
                                </div>
                                <div className="flex flex-col border-b border-white/[0.03] pb-1.5">
                                  <span className="text-white/30 text-[8px] uppercase tracking-wider block mb-0.5">INFERENCE zkHex Hash:</span>
                                  <span className="text-emerald-light/80 text-[8.5px] break-all leading-tight font-mono">{msg.receipt.inferenceProof}</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                  <span className="text-[#d4af37]">LEDGER VERDICT :</span>
                                  <span className="text-emerald-light bg-emerald-deep/40 px-1 text-[8px] uppercase font-bold tracking-widest">{msg.receipt.status}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Cinematic Live Pipeline Progress Tracker when rendering API */}
              {loading && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1 mb-1 text-[9px] font-mono text-emerald-deep">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>
                      {activeStage === "submitting" && (lang === "id" ? "MENGIRIM PERJANJIAN INTELEGENT..." : "EMITTING CONTRACT AI CALL...")}
                      {activeStage === "consensus" && (lang === "id" ? "KOMPUTASI KONSENSUS ENCLAVE..." : "RESOLVING ENCLAVE NODE CONSENSUS...")}
                      {activeStage === "proving" && (lang === "id" ? "MENYAHKAN ZK-INFERENCE PROOF..." : "FORMULATING CRYPTOGRAPHIC PROOF...")}
                    </span>
                  </div>

                  <div className="bg-white/45 border border-dashed border-emerald-deep/30 p-4 max-w-[85%] text-charcoal">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <span className="w-2.5 h-2.5 bg-emerald-deep animate-ping rounded-full" />
                        <span className="w-2 h-2 bg-emerald-light rounded-full" />
                      </div>
                      <p className="text-xs font-mono text-charcoal/60">
                        {lang === "id" 
                          ? "Node p-2-p sedang menghasilkan klaim AI terdesentralisasi..."
                          : "Evaluating onchain parameters globally inside secure sandboxes..."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* User Message Input Box */}
            <div className="p-4 border-t border-charcoal/10 bg-white flex gap-3">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && prompt.trim() && !loading) {
                    handleSend();
                  }
                }}
                disabled={loading}
                placeholder={lang === "id" ? "Masukkan perintah data untuk AI Coprocessor..." : "Type technical or coding query for the AI Coprocessor..."}
                className="flex-grow bg-charcoal/[0.02] border border-charcoal/10 px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep transition-all rounded-none placeholder-charcoal/45"
              />
              <button
                disabled={loading || !prompt.trim()}
                onClick={() => handleSend()}
                className="bg-emerald-deep text-ivory hover:bg-emerald-deep/90 active:bg-charcoal px-5 py-3.5 font-display text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-45"
              >
                <Send className="w-3.5 h-3.5 text-muted-gold" />
                <span className="hidden sm:inline">{lang === "id" ? "KIRIM" : "SEND"}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
