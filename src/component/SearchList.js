import React from "react";
import images from "../img/glenorchy.jpg";
function SearchList(props) {
  return (
    <div className="searchcard1">
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
      <div className="description">
        <div>
          <h6>{props.name}</h6>
        </div>
        <div>
          <p>{props.address}</p>
        </div>
        <div>
          <p>{props.status}</p>
        </div>
        <div>
          <a href="#link">{props.website}</a>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
{
  /* <div className="searchcard1">
      <div className="image">
        <img src={images} alt="place" />
      </div>
      <div className="description">
        <h6>Trekking</h6>
        <p>mt roskill</p>
        <p>Operational</p>

        <a href="#link">some link</a>
      </div>
    </div> */
}
