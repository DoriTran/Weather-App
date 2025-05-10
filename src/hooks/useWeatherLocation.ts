import { useEffect, useMemo, useState } from "react";
import { StoreHistoryType, StoreSearchType, useStoreHistory, useStoreSearch } from "store";
import { HistorySearch } from "types/history";
import { WeatherLocationType } from "types/hooks";

export default function useWeatherLocation(): WeatherLocationType {
  const getLastSearch: () => Promise<HistorySearch | null> = useStoreHistory(
    (state: StoreHistoryType) => state.getLastSearch,
  );
  const encryptedHistory: string = useStoreHistory(
    (state: StoreHistoryType) => state.encryptedHistory,
  );
  const location = useStoreSearch((state: StoreSearchType) => state.location);
  const [lastSearch, setLastSearch] = useState<HistorySearch | null>(null);

  useEffect(() => {
    if (!location) {
      const fetchLastSearch = async () => {
        const result = await getLastSearch();
        setLastSearch(result);
      };
      fetchLastSearch();
    }
  }, [encryptedHistory]);

  const validLocation = useMemo<HistorySearch | null>(() => {
    return location || lastSearch || null;
  }, [location, lastSearch, encryptedHistory]);

  return {
    location: validLocation
      ? `${validLocation.name}, ${validLocation.country}`
      : "Search for a location",
    name: validLocation?.name || "",
    country: validLocation?.country || "",
    lat: validLocation?.lat || 0,
    lon: validLocation?.lon || 0,
  };
}
