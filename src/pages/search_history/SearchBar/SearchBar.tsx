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
    const updateHistory = async () => {
      if (!isLoading) {
        if (searchResults?.length === 0) {
          setIsNoResults(true);
        } else {
          setIsNoResults(false);
          if (searchResults) {
            await addHistory({
              name: searchResults[0].name,
              country: searchResults[0].country,
              lat: searchResults[0].lat,
              lon: searchResults[0].lon,
            });
            navigate("/home");
          }
        }
      }
    };

    updateHistory();
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
          Search
        </Button>
      </div>
      {(isError || isNoResults) && <div className={styles.error}>Invalid country or city</div>}
    </>
  );
};

export default SearchBar;
