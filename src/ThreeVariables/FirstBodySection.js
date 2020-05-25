import React from "react";
import Answers from "./Answers";

const FirstBodySection = ({ integram, results }) => {
  const { variables, dimensions } = integram;
  const [dimension1, dimension2, dimension3] = dimensions;
  return variables[dimension1].map((dimension1Variable, index) => (
    <tr key={dimension1Variable}>
      {index === 0 && (
        <th rowSpan={variables[dimension1].length}>{dimension1}</th>
      )}
      <th>{dimension1Variable}</th>
      <Answers
        variable={dimension1Variable}
        dimension={dimension2}
        integram={integram}
        results={results}
        startIndex={
          index * (variables[dimension2].length + variables[dimension3].length)
        }
      />
      <Answers
        variable={dimension1Variable}
        dimension={dimension3}
        integram={integram}
        results={results}
        startIndex={
          variables[dimension2].length +
          index * (variables[dimension2].length + variables[dimension3].length)
        }
      />
    </tr>
  ));
};

export default FirstBodySection;
