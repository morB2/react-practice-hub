import React, { useEffect, useState } from "react";
import PixaInfo from "./PixaInfo";
import { PixaInput } from "./PixaInput";
import { fetchImages } from "../services/FetchData";

const Pixa = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages("cats", setImages, setLoading, setError);
  }, []);

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

          <PixaInput
            fetchImages={fetchImages}
            setImages={setImages}
            setLoading={setLoading}
            setError={setError}
          />

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
