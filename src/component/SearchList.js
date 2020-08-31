import React, { useEffect, useState } from "react";
import axios from "axios";
import images from "../img/glenorchy.jpg";
function SearchList(props) {
  const [placeId, setPlaceId] = useState([]);
  console.log(props.placeId);
  const FetchIndividualPlaceDetails = () => {
    axios
      .get(`http://localhost:5000/placedetails`, {
        params: {
          placeid: props.placeId,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  useEffect(() => {
    FetchIndividualPlaceDetails();
    //   props.history.location.state.data.map((data) => {
    // console.log(data.placeId);
    // setPlaceId(data.placeId);
    // axios
    //   .get(`http://localhost:5000/placedetails`, {
    //     params: {
    //       placeid: placeId,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    //   });
  });
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
