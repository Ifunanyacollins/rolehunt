import { Route, Routes } from "react-router-dom";
import Applications from ".";

export default function FormRoute() {
  return (
    <Routes>
      <Route path="/" element={<Applications />} />
      <Route path="/:id" element={<h1>form id number 1</h1>} />
    </Routes>
  );
}
