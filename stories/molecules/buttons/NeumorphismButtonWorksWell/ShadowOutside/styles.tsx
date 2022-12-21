import styled from "styled-components/native";
import Animated from 'react-native-reanimated'


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