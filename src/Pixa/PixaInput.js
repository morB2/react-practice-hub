import React, { useRef } from "react";

export function PixaInput(props) {
  const inputRef = useRef();
  return (
    <div className="bg-primary p-4 mb-4 rounded-3 shadow-sm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="input-group input-group-lg">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    props.fetchImages(inputRef.current.value);
                  }
                }}
                ref={inputRef}
                placeholder="Search for images and enter"
                type="text"
                className="form-control border-0 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
