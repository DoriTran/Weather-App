import { FC } from "react";
import { Icon } from "components";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./HistoryItem.module.scss";

interface HistoryItemProps {
  city?: string;
  country?: string;
}

const HistoryItem: FC<HistoryItemProps> = ({ city, country }) => {
  return (
    <div className={styles.historyItem}>
      <div className={styles.itemInfo}>{`${city}, ${country}`}</div>
      <div className={styles.actions}>
        <Icon icon={faMagnifyingGlass} size={18} />
        <Icon icon={faTrash} size={18} />
      </div>
    </div>
  );
};

export default HistoryItem;
