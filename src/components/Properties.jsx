import React, { useState, useEffect } from "react";

const Properties = () => {
  const [properties, setProperties] = useState(() => {
    const storedProperties = localStorage.getItem("properties");
    return storedProperties ? JSON.parse(storedProperties) : [];
  });

  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [availability, setAvailability] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  const handleAddOrEdit = () => {
    if (editId !== null) {
      setProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.id === editId
            ? { id: editId, type, size, location, budget, availability }
            : property
        )
      );
      setEditId(null);
    } else {
      const newProperty = {
        id: Date.now(),
        type,
        size,
        location,
        budget,
        availability,
      };
      setProperties((prevProperties) => [...prevProperties, newProperty]);
    }
    setType("");
    setSize("");
    setLocation("");
    setBudget("");
    setAvailability("");
  };

  const handleEdit = (id) => {
    const propertyToEdit = properties.find((property) => property.id === id);
    setType(propertyToEdit.type);
    setSize(propertyToEdit.size);
    setLocation(propertyToEdit.location);
    setBudget(propertyToEdit.budget);
    setAvailability(propertyToEdit.availability);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setProperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== id)
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Properties</h2>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrEdit} style={styles.button}>
          {editId !== null ? "Edit Property" : "Add Property"}
        </button>
      </div>
      <div style={styles.listContainer}>
        {properties.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Type</th>
                <th style={styles.tableHeader}>Size</th>
                <th style={styles.tableHeader}>Location</th>
                <th style={styles.tableHeader}>Budget</th>
                <th style={styles.tableHeader}>Availability</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id}>
                  <td style={styles.tableCell}>{property.id}</td>
                  <td style={styles.tableCell}>{property.type}</td>
                  <td style={styles.tableCell}>{property.size}</td>
                  <td style={styles.tableCell}>{property.location}</td>
                  <td style={styles.tableCell}>${property.budget}</td>
                  <td style={styles.tableCell}>{property.availability}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleEdit(property.id)}
                      style={styles.actionButton}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(property.id)}
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
          <p style={styles.noDataText}>
            No properties available. Add one above!
          </p>
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
    width: "calc(33% - 10px)",
    minWidth: "150px",
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
    minWidth: "150px",
  },
  listContainer: {
    marginTop: "20px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  tableHeader: {
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#f4f4f4",
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

export default Properties;
