import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, NativeModules, Platform } from 'react-native';
import { configureFonts } from './fonts';
import {
    boxShadowFuncInterface,
    handleFontSizePropsInterface,
    handleUnitPropsInterface,
    colorsInterface,
    paddingForThemeType,
    ThemeInterface,
    capFontSizeInterface
} from '../../types/theme.types';
import * as Device from 'expo-device';

export const STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? 20 : 0;

export const windowHeight = Dimensions.get('window').height || 0.1;
export const windowWidth = Dimensions.get('window').width || 0.1;

export const boxShadowOne: boxShadowFuncInterface = (color) => {
    return `0px -1px 10px ${color}`;
};

export const handleFontSizeProps: handleFontSizePropsInterface = (
    fontSize?: string | number,
    standardScreenHeight?: number
): string => {
    const previousSize = fontSize;
    if (!fontSize) {
        fontSize = '13px';
    }

    if (fontSize && typeof fontSize === 'number') {
        if (standardScreenHeight) {
            fontSize = `${RFValue(fontSize, standardScreenHeight)}px`;
        } else {
            fontSize = `${RFValue(fontSize)}px`;
        }
    } else if (fontSize && typeof fontSize === 'string') {
        let numbericValue = parseInt(fontSize, 10);
        if (standardScreenHeight) {
            fontSize = `${RFValue(numbericValue, standardScreenHeight)}px`;
        } else {
            fontSize = `${RFValue(numbericValue)}px`;
        }
    }

    return fontSize.toString();
};

export const handleUnitProps: handleUnitPropsInterface = (
    units?: number | string
): string => {
    
    if (!units) {
        units = '0px';
        return units;
    }

    const hasPercentage =
        units && units.toString().includes('%')
            ? units.toString().includes('%')
            : false;

    if (units && typeof units === 'number') {
        if (hasPercentage) {
            units = units.toString();
        } else {
            units = `${units}px`;
        }
    }

    return units.toString();
};


export const paddingForScrollView = 15;
export const paddingForScrollViewTwo = 5;

// webWashColor is used for any of the screen backgrounds
// PrimaryText is used for any of the titles
// Secondary Text is used for any paragraphs or sub text
export const lightTheme: colorsInterface = {
    warningAlpha22: 'rgba(247, 161, 32, 0.22)',
    warningAlpha62: 'rgba(247, 161, 23, 0.62)',

    logoColor: '#282828',
    headerBackground: 'white',
    background: 'rgba(255, 255, 255, 0.05)',
    primary: '#009655',
    accent: '#6A338F',
    errorColor: '#B20A28',
    primaryTextColor: '#050505',
    text: '#050505',
    wireColor: '#B88114',
    primaryIconColor: 'black',
    primaryIconTextColor: '#5A626B',
    secondaryIconColor: '#4A4A4A',
    secondaryIconTextColor: '#4A4A4A',
    secondaryTextColor: '#65676B',
    secondaryButtonBackgroundColor: 'rgb(228, 230, 235)',
    webWashColor: '#f0f2f5',
    dividerColor: 'rgba(204, 204, 204, 0.3)',
    cardBorderColor: '#282828',
    cardBackgroundColor: '#fff',
    commentBackgroundColor: '#f0f2f5',
    blackAlpha00: 'rgba(0, 0, 0, 0)',
    blackAlpha01: 'rgba(0, 0, 0, 0.01)',
    blackAlpha05: 'rgba(0, 0, 0, 0.05)',
    blackAlpha10: 'rgba(0, 0, 0, 0.1)',
    blackAlpha15: 'rgba(0, 0, 0, 0.15)',
    blackAlpha20: 'rgba(0, 0, 0, 0.2)',
    blackAlpha30: 'rgba(0, 0, 0, 0.3)',
    blackAlpha40: 'rgba(0, 0, 0, 0.4)',
    blackAlpha50: 'rgba(0, 0, 0, 0.5)',
    blackAlpha60: 'rgba(0, 0, 0, 0.6)',
    blackAlpha70: 'rgba(0, 0, 0, 0.6)',
    blackAlpha80: 'rgba(0, 0, 0, 0.8)',
    blackAlpha95: 'rgba(0, 0, 0, 0.95)',
    blackAlpha100: 'rgba(0, 0, 0, 1)',
    whiteAlpha00: 'rgba(255, 255, 255, 0.00)',
    whiteAlpha01: 'rgba(255, 255, 255, 0.01)',
    whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
    whiteAlpha10: 'rgba(255, 255, 255, 0.10)',
    whiteAlpha15: 'rgba(255, 255, 255, 0.15)',
    whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha40: 'rgba(255, 255, 255, 0.4)',
    whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
    whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
    whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
    whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
    whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
    whiteAlpha95: 'rgba(255, 255, 255, 0.95)',
    whiteAlpha97: 'rgba(255, 255, 255, 0.97)',
    whiteAlpha100: 'rgba(255, 255, 255, 1)',
    disabled: '',
    backdrop: '',
    placeholder: '',
    secondary: '',
    grey: '',
    darkGrey: '',
    error: '',
    white: '',
    black: '',
    reference: '',
    colorOne: '#009655',
    colorTwo: '#51246D',
    colorThree: '#1B88BF',
    colorSix: '',
    successColor: '',
    accent50: '',
    accent80: '',
    selectedColorOne10: '',
    selectedColorOne40: '',
    selectedColorOne100: '',
    mediumTextColor: '',
    tabBarColor: '',
    blackAlpha90: '',
    blackAlpha97: '',
    shadow: '',
    bluetooth: '',
    colorFour: '',
    colorFive: '',
    primaryContainer: '',
    secondaryContainer: '',
    tertiary: '',
    tertiaryContainer: '',
    surface: '',
    surfaceVariant: '',
    surfaceDisabled: '',
    errorContainer: '',
    onPrimary: '',
    onPrimaryContainer: '',
    onSecondary: '',
    onSecondaryContainer: '',
    onTertiary: '',
    onTertiaryContainer: '',
    onSurface: '',
    onSurfaceVariant: '',
    onSurfaceDisabled: '',
    onError: '',
    onErrorContainer: '',
    onBackground: '',
    outline: '',
    inverseOnSurface: '',
    inverseSurface: '',
    inversePrimary: '',
    elevation: {
        level1: '',
        level2: '',
        level3: '',
        level4: '',
        level5: ''
    }
};

