import { Label, Paper } from "components";
import styles from "./SearchHistory.module.scss";
import HistoryItem from "./HistoryItem/HistoryItem";
import { useQuery } from "@tanstack/react-query";
import { HistorySearch } from "types/history";
import { useEffect } from "react";
import { StoreHistoryType, useStoreHistory } from "store";

const SearchHistory = () => {
  const encryptedHistory: string = useStoreHistory(
    (state: StoreHistoryType) => state.encryptedHistory,
  );
  const getHistory: () => Promise<HistorySearch[]> = useStoreHistory(
    (state: StoreHistoryType) => state.getHistory,
  );

  const {
    data: history,
    isLoading,
    refetch,
  } = useQuery<HistorySearch[], Error>({
    queryKey: ["getHistory"],
    queryFn: () => getHistory(),
  });

  useEffect(() => {
    if (!isLoading) refetch();
  }, [encryptedHistory]);

  return (
    <>
      <Label>Search History</Label>
      <Paper className={styles.container}>
        {history?.map((item: HistorySearch) => <HistoryItem key={item.id} {...item} />)}
        {history?.length === 0 && (
          <div className={styles.noHistory}>No search history available</div>
        )}
      </Paper>
    </>
  );
};

export default SearchHistory;
