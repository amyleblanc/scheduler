import React, { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
    }

    if (!replace) {
      setHistory([...history, newMode]);
      setMode(newMode);
    }
  };

  const back = () => {
    if (history.length > 1) {
      let previousMode = history[history.length - 2];
      setMode(previousMode);

      let newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
};