import React from "react";

export const VIPCard = ({ data }) => {
  return (
    <div className="card h-100">
      <img
        src={data.image}
        alt={data.name}
        className="card-img-top"
        style={{ height: "550px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{data.name}</h5>
        <h6 className="card-subtitle mb-2 text-success">{data.worth}</h6>
        <p className="card-text text-muted">{data.source}</p>
      </div>
    </div>
  );
};
