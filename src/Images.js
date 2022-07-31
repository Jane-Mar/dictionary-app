import React from "react";

export default function Images(props) {
  if (props.result) {
    return (
      <div className="row Image">
        {props.result.photos.map(function (image, index) {
          return (
            <div className="col-4" key={index}>
              <a href={image.src.original} target="_blanket">
                <img
                  src={image.src.landscape}
                  alt="search word"
                  className="img-fluid mb-4"
                  rel="noreferrer"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
