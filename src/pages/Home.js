import React, { useState, useEffect } from "react";
import ActivitiesList from "../component/ActivitiesListComponent";
// import axios from "axios";
// import Category from "../component/CategoryComponent";
// import { Redirect } from "react-router-dom";
import SearchForm from "../component/SearchForm";
import axios from "axios";
export default function Home() {
  const [latlong, setLatlong] = useState("");
  const [destination, setDestination] = useState([]);
  const [hiking, setHiking] = useState([]);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatlong(res.coords.latitude + "," + res.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
    console.log(latlong);
    loadPopularDest();
    loadHikingPlaces();
  }, [latlong]);
  const loadPopularDest = () => {
    axios
      .post("http://localhost:5000/nearbyplaces", { ll: latlong })
      .then((res) => {
        console.log(res.data);
        setDestination(res.data);
      });
  };
  const loadHikingPlaces = () => {
    axios
      .post("http://localhost:5000/forhikers", { ll: latlong })
      .then((res) => {
        console.log(res.data);
        setHiking(res.data);
      });
  };
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
        <div className="box">
          {destination.map((data, index) => {
            if (index < 15) {
              return (
                <ActivitiesList photoUrl={data.photoUrl} name={data.name} />
              );
            }
          })}
        </div>
      </section>
      <section className="recommended">
        <h1>For Hikers</h1>
        <div className="box">
          {hiking.map((data, index) => {
            if (index < 15) {
              return (
                <ActivitiesList photoUrl={data.photoUrl} name={data.name} />
              );
            }
          })}
        </div>
      </section>
      <section className="activities">
        <h1>Fun Activities To Do</h1>

        <div className="funactivities">
          <div className="desc">
            <p>
              New Zealand's South and North Island is home to lot of
              attractions. A country where you can dig your own hot water pool,
              surf, ski and hike in the same day. The North Island is a volcanic
              wonderland with active volcanoes, amazing beaches and lots of
              wines. On the other hand, South Island is a land with glaciers,
              lakes with beautiful backdrops and Aoraki mountains, New Zealand
              highest mountain. Over all, its a place that never disappoints
              anyone who seek an adeventure.
            </p>
          </div>
          <div className="activitiesimg1"></div>
        </div>
      </section>
    </div>
  );
}
