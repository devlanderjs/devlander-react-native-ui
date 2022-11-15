import { TextInputProps } from "react-native";


export interface BaseTextfieldPropsInterface extends TextInputProps {
    children?: React.ReactNode | React.ReactNode[];
    errorText?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    autoFocus?: boolean;
    blurOnSubmit?: boolean;
    editable?: boolean;
    label: string;
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    spellCheck?: boolean;
    destructive?: boolean;
    successText?: string;
    underlineColor?: string;
    mode?: 'outlined' | 'flat' | undefined;
    backgroundColor?: string;
    style?: any;
    renderRight?: () => JSX.Element | null;
    renderBottom?: () => React.ReactNode;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    opacity?: number;
    right?: React.ReactNode;
    onFocus?: () => void;
}

export const DefaultBaseTextfieldProps: BaseTextfieldPropsInterface = {
    label: 'Label',
    underlineColor: '#000',
    backgroundColor: 'transparent',
    mode: 'outlined',
    opacity: 1,
    dense: false,
    editable: true,
    textContentType: 'none',
    autoCapitalize: 'none',
    onChangeText: () => console.log('this is onChangeText prop in text field'),
    disabled: false,
    error: false,
    errorText: undefined,
    secureTextEntry: false,
    keyboardType: 'default',
    onSubmitEditing: () => { },
  };