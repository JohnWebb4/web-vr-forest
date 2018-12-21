import React, { useState } from "react";

import { themes } from "./styles/themes";

import { Forest, LoadForest } from "./environments/forest";

function App() {
  const theme = new themes.MainTheme();

  const [numTrees, updateNumTrees] = useState(150);
  const [minDistance, updateMinDistance ] = useState(1.5);
  const [maxDistance, updateMaxDistance ] = useState(6);

  return (
    <a-scene>
      <a-assets>
        <LoadForest />
      </a-assets>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
      </a-entity>
      <Forest theme={theme} numTrees={numTrees} minDistance={minDistance} maxDistance={maxDistance} />
    </a-scene>
  );
}

export { App };
