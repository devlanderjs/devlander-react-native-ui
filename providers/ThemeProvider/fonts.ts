import { Platform } from "react-native";
import { fontConfigInterface } from "../../types/theme.types";


export const fontConfig: fontConfigInterface = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100' ,
    },
  },
  ios: {
    regular: {
      fontFamily: 'Avenir-Light',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Avenir-Light',
      fontWeight: '500' 
    },
    light: {
      fontFamily: 'Avenir-Light',
      fontWeight: '300' 
    },
    thin: {
      fontFamily: 'Avenir-Light',
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal' 
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal' 
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal' 
    },
  },
}

let fontOptions = {
  
  Font2Condensed: {
    name: 'RobotoCondensed',

    light: 'RobotoCondensed-Light',
    regular: 'RobotoCondensed-Regular',
    bold: 'RobotoCondensed-Bold',
  },
  Font2: {
    regular: 'Cabin-Regular',
    bold: 'Cabin-Bold',
    name: 'Cabin',
},
  Font1Condensed: {
    light: 'RobotoCondensed-Light',
    regular: 'RobotoCondensed-Regular',
    bold: 'RobotoCondensed-Bold',
    name: 'RobotoCondensed',
},
Font1: {
  light: 'Roboto-Light',
  regular: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  name: 'Roboto',
}}


export const configureFonts = () => {
    let temp =  Platform.select({ ...fontConfig });
  let fonts = {
    ...fontOptions,
    ...temp,
  }


    return fonts;
}

