import { ITheme } from "../typings/itheme";
import { mainTheme, MainTheme } from "./themes/mainTheme";
import { snowTheme, SnowTheme } from "./themes/snowTheme";

interface IThemes {
  mainTheme: MainTheme;
  snowTheme: SnowTheme;
  [index: string]: ITheme;
}

const themes: IThemes =  {
  mainTheme,
  snowTheme,
};

export {
  themes,
};
