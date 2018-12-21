import React from "react";

import { themes } from "./styles/themes";
import { IEnvironment } from "./typings/ienvironment";

import { Forest } from "./environments/forest";

function App() {
  const environment: IEnvironment = new Forest();
  const theme = new themes.MainTheme();

  return (
    <a-scene>
      <a-assets>
        {environment.loadAssets()}
      </a-assets>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
      </a-entity>
      {environment.render(theme)}
    </a-scene>
  );
}

export { App };
