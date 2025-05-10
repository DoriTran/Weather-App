import { HistorySearch } from "types/history";

export interface StoreSearchType {
  location: HistorySearch | null;
  setLocation: (location: HistorySearch | null) => void;
}
