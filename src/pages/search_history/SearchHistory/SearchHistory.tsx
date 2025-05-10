import { Label, Paper } from "components";
import styles from "./SearchHistory.module.scss";
import HistoryItem from "./HistoryItem/HistoryItem";

const SearchHistory = () => {
  return (
    <>
      <Label>5-day Forecast (3 Hours)</Label>
      <Paper className={styles.container}>
        <HistoryItem city="Sydney" country="AU" />
        <HistoryItem city="Sydney" country="AU" />
        <HistoryItem city="Sydney" country="AU" />
        <HistoryItem city="Sydney" country="AU" />
        <HistoryItem city="Sydney" country="AU" />
      </Paper>
    </>
  );
};

export default SearchHistory;
