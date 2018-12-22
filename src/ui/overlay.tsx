import { startCase } from "lodash";
import React from "react";
import styled, { css } from "styled-components";

import { themes } from "../styles/themes";
import { ITheme } from "../typings/itheme";

interface IOverlayProps {
  theme: ITheme;
  updateTheme: (theme: ITheme) => void;
}

function Overlay({ theme, updateTheme }: IOverlayProps): JSX.Element {
  return (
    <Bar theme={theme}>
      <Header theme={theme}>Select A Theme:</Header>
      { Object.keys(themes).map((aTheme) => (
        <Button
          key={aTheme}
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

const Header = styled.h2`
  margin: auto 0;

  ${({ theme }: IHeaderProps) => theme && css`
    color: ${theme.primaryColor}
  `}
`;

interface IBarProps {
  theme: ITheme;
}

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  height: 2%;
  z-index: 1;
  padding: 0.5%;
  position: absolute;
  width: 100%;

  ${({ theme }: IBarProps) => theme && css`
    background-color: ${theme.backgroundColor}
  `}

  > * {
    &:not(:first-child) {
      margin: 0 auto;
    }
  }
`;

interface IButtonProps {
  theme: ITheme;
}

const Button = styled.button`
  ${({ theme}: IButtonProps) => theme && css`
    color: ${theme.backgroundColor}
    background-color: ${theme.secondaryColor}
    border-style: none
  `}
`;

export { Overlay };
