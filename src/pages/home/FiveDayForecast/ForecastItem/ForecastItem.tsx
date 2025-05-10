import { FC } from "react";
import styles from "./ForecastItem.module.scss";
import { Icon } from "components";

interface ForecastItemProps {
  time: string;
  icon: string;
  temperature: string;
  weather: string;
}

const ForecastItem: FC<ForecastItemProps> = ({ time, icon, temperature, weather }) => {
  return (
    <div className={styles.forecastItem}>
      <div className={styles.time}>{time}</div>
      <div className={styles.center}>
        <Icon icon={icon} size="2.5rem" />
        <div className={styles.temperature}>{temperature}</div>
      </div>
      <div className={styles.weather}>{weather}</div>
    </div>
  );
};

export default ForecastItem;
