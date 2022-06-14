import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fun } from "../App";

function Home() {
  let sty = {
    width: "145px",
  };
  console.log("Home-P");
  let f = useContext(Fun);
  function reloadPage() {
    window.location.reload();
  }

  console.log("inside home");
  useEffect(() => {
    console.log("again");
    f();
    console.log("Home-UseEffect");
  }, []);
  return (
    <React.Fragment>
      <div class="row container ">
        <div
          class="  border pl-3 pr-3 pb-3 mt-1 rounded col-2 col-xs-2 col-md-2  "
          style={{ backgroundColor: "#dee3e1" }}
        >
          <Link to="/jobs">
            <button class="btn btn-success mt-3 shadow-lg p-3  " style={sty}>
              <strong class="text-white"> Jobs</strong>
            </button>
          </Link>
          <br></br>

          {/* <button
          onClick={reloadPage}
          class="btn btn-danger mt-3 ml-3 shadow-lg p-3 "
        >
          <strong class="text-white">Reload</strong>
        </button> */}

          {/*  Future Dev */}
          <Link to="/eread">
            <button class="btn btn-success mt-3 shadow-lg p-3  " style={sty}>
              <strong class="text-white">Events</strong>
            </button>
          </Link>
          <br></br>
          <Link to="/jobs">
            <button class="btn btn-success mt-3 shadow-lg p-3  " style={sty}>
              <strong class="text-white">Interview Q/A</strong>
            </button>
          </Link>
          <br></br>
          <Link to="/jobs">
            <button class="btn btn-info mt-3 shadow-lg p-3  " style={sty}>
              <strong class="text-white">About us !</strong>
            </button>
          </Link>
        </div>
        <div class=" col-10 col-xd-6 col-md-10 mt-2 ">
          <img
            style={{ width: "105%", height: "100%" }}
            class="rounded border pb-2"
            src="https://images.all-free-download.com/images/graphicwebp/homes_cube_architecture_219145.webp"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
