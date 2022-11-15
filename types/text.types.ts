import {TextProps} from 'react-native';
import {ThemeInterface, FontTypeWeight} from './theme.types';
import { theme } from '../providers/ThemeProvider/theme';

export enum textTransformTypes {
  none = 'none',
  uppercase = 'uppercase',
  lowercase = 'lowercase'
}

export enum textEllipsizeModeEnum {
  'head',
  'middle',
  'tail',
  'clip'
}

export enum textFontWeightTypes {
  normal = 'normal',
  bold = 'bold',
  oneHundred = 100,
  twoHundred = 200,
  threeHundred = 300,
  fourHundred = 400,
  fiveHundred = 500,
  sixHundred = 600,
  sevenHundred = 700,
  eightHundred = 800,
  nineHundred = 900
}

export enum textDecorationLineTypes {
  none = 'none',
  underline = 'underline',
  lineThrough = 'line-through',
  underlineLineThrough = 'underline line-through'
}
;
export interface TextInterface extends TextProps {
  fontSize?: number | string;
  color?: string;
  fontType?: 'Font1' | 'Font2' | 'Font1Condensed' | 'Font2Condensed';
  fontTypeWeight?: keyof FontTypeWeight;
  destructive?: boolean;
  fontWeight?: string | number;
  error?: boolean;
  fontFamily?: string;
  textDecorationColorFromTheme?: keyof typeof theme.colors;
  textAlign?: string;
  maxFontSize?: number;
  ghost?: boolean;
  maxWidth?: number | string;
  lineHeight?: number | string;
  opacity?: number;
  letterSpacing?: number;
  textDecorationLine?: string;
  textDecorationStyle?: string;
  textDecorationColor?: string;
  disabled?: boolean;
  flex?: number;
  width?: number | string;
  textTransform?: string;
  paddingLeft?: number | string;
  textColorFromTheme?: keyof typeof theme.colors;
  marginTop?: number;
  highlight?: boolean;
  onDark?: boolean;
  colorType?: string;
  paddingTop?: number | string;
  marginBottom?: number | string;
  hasRead?: boolean;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingBottom?: number | string;
  focused?: boolean;
  paddingRight?: number;
  theme?: ThemeInterface;
}
