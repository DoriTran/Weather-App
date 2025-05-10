import { HistorySearch } from "types/history";

export interface StoreHistoryType {
  encryptedHistory: string;
  getHistory: () => Promise<HistorySearch[]>;
  addHistory: (history: HistorySearch) => void;
  removeHistory: (id: number) => void;
}
