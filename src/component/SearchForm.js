import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function SearchForm(props) {
  console.log(props.location);
  const [searchQuery, setQuery] = useState({
    search: "",
  });
  const [searchData, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
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
      .post(`${process.env.REACT_APP_PROD_URL}`, data)
      .then((res) => {
        setData(res.data);
        setSubmit(true);
      })
      .then(setLoading(true))
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
        {/* <Category
          title="Please select a category"
          multiSelect
          onChange={setOnchangeItem}
        /> */}
      </div>
      <div className="btn-search">
        {!isLoading ? (
          <button disabled={isLoading} type="submit">
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
      {submit
        ? history.push({
            pathname: "/search",
            state: { data: searchData },
          })
        : ""}
    </form>
  );
}

export default SearchForm;
