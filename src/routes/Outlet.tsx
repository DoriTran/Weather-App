import { Outlet as DomOutlet, useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./Outlet.module.scss";
import { useState, useEffect, useMemo } from "react";
import { HistorySearch } from "types/history";
import { StoreHistoryType, StoreSearchType, useStoreHistory, useStoreSearch } from "store";

const Outlet = () => {
  const navigate: NavigateFunction = useNavigate();
  const getLastSearch: () => Promise<HistorySearch | null> = useStoreHistory(
    (state: StoreHistoryType) => state.getLastSearch,
  );
  const encryptedHistory: string = useStoreHistory(
    (state: StoreHistoryType) => state.encryptedHistory,
  );
  const location = useStoreSearch((state: StoreSearchType) => state.location);
  const [lastSearch, setLastSearch] = useState<HistorySearch | null>(null);

  useEffect(() => {
    if (!location) {
      const fetchLastSearch = async () => {
        const result = await getLastSearch();
        setLastSearch(result);
      };
      fetchLastSearch();
    }
  }, [encryptedHistory]);

  const weatherLocation = useMemo<string>(() => {
    if (location) return `${location.name}, ${location.country}`;
    else if (lastSearch) return `${lastSearch.name}, ${lastSearch.country}`;
    return "Search for a location";
  }, [location, lastSearch, encryptedHistory]);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.location} onClick={(): void | Promise<void> => navigate("/home")}>
          📍 {weatherLocation}
        </h1>
        <div
          className={styles.search}
          onClick={(): void | Promise<void> => navigate("/search_and_history")}
        >
          🔍
        </div>
      </header>
      <main className={styles.mainContent}>
        <DomOutlet />
      </main>
    </div>
  );
};

export default Outlet;
