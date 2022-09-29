import { Route, Routes } from "react-router-dom";
import Report from ".";

export default function FormRoute() {
  return (
    <Routes>
      <Route path="/" element={<Report />} />
    </Routes>
  );
}
