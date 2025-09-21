import React, { useEffect, useState } from "react";
import { AtlasInfo } from "./AtlasInfo";
import axios from "axios";
import { AtlasInput } from "./AtlasInput";

export const Atlas = () => {
  const [infoItem, setInfoItem] = useState([]);
  
  useEffect(() => {
    doApi("Israel");
  }, []);
  
  const doApi = async (_country) => {
    setInfoItem({});
    let url = `https://restcountries.com/v3.1/name/${_country}`;
    try {
      const response = await axios.get(url);
      console.log(response.data[0]);
      setInfoItem(response.data[0]);
    } catch (error) {
      console.error("Error fetching API data:", error);
      alert("There is a problem, or the country was not found");
    }
  };
  
  const doApiCountryCode = async (_countryCode) => {
    setInfoItem({});
    let url = `https://restcountries.com/v3.1/alpha/${_countryCode}`;
    try {
      const response = await axios.get(url);
      console.log(response.data[0]);
      setInfoItem(response.data[0]);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary">Atlas App</h1>
        <p className="text-muted">Explore countries around the world</p>
      </div>
      <AtlasInput doApi={doApi} />
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode} />
    </div>
  );
};