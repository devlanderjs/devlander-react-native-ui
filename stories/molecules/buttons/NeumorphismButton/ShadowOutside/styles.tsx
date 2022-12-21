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
  position: absolute;
  z-index: 5;

 
`;

export const ShadowOutsideNegative = styled(Animated.View) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;

`;