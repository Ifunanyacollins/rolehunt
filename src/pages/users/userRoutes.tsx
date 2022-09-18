import { Route, Routes } from "react-router-dom";
import Users from "./";
import ReviewUser from "./ReviewUser";
import SingleUserPage from "./SingleUserPage";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:id" element={<SingleUserPage />} />
      <Route path="/pending" element={<ReviewUser />} />
    </Routes>
  );
}
