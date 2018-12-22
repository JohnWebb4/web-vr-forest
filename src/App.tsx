import React, { useState } from "react";

import { themes } from "./styles/themes";
import { ITheme } from "./typings/itheme";

import { Forest, LoadForest } from "./environments/forest";
import { Overlay } from "./ui/overlay";

function App() {
  const [theme, updateTheme] = useState<ITheme>(themes.mainTheme);
  const [numTrees] = useState(100);
  const [minDistance] = useState(1.5);
  const [maxDistance] = useState(6);

  return (
    <a-scene>
      <a-assets>
        <LoadForest />
      </a-assets>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
        <Overlay theme={theme} updateTheme={updateTheme} />
      </a-entity>
      <Forest theme={theme} numTrees={numTrees} minDistance={minDistance} maxDistance={maxDistance} />
    </a-scene>
  );
}

export { App };
