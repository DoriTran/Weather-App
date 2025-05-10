import { FC } from "react";
import { Icon } from "components";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./HistoryItem.module.scss";
import { useNavigate } from "react-router-dom";
import { StoreHistoryType, StoreSearchType, useStoreHistory, useStoreSearch } from "store";
import { HistorySearch } from "types/history";
import { useMutation } from "@tanstack/react-query";

type HistoryItemProps = {} & HistorySearch;

const HistoryItem: FC<HistoryItemProps> = ({ id, name, country, lat, lon }) => {
  const navigate = useNavigate();
  const setLocation = useStoreSearch((state: StoreSearchType) => state.setLocation);
  const removeHistory = useStoreHistory((state: StoreHistoryType) => state.removeHistory);
  const { mutate: deleteHistory } = useMutation({
    mutationFn: async (id: number | undefined) => {
      if (id === undefined) return;
      await removeHistory(id);
    },
  });

  const handleSearch = (): void => {
    setLocation({ id, name, country, lat, lon });
    navigate("/home");
  };

  const handleDelete = (): void => {
    deleteHistory(id);
  };

  return (
    <div className={styles.historyItem}>
      <div className={styles.itemInfo}>{`${name}, ${country}`}</div>
      <div className={styles.actions}>
        <Icon icon={faMagnifyingGlass} size={18} onClick={handleSearch} />
        <Icon icon={faTrash} size={18} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default HistoryItem;
