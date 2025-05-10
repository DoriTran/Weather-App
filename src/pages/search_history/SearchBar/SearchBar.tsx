import { Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoordinates } from "api/openWeatherMap";
import styles from "./SearchBar.module.scss";
import { GeoCity } from "types/weather";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isNoResults, setIsNoResults] = useState<boolean>(false);

  const {
    data: searchResults,
    isLoading,
    isError,
    refetch: search,
  } = useQuery<GeoCity[], Error>({
    queryKey: ["coordinates", searchText],
    queryFn: () => getCoordinates(searchText),
    enabled: false,
    retry: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (searchResults?.length === 0) setIsNoResults(true);
      else setIsNoResults(false);
    }
  }, [isLoading]);

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
          placeholder="Search contry or city here..."
        />
        <Button variant="contained" className={styles.button} onClick={() => search()}>
          {isLoading ? <CircularProgress size={24} /> : "Search"}
        </Button>
      </div>
      {(isError || isNoResults) && <div className={styles.error}>Invalid country or city</div>}
    </>
  );
};

export default SearchBar;
