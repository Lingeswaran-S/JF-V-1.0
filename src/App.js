import axios from "axios";
import React, { createContext, useEffect } from "react";
import Routing from "./Routing";

export const DataContext = createContext();
export const Fun = createContext();
function App() {
  console.log("APP");
  let [arrayL, setArrayList] = React.useState([]);
  function readData() {
    console.log("Read data-axios-APP");
    axios
      .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
      // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
      // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
      .then((res) => setArrayList(res.data))
      .catch(() => {
        console.log("err");
        setTimeout(() => {
          console.log("Time-out");
          window.location.reload();
        }, 1500);
      });
  }

  useEffect(() => {
    console.log("Use-Eff-APP");
    readData();
  }, []);
  return (
    <React.Fragment>
      <DataContext.Provider value={arrayL}>
        <Fun.Provider value={readData}>
          <Routing />
        </Fun.Provider>
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default App;
