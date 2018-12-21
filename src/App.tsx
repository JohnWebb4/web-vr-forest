import React from "react";

import { themes } from "./styles/themes";

import { loadAssets as loadForest, render as renderForest } from "./environments/forest";

function App() {
  const theme = new themes.MainTheme();

  return (
    <a-scene>
      <a-assets>
        {loadForest()}
      </a-assets>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
      </a-entity>
      {renderForest(theme)}
    </a-scene>
  );
}

export { App };
