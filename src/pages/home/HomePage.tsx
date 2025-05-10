import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDayForecast from "./FiveDayForecast/FiveDayForecast";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.layout}>
      <CurrentWeather />
      <FiveDayForecast />
    </div>
  );
};

export default HomePage;
