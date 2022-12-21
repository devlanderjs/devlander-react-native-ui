import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { NeumorphismButtonProps } from '../NeumorphismButton'
import { AnimatedLinearGradient } from './styles';
import Animated, { useAnimatedProps, useAnimatedStyle, withTiming } from 'react-native-reanimated';
interface FaceGradientProps extends NeumorphismButtonProps {
    pressed: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

function FaceGradient(props: FaceGradientProps) {
    const { pressed, children, size, borderRadius } = props;

    const gradientColors = useMemo(
        () =>
            pressed
                ? ["rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.05)"]
                : ["rgba(255, 255, 255, 0.05)", "rgba(0, 0, 0, 0.05)"],
        [pressed]
    );

    const animatedGradProps = useAnimatedProps(() => {


        return ({
            start: { x: pressed ? -7 : 7, y: 0 },

            colors: gradientColors
        })
    }
        , [pressed, gradientColors]);






    return (
        <AnimatedLinearGradient
            animatedProps={animatedGradProps}
            // borderWidth={20}
            // location={[0, 1]}

            borderRadius={borderRadius}
            size={size}
        // borderColor={borderColor}


        >
            {children ? children : null}
        </AnimatedLinearGradient>
    )
}

export default FaceGradient