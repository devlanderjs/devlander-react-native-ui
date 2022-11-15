import { ModalProps } from 'react-native-paper';
import { ThemeInterface } from './theme.types';

export interface BaseModalInterface extends ModalProps {
    theme: ThemeInterface;
    padding?: string | number;
    paddingTop?: string | number;
    width?: string | number;
    maxWidth?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    maxHeight?: string | number;
    paddingBottom?: string | number;
    height?: string | number;
    borderWidth?: number | string;
    borderColor?: string;
}