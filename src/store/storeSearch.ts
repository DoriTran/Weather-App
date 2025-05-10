import { create } from "zustand";
import { StoreSearchType } from "./storeSearchType";
import { HistorySearch } from "types/history";

const useStoreSearch = create<StoreSearchType>((set) => ({
  location: null,
  setLocation: (location: HistorySearch | null) => {
    set({ location });
  },
}));

export default useStoreSearch;
