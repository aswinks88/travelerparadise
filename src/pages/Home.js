import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Category from "../component/CategoryComponent";
// import { Redirect } from "react-router-dom";
import SearchForm from "../component/SearchForm";
export default function Home() {
  const [latlong, setLatlong] = useState("");
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatlong(res.coords.latitude + "," + res.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
  });
  return (
    <div className="main">
      <section className="welcome">
        <div className="welcome-middle">
          <h1>Discover your next adventure</h1>
        </div>
        <SearchForm location={latlong} />
      </section>
      <section className="populardestination">
        <h1>Popular Destination</h1>
        <div className="box">
          <div className="box1">Cathedral Cove</div>
          <div className="box2">Wellington cable car</div>
          <div className="box3">Mt Cook</div>
          <div className="box4">Milford</div>
        </div>
      </section>
      <section className="recommended">
        <h1>For Hikers</h1>
        <div className="hikers">
          <div className="destinationimg1">Franz Josef Glacier</div>
          <div className="destinationimg2">Mt Taranaki</div>
          <div className="destinationimg3">Tongariro Crossing </div>
          <div className="destinationimg4">Hiking At Wanaka</div>
          <div className="destinationimg5">Hump Ridge Track</div>
          <div className="destinationimg6">Glenorchy</div>
          <div className="destinationimg7">Taupo</div>
          <div className="destinationimg8">Abel Tasman</div>
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
