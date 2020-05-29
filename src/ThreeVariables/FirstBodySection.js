import React from "react";
import Answers from "./Answers";

const FirstBodySection = ({ integram, results }) => {
  const { variables, dimensions } = integram;
  const [dimension1, dimension2, dimension3] = dimensions;
  const dimension1Variables = variables[dimension1];
  return dimension1Variables.map((dimension1Variable, index) => {
    let classname = "left-variable-name";
    const isLastRow = index === dimension1Variables.length - 1;
    if (index === 0) {
      classname += " top";
    } else if (isLastRow) {
      classname += " bottom";
    }
    return (
      <tr key={dimension1Variable}>
        {index === 0 && (
          <th className="left-dimension" rowSpan={variables[dimension1].length}>
            {dimension1}
          </th>
        )}
        <th className={classname}>{dimension1Variable}</th>
        <Answers
          dimension={dimension2}
          integram={integram}
          results={results}
          startIndex={
            index *
            (variables[dimension2].length + variables[dimension3].length)
          }
          lastRow={isLastRow}
        />
        <Answers
          variable={dimension1Variable}
          dimension={dimension3}
          integram={integram}
          results={results}
          startIndex={
            variables[dimension2].length +
            index *
              (variables[dimension2].length + variables[dimension3].length)
          }
          lastRow={isLastRow}
        />
      </tr>
    );
  });
};

export default FirstBodySection;
