import React from "react";
import Answer from "./Answer";

const Answers = ({ dimension, integram, results, startIndex }) => {
  const dimensionVariables = integram.variables[dimension];
  return dimensionVariables.map((dimensionVariable, index) => (
    <Answer
      key={dimensionVariable}
      value={results[startIndex + index]}
      index={startIndex + index}
    />
  ));
};

export default Answers;
