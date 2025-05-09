import { api } from "./index";

const GEO_BASE_URL = "/geo/1.0/direct";
const WEATHER_BASE_URL = "/data/2.5/weather";
const FORCAST = "/data/2.5/forecast";

export const getCoordinates = async (search: string) => {
  const { data } = await api.get(GEO_BASE_URL, {
    params: {
      q: search,
      limit: 1,
    },
  });

  return data;
};

export const getWeather = async (lat: number, lon: number) => {
  const { data } = await api.get(WEATHER_BASE_URL, {
    params: {
      lat,
      lon,
    },
  });

  return data;
};

export const getForecast = async (lat: number, lon: number) => {
  const { data } = await api.get(FORCAST, {
    params: {
      lat,
      lon,
    },
  });

  return data;
};
