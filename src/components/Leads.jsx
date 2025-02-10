import React, { useState, useEffect } from "react";

const Leads = () => {
  const [leads, setLeads] = useState(() => {
    const storedLeads = localStorage.getItem("leads");
    return storedLeads ? JSON.parse(storedLeads) : [];
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const handleAddOrEdit = () => {
    if (editId !== null) {
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead.id === editId ? { id: editId, name, phone } : lead
        )
      );
      setEditId(null);
    } else {
      const newLead = { id: Date.now(), name, phone };
      setLeads((prevLeads) => [...prevLeads, newLead]);
    }
    setName("");
    setPhone("");
  };

  const handleEdit = (id) => {
    const leadToEdit = leads.find((lead) => lead.id === id);
    setName(leadToEdit.name);
    setPhone(leadToEdit.phone);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Leads</h2>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrEdit} style={styles.button}>
          {editId !== null ? "Edit Lead" : "Add Lead"}
        </button>
      </div>
      <div style={styles.listContainer}>
        {leads.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Phone</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td style={styles.tableCell}>{lead.id}</td>
                  <td style={styles.tableCell}>{lead.name}</td>
                  <td style={styles.tableCell}>{lead.phone}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleEdit(lead.id)}
                      style={styles.actionButton}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.noDataText}>No leads available. Add one above!</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "calc(50% - 10px)",
    minWidth: "200px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    minWidth: "200px",
  },
  listContainer: {
    marginTop: "20px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    textAlign: "left",
  },
  tableHeader: {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  },
  tableCell: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  actionButton: {
    padding: "5px 10px",
    fontSize: "12px",
    margin: "0 5px",
    border: "none",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "12px",
    margin: "0 5px",
    border: "none",
    color: "#fff",
    backgroundColor: "#dc3545",
    borderRadius: "4px",
    cursor: "pointer",
  },
  noDataText: {
    textAlign: "center",
    fontSize: "16px",
    marginTop: "20px",
    color: "#555",
  },
};

export default Leads;
