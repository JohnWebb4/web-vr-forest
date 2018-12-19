import React from "react";

import { colors } from "./styles/index";

import { Tree } from "./components/tree";

const SCALE = 10;

function getRandomPosition() {
  return `${Math.random() * SCALE} ${Math.random() * SCALE} ${Math.random() * SCALE}`;
}

function getRandomTreeProps() {
  return {
    color: "FF0000",
    position: getRandomPosition(),
  };
}

const randomTrees = [
  getRandomTreeProps(),
  getRandomTreeProps(),
  getRandomTreeProps(),
];

function App() {
  return (
    <a-scene>
      <a-sky color={colors.sky}></a-sky>
      {
        randomTrees.map((treeProps) => (
          <Tree key={treeProps.position} {...treeProps}></Tree>
        ))
      }
    </a-scene>
  );
}

export { App };
