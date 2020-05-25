import React from "react";
import VariableNames from "./VariableNames";

const TableHeader = ({ intergram }) => {
  const [,dimension2, dimension3] = intergram.dimensions;
  const variables = intergram.variables;
  return (
    <thead>
      <tr>
        <th colSpan="2"></th>
        <th colSpan={variables[dimension2].length}>{dimension2}</th>
        <th colSpan={variables[dimension3].length}>{dimension3}</th>
      </tr>
      <tr>
        <th colSpan="2"></th>
        <VariableNames names={variables[dimension2]} />
        <VariableNames names={variables[dimension3]} />
      </tr>
    </thead>
  );
};

export default TableHeader;
