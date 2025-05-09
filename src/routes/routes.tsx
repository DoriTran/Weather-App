import { Route, Routes, Navigate } from "react-router-dom";
import Outlet from "./Outlet";
import { HomePage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/task" element={<Task />} />
        <Route path="/host" element={<Host />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/save" element={<Save />} />
        <Route path="/config" element={<Config />} /> */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
