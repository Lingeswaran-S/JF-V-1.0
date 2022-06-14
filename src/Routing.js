import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import JobList from "./components/JobList";
import NavBar from "./components/NavBar";
import Read from "./components/Read";
import ERead from "./components/Event/ERead";

function Routing() {
  console.log("Routing");
  return (
    <div class="container">
      <Router>
        <NavBar />
        {/* <button class="btn btn-success mt-3 shadow-lg ">
          <Link to="/home">
            <strong class="text-white">Companies</strong>
          </Link>
        </button> */}
        <Route exact path="/jobs" component={JobList}></Route>
        <Route exact path="/read" component={Read}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/eread" component={ERead}></Route>
      </Router>
    </div>
  );
}

export default Routing;