export const darkTheme: colorsInterface = {
    errorColor: '#B20A28',
    logoColor: '#fff',
    headerBackground: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    accent: '#51246D',

    primary: '#05AA97',
    reference: '#1B88BF',

    cardBorderColor: '#282828',
    cardBackgroundColor: '#212121',
    dividerColor: '#65676B',
    primaryTextColor: '#e4e6eb',
    text: '#e4e6eb',
    secondaryTextColor: '#4A4A4A',
    secondaryButtonBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    webWashColor: '#000',
    mediumTextColor: '#828282',
    primaryIconColor: '#828282',
    primaryIconTextColor: '#CCCCCC',
    secondaryIconColor: '#4A4A4A',
    secondaryIconTextColor: '#4A4A4A',
    tabBarColor: '#1C1C1C',
    commentBackgroundColor: '#3a3b3c',
    warningAlpha22: 'rgba(247, 161, 32, 0.22)',
    warningAlpha62: 'rgba(247, 161, 23, 0.62)',

    whiteAlpha00: 'rgba(0, 0, 0, 0)',
    whiteAlpha01: 'rgba(0, 0, 0, 0.01)',
    whiteAlpha05: 'rgba(0, 0, 0, 0.05)',
    whiteAlpha10: 'rgba(0, 0, 0, 0.1)',
    whiteAlpha15: 'rgba(0, 0, 0, 0.15)',
    whiteAlpha20: 'rgba(0, 0, 0, 0.2)',
    whiteAlpha30: 'rgba(0, 0, 0, 0.3)',
    whiteAlpha40: 'rgba(0, 0, 0, 0.4)',
    whiteAlpha50: 'rgba(0, 0, 0, 0.5)',
    whiteAlpha60: 'rgba(0, 0, 0, 0.6)',
    whiteAlpha70: 'rgba(0, 0, 0, 0.6)',
    whiteAlpha80: 'rgba(0, 0, 0, 0.8)',
    whiteAlpha90: 'rgba(0, 0, 0, 0.9)',

    whiteAlpha95: 'rgba(0, 0, 0, 0.95)',
    whiteAlpha97: 'rgba(0, 0, 0, 0.97)',
    whiteAlpha100: 'rgba(0, 0, 0, 1)',

    blackAlpha00: 'rgba(255, 255, 255, 0.00)',
    blackAlpha01: 'rgba(255, 255, 255, 0.01)',
    blackAlpha05: 'rgba(255, 255, 255, 0.05)',
    blackAlpha10: 'rgba(255, 255, 255, 0.10)',
    blackAlpha15: 'rgba(255, 255, 255, 0.15)',
    blackAlpha20: 'rgba(255, 255, 255, 0.2)',
    blackAlpha30: 'rgba(255, 255, 255, 0.3)',
    blackAlpha40: 'rgba(255, 255, 255, 0.4)',
    blackAlpha50: 'rgba(255, 255, 255, 0.5)',
    blackAlpha60: 'rgba(255, 255, 255, 0.6)',
    blackAlpha70: 'rgba(255, 255, 255, 0.7)',
    blackAlpha80: 'rgba(255, 255, 255, 0.8)',
    blackAlpha90: 'rgba(255, 255, 255, 0.9)',
    blackAlpha95: 'rgba(255, 255, 255, 0.95)',
    blackAlpha97: 'rgba(255, 255, 255, 0.97)',
    blackAlpha100: 'rgba(255, 255, 255, 1)',

    bluetooth: '#1F64BB',
    disabled: '',
    backdrop: '',
    placeholder: '',
    secondary: '',
    grey: '',
    darkGrey: '',
    error: '',
    white: '',
    black: '',
    successColor: '',
    colorSix: '',
    shadow: '',
    colorOne: '',
    colorTwo: '',
    colorThree: '',
    colorFour: '',
    colorFive: '',
    accent50: '',
    accent80: '',
    wireColor: '',
    selectedColorOne10: '',
    selectedColorOne40: '',
    selectedColorOne100: '',
    primaryContainer: '',
    secondaryContainer: '',
    tertiary: '',
    tertiaryContainer: '',
    surface: '',
    surfaceVariant: '',
    surfaceDisabled: '',
    errorContainer: '',
    onPrimary: '',
    onPrimaryContainer: '',
    onSecondary: '',
    onSecondaryContainer: '',
    onTertiary: '',
    onTertiaryContainer: '',
    onSurface: '',
    onSurfaceVariant: '',
    onSurfaceDisabled: '',
    onError: '',
    onErrorContainer: '',
    onBackground: '',
    outline: '',
    inverseOnSurface: '',
    inverseSurface: '',
    inversePrimary: '',
    elevation: {
        level1: '',
        level2: '',
        level3: '',
        level4: '',
        level5: ''
    }
};

