import styles from "./CurrentWeather.module.scss";
import { Icon, Paper } from "components";

const CurrentWeather = () => {
  return (
    <Paper className={styles.container}>
      <div className={styles.time}>January 24, 2024</div>
      <div className={styles.center}>
        <div className={styles.weatherIcon}>
          <Icon icon="01d" size={100} />
        </div>
        <div className={styles.centerItem}>
          <div className={styles.temp}>25°C</div>
          <div className={styles.weather}>Broken Clouds</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Humidity</div>

          <b className={styles.value}>
            96<span className={styles.unit}>%</span>
          </b>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Winds</div>
          <b className={styles.value}>
            1.54 <span className={styles.unit}>m/s</span>
          </b>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Visibility</div>
          <b className={styles.value}>
            8 <span className={styles.unit}>km</span>
          </b>
        </div>
      </div>
    </Paper>
  );
};

export default CurrentWeather;
