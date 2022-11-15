import { View } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../../providers/ThemeProvider/theme';
import { BaseViewInterface } from '../../../../types/base-view.interface';
import { ThemeInterface } from '../../../../types/theme.types';

interface ViewBaseContainerInterface extends BaseViewInterface {
  theme: ThemeInterface;
  padding?: number | string;
  paddingLeft?: number | string;
  visible?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  marginTop?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  borderWidth?: number | string;
  borderColor?: string;
}
const BaseViewContainer = styled(View) <ViewBaseContainerInterface>`
  padding-left: ${({
  theme: {
    handleUnitProps,
    padding: { paddingForScrollView }
  },
  paddingLeft
}) =>
    paddingLeft
      ? handleUnitProps(paddingLeft)
      : handleUnitProps(paddingForScrollView)};

  padding-right: ${({
        theme: {
          handleUnitProps,
          padding: { paddingForScrollView }
        },
        paddingRight
      }) =>
    paddingRight
      ? handleUnitProps(paddingRight)
      : handleUnitProps(paddingForScrollView)};

  padding-top: ${({
        theme: {
          handleUnitProps,
          padding: { paddingForScrollView }
        },
        paddingTop
      }) =>
    paddingTop
      ? handleUnitProps(paddingTop)
      : handleUnitProps(paddingForScrollView)};

  background-color: ${({ backgroundOpacity, theme: { colors } }) => backgroundOpacity ? `rgba(0, 0, 0, ${backgroundOpacity})` : colors.webWashColor};

  ${({ maxHeight, theme: { handleUnitProps } }) =>
    maxHeight ? `max-height: ${handleUnitProps(maxHeight)}` : null};




  ${({ width, theme: { handleUnitProps } }) =>
    width ? `width: ${handleUnitProps(width)}` : ''};

  ${({ maxWidth, theme: { handleUnitProps } }) =>
    maxWidth ? `max-width: ${handleUnitProps(maxWidth)}` : null};


  ${({ position }) =>
    position ? `position: ${position}` : null};

  padding-bottom: ${({
      theme: {
        handleUnitProps,
        padding: { paddingForScrollView }
      },
      paddingBottom = paddingForScrollView
    }) =>
    paddingBottom
      ? handleUnitProps(paddingBottom)
      : handleUnitProps(paddingForScrollView)};

  background-color: ${({
        theme: {
          colors: { webWashColor }
        }
      }) => webWashColor};

  ${({ borderColor }) => (borderColor ? `border-color: ${borderColor}` : null)};

  ${({ borderWidth, theme: { handleUnitProps } }) =>
    borderWidth ? `border-width: ${handleUnitProps(borderWidth)}` : null};
`;

BaseViewContainer.defaultProps = {
  theme: theme
};

export default BaseViewContainer;
