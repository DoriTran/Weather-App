import { useEffect } from "react";
import { getCoordinates, getWeather, getForecast } from "api/openWeatherMap";

const HomePage = () => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = "Tokyo";
        const geoData = await getCoordinates(city);

        if (!geoData.length) {
          console.error("No location data found for", city);
          return;
        }

        const { lat, lon } = geoData[0];

        const currentWeather = await getWeather(lat, lon);
        const forecast = await getForecast(lat, lon);

        console.log("📍 Coordinates:", { lat, lon });
        console.log("🌤️ Current Weather:", currentWeather);
        console.log("📅 Forecast:", forecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
