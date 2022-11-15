import { theme } from '../providers/ThemeProvider/theme';
import { BaseThemeInterface } from './base-theme.interface';
import { ThemeInterface } from './theme.types';

export interface BaseScrollViewInterface extends BaseThemeInterface {
    theme: ThemeInterface;
    padding?: string | number;
    paddingTop?: string | number;
    width?: string | number;
    maxWidth?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    maxHeight?: string | number;
    stickyHeaderHiddenOnScroll?: boolean;

    paddingBottom?: string | number;
    height?: string | number;
    borderWidth?: number | string;
    borderColor?: string;
}