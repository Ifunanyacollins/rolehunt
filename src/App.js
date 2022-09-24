import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import AuthRoute from "./pages/auth/AuthRoutes";
import ApplicationRoute from "./pages/applications/ApplicationsRoutes";
import OverviewRoute from "./pages/overview/overviewRoutes";
import ProfileRoute from "./pages/profile/ProfileRoutes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<OverviewRoute />} />
          <Route path="applications/*" element={<ApplicationRoute />} />
          <Route path="profile" element={<ProfileRoute />} />
        </Route>
        <Route path="auth/*" element={<AuthRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
