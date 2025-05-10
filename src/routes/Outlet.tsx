import { Outlet as DomOutlet, useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./Outlet.module.scss";
import { useState, useEffect } from "react";
import { useStoreHistory } from "store/storeHistory";
import { HistorySearch } from "types/history";

const Outlet = () => {
  const navigate: NavigateFunction = useNavigate();
  const getLastSearch: () => Promise<HistorySearch | null> = useStoreHistory(
    (state) => state.getLastSearch,
  );
  const [lastSearch, setLastSearch] = useState<HistorySearch | null>(null);

  useEffect(() => {
    const fetchLastSearch = async () => {
      const result = await getLastSearch();
      setLastSearch(result);
    };
    fetchLastSearch();
  }, [getLastSearch]);

  const lastSearchText: string = lastSearch
    ? `${lastSearch.city}, ${lastSearch.country}`
    : "Search for a location";

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.location} onClick={(): void | Promise<void> => navigate("/home")}>
          📍 {lastSearchText}
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
