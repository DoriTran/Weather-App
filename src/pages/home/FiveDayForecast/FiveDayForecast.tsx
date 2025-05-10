import { Label, Paper } from "components";
import styles from "./FiveDayForecast.module.scss";
import ForecastItem from "./ForecastItem/ForecastItem";
import { FC, Fragment, useEffect } from "react";
import { WeatherLocationType } from "types/hooks";
import { useQuery } from "@tanstack/react-query";
import { getForecast } from "api/openWeatherMap";
import { ForecastResponse } from "types/weather";

interface FiveDayForecastType {
  location: WeatherLocationType;
}

const FiveDayForecast: FC<FiveDayForecastType> = ({ location }) => {
  const {
    data: forecast,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery<ForecastResponse, Error>({
    queryKey: ["getForcast", location.lat, location.lon],
    queryFn: () => getForecast(location.lat, location.lon),
    enabled: location.location !== "Search for a location",
  });

  useEffect(() => {
    if (!isLoading && location.location !== "Search for a location") refetch();
  }, [location]);

  useEffect(() => {
    console.log(forecast);
  }, [isSuccess]);

  return (
    <>
      <Label>5-day Forecast (3 Hours)</Label>
      <Paper className={styles.container}>
        {forecast?.list.map((eachDay) => (
          <div key={eachDay.date} className={styles.dayWrapper}>
            <div className={styles.date}>{eachDay.date}</div>
            {eachDay.items.map((eachTime) => (
              <ForecastItem
                key={eachDay + eachTime.time}
                time={eachTime.time}
                icon={eachTime.icon}
                temperature={eachTime.temp}
                weather={eachTime.weather}
              />
            ))}
          </div>
        ))}
      </Paper>
    </>
  );
};

export default FiveDayForecast;
