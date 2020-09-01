import React from "react";

function ActivitiesListComponent(props) {
  return (
    <div className="boxes">
      <div className="image">
        {props.photoUrl !== "N/A" ? (
          <img className="card-img" src={props.photoUrl} alt="place" />
        ) : (
          <img
            className="card-image"
            src="https://icon-library.net//images/no-photo-available-icon/no-photo-available-icon-8.jpg"
            width="350"
            alt="not available"
          />
        )}
      </div>
      <div className="name">
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default ActivitiesListComponent;
