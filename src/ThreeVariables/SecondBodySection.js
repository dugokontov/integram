import React from "react";
import Answers from "./Answers";

const SecondBodySection = ({ integram, results }) => {
  const { variables, dimensions } = integram;
  const [dimension1, dimension2, dimension3] = dimensions;

  const dimension3Variables = variables[dimension3];
  const secondSectionIndex =
    (variables[dimension2].length + dimension3Variables.length) *
    variables[dimension1].length;

  return dimension3Variables.map((dimension3Variable, index) => {
    let classname = "left-variable-name";
    const isLastRow = index === dimension3Variables.length - 1;
    if (index === 0) {
      classname += " top";
    } else if (isLastRow) {
      classname += " bottom";
    }
    return (
      <tr key={dimension3Variable}>
        {index === 0 && (
          <th className="left-dimension" rowSpan={dimension3Variables.length}>
            {dimension3}
          </th>
        )}
        <th className={classname}>{dimension3Variable}</th>
        <Answers
          dimension={dimension2}
          integram={integram}
          results={results}
          startIndex={index * variables[dimension2].length + secondSectionIndex}
          lastRow={isLastRow}
        />
      </tr>
    );
  });
};

export default SecondBodySection;
