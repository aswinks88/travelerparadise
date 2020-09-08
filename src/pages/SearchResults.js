import React, { useEffect, useState } from "react";
import SearchList from "../component/SearchList";
import axios from "axios";
import { Spinner } from "react-bootstrap";
export default function SearchResults(props) {
  // const [placeId, setPlaceId] = useState([]);
  const [searchQuery, setQuery] = useState({
    search: "",
  });
  // const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [latlong, setLatlong] = useState("");
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatlong(res.coords.latitude + "," + res.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);
  const onChange = (e) => {
    setQuery({ [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    console.log(process.env.REACT_APP_PROD_URL);
    console.log(latlong);
    const data = {
      ll: latlong,
      query: searchQuery,
    };
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_PROD_URL}`, data)
      .then((res) => {
        // we update the data in the state history with newly returned search results
        //this will prevent from losing data on page reload
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
      <section className="searchresults" id="searchresults">
        <h1>Search</h1>
      </section>
      <section className="resultheading">
        {/* <h1>Top results</h1> */}
        <div className="searchbar" id="searchbar">
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
      <section className="results-return">
        {props.location.state === undefined ? (
          <p className="resultsfound">Try this 'Sushi near me' </p>
        ) : props.location.state.data.length === 0 ? (
          <p className="resultsfound">
            {props.location.state.data.length} results found, please search with
            a different keyword
          </p>
        ) : (
          <p className="resultsfound">
            {props.location.state.data.length} results found
          </p>
        )}
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
      <section className="emptysection" id="emptysection"></section>
    </div>
  );
}

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
