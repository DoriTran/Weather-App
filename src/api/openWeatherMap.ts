import moment from "moment";
import { api } from "./index";
import type {
  GeoCity,
  CurrentWeather,
  ForecastResponse,
  ForecastItem,
  NotFormatedForecastItem,
} from "types/weather";

const GEO_BASE_URL = "/geo/1.0/direct";
const WEATHER_BASE_URL = "/data/2.5/weather";
const FORCAST = "/data/2.5/forecast";

export const getCoordinates = async (search: string): Promise<GeoCity[]> => {
  try {
    const { data } = await api.get(GEO_BASE_URL, {
      params: {
        q: search,
        limit: 1,
        units: "metric",
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch coordinates:", error);
    throw error;
  }
};

export const getWeather = async (lat: number, lon: number): Promise<CurrentWeather> => {
  try {
    const { data } = await api.get(WEATHER_BASE_URL, {
      params: {
        lat,
        lon,
        units: "metric",
      },
    });

    return {
      icon: data.weather[0].icon,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDeg: (data.wind.deg + 180) % 360,
      visibility: data.visibility / 1000,
    };
  } catch (error) {
    console.error("Failed to fetch current weather:", error);
    throw error;
  }
};

export const getForecast = async (lat: number, lon: number): Promise<ForecastResponse> => {
  try {
    const { data } = await api.get(FORCAST, {
      params: {
        lat,
        lon,
        units: "metric",
      },
    });

    const { list } = data;
    // Handle data to formated data
    const grouped: Record<string, ForecastItem[]> = {};
    list.forEach((entry: NotFormatedForecastItem) => {
      const date = moment(entry.dt_txt);
      const dayKey = date.format("YYYY-MM-DD");

      if (!grouped[dayKey]) grouped[dayKey] = [];

      grouped[dayKey].push({
        time: date.format("HH:mm"),
        icon: entry.weather[0].icon,
        temp: `${Math.round(entry.main.temp_min)}°C/${Math.round(entry.main.temp_max)}°C`,
        weather: entry.weather[0].description,
      });
    });

    // Separate the data into days
    const today = moment(list[0].dt_txt).format("YYYY-MM-DD");
    const forecast: ForecastResponse = {
      list: Object.entries(grouped).map(([key, items]) => ({
        date: key === today ? "Today" : moment(key).format("D MMMM"),
        items,
      })),
    };

    return forecast;
  } catch (error) {
    console.error("Failed to fetch forecast:", error);
    throw error;
  }
};
