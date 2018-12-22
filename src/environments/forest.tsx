import { cloneDeep } from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";

import { ITheme } from "../typings/itheme";
import { getRandomHexBetweenValues } from "../utils/colors.util";
import { getRandomInRange } from "../utils/math.util";

import { IProps as TreeProps, Tree } from "../components/tree";

interface IForestProps {
  maxDistance: number;
  minDistance: number;
  numTrees: number;
  theme: ITheme;
}

function LoadForest(): JSX.Element {
    return (
      <Fragment>
        <img id="tree1-bark" src="images/tree1-bark.png"></img>
        <img id="tree1-leaves" src="images/tree1-leaves.png"></img>
      </Fragment>
    );
  }

function Forest({maxDistance, minDistance, numTrees, theme}: IForestProps): JSX.Element {
  const [trees, updateTrees] = useState<TreeProps[]>(generateTrees(theme, numTrees, minDistance, maxDistance));

  useEffect(() => {
    const newTrees: TreeProps[] = cloneDeep(trees).map((tree) => ({
      ...tree,
      barkColor: theme.tertiaryColor,
      leafColor: getRandomHexBetweenValues(theme.primaryColor, theme.secondaryColor),
    }));

    updateTrees(newTrees);
  }, [theme]);

  useEffect(() => {
    updateTrees(generateTrees(theme, numTrees, minDistance, maxDistance));
  }, [maxDistance, minDistance, numTrees]);

  return (
    <Fragment>
      <a-sky color={theme.backgroundColor}></a-sky>
      {
        trees.map((treeProps: TreeProps, index: number) => (
          <Tree key={index} {...treeProps} />
        ))
      }
    </Fragment>
  );
}

function generateTrees(theme: ITheme, numTrees: number, minDistance: number, maxDistance: number): TreeProps[] {
  const trees: TreeProps[] = [];

  for (let iTree = 0; iTree < numTrees; iTree += 1) {
    trees.push({
      barkColor: theme.tertiaryColor,
      leafColor: getRandomHexBetweenValues(theme.primaryColor, theme.secondaryColor),
      ...getRandomCirleOrientation(minDistance, maxDistance),
    });
  }

  return trees;
}

function getRandomCirleOrientation(minDistance: number, maxDistance: number) {
  const radius = getRandomInRange(minDistance, maxDistance);
  const angle = getRandomInRange(0, 2 * Math.PI);

  const posX = Math.sin(angle) * radius;
  const posZ = Math.cos(angle) * radius;

  const rotation = (angle) / Math.PI * 180;

  return {
    position: `${posX} 0 ${posZ}`,
    rotation: `0 ${rotation} 0`,
  };
}

export { Forest, LoadForest };
