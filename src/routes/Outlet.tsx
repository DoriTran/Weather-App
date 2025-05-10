import { Outlet as DomOutlet, useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./Outlet.module.scss";
import useWeatherLocation from "hooks/useWeatherLocation";
import { Icon } from "components";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Outlet = () => {
  const navigate: NavigateFunction = useNavigate();
  const { location } = useWeatherLocation();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1 className={styles.location} onClick={(): void | Promise<void> => navigate("/home")}>
            <Icon icon={faLocationDot} size={22} /> {location}
          </h1>
          <Icon
            icon={faMagnifyingGlass}
            size={22}
            onClick={(): void | Promise<void> => navigate("/search_and_history")}
          />
        </div>
      </header>
      <main className={styles.mainContent}>
        <DomOutlet />
      </main>
    </div>
  );
};

export default Outlet;
