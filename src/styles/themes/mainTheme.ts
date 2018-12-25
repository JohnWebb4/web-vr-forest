import { ITheme } from "../../typings/itheme";

import { colors } from "../colors";

class MainTheme implements ITheme {
  public backgroundDayColor = colors.blueLight;
  public backgroundNightColor = colors.blueDark;
  public groundColor = colors.brownDark;
  public primaryColor = colors.greenDark;
  public secondaryColor = colors.green;
  public tertiaryColor = colors.greyDark;
}

const mainTheme = new MainTheme();

export {
  mainTheme,
  MainTheme,
};
