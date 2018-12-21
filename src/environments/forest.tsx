import { cloneDeep } from "lodash";
import React, { Fragment, useEffect, useState } from "react";

import { ITheme } from "../typings/itheme";
import { getRandomHexBetweenValues } from "../utils/colors.util";

import { IProps as TreeProps, Tree } from "../components/tree";

function loadAssets(): JSX.Element {
    return (
      <Fragment>
        <img id="tree1-bark" src="images/tree1-bark.png"></img>
        <img id="tree1-leaves" src="images/tree1-leaves.png"></img>
      </Fragment>
    );
  }

function render(theme: ITheme): JSX.Element {
  const [trees, updateTrees] = useState<TreeProps[]>([
    {
      position: "0 0 -2",
    },
  ]);

  useEffect(() => {
    const newTrees: TreeProps[] = cloneDeep(trees).map((tree) => ({
      ...tree,
      barkColor: theme.tertiaryColor,
      leafColor: getRandomHexBetweenValues(theme.primaryColor, theme.secondaryColor),
    }));

    updateTrees(newTrees);
  });

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

export { loadAssets, render };
