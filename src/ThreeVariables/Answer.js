import React from "react";

const removeHoverClass = () => {
  document
    .querySelectorAll(".hover")
    .forEach((element) => element.classList.remove("hover"));
};
/**
 * @param {MouseEvent} event
 */
const addHoverClass = (event) => {
  const element = event.currentTarget;
  const hoveredIndex = Array.from(
    element.parentElement.querySelectorAll("td")
  ).indexOf(element);
  document
    .querySelectorAll(`table td:nth-of-type(${hoveredIndex + 1})`)
    .forEach((td) => td.classList.add("hover"));
};

const Answer = ({ value, index, ...rest }) => {
  const changeHash = () => {
    const newValue = (Number(value) + 1) % 3;
    const hash = window.location.hash.slice(1);
    window.location.hash =
      hash.substring(0, index) + newValue + hash.substring(index + 1);
  };
  let answer;
  switch (value) {
    case "2":
      answer = <>&nbsp;</>;
      break;
    case "0":
      answer = "X";
      break;
    case "1":
      answer = "O";
      break;
    default:
      break;
  }

  return (
    <td {...rest} onMouseEnter={addHoverClass} onMouseLeave={removeHoverClass}>
      <button onClick={changeHash}>{answer}</button>
    </td>
  );
};

export default Answer;
