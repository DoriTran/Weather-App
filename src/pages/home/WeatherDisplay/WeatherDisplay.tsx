import styles from "./WeatherDisplay.module.scss";
import { Icon, Paper } from "components";
import { FC, useEffect } from "react";
import { CurrentWeather } from "types/weather";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "api/openWeatherMap";
import useCurrentTime from "hooks/useCurrentTime";
import { WeatherLocationType } from "types/hooks";
import { faArrowUp, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface WeatherDisplayType {
  location: WeatherLocationType;
}

const WeatherDisplay: FC<WeatherDisplayType> = ({ location }) => {
  const {
    data: weather,
    isLoading,
    refetch,
  } = useQuery<CurrentWeather, Error>({
    queryKey: ["getWeather", location.lat, location.lon],
    queryFn: () => getWeather(location.lat, location.lon),
    enabled: location.location !== "Search for a location",
  });

  useEffect(() => {
    if (!isLoading && location.location !== "Search for a location") refetch();
  }, [location]);

  const time = useCurrentTime();

  return (
    <Paper className={styles.container}>
      <div className={styles.time}>{time}</div>
      <div className={styles.center}>
        <div className={styles.weatherIcon}>
          {weather?.icon ? (
            <Icon icon={weather.icon} size="8rem" />
          ) : (
            <Icon icon={faSpinner} size={50} />
          )}
        </div>
        <div className={styles.centerItem}>
          <div className={styles.temp}>{weather?.temp}°C</div>
          <div className={styles.weather}>{weather?.description || "Unknown"}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Humidity</div>
          <b className={styles.value}>
            {weather?.humidity || 0}
            <span className={styles.unit}> %</span>
          </b>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Winds</div>
          <b className={styles.value}>
            <Icon icon={faArrowUp} size={10} rotate={weather?.windDeg} />
            {weather?.windSpeed || 0} <span className={styles.unit}>m/s</span>
          </b>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.type}>Visibility</div>
          <b className={styles.value}>
            {weather?.visibility} <span className={styles.unit}>km</span>
          </b>
        </div>
      </div>
    </Paper>
  );
};

export default WeatherDisplay;
