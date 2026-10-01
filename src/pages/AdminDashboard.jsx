import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header role="Administrator" />

      <main className="page-container">
        <div className="dashboard-heading">
          <div>
            <h1 className="page-title">
              Admin Dashboard
            </h1>

            <p className="page-subtitle">
              Manage and maintain your tool records.
            </p>
          </div>
        </div>

        <div className="dashboard-grid">

          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/save")}
          >
            <div className="dashboard-card-icon">
              +
            </div>

            <h3>Add New Record</h3>

            <p>
              Create and save a new tool record
              in the system.
            </p>

            <span className="dashboard-link">
              Add record →
            </span>
          </div>


          <div
            className="dashboard-card"
            onClick={() => navigate("/search")}
          >
            <div className="dashboard-card-icon">
              ⌕
            </div>

            <h3>Search Records</h3>

            <p>
              Search existing records using
              contact information.
            </p>

            <span className="dashboard-link">
              Search records →
            </span>
          </div>


          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/manage")}
          >
            <div className="dashboard-card-icon">
              ☷
            </div>

            <h3>Manage Records</h3>

            <p>
              View, edit and manage all
              saved tool records.
            </p>

            <span className="dashboard-link">
              Manage records →
            </span>
          </div>

        </div>
      </main>
    </>
  );
}

export default AdminDashboard;