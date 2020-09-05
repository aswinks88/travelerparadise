import React, { useEffect, useState } from "react";
import SearchList from "../component/SearchList";
import axios from "axios";
import { Spinner } from "react-bootstrap";
export default function SearchResults(props) {
  const [placeId, setPlaceId] = useState([]);
  const [searchQuery, setQuery] = useState({
    search: "",
  });
  // const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // const FetchIndividualPlaceDetails = () => {
  //   if (props.location.state === undefined) {
  //     return "";
  //   }
  //   props.history.location.state.data.map((placeid) => {
  //     setPlaceId([...placeId, placeid.placeId]);
  //   });
  //   axios
  //     .get(`http://localhost:5000/placedetails`, {
  //       params: {
  //         placeid: props.placeId,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  //   console.log(placeId);
  // };
  // useEffect(() => {
  //   FetchIndividualPlaceDetails();
  // }, []);
  const onChange = (e) => {
    setQuery({ [e.target.name]: e.target.value });
    console.log(searchQuery);
  };
  const searchHandler = () => {
    const data = {
      // ll: props.location,
      query: searchQuery,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        // update history with the newly returned search results
        //this will preserve the state on page reload
        props.history.push({ state: { data: res.data } });
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="searchsection">
      <section className="searchresults">
        <h1>Top Results</h1>
      </section>
      <section className="resultheading">
        {/* <h1>Top results</h1> */}
        <div className="searchbar">
          {/* <div className="sortby">Sortby: &nbsp;</div> */}
          {/* <select className="sortorder">
            <option value="popularity"> Popularity</option>
            <option value="distance">Distance</option>
          </select> */}

          <input
            className="search"
            type="text"
            name="search"
            onChange={onChange}
            placeholder="eg: activities near me..."
          />
          {!isLoading ? (
            <button onClick={searchHandler} type="button">
              Search
            </button>
          ) : (
            <button>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>
          )}
        </div>
      </section>
      <section className="searchlist">
        {props.location.state !== undefined
          ? props.location.state.data.map((data, index) => {
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
            })
          : ""}
      </section>
    </div>
  );
}
