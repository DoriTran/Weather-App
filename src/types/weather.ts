export interface GeoCity {
  name: string;
  local_names?: {
    [languageCode: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface NotFormatedCurrentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CurrentWeather {
  icon: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
  windDeg: number;
  visibility: number;
}

export interface NotFormatedForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h"?: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface NotFormatedForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: NotFormatedForecastItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface ForecastItem {
  time: string;
  icon: string;
  temp: string;
  weather: string;
}

export interface ForecastResponse {
  list: {
    date: string;
    items: ForecastItem[];
  }[];
}
