import { Route, Routes, Navigate } from "react-router-dom";
import Outlet from "./Outlet";
import { HomePage, SearchHistoryPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search_and_history" element={<SearchHistoryPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
