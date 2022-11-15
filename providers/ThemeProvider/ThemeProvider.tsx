import React, { useState, useEffect, useContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from './theme';
import { ThemeInterface } from '../../types/theme.types';
import { useCallback } from 'react';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

interface ThemeContextType extends ThemeInterface {
    lightThemeEnabled: boolean;
    canToggleTheme: boolean;
    setLightThemeEnabled: (boolean: boolean) => void;
    toggleLightDarkMode: (boolean: boolean) => void;
}

const ColorThemeContext = React.createContext<ThemeContextType>({
    lightThemeEnabled: false,
    canToggleTheme: false,
    setLightThemeEnabled: (boolean: boolean): void => {
        console.log('setLightThemeEnabled in theme context', boolean);
    },
    toggleLightDarkMode: (boolean: boolean): void => {
        console.log('toggleLightDarkMode in theme context', boolean);
    },

    ...theme
});

const { Provider, Consumer } = ColorThemeContext;

type ThemeProviderProps = {
    getValueFromStorage?: (key: string, keyIdentifier?: string) => Promise<any>;
    saveToStorage?: (
        key: string,
        value: any,
        keyIdentifier?: string
    ) => Promise<any>;
    children: React.ReactNode | React.ReactNode[];
};

const ColorThemeProvider = (props: ThemeProviderProps) => {
    const { children, saveToStorage, getValueFromStorage } = props;


    const [checkedTheme, setCheckedTheme] = useState(false);
    const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

    const [statusBarHidden, setStatusBarHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(
        TRANSITIONS[0]
    );

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };

    const toggleLightDarkMode = async (valueForDarkMode: boolean) => {
        setDarkThemeEnabled(!valueForDarkMode);
        saveToStorage && (await saveToStorage('darkThemeEnabled', !valueForDarkMode));
        changeStatusBarTransition();


    };

    const initialize = useCallback(async () => {
        let existingDarkThemeEnabled = false;
        let darkThemeFromStorage = getValueFromStorage ? await getValueFromStorage('lightThemeEnabled') : false
        if (darkThemeFromStorage) {
            darkThemeFromStorage = Boolean(darkThemeFromStorage);
        }



        if (darkThemeFromStorage) {
            setDarkThemeEnabled(true);
            setCheckedTheme(true);
            changeStatusBarTransition();
        } else if (!existingDarkThemeEnabled) {
            setDarkThemeEnabled(false);
            setCheckedTheme(true);
            changeStatusBarTransition();
        }
    }, [getValueFromStorage]);

    useEffect((): any => {
        let isSubscribed = true;
        if (!checkedTheme) {
            initialize();
        }

        return () => (isSubscribed = false);
    }, [!checkedTheme]);

    const valuePayload =
        darkThemeEnabled === true
            ? {
                ...theme,
                canToggleTheme: (typeof saveToStorage !== 'undefined' && typeof getValueFromStorage !== 'undefined' ? true : false),
                colors: lightTheme,
                darkThemeEnabled,
                setDarkThemeEnabled,
                toggleLightDarkMode
            }
            : {
                ...theme,
                colors: darkTheme,
                canToggleTheme: (typeof saveToStorage !== 'undefined' && typeof getValueFromStorage !== 'undefined' ? true : false),

                darkThemeEnabled,
                setDarkThemeEnabled,
                toggleLightDarkMode
            };

    const styledComponentsTheme = useMemo(
        () =>
            darkThemeEnabled === true
                ? { ...theme, mode: 'adaptive', colors: { ...theme.colors, ...darkTheme } }
                : { ...theme, mode: 'adaptive', colors: { ...theme.colors, ...lightTheme } },
        [darkThemeEnabled]
    );

    return (
        <Provider value={{ ...valuePayload }}>

            <ThemeProvider theme={styledComponentsTheme}>
                <>{children}</>
            </ThemeProvider>
        </Provider>
    );
};

export const useColorThemeContext = (): ThemeContextType =>
    useContext(ColorThemeContext);

export { ColorThemeProvider, Consumer as ColorThemeConsumer, ColorThemeContext };
export default ColorThemeProvider;
