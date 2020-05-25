import React from "react";
import Integram from "./Integram";
import json from "./data/intergram.json";

function App() {
  const id = new URL(document.location).searchParams.get("id");
  if (!id || !json[id]) {
    return <p>Integram sa ovim ID-jem ne postoji</p>;
  }
  return <Integram integram={json[id]} />;
}

export default App;
