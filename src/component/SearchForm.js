import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../component/CategoryComponent";
import { Redirect } from "react-router-dom";
function SearchForm(props) {
  console.log(props.location);

  const [searchQuery, setQuery] = useState({
    search: "",
  });
  const [searchData, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [submit, setSubmit] = useState(false);

  const onChange = (e) => {
    setQuery({ [e.target.name]: e.target.value });
  };

  const setOnchangeItem = (dropdownItem) => {
    console.log(dropdownItem);
    setItems([...dropdownItem]);
  };
  const searchAttractions = (e) => {
    e.preventDefault();
    const data = {
      ll: props.location,
      query: searchQuery,
      category: items,
    };
    axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setSubmit(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
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
      {submit ? (
        <Redirect to={{ pathname: "/search", state: { data: searchData } }} />
      ) : (
        ""
      )}
    </form>
  );
}

export default SearchForm;
