import { ITheme } from "../../typings/itheme";

import { colors } from "../colors";

class MainTheme implements ITheme {
  public backgroundColor = colors.greyLight;
  public primaryColor = colors.green;
  public tertiaryColor = colors.greyDark;
}

export {
  MainTheme,
};
