import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";



export const LinearGradientStyled = styled(LinearGradient) <{
    size: number;
    borderRadius: number;
}>
    `
    justify-content: center;
    align-items: center;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};

    height: ${({ size }) => `${size}px`};
    border-radius: ${({ borderRadius }) => `${borderRadius + "px"}`};



`;
export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradientStyled);
