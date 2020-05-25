import React from "react";

import json from "./data/intergram.json";

import Table from "./ThreeVariables/Table";

import "./App.css";
import { useHashResults } from "./customHooks/useHashResults";

function App() {
  const results = useHashResults(json);

  if (!results.length) {
    return null;
  }
  return (
    <>
      <p>{json.introduction}</p>
      <ol>
        {json.clues.map((clue, index) => (
          <li key={index}>{clue}</li>
        ))}
      </ol>
      <Table integram={json} results={results} />
    </>
  );
}

export default App;
