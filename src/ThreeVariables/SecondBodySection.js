import React from "react";
import Answers from "./Answers";

const SecondBodySection = ({ integram, results }) => {
  const { variables, dimensions } = integram;
  const [dimension1, dimension2, dimension3] = dimensions;

  const secondSectionIndex =
    (variables[dimension2].length + variables[dimension3].length) *
    variables[dimension1].length;

  return variables[dimension3].map((dimension3Variable, index) => (
    <tr key={dimension3Variable}>
      {index === 0 && (
        <th rowSpan={variables[dimension3].length}>{dimension3}</th>
      )}
      <th>{dimension3Variable}</th>
      <Answers
        variable={dimension3Variable}
        dimension={dimension2}
        integram={integram}
        results={results}
        startIndex={index * variables[dimension2].length + secondSectionIndex}
      />
    </tr>
  ));
};

export default SecondBodySection;
