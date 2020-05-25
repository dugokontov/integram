import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table({ integram, results }) {
  return (
    <table>
      <TableHeader intergram={integram} />
      <TableBody integram={integram} results={results} />
    </table>
  );
}

export default Table;
