import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    const foundProperty = properties.find(
      (property) => property.id === parseInt(id)
    );
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div>
      <h2>Property Details</h2>
      <p>Type: {property.type}</p>
      <p>Size: {property.size}</p>
      <p>Location: {property.location}</p>
      <p>Budget: {property.budget}</p>
      <p>Availability: {property.availability}</p>
    </div>
  );
};

export default Property;
