import SearchBar from "./SearchBar/SearchBar";
import SearchHistory from "./SearchHistory/SearchHistory";
import styles from "./SearchHistoryPage.module.scss";

const SearchHistoryPage = () => {
  return (
    <div className={styles.layout}>
      <SearchBar />
      <SearchHistory />
    </div>
  );
};

export default SearchHistoryPage;
