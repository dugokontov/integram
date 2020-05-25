import React from "react";

import { useHashResults } from "./customHooks/useHashResults";

import Table from "./ThreeVariables/Table";

function Integram({ integram }) {
  const results = useHashResults(integram);

  if (!results.length) {
    return null;
  }
  return (
    <>
      <p>{integram.introduction}</p>
      <ol>
        {integram.clues.map((clue, index) => (
          <li key={index}>{clue}</li>
        ))}
      </ol>
      <Table integram={integram} results={results} />
    </>
  );
}

export default Integram;
