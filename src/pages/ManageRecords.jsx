import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function ManageRecords() {
  const navigate = useNavigate();

  const sampleRecords = [
    {
      id: 1,
      contacts: "ABC-001",
      wg: "20",
      crimpingTool: "M22520/1-01",
      turretLocator: "TH1A",
      selectorPosition: "4",
    },
    {
      id: 2,
      contacts: "DEF-002",
      wg: "22",
      crimpingTool: "M22520/2-01",
      turretLocator: "TH2B",
      selectorPosition: "5",
    },
  ];

  return (
    <>
      <Header
        role="Administrator"
        showDashboard={true}
      />

      <main className="page-container">

        <div className="manage-heading">
          <div>
            <h1 className="page-title">
              Manage Records
            </h1>

            <p className="page-subtitle">
              View and manage existing tool records.
            </p>
          </div>

          <button
            className="btn btn-primary"
            onClick={() =>
              navigate("/admin/save")
            }
          >
            + Add New Record
          </button>
        </div>


        <div className="results-card">

          <div className="results-header">

            <div>
              <h3>Tool Records</h3>

              <span className="result-count">
                {sampleRecords.length} sample record(s)
              </span>
            </div>

          </div>


          <div className="table-container">

            <table className="records-table">

              <thead>
                <tr>
                  <th>Contacts</th>
                  <th>WG</th>
                  <th>Crimping Tool</th>
                  <th>Turret / Locator</th>
                  <th>S/Posn</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {sampleRecords.map((record) => (

                  <tr key={record.id}>

                    <td>
                      <span className="contact-value">
                        {record.contacts}
                      </span>
                    </td>

                    <td>{record.wg}</td>

                    <td>
                      {record.crimpingTool}
                    </td>

                    <td>
                      {record.turretLocator}
                    </td>

                    <td>
                      {record.selectorPosition}
                    </td>

                    <td>
                      <div className="table-actions">

                        <button
                          className="action-button view-action"
                        >
                          View
                        </button>

                        <button
                          className="action-button edit-action"
                        >
                          Edit
                        </button>

                        <button
                          className="action-button delete-action"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>
    </>
  );
}

export default ManageRecords;