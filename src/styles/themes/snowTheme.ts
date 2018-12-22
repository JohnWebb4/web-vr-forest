import { ITheme } from "../../typings/itheme";
import { colors } from "../colors";

class SnowTheme implements ITheme {
  public backgroundColor = colors.greyLight;
  public groundColor = colors.greyDark;
  public primaryColor = colors.white;
  public secondaryColor = colors.greyDark;
  public tertiaryColor = colors.brownDark;
}

const snowTheme = new SnowTheme();

export {
  snowTheme,
  SnowTheme,
};
