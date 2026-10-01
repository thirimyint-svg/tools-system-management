import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function SaveRecord() {
  const navigate = useNavigate();

  const emptyForm = {
    contacts: "",
    wg: "",
    crimpingTool: "",
    turretLocator: "",
    selectorPosition: "",
    remarks: "",
  };

  const [formData, setFormData] =
    useState(emptyForm);

  const [message, setMessage] =
    useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Record:", formData);

    setMessage(
      "Record is ready to save. Database connection will be added next."
    );
  };

  const handleClear = () => {
    setFormData(emptyForm);
    setMessage("");
  };

  return (
    <>
      <Header
        role="Administrator"
        showDashboard={true}
      />

      <main className="page-container">

        <div className="form-page-heading">
          <div>
            <h1 className="page-title">
              Add New Tool Record
            </h1>

            <p className="page-subtitle">
              Enter the tool information below.
            </p>
          </div>
        </div>


        <div className="form-card">

          <div className="form-card-header">
            <div>
              <h3>Tool Information</h3>

              <p>
                Fields marked with * are required.
              </p>
            </div>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Contacts
                  <span className="required-mark">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  name="contacts"
                  value={formData.contacts}
                  onChange={handleChange}
                  placeholder="e.g. ABC-001"
                  required
                />
              </div>


              <div className="form-group">
                <label>WG</label>

                <input
                  type="text"
                  name="wg"
                  value={formData.wg}
                  onChange={handleChange}
                  placeholder="Enter WG"
                />
              </div>


              <div className="form-group">
                <label>Crimping Tool</label>

                <input
                  type="text"
                  name="crimpingTool"
                  value={formData.crimpingTool}
                  onChange={handleChange}
                  placeholder="e.g. M22520/1-01"
                />
              </div>


              <div className="form-group">
                <label>
                  Turret / Locator
                </label>

                <input
                  type="text"
                  name="turretLocator"
                  value={formData.turretLocator}
                  onChange={handleChange}
                  placeholder="Enter turret or locator"
                />
              </div>


              <div className="form-group">
                <label>S/Posn</label>

                <input
                  type="text"
                  name="selectorPosition"
                  value={formData.selectorPosition}
                  onChange={handleChange}
                  placeholder="Enter selector position"
                />
              </div>


              <div className="form-group full-width">
                <label>Remarks</label>

                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Enter additional information..."
                  rows="4"
                />
              </div>

            </div>


            <div className="form-actions">

              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Record
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="button"
                className="btn btn-light"
                onClick={() =>
                  navigate("/admin")
                }
              >
                Cancel
              </button>

            </div>

          </form>


          {message && (
            <div className="success-message">
              ✓ {message}
            </div>
          )}

        </div>
      </main>
    </>
  );
}

export default SaveRecord;