import React from "react";
import Counters from "./components/counters";
import "./App.css";
import NavBar from "./components/navbar";
import { render } from "@testing-library/react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
