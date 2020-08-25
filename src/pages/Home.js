import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../component/CategoryComponent";
export default function Home() {
  const [latlong, setLatlong] = useState("");
  const [searchQuery, setQuery] = useState({
    search: "",
  });
  const [searchData, setData] = useState([]);
  const [items, setItems] = useState([]);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLatlong(res.coords.latitude + "," + res.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
  });
  const onChange = (e) => {
    setQuery({ [e.target.name]: e.target.value });
  };

  const setOnchangeItem = (dropdownItem) => {
    console.log(dropdownItem.value);
    setItems([dropdownItem]);
  };
  const searchAttractions = (e) => {
    e.preventDefault();
    const data = {
      ll: latlong,
      query: searchQuery,
      category: items,
    };
    axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        // res.data.map((data, index) => {
        //   setData({
        //     ...searchData,
        //     id: data.venue.id,
        //     name: data.venue.name,
        //     location: data.venue.location,
        //   });
        // });
        // console.log(searchData);
        setData(res.data);
        console.log(searchData);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="main">
      <section className="welcome">
        <div className="welcome-middle">
          <h1>Discover your next adventure</h1>
        </div>
        <form className="formsearch" onSubmit={searchAttractions}>
          <div className="searchbox">
            <input
              className="search"
              type="text"
              name="search"
              onChange={onChange}
              placeholder="eg: queenstown, tongariro etc..."
            />
            <Category
              title="Please select a category"
              multiSelect
              onChange={setOnchangeItem}
            />
          </div>
          <div className="btn-search">
            <button type="submit">Search</button>
          </div>
        </form>
      </section>
      <section>
        <div className="results">
          <p>Results</p>
          <ul>
            {searchData.map((data, index) => {
              return (
                <li key={data.venue.id}>
                  <h3>
                    {index}. &nbsp;
                    {data.venue.name}
                  </h3>
                  <h6>{data.venue.location.formattedAddress}</h6>
                </li>
              );
            })}
          </ul>
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
              anyone who seek an adeventure.
            </p>
          </div>
          <div className="activitiesimg1"></div>
        </div>
      </section>
    </div>
  );
}
