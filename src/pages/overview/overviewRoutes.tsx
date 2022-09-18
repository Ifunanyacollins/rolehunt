import { Route, Routes } from "react-router-dom";
import Overview from "./";

export default function OverviewRoute() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
    </Routes>
  );
}
