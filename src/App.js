import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import Header from "./component/Header";
import "./css/main.css";
import Home from "./pages/Home";
import Search from "./pages/SearchResults";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
