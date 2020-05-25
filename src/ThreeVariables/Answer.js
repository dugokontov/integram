import React from "react";

const Answer = ({ value, index }) => {
  const changeHash = () => {
    console.log(value);
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
    <td>
      <button onClick={changeHash}>{answer}</button>
    </td>
  );
};

export default Answer;
