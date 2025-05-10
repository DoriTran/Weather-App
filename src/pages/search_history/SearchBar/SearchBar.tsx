import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoordinates } from "api/openWeatherMap";
import { GeoCity } from "types/weather";
import styles from "./SearchBar.module.scss";
import { StoreHistoryType, useStoreHistory } from "store";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate: NavigateFunction = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  const [isNoResults, setIsNoResults] = useState<boolean>(false);
  const addHistory = useStoreHistory((state: StoreHistoryType) => state.addHistory);

  const { isError, refetch: search } = useQuery<GeoCity[], Error>({
    queryKey: ["coordinates", searchText],
    queryFn: () => getCoordinates(searchText),
    enabled: false,
    retry: false,
  });

  const handleSearch = async () => {
    const { data } = await search();
    if (data && data.length > 0) {
      await addHistory({
        name: data[0].name,
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon,
      });
      navigate("/home");
    } else {
      setIsNoResults(true);
    }
  };

  useEffect(() => {
    if (isNoResults) setIsNoResults(false);
  }, [searchText]);

  return (
    <>
      <div className={styles.container}>
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              padding: "7px 14px",
            },
          }}
          className={styles.input}
          placeholder="Search contry or city here..."
        />
        <Button variant="contained" className={styles.button} onClick={handleSearch}>
          Search
        </Button>
      </div>
      {(isError || isNoResults) && <div className={styles.error}>Invalid country or city</div>}
    </>
  );
};

export default SearchBar;
