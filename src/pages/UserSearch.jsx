import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSearch() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  // Temporary sample data
  const records = [
    {
      id: 1,
      contacts: "ABC-001",
      wg: "20",
      crimpingTool: "M22520/1-01",
      turretLocator: "TH1A",
      selectorPosition: "4",
      remarks: "Test record",
    },
    {
      id: 2,
      contacts: "DEF-002",
      wg: "22",
      crimpingTool: "M22520/2-01",
      turretLocator: "TH2B",
      selectorPosition: "5",
      remarks: "Sample record",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredRecords = records.filter((record) =>
      record.contacts
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );

    setResults(filteredRecords);
  };

  const handleClear = () => {
    setSearchText("");
    setResults([]);
  };

  return (
    <>
      {/* HEADER */}
     <Header role="User" />

      {/* MAIN PAGE */}
      <main className="page-container">

        {/* PAGE HEADING */}
        <div className="search-page-heading">

          <div>
            <h1 className="page-title">
              Find Tool Record
            </h1>

            <p className="page-subtitle">
              Search tool information by contact number
            </p>
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin")}
          >
            ← Dashboard
          </button>

        </div>

        {/* SEARCH PANEL */}
        <div className="search-panel">

          <div className="search-panel-title">
            Search Records
          </div>

          <form onSubmit={handleSearch}>

            <div className="professional-search-row">

              <div className="search-input-wrapper">

                <span className="search-icon">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Enter contact number, e.g. ABC-001"
                  value={searchText}
                  onChange={(e) =>
                    setSearchText(e.target.value)
                  }
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary search-button"
              >
                Search
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClear}
              >
                Clear
              </button>

            </div>

          </form>

        </div>

        {/* SEARCH RESULTS */}
        {results.length > 0 && (

          <div className="results-card">

            <div className="results-header">

              <div>
                <h3>Search Results</h3>

                <span className="result-count">
                  {results.length} record(s) found
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
                    <th>Remarks</th>
                  </tr>
                </thead>

                <tbody>

                  {results.map((record) => (

                    <tr key={record.id}>

                      <td>
                        <span className="contact-value">
                          {record.contacts}
                        </span>
                      </td>

                      <td>{record.wg || "-"}</td>

                      <td>
                        {record.crimpingTool || "-"}
                      </td>

                      <td>
                        {record.turretLocator || "-"}
                      </td>

                      <td>
                        {record.selectorPosition || "-"}
                      </td>

                      <td>
                        {record.remarks || "-"}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

        {/* NO RESULTS */}
        {searchText && results.length === 0 && (

          <div className="empty-result">

            <div className="empty-result-icon">
              ⌕
            </div>

            <h3>No records found</h3>

            <p>
              We couldn't find a record matching
              <strong> "{searchText}"</strong>.
            </p>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear Search
            </button>

          </div>

        )}

        {/* INITIAL SEARCH MESSAGE */}
        {!searchText && results.length === 0 && (

          <div className="search-help">

            <div className="search-help-icon">
              ⌕
            </div>

            <h3>Search for a tool record</h3>

            <p>
              Enter a contact number above to view
              the related tool information.
            </p>

          </div>

        )}

      </main>
    </>
  );
}

export default UserSearch;