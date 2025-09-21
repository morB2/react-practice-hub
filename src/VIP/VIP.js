import React, { useEffect, useState } from "react";
import {VIPCard} from "./VIPCard";

const VIP = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await fetch("https://expressrichpepole.onrender.com/");
      let json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary">VIP Members</h1>
        <p className="text-muted">Meet the world's richest people</p>
      </div>
      {data ? (
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4">
              <VIPCard data={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VIP;
