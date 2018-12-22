import { ITheme } from "../../typings/itheme";

import { colors } from "../colors";

class MainTheme implements ITheme {
  public backgroundColor = colors.greyLight;
  public primaryColor = colors.greenDark;
  public secondaryColor = colors.green;
  public tertiaryColor = colors.greyDark;
}

const mainTheme = new MainTheme();

export {
  mainTheme,
  MainTheme,
};
