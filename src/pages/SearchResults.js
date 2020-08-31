import React from "react";
import SearchList from "../component/SearchList";
export default function SearchResults(props) {
  console.log(props.history.location.state.data);
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
              name={data.name}
              address={data.address}
              tags={data.tags}
              status={data.status}
              photoUrl={data.photoUrl}
            />
          );
        })}
      </section>
    </div>
  );
}
