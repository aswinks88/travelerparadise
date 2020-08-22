import React from "react";
import bg from "../img/queenstown.jpg";
import well from "../img/wellington.jpg";
export default function Home() {
  return (
    <div className="main">
      <section className="welcome">
        <div className="welcome-middle">
          <h1>Discover your next adventure</h1>
        </div>
        <div className="searchbox">
          <input
            className="search"
            type="text"
            placeholder="eg: queenstown, tongariro etc..."
          />
        </div>
        <div className="btn-search">
          <a href="#search">Search</a>
        </div>
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
          <div className="destinationimg1">image1</div>
          <div className="destinationimg2">image2</div>
          <div className="destinationimg3">image3</div>
          <div className="destinationimg4">image4</div>
          <div className="destinationimg5">image5</div>
          <div className="destinationimg6">image6</div>
          <div className="destinationimg7">image7</div>
          <div className="destinationimg8">image8</div>
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
              enyone who seek an adeventure.
            </p>
          </div>
          <div className="activitiesimg1"></div>
        </div>
      </section>
    </div>
  );
}
