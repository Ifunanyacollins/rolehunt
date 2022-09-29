import { Route, Routes } from "react-router-dom";
import Integration from ".";

export default function FormRoute() {
  return (
    <Routes>
      <Route path="/" element={<Integration />} />
    </Routes>
  );
}
