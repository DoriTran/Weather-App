import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptData, decryptData } from "utils/encryption";
import { StoreHistoryType } from "./storeHistoryType";
import { HistorySearch } from "types/history";
import { v4 as uuidv4 } from "uuid";

const useStoreHistory = create<StoreHistoryType, [["zustand/persist", unknown]]>(
  persist(
    (set, get) => ({
      encryptedHistory: "",
      getLastSearch: async (): Promise<HistorySearch | null> => {
        try {
          const encrypted = get().encryptedHistory;
          if (!encrypted) return null;
          const decrypted = await decryptData(encrypted);
          return JSON.parse(decrypted)[0] || null;
        } catch (error) {
          console.error("Failed to decrypt history:", error);
          return null;
        }
      },
      getHistory: async (): Promise<HistorySearch[]> => {
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
      addHistory: async (history: HistorySearch): Promise<void> => {
        try {
          const current = await get().getHistory();
          const updated = [{ ...history, id: uuidv4() }, ...current];
          const encrypted = await encryptData(JSON.stringify(updated));
          set({ encryptedHistory: encrypted });
        } catch (error) {
          console.error("Failed to encrypt on add:", error);
        }
      },
      removeHistory: async (id: number): Promise<void> => {
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

export default useStoreHistory;
