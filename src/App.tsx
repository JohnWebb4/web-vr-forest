import moment from "moment";
import React, { useEffect, useState} from "react";

import { themes } from "./styles/themes";
import { ITheme } from "./typings/itheme";

import { Forest, LoadForest } from "./environments/forest";
import { Overlay } from "./ui/overlay";

function App() {
  const [theme, updateTheme] = useState<ITheme>(themes.mainTheme);
  const [numTrees] = useState(100);
  const [minDistance] = useState(1.5);
  const [maxDistance] = useState(6);
  const [date, updateDate] = useState(new Date(Date.now()));
  const [speed, updateSpeed] = useState(1);

  useEffect(() => {
    const dateInterval = setInterval(() => {
      const newDate = moment(date).add(150 * speed, "milliseconds");
      updateDate(newDate.toDate());
    }, 150);

    return () => {
      clearInterval(dateInterval);
    };
  });

  return (
    <a-scene>
      <a-assets>
        <LoadForest />
      </a-assets>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
        <Overlay date={date} theme={theme} updateTheme={updateTheme} />
      </a-entity>
      <Forest date={date} maxDistance={maxDistance} minDistance={minDistance} numTrees={numTrees} theme={theme} />
    </a-scene>
  );
}

export { App };
