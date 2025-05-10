import useWeatherLocation from "hooks/useWeatherLocation";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import FiveDayForecast from "./FiveDayForecast/FiveDayForecast";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const weatherLocation = useWeatherLocation();

  return (
    <div className={styles.layout}>
      <WeatherDisplay location={weatherLocation} />
      <FiveDayForecast location={weatherLocation} />
    </div>
  );
};

export default HomePage;
