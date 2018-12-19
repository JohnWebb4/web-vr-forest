import React from "react";

import { colors } from "./styles/index";

import { Tree } from "./components/tree";

function App() {
  return (
    <a-scene>
      <a-assets>
        {loadAssets()}
      </a-assets>
      <a-sky color={colors.sky}></a-sky>
      <a-entity position="0 0 0" rotation="0 0 0">
        <a-camera near="0.1" user-height="0">
        </a-camera>
      </a-entity>
      <Tree color="#FF00FF" position="0 0 -2"  rotation="0 0 0"/>
    </a-scene>
  );
}

function loadAssets(): JSX.Element {
  return (
    <img id="tree1" src="images/tree1.png"></img>
  );
}

export { App };
