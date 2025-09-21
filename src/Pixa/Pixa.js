import React, { useEffect, useState } from "react";
import axios from "axios";
import PixaInfo from "./PixaInfo";
import { PixaInput } from "./PixaInput";
const BASE_URL = "https://api.pexels.com/v1";

const Pixa = () => {
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages("cats");
  }, []);

  const fetchImages = async (q, page = 1, per_page = 40) => {
    if (!API_KEY) {
      setError("API key is missing");
      return;
    }
    setImages([]);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: q,
          page: page,
          per_page: per_page,
        },
      });

      setImages(response.data.photos || []);
    } catch (err) {
      console.error("fetchImages error:", err);
      const status = err.response?.status;
      setError(
        status ? `Error ${status} ${err.response.statusText}` : "Network error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="text-center mb-4">
            <h2 className="display-5 fw-bold text-primary mb-3">
              <i className="fas fa-images me-3"></i>
              Pixa Gallery
            </h2>
            <p className="lead text-muted">
              Discover amazing photos from around the world
            </p>
          </div>

          <PixaInput fetchImages={fetchImages} />

          {loading && (
            <div className="d-flex justify-content-center py-5">
              <div className="text-center">
                <div
                  className="spinner-border text-primary mb-3"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="text-muted">Searching for images...</p>
              </div>
            </div>
          )}

          {error && (
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <i className="fas fa-exclamation-triangle me-2"></i>
              <div>
                <strong>Error:</strong> {error}
              </div>
            </div>
          )}

          {!loading && images.length === 0 && !error && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <p className="h5 text-muted">
                No images found. Try searching for something else!
              </p>
            </div>
          )}

          {!loading && images.length > 0 && (
            <div className="mt-4">
              <PixaInfo images={images} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pixa;
