import React from "react";

const VariableNames = ({ names }) => {
  return names.map((name, index) => {
    let classname = "top-variable-name";
    if (index === 0) {
      classname += " left";
    } else if (index === names.length - 1) {
      classname += " right";
    }
    return (
      <th className={classname} key={name}>
        {name}
      </th>
    );
  });
};

export default VariableNames;
