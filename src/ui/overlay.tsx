import { startCase } from "lodash";
import React from "react";
import styled, { css } from "styled-components";

import { themes } from "../styles/themes";
import { ITheme } from "../typings/itheme";
import { circularInterpolationHex } from "../utils/colors.util";
import { getSunAngle } from "../utils/time.util";

interface IOverlayProps {
  date: Date;
  theme: ITheme;
  updateTheme: (theme: ITheme) => void;
}

function Overlay({ date, theme, updateTheme }: IOverlayProps): JSX.Element {
  return (
    <Bar date={date} theme={theme}>
      <Header theme={theme}>Select A Theme:</Header>
      { Object.keys(themes).map((aTheme) => (
        <Button
          key={aTheme}
          date={date}
          onClick={getUpdateThemeTo(themes[aTheme], updateTheme)}
          theme={theme}>
          {startCase(aTheme)}
        </Button>
      ))}
    </Bar>
  );
}

function getUpdateThemeTo(theme: ITheme, updateTheme: (theme: ITheme) => void) {
  return () => {
    updateTheme(theme);
  };
}

interface IHeaderProps {
  theme: ITheme;
}

const Header = styled.h2<IHeaderProps>`
  margin: auto 0;

  ${({ theme }: IHeaderProps) => theme && css`
    color: ${theme.primaryColor}
  `}
`;

interface IBarProps {
  date: Date;
  theme: ITheme;
}

const Bar = styled.div<IBarProps>`
  display: flex;
  flex-direction: row;
  height: 2%;
  z-index: 1;
  padding: 0.5%;
  position: absolute;
  width: 100%;

  ${({ date, theme }: IBarProps) => {
    const sunAngle = getSunAngle(date);
    const backgroundColor = circularInterpolationHex(theme.backgroundDayColor, theme.backgroundNightColor, sunAngle);

    return date && theme && css`
    background-color: ${backgroundColor}`;
  }}

  > * {
    &:not(:first-child) {
      margin: 0 auto;
    }
  }
`;

interface IButtonProps {
  date: Date;
  theme: ITheme;
}

const Button = styled.button<IButtonProps>`
  ${({ date, theme }: IButtonProps) => date && theme && css`
    color: ${theme.primaryColor}
    background-color: ${theme.secondaryColor}
    border-style: none
  `}
`;

export { Overlay };
