import {ThemeInterface} from './theme.types';

export interface EconInterface {
  focused?: boolean;
  size?: number | string;
  fontSize?: number | string;
  color?: string;
  name: string;
  disabled?: boolean;
  enableTextShadow?: boolean;
  lineHeight?: number | string;
  onDark?: boolean;
  fillColorFromTheme?: keyof ThemeInterface['colors'];
  theme: ThemeInterface;
}
