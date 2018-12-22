import { ITheme } from "../../typings/itheme";
import { colors } from "../colors";

class SnowTheme implements ITheme {
  public primaryColor = colors.greyLight;
  public secondaryColor = colors.greyDark;
  public tertiaryColor = colors.black;
  public backgroundColor = colors.white;
}

const snowTheme = new SnowTheme();

export {
  snowTheme,
  SnowTheme,
};
