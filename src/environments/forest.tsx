import React, { Fragment } from "react";

import { IEnvironment } from "../typings/ienvironment";
import { ITheme } from "../typings/itheme";

import { Tree } from "../components/tree";

class Forest implements IEnvironment {
  public loadAssets(): JSX.Element {
    return (
      <Fragment>
        <img id="tree1-bark" src="images/tree1-bark.png"></img>
        <img id="tree1-leaves" src="images/tree1-leaves.png"></img>
      </Fragment>
    );
  }

  public render(theme: ITheme): JSX.Element {
    return (
      <Fragment>
        <a-sky color={theme.backgroundColor}></a-sky>
        <Tree position="0 0 -2" barkColor={theme.tertiaryColor} leafColor={theme.primaryColor}/>
      </Fragment>
    );
  }
}

export { Forest };
