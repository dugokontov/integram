import { useState, useCallback, useEffect } from "react";

export const useHashResults = (integram) => {
  const [results, setResults] = useState([]);
  const setResult = useCallback(() => {
    const hash = window.location.hash.slice(1);
    // check what is the number of variables required
    const { variables } = integram;
    const names = Object.keys(variables);
    let numberOfAnswers = 0;
    for (let i = 0; i < names.length - 1; i += 1) {
      for (let j = i + 1; j < names.length; j++) {
        numberOfAnswers +=
          variables[names[i]].length * variables[names[j]].length;
      }
    }
    if (hash && hash.length === numberOfAnswers) {
      setResults(hash.split(""));
    }
  }, [integram]);
  useEffect(() => {
    window.addEventListener("hashchange", setResult);
    const hash = window.location.hash.slice(1);
    // check what is the number of variables required
    const { variables } = integram;
    const names = Object.keys(variables);
    let numberOfAnswers = 0;
    for (let i = 0; i < names.length - 1; i += 1) {
      for (let j = i + 1; j < names.length; j++) {
        numberOfAnswers +=
          variables[names[i]].length * variables[names[j]].length;
      }
    }
    if (!hash || hash.length !== numberOfAnswers) {
      window.location.hash = Array(numberOfAnswers).fill(2).join("");
    }
    setResults(hash.split(""));
    return () => window.removeEventListener("hashchange", setResult);
  }, [integram, setResult]);
  return results;
};
