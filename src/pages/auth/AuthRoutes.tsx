import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgotpassword";
import ConfirmEmail from "./comfirmEmail";

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<h1>hello world</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirm" element={<ConfirmEmail />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}
