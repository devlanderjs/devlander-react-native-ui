import { View } from 'react-native';
import React from 'react';
import ViewContainerStyled from './styles';
import { theme } from '../../../../providers/ThemeProvider/theme';

interface viewContainerProps extends React.ComponentProps<typeof View> {
  padding?: string | number;
  paddingTop?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  flex?: number;
  maxHeight?: string | number;
  backgroundColorFromTheme?: keyof typeof theme.colors;
  backgroundColor?: string;
  paddingBottom?: string | number;
  height?: string | number;
  borderWidth?: number | string;
  borderColor?: string;
  children: React.ReactNode | React.ReactNode[];
}

function ViewContainer(props: viewContainerProps) {
  const {
    children,
    padding,
    paddingTop,
    width,
    maxWidth,
    paddingLeft,
    paddingRight,
    backgroundColor,
    backgroundColorFromTheme,
    flex,
    maxHeight,
    paddingBottom,
    height,
    borderWidth,
    borderColor
  } = props;
  return (
    <ViewContainerStyled
      backgroundColorFromTheme={backgroundColorFromTheme}
      padding={padding}
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
      width={width}
      flex={flex}
      maxWidth={maxWidth}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      maxHeight={maxHeight}
      paddingBottom={paddingBottom}
      height={height}
      borderWidth={borderWidth}
      borderColor={borderColor}>
      {children}
    </ViewContainerStyled>
  );
}

export default ViewContainer;
