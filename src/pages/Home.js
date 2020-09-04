import React, { useState, useEffect } from "react";
import ActivitiesList from "../component/ActivitiesListComponent";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";
import SearchForm from "../component/SearchForm";
import axios from "axios";

export default function Home() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const [latlong, setLatlong] = useState("");
  const [destination, setDestination] = useState([]);
  const [hiking, setHiking] = useState([]);
  const [funActivities, setFunAct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatlong(res.coords.latitude + "," + res.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
    console.log(latlong);
    if (latlong === "") {
      console.log("empty");
    } else {
      // loadPopularDest();
      // loadHikingPlaces();
      // loadFunActivities();
    }
  }, [latlong]);
  const loadPopularDest = async () => {
    await axios
      .post("http://localhost:5000/nearbyplaces", { ll: latlong })
      .then(async (res) => {
        console.log(res.data);
        setDestination(await res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadHikingPlaces = async () => {
    await axios
      .post("http://localhost:5000/forhikers", { ll: latlong })
      .then((res) => {
        console.log(res.data);
        setHiking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadFunActivities = async () => {
    await axios
      .post("http://localhost:5000/funactivities", { ll: latlong })
      .then((res) => {
        console.log(res.data);
        setFunAct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const PlaceIdHandler = (placeId) => {
  //   axios
  //     .post("http://localhost:5000/fetchplacedetails", { placeId: placeId })
  //     .then((res) => {
  //       setUrl(res.data.result.url);
  //       console.log(destination, url);
  //     })
  // .catch((err) => {
  //   console.log(err);
  // });
  // };
  return (
    <div className="main">
      <section className="welcome">
        <div className="welcome-middle">
          <h1>Discover your next adventure</h1>
        </div>
        <SearchForm location={latlong} />
      </section>
      <section className="populardestination">
        <h1>Popular Destination Near You</h1>
        {isLoading ? (
          <p>
            Loading your destination...
            <GridLoader
              css={override}
              size={20}
              color={"#f70058"}
              loading={isLoading}
            />
          </p>
        ) : (
          <div className="box">
            {destination.map((data, index) => {
              if (index < 15) {
                return (
                  <ActivitiesList
                    key={data.placeId}
                    photoUrl={data.photoUrl}
                    name={data.name}
                    placeId={data.placeId}
                    url={data.place_details.url}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
      <section className="recommended">
        <h1>Ready for Hiking?</h1>
        {isLoading ? (
          <p>
            Loading your next Hiking spots
            <GridLoader
              css={override}
              size={20}
              color={"#f70058"}
              loading={isLoading}
            />
          </p>
        ) : (
          <div className="box">
            {hiking.map((data, index) => {
              if (index < 15) {
                return (
                  <ActivitiesList
                    key={data.placeId}
                    photoUrl={data.photoUrl}
                    name={data.name}
                    placeId={data.placeId}
                    url={data.place_details.url}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
      <section className="activities">
        <h1>Fun Activities To Do</h1>
        {isLoading ? (
          <p>
            Loading your fun activities
            <GridLoader
              css={override}
              size={20}
              color={"#f70058"}
              loading={isLoading}
            />
          </p>
        ) : (
          <div className="box">
            {funActivities.map((data, index) => {
              if (index < 15) {
                return (
                  <ActivitiesList
                    key={data.placeId}
                    photoUrl={data.photoUrl}
                    name={data.name}
                    placeId={data.placeId}
                    url={data.place_details.url}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
    </div>
  );
}
