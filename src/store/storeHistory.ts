import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptData, decryptData } from "utils/encryption";
import { StoreHistoryType } from "./storeHistoryType";
import { HistorySearch } from "types/history";

export const useStoreHistory = create<StoreHistoryType, [["zustand/persist", unknown]]>(
  persist(
    (set, get) => ({
      encryptedHistory: "",
      getHistory: async () => {
        try {
          const encrypted = get().encryptedHistory;
          if (!encrypted) return [];
          const decrypted = await decryptData(encrypted);
          return JSON.parse(decrypted);
        } catch (error) {
          console.error("Failed to decrypt history:", error);
          return [];
        }
      },
      addHistory: async (history: HistorySearch) => {
        try {
          const current = await get().getHistory();
          const updated = [...current, history];
          const encrypted = await encryptData(JSON.stringify(updated));
          set({ encryptedHistory: encrypted });
        } catch (error) {
          console.error("Failed to encrypt on add:", error);
        }
      },
      removeHistory: async (id: number) => {
        try {
          const current = await get().getHistory();
          const updated = current.filter((item: HistorySearch) => item.id !== id);
          const encrypted = await encryptData(JSON.stringify(updated));
          set({ encryptedHistory: encrypted });
        } catch (error) {
          console.error("Failed to encrypt on remove:", error);
        }
      },
    }),
    {
      name: "history",
    },
  ),
);
