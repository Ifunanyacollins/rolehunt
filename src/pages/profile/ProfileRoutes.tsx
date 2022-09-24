import { Route, Routes } from "react-router-dom";
import Profile from ".";

export default function FormRoute() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
