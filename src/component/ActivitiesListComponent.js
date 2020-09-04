import React from "react";

function ActivitiesListComponent(props) {
  return (
    <div key={props.key} className="boxes">
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
        <a className="mapurl" href={props.url}>
          {" "}
          <h5> {props.name} </h5>
        </a>
      </div>
    </div>
  );
}

export default ActivitiesListComponent;
