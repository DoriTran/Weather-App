import { HistorySearch } from "types/history";

export interface StoreHistoryType {
  encryptedHistory: string;
  getLastSearch: () => Promise<HistorySearch | null>;
  getHistory: () => Promise<HistorySearch[]>;
  addHistory: (history: HistorySearch) => Promise<void>;
  removeHistory: (id: number) => Promise<void>;
}