export const shadows = {
    shadow1: 'rgba(0, 0, 0, 0.1)',
    shadow2: 'rgba(0, 0, 0, 0.2)',
    shadow5: 'rgba(0, 0, 0, 0.5)'
};

export const handleSnackbarColor = (
    type?: string,
    theme?: ThemeInterface
): string => {
    if (!type || !theme) {
        return '#fff';
    } else {
        switch (type) {
            case 'success':
                return theme.colors.successColor;
            case 'error':
                return theme.colors.errorColor;
            case 'none':
                return theme.colors.primaryTextColor;
            default:
                return theme.colors.primaryTextColor;
        }
    }
};

const capFontSize: capFontSizeInterface = (
    fontSize: number | string,
    maxFontSize: number
): number | number => {
    if (maxFontSize && typeof fontSize === 'number') {
        if (maxFontSize < fontSize) {
            return maxFontSize;
        } else {
            return fontSize;
        }
    } else {
        return maxFontSize;
    }
};

const paddingObj: paddingForThemeType = {
    paddingForScrollView: paddingForScrollView,
    paddingForScrollViewTwo: paddingForScrollViewTwo
};

export const theme: ThemeInterface = {
    padding: paddingObj,
    handleFontSizeProps: handleFontSizeProps,
    handleUnitProps: handleUnitProps,
    boxShadowOne: boxShadowOne,
    handleSnackbarColor: handleSnackbarColor,
    colors: lightTheme,
    fonts: configureFonts(),
    capFontSize: capFontSize,
    deviceOnTheme: {
        platform: Platform.OS,
        isTablet: false,
        hasNotch: false,
        statusBarHeight: STATUSBAR_HEIGHT,
        hasDynamicIsland: false,
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
    }
};
