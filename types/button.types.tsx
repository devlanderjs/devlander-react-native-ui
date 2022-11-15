import { theme } from '../providers/ThemeProvider/theme';
import { BaseThemeInterface } from './base-theme.interface';
import type {
  textDecorationLineTypes,
  textFontWeightTypes,
  textTransformTypes
} from './text.types';

export interface TouchableOpacityPropsInterface extends BaseThemeInterface {
  text?: string;
  onPress: () => void;
  textColorFromTheme?: keyof typeof theme.colors;
  disabled?: boolean;
  ghost?: boolean;
  submitting?: boolean;
  fontSize?: number | string;
  width?: number | string;
  height?: number | string;
  marginBottom?: number | string;
  marginTop?: number | string;
  paddingTop?: number | string;
  fontWeight?: textFontWeightTypes;
  decorationLine?: textDecorationLineTypes;
  textTransform?: textTransformTypes;
  isSelected?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  paddingRight?: number | string;
  paddingLeft?: number | string;
  renderLeft?: () => React.ReactElement;
  renderRight?: () => React.ReactElement;
  textColor?: string;
}

export const defaultButtonProps = {
  text: 'text',
  textColor: undefined,
  iconColor: undefined,
  onPress: () => console.log('onPress in button component'),
  disabled: false,
  fontSize: 15,
  marginBottom: 0,
  marginTop: 0
};
