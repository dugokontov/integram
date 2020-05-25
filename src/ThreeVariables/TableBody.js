import React from "react";
import FirstBodySection from "./FirstBodySection";
import SecondBodySection from "./SecondBodySection";

const TableBody = ({ integram, results }) => {
  return (
    <tbody>
      <FirstBodySection integram={integram} results={results} />
      <SecondBodySection integram={integram} results={results} />
    </tbody>
  );
};

export default TableBody;
