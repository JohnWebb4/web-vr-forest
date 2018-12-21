import { ITheme } from "./itheme";

interface IEnvironment {
  loadAssets(): JSX.Element | void;
  render(theme: ITheme): JSX.Element;
}

export { IEnvironment };
