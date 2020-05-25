import React from "react";

const VariableNames = ({ names }) => {
  return names.map((name) => <th key={name}>{name}</th>);
};

export default VariableNames;
