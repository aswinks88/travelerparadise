import React, { useEffect, useState } from "react";
import axios from "axios";
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
          <p>
            {" "}
            <strong>Address:&nbsp;</strong>
            {props.address}
          </p>
        </div>
        <div>
          <p>
            <strong>PH:</strong>{" "}
            {props.place_details.hasOwnProperty("formatted_phone_number")
              ? props.place_details.formatted_phone_number
              : "N/A"}
          </p>
        </div>
        <div>
          <a href={props.place_details.url}>Maps</a>
        </div>
        <div>
          <p>
            <strong>Status:</strong> {props.status}
          </p>
        </div>
        <div>
          <p>
            <strong>Link:</strong>{" "}
            {props.place_details.website === undefined ? (
              <a href="#n/a">N/A</a>
            ) : (
              <a href={props.place_details.website}>Official Webpage</a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
