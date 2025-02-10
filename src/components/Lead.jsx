import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Lead = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem("leads")) || [];
    const foundLead = leads.find((lead) => lead.id === parseInt(id));
    setLead(foundLead);
  }, [id]);

  if (!lead) {
    return <h2>Lead not found</h2>;
  }

  return (
    <div>
      <h2>Lead Details</h2>
      <p>Name: {lead.name}</p>
      <p>Phone: {lead.phone}</p>
    </div>
  );
};

export default Lead;
