import React from "react";

const PixaInfo = (props) => {
  const { images } = props;
  return (
    <div className="row g-3">
      {images.map((img) => (
        <div key={img.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <img
              src={img.src.medium}
              alt={img.photographer}
              className="card-img-top"
              style={{
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "0.375rem",
                borderTopRightRadius: "0.375rem",
              }}
            />
            <div className="card-body p-2">
              <p className="card-text small text-muted mb-0">
                <i className="fas fa-camera me-1"></i>
                {img.photographer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PixaInfo;
