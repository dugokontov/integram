import React from "react";
import Answer from "./Answer";

const Answers = ({ dimension, integram, results, startIndex, lastRow }) => {
  const dimensionVariables = integram.variables[dimension];
  return dimensionVariables.map((dimensionVariable, index) => {
    const classname = [];
    if (lastRow) {
      classname.push("bottom");
    }
    if (index === dimensionVariables.length - 1) {
      classname.push("right");
    }
    return (
      <Answer
        key={dimensionVariable}
        value={results[startIndex + index]}
        index={startIndex + index}
        className={classname.join(" ")}
      />
    );
  });
};

export default Answers;
