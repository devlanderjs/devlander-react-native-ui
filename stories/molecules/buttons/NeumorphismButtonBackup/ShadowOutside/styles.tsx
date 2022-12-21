import styled from "styled-components/native";
import { Button, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons';


interface ShadowOutsideInterface {
    size: number;
    distance: number;
    blur?: number;
    borderRadius: number;
    shadowColor?: string;
}


export const ShadowOutsidePositive = styled(Animated.View) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
 
  width: ${({ size }) => `${size}px`}
    height: ${({ size }) => `${size}px`}


 
`;

export const ShadowOutsideNegative = styled(Animated.View) <ShadowOutsideInterface>`
  display: flex;
border-radius: ${({ borderRadius }) => `${borderRadius}px`};
 
  width: ${({ size }) => `${size}px`}
    height: ${({ size }) => `${size}px`}


 
`;