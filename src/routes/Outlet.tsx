import { Outlet as DomOutlet, useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./Outlet.module.scss";
import useWeatherLocation from "hooks/useWeatherLocation";

const Outlet = () => {
  const navigate: NavigateFunction = useNavigate();
  const { location } = useWeatherLocation();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.location} onClick={(): void | Promise<void> => navigate("/home")}>
          📍 {location}
        </h1>
        <div
          className={styles.search}
          onClick={(): void | Promise<void> => navigate("/search_and_history")}
        >
          🔍
        </div>
      </header>
      <main className={styles.mainContent}>
        <DomOutlet />
      </main>
    </div>
  );
};

export default Outlet;
