import styled from "styled-components/native";
import { Button, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from 'react-native-reanimated'

interface ButtonInterface {
  size: number;
  distance: number;
  blur?: number;
  borderRadius: number;
  shadowColor?: string;
}

export const ButtonFace = styled(View)`
  padding: 50px;
`;

export const ButtonFaceGradient = styled(LinearGradient) <ButtonInterface>`
    
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    width: ${({ size }) => `${size}px`}
    height: ${({ size }) => `${size}px`}

 
    
`;

export const ButtonOuter = styled(Animated.View) <ButtonInterface>`
display: flex;
width: ${({ size }) => `${size}px`}
    height: ${({ size }) => `${size}px`}

 

    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    shadow-offset: ${({ distance }) => `${distance}px ${distance}px`};
    /* shadow-color: ${({ shadowColor }) => shadowColor}; */
    shadow-opacity: 1.0;
    shadow-radius: ${({ borderRadius }) => `${borderRadius}px`};
    shadow-blur: ${({ blur }) => blur};
    margin-top: 20px;
    margin-bottom: 20px;

 
`;

export const ButtonInner = styled(Animated.View) <ButtonInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
 
  shadow-offset: ${({ distance }) => `-${distance}px -${distance}px`};
  width: ${({ size }) => `${size}px`}
    height: ${({ size }) => `${size}px`}
  /* shadow-color: ${({ shadowColor }) => shadowColor}; */
  shadow-opacity: 1.0;
  shadow-radius: ${({ borderRadius }) => `${borderRadius}px`};
  shadow-blur: ${({ blur }) => blur};
  /* margin-top: 20px;
  margin-bottom: 20px; */

 
`;
