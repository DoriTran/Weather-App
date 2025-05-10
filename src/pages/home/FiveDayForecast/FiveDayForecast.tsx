import { Label, Paper } from "components";
import styles from "./FiveDayForecast.module.scss";
import ForecastItem from "./ForecastItem/ForecastItem";

const FiveDayForecast = () => {
  return (
    <>
      <Label>5-day Forecast (3 Hours)</Label>
      <Paper className={styles.container}>
        <div className={styles.date}>Today</div>
        <ForecastItem time="12:00" icon="01d" temperature="25°C/32°C" weather="Clear Sky" />
        <ForecastItem time="12:00" icon="01d" temperature="25°C/32°C" weather="Clear Sky" />
        <ForecastItem time="12:00" icon="01d" temperature="25°C/32°C" weather="Clear Sky" />
        <ForecastItem time="12:00" icon="01d" temperature="25°C/32°C" weather="Clear Sky" />
        <ForecastItem time="12:00" icon="01d" temperature="25°C/32°C" weather="Clear Sky" />
      </Paper>
    </>
  );
};

export default FiveDayForecast;
