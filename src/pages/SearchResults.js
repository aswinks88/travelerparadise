import React, { useEffect, useState } from "react";
import SearchList from "../component/SearchList";
import axios from "axios";
import GOOGLE_KEY from "../keys";
export default function SearchResults(props) {
  const [placeId, setPlaceId] = useState([]);
  const FetchIndividualPlaceDetails = () => {
    // setPlaceId(props.placeId);
    props.history.location.state.data.map((placeid) => {
      setPlaceId([...placeId, placeid.placeId]);
    });
    axios
      .get(`http://localhost:5000/placedetails`, {
        params: {
          placeid: props.placeId,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(placeId);
  };
  useEffect(() => {
    FetchIndividualPlaceDetails();
  }, []);
  return (
    <div className="searchsection">
      <section className="searchresults">
        <h1>SEARCH RESULTS</h1>
      </section>
      <section className="resultheading">
        {/* <h1>Top results</h1> */}
        <div className="filters">
          <div className="sortby">Sortby: &nbsp;</div>
          <select className="sortorder">
            <option value="popularity"> Popularity</option>
            <option value="distance">Distance</option>
          </select>
        </div>
      </section>
      <section className="searchlist">
        {props.history.location.state.data.map((data, index) => {
          return (
            <SearchList
              key={data.placeId}
              name={data.name}
              address={data.address}
              tags={data.tags}
              status={data.status}
              photoUrl={data.photoUrl}
              placeId={data.placeId}
              place_details={data.place_details}
            />
          );
        })}
      </section>
    </div>
  );
}
