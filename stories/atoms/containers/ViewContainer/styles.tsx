import { View } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../../providers/ThemeProvider/theme';
import { BaseViewInterface } from '../../../../types/base-view.interface';
import { ThemeInterface } from '../../../../types/theme.types';
import BaseViewContainer from '../BaseViewContainer/BaseViewContainer';

interface ViewContainerInterface extends BaseViewInterface {
  theme: ThemeInterface;
  padding?: number | string;
  paddingLeft?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  flex?: number;
  backgroundColor?: string;
  backgroundColorFromTheme?: keyof typeof theme.colors;
  paddingRight?: number | string;
  paddingTop?: number | string;
  borderWidth?: number | string;
  borderColor?: string;
}
const ViewContainerStyled = styled(BaseViewContainer) <ViewContainerInterface>`

  ${({ backgroundColorFromTheme, theme }) =>
    backgroundColorFromTheme && theme.colors[backgroundColorFromTheme]
      ? `background: ${theme.colors[backgroundColorFromTheme]}` : ''}

`;

ViewContainerStyled.defaultProps = {
  theme: theme
};

export default ViewContainerStyled;
