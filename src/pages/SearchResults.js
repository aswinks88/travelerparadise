import React from "react";

export default function SearchResults() {
  return (
    <div>
      <section className="searchresults">
        <h1>SEARCH RESULTS</h1>
      </section>
      <section className="resultheading">
        <h1>Top results</h1>
        <div className="filters">
          <div className="sortby">Sortby: &nbsp;</div>
          <select className="sortorder">
            <option value="popularity"> Popularity</option>
            <option value="distance">Distance</option>
          </select>
        </div>
      </section>
      <section className="searchlist">
        <div className="searchcard1">
          <div className="image"></div>
          <div className="description">
            <h1>Place Name</h1>
            <p>
              Glenorchy is a small settlement at the northern end of Lake
              Wakatipu in the South Island region of Otago, New Zealand. It is
              approximately 45 km by road or boat from Queenstown, the nearest
              large town.
            </p>
            <a href="#link">Relevant Link</a>
          </div>
        </div>
        <div className="searchcard2">
          <div className="image"></div>
          <div className="description">
            <h1>Place Name</h1>
            <p>
              Glenorchy is a small settlement at the northern end of Lake
              Wakatipu in the South Island region of Otago, New Zealand. It is
              approximately 45 km by road or boat from Queenstown, the nearest
              large town.
            </p>
            <a href="#link">Relevant Link</a>
          </div>
        </div>
        <div className="searchcard2">
          <div className="image"></div>
          <div className="description">
            <h1>Place Name</h1>
            <p>
              Glenorchy is a small settlement at the northern end of Lake
              Wakatipu in the South Island region of Otago, New Zealand. It is
              approximately 45 km by road or boat from Queenstown, the nearest
              large town.
            </p>
            <a href="#link">Relevant Link</a>
          </div>
        </div>
        <div className="searchcard2">
          <div className="image"></div>
          <div className="description">
            <h1>Place Name</h1>
            <p>
              Glenorchy is a small settlement at the northern end of Lake
              Wakatipu in the South Island region of Otago, New Zealand. It is
              approximately 45 km by road or boat from Queenstown, the nearest
              large town.
            </p>
            <a href="#link">Relevant Link</a>
          </div>
        </div>
      </section>
    </div>
  );
}
