import { Outlet as DomOutlet } from "react-router-dom";
import "./Outlet.css";

const Outlet = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="location">📍 Singapore, SG</h1>
        <div className="search">🔍</div>
      </header>
      <main className="main-content">
        <DomOutlet />
      </main>
    </div>
  );
};

export default Outlet;
