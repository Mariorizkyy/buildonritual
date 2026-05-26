export interface OracleReceipt {
  chainId: number;
  symbol: string;
  blockNumber: number;
  gasSpent: string;
  nodeId: string;
  proofType: string;
  inferenceProof: string;
  status: "VERIFIED_ONCHAIN" | "PENDING" | "FAILED";
  timestamp: string;
}

export interface OracleResponse {
  prompt: string;
  category: string;
  answer: string;
  receipt: OracleReceipt;
}

export interface FAQItem {
  id: string;
  question: string;
  heading: string;
  answer: string;
  iconName: string;
}

export interface NodeStat {
  label: string;
  value: string | number;
  change?: string;
  icon: string;
}
