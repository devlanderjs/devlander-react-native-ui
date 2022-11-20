import styled from "styled-components/native";
import Animated from 'react-native-reanimated'


interface ShadowOutsideInterface {
  size: number;
  distance: number;
  blur?: number;
  borderRadius: number;
  shadowColor?: string;
}


export const ShadowInsideContainer = styled(Animated.View) <{
  size: number;
  borderRadius: number;
}>`
  width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    overflow: hidden;
    position: absolute;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};

`

export const ShadowInsidePositive = styled(Animated.View) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  width: ${({ size }) => `${size}px`}
  height: ${({ size }) => `${size}px`}
`;

export const ShadowInsideNegative = styled(Animated.View) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  width: ${({ size }) => `${size}px`}
  height: ${({ size }) => `${size}px`}
`;