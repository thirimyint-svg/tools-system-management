// src/components/Header.jsx
import { useNavigate } from "react-router-dom";

function Header({ role = "User", showDashboard = false }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">TR</div>

        <div>
          <h2>Tool Record System</h2>
          <span className="header-subtitle">
            Tool Record Management
          </span>
        </div>
      </div>

      <div className="header-actions">
        <div className="header-role">
          {role}
        </div>

        {showDashboard && (
          <button
            type="button"
            className="header-button"
            onClick={() => navigate("/admin")}
          >
            Dashboard
          </button>
        )}

        <button
          type="button"
          className="header-button header-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;