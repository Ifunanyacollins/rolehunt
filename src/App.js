import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import AuthRoute from "./pages/auth/AuthRoutes";
import FormRoute from "./pages/applications/ApplicationsRoutes";
import OverviewRoute from "./pages/overview/overviewRoutes";
import UserRoute from "./pages/users/userRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<OverviewRoute />} />
          <Route path="applications/*" element={<FormRoute />} />
          <Route path="users/*" element={<UserRoute />} />
        </Route>
        <Route path="auth/*" element={<AuthRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
