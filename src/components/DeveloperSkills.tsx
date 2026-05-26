import React, { useState } from "react";
import { Terminal, Code, Cpu, ShieldAlert, CpuIcon, Check, Copy, Key, ArrowRight, Layers, Workflow, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DeveloperSkillsProps {
  lang: "en" | "id";
}

export default function DeveloperSkills({ lang }: DeveloperSkillsProps) {
  const [selectedAbi, setSelectedAbi] = useState<string>("0x080C");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const precompilesConfig = lang === "id" ? [
    {
      address: "0x080C",
      name: "Sovereign Agent Precompile",
      title: "Kontrak Adalah Agen (Sovereign)",
      fieldsCount: "23 Fields ABI",
      description: "Precompile ini memungkinkan smart contract bertindak langsung sebagai identitas AI otonom murni. Siklus keputusannya dipicu onchain, dieksekusi offchain di dalam Secure Enclave node, dan hasilnya diverifikasi kriptografis kembali ke status kontrak Anda tanpa keterlibatan pihak ketiga.",
      useCase: "Protokol keuangan mandiri, dApp tata kelola otonom, bot perdagangan cerdas yang tidak dapat disensor.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRitualSovereignAgent {
    // Memanggil precompile Sovereign Agent di alamat 0x080C
    function executeAgent(
        bytes32 agentId,
        bytes calldata inputData,
        uint256 gasLimit,
        bytes32 paymentToken
    ) external returns (bytes memory result, bytes memory zkProof);
}

contract MySovereignDapp {
    address constant SOVEREIGN_PRECOMPILE = address(0x080C);

    function runSovereignDecision(bytes32 agentId, bytes calldata parameters) external {
        // Kontrak ini bertindak sebagai Agen itu sendiri
        (bytes memory output, bytes memory proof) = IRitualSovereignAgent(SOVEREIGN_PRECOMPILE)
            .executeAgent(agentId, parameters, 150000, "RITUAL");
            
        // Validasi dan mutasikan state game / keuangan Anda secara real-time
    }
}`
    },
    {
      address: "0x0820",
      name: "Persistent Agent Precompile",
      title: "Kontainer AI yang Abadi (Persistent)",
      fieldsCount: "26 Fields ABI",
      description: "Persistent Agent Precompile diletakkan pada kontainer komputasi terdistribusi (Docker / WASM) yang mandiri dan memelihara memori internal ('state persistency') di seluruh siklus panggilan. Node Ritual menyalin memori terbaru ke ledger terdistribusi di setiap penyelesaian inferensi.",
      useCase: "Karakter game NPC dengan ingatan permanen, sistem pencarian asisten pribadi Web3 yang mempelajari preferensi pengguna.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRitualPersistentAgent {
    // Memasang memori persisten di alamat precompile 0x0820
    function callPersistentMemory(
        bytes32 agentId,
        bytes32 memoryRootAddress,
        bytes calldata interactionData
    ) external returns (bytes memory nextState, bytes calldata proofOfState);
}

contract GameWorldNPC {
    address constant PERSISTENT_PRECOMPILE = address(0x0820);
    bytes32 public npcMemoryRoot;

    function interactWithNPC(bytes32 npcId, bytes calldata speechInput) external {
        (bytes memory nextMemory, bytes memory proof) = IRitualPersistentAgent(PERSISTENT_PRECOMPILE)
            .callPersistentMemory(npcId, npcMemoryRoot, speechInput);
            
        // Amankan status memori baru NPC agar tidak dimanipulasi
        npcMemoryRoot = keccak256(nextMemory);
    }
}`
    },
    {
      address: "0x0802",
      name: "LLM Inference Call",
      title: "Integrasi LLM Onchain Murni",
      fieldsCount: "30 Fields ABI",
      description: "Memanggil model bahasa besar (open weight model seperti LLaMA-3 atau Mistral) langsung lewat pemanggilan smart contract standar di alamat precompile 0x0802. Seluruh bobot parameter dihitung offchain dan disertakan dengan tanda tangan kriptografis unik dari node yang tervalidasi.",
      useCase: "Analisis sentimen onchain instan, deteksi anomali penipuan pintar, pembuatan narasi game EVM secara dinamis.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleLLMComposed {
    address constant LLM_PRECOMPILE = address(0x0802);

    function askLlama(string calldata question) external returns (string memory) {
        // Melakukan encoding 30-field ABI untuk query model LLaMA
        (bool success, bytes memory response) = LLM_PRECOMPILE.staticcall(
            abi.encode(
                "meta-llama/Meta-Llama-3-8B-Instruct",
                question,
                uint256(50), // Token maksimum
                uint256(500) // Skala suhu model (0.5)
            )
        );
        require(success, "Llama query failed");
        return abi.decode(response, (string));
    }
}`
    },
    {
      address: "0x0807",
      name: "FHE Inference Precompile",
      title: "Privasi Enkripsi Total (FHE)",
      fieldsCount: "19 Fields ABI",
      description: "Precompile Fully Homomorphic Encryption (FHE) di alamat 0x0807 memungkinkan eksekusi enkripsi data sensitif onchain tanpa perlu membukanya ke publik. Data dihitung oleh node AI saat tetap terenkripsi, menjamin privasi absolut bagi akun personal pengguna.",
      useCase: "Pemrosesan klaim kesehatan private, analisis skor kredit rahasia tanpa mengekspos transaksi asli.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SecretFHEExecutor {
    address constant FHE_PRECOMPILE = address(0x0807);

    function processEncryptedCreditScore(
        bytes calldata encryptedIncome,
        bytes calldata encryptedDebts
    ) external view returns (bytes memory encryptedResult) {
        // Melakukan evaluasi neural network langsung pada data yang terenkripsi
        (bool success, bytes memory result) = FHE_PRECOMPILE.staticcall(
            abi.encode(encryptedIncome, encryptedDebts)
        );
        require(success, "FHE inference rejected");
        return result;
    }
}`
    }
  ] : [
    {
      address: "0x080C",
      name: "Sovereign Agent Precompile",
      title: "The Contract is the Agent (Sovereign)",
      fieldsCount: "23 Fields ABI",
      description: "This precompile enables a smart contract to act directly as a self-contained AI autonomous agent. Its decision loop is triggered onchain, evaluated offchain inside secure enclaves by global Ritual node operators, and returned as verified outputs with proof of inference straight to contract memory.",
      useCase: "Decentralized autonomous organizations (DAOs) governed by AI, self-balancing robotic investment vaults.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRitualSovereignAgent {
    // Calls Sovereign Agent precompile at hex address 0x080C
    function executeAgent(
        bytes32 agentId,
        bytes calldata inputData,
        uint256 gasLimit,
        bytes32 paymentToken
    ) external returns (bytes memory result, bytes memory zkProof);
}

contract MySovereignDapp {
    address constant SOVEREIGN_PRECOMPILE = address(0x080C);

    function runSovereignDecision(bytes32 agentId, bytes calldata parameters) external {
        // The contract itself functions as the active agent proxy
        (bytes memory output, bytes memory proof) = IRitualSovereignAgent(SOVEREIGN_PRECOMPILE)
            .executeAgent(agentId, parameters, 150000, "RITUAL");
            
        // Check cryptographic zkProof onchain and mutate your decentralized application state instantly
    }
}`
    },
    {
      address: "0x0820",
      name: "Persistent Agent Precompile",
      title: "Containers that Can't Die (Persistent)",
      fieldsCount: "26 Fields ABI",
      description: "Persistent Agent Precompile facilitates continuous containerization (Docker / WASM runtimes) that supports 'state memory persistency' across execution batches. Node operators continuously serialize updated memory state to the distributed ledger securely.",
      useCase: "NPC characters in multiplayer web3 gaming with absolute long-term memory, personal user companions that remember history.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRitualPersistentAgent {
    // Call the Persistent Memory precompile at 0x0820
    function callPersistentMemory(
        bytes32 agentId,
        bytes32 memoryRootAddress,
        bytes calldata interactionData
    ) external returns (bytes memory nextState, bytes calldata proofOfState);
}

contract GameWorldNPC {
    address constant PERSISTENT_PRECOMPILE = address(0x0820);
    bytes32 public npcMemoryRoot;

    function interactWithNPC(bytes32 npcId, bytes calldata speechInput) external {
        (bytes memory nextMemory, bytes memory proof) = IRitualPersistentAgent(PERSISTENT_PRECOMPILE)
            .callPersistentMemory(npcId, npcMemoryRoot, speechInput);
            
        // Securely freeze and anchor the updated NPC state root
        npcMemoryRoot = keccak256(nextMemory);
    }
}`
    },
    {
      address: "0x0802",
      name: "LLM Inference Call",
      title: "Enshrined Onchain Large Language Models",
      fieldsCount: "30 Fields ABI",
      description: "Directly trigger open weight language model queries (such as LLaMA-3 or Mistral) onchain using standard smart contract staticcall structures. Compute operations scale offchain securely, protected by rigorous mathematical sign validations.",
      useCase: "Trustless onchain text classification, smart contract code auditors, autonomous gaming quest generator systems.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleLLMComposed {
    address constant LLM_PRECOMPILE = address(0x0802);

    function askLlama(string calldata question) external returns (string memory) {
        // Formulates a 30-field ABI call to trigger the enshrined LLaMA model
        (bool success, bytes memory response) = LLM_PRECOMPILE.staticcall(
            abi.encode(
                "meta-llama/Meta-Llama-3-8B-Instruct",
                question,
                uint256(50), // max tokens
                uint256(500) // temperature scaled (0.5)
            )
        );
        require(success, "Llama execution failed");
        return abi.decode(response, (string));
    }
}`
    },
    {
      address: "0x0807",
      name: "FHE Inference Precompile",
      title: "Fully Homomorphic Encryption (FHE)",
      fieldsCount: "19 Fields ABI",
      description: "Fully Homomorphic Encryption allows computational math to be run on highly sensitive private metrics without exposing the underlying values. Precompile 0x0807 processes neural paths while datasets remain 100% encrypted, maintaining global privacy.",
      useCase: "Private health records matching, confidential loan validation based on hidden blockchain transactions.",
      solidityCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SecretFHEExecutor {
    address constant FHE_PRECOMPILE = address(0x0807);

    function processEncryptedCreditScore(
        bytes calldata encryptedIncome,
        bytes calldata encryptedDebts
    ) external view returns (bytes memory encryptedResult) {
        // Runs inference direct on completely encrypted inputs
        (bool success, bytes memory result) = FHE_PRECOMPILE.staticcall(
            abi.encode(encryptedIncome, encryptedDebts)
        );
        require(success, "FHE evaluation failed");
        return result;
    }
}`
    }
  ];

  const activePrecompile = precompilesConfig.find(p => p.address === selectedAbi) || precompilesConfig[0];

  return (
    <section id="developer-skills" className="py-24 bg-ivory border-b luxury-border relative">
      <div className="absolute inset-0 bg-[#1f5f4a]/[0.01] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 border-b border-charcoal/10 pb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-deep" />
              <span className="text-xs font-mono tracking-[0.2em] text-emerald-deep font-semibold uppercase">
                {lang === "id" ? "ARSITEKTUR PRECOMPILE EVM" : "ENSHRINED DAPP SKILLS"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-charcoal tracking-tight">
              {lang === "id" ? "Portal Peta Kemampuan Agen" : "Enshrined Agent Developer Skills"}
            </h2>
            <p className="font-serif italic text-lg text-charcoal/70 mt-3 max-w-xl">
              {lang === "id"
                ? "Pelajari bagaimana pengembang blockchain memicu kemampuan AI kognitif, model persisten, dan privasi penuh langsung dari Solidity."
                : "A detailed breakdown of Ritual's dApp precompile infrastructure. Call cryptographic machine learning enclaves instantly."
              }
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a 
              href="https://github.com/ritual-foundation/ritual-dapp-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-deep hover:text-emerald-light transition-colors font-bold uppercase tracking-wider"
            >
              <span>{lang === "id" ? "LIHAT REPO SKILLS RESMI" : "VIEW OFFICIAL SKILLS REPO"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Grid Sandbox Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selector Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono text-charcoal/40 font-semibold tracking-wider uppercase block">
              {lang === "id" ? "PILIH KEMAMPUAN PRECOMPILE:" : "CHOOSE PRECOMPILE ACTION:"}
            </span>
            <div className="grid grid-cols-1 gap-2">
              {precompilesConfig.map((p) => {
                const isActive = p.address === selectedAbi;
                return (
                  <button
                    key={p.address}
                    onClick={() => setSelectedAbi(p.address)}
                    className={`w-full text-left p-4 border transition-all cursor-pointer relative rounded-none flex items-center justify-between ${
                      isActive 
                        ? "bg-emerald-deep text-ivory border-emerald-deep shadow-md"
                        : "bg-white text-charcoal border-charcoal/10 hover:border-emerald-deep/40"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 font-bold ${
                          isActive ? "bg-white/10 text-muted-gold" : "bg-emerald-deep/5 text-emerald-deep"
                        }`}>
                          {p.address}
                        </span>
                        <span className={`text-[10px] font-mono ${isActive ? "text-white/60" : "text-charcoal/40"}`}>
                          {p.fieldsCount}
                        </span>
                      </div>
                      <h4 className="text-xs font-display font-medium uppercase tracking-wider">
                        {p.name}
                      </h4>
                    </div>
                    <Layers className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-muted-gold rotate-90" : "text-charcoal/20"}`} />
                  </button>
                );
              })}
            </div>

            {/* Explanatory Banner */}
            <div className="p-5 border border-emerald-deep/10 bg-emerald-deep/[0.02]">
              <div className="flex gap-2.5">
                <Cpu className="w-5 h-5 text-emerald-deep shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-mono text-emerald-deep tracking-wider font-semibold uppercase">
                    {lang === "id" ? "APA ITU PRECOMPILE?" : "WHAT IS AN ENSHRINED PRECOMPILE?"}
                  </h5>
                  <p className="text-[10.5px] text-charcoal/60 leading-relaxed font-sans">
                    {lang === "id"
                      ? "Fungsi khusus yang dibangun langsung ke dalam level runtime blockchain Ritual (bukan smart contract Solidity murni). Ini menghapus latensi gas dan gas overhead komputasi AI offchain."
                      : "Special functions hardcoded direct into the Ritual ledger client layer. They cut down computational state overhead, offering fast execution at highly reduced gas cost."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code and Definition Panel */}
          <div className="lg:col-span-8 bg-white border border-charcoal/10 p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-charcoal/5 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-[#d4af37] font-semibold uppercase tracking-widest">
                    {activePrecompile.name}
                  </span>
                </div>
                <h3 className="text-xl font-display font-medium text-charcoal tracking-tight">
                  {activePrecompile.title}
                </h3>
              </div>
              <div className="text-[10px] font-mono text-emerald-deep font-semibold uppercase border border-emerald-deep/20 px-3 py-1 bg-emerald-deep/[0.03]">
                {activePrecompile.fieldsCount} ARCHITECTURE
              </div>
            </div>

            {/* Details and Use Case Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-charcoal/5">
              <div className="md:col-span-7 space-y-2">
                <h5 className="text-[10px] font-mono text-charcoal/40 font-semibold tracking-wider uppercase">
                  {lang === "id" ? "Mekanisme Teknis / Cara Kerja:" : "TECHNICAL EXPLANATION:"}
                </h5>
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-sans">
                  {activePrecompile.description}
                </p>
              </div>
              <div className="md:col-span-5 bg-ivory p-4 border border-charcoal/5 space-y-2">
                <h5 className="text-[10px] font-mono text-emerald-deep font-semibold tracking-wider uppercase">
                  {lang === "id" ? "Kasus Penggunaan Ideal:" : "IDEAL USE CASES:"}
                </h5>
                <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                  {activePrecompile.useCase}
                </p>
              </div>
            </div>

            {/* Solidity Code Area */}
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-charcoal text-white/50 px-4 py-3 border border-charcoal/10 border-b-0">
                <div className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-emerald-light" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#a8dfca]">
                    Solidity ABI Implementation ({activePrecompile.address})
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(activePrecompile.solidityCode)}
                  className="p-1 px-2.5 bg-white/10 hover:bg-white/20 transition-all text-[10px] font-mono text-white select-none cursor-pointer flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-light" />
                      <span>{lang === "id" ? "Tersalin" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{lang === "id" ? "Salin Kode" : "Copy Code"}</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-charcoal text-white/90 p-5 overflow-x-auto text-[11px] font-mono leading-relaxed border border-charcoal rounded-none shadow-inner max-h-96">
                <pre>{activePrecompile.solidityCode}</pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
