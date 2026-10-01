import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserSearch from "./pages/UserSearch";
import SaveRecord from "./pages/SaveRecord";
import ManageRecords from "./pages/ManageRecords";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/save"
          element={<SaveRecord />}
        />

        <Route
          path="/admin/manage"
          element={<ManageRecords />}
        />

        <Route
          path="/search"
          element={<UserSearch />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;