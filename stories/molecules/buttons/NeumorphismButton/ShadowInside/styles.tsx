import styled from "styled-components/native";
import Animated from "react-native-reanimated";

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
  /* overflow: hidden; */
  background-color: transparent;
  z-index: 1;
  top: 0;
  position: absolute;

  /* margin: auto; */
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
`;

export const ShadowInsidePositive = styled(
  Animated.View
) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  width: 100%;
  height: 100%;
  z-index: 5;

  position: absolute;

`;

export const ShadowInsideNegative = styled(
  Animated.View
) <ShadowOutsideInterface>`
  display: flex;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  width: 100%;
  z-index: 10;
  position: absolute;
  height: 100%;
`;
