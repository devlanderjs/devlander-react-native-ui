import React from "react";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { NeumorphismButtonProps } from "../NeumorphismButton";
import { ShadowInsidePositive, ShadowInsideNegative, ShadowInsideContainer } from './styles';
interface ShadowInsideProps extends NeumorphismButtonProps {
    pressed: boolean;
    distance: number;
    size: number;
    blur: number;
    borderRadius: number;
    children?: React.ReactNode | React.ReactNode[];
}
function ShadowInside(props: ShadowInsideProps) {
    const {
        pressed,
        blur,
        distance,
        size,
        borderRadius,
    } = props;

    const ShadowOutsidePositiveInterpolate = useAnimatedStyle(
        () => ({
            shadowColor: withTiming(pressed ? "#00000073" : "#fff", {
                duration: 500,
            }),
            shadowRadius: 15,
            shadowOffset: {
                width: withTiming(pressed ? 10 : -10, {
                    duration: 500,
                }),
                height: withTiming(pressed ? 10 : -10, {
                    duration: 500,
                }),
            },
            shadowOpacity: 0.6,
        }),
        [pressed]
    );

    const ShadowInsidePositiveInterpolate = useAnimatedStyle(
        () => ({
            shadowColor: withTiming(pressed ? "#fff" : "#00000073", {
                duration: 500,
            }),
            shadowRadius: 15,

            shadowOffset: {
                width: withTiming(pressed ? -5 : 5, {
                    duration: 500,
                }),
                height: withTiming(pressed ? -5 : 5, {
                    duration: 500,
                }),
            },
            shadowOpacity: 0.1,
        }),
        [pressed]
    );

    return (
        <ShadowInsideContainer borderRadius={borderRadius} size={size}>


            <ShadowInsidePositive
                style={[[ShadowOutsidePositiveInterpolate]]}
                borderRadius={borderRadius}
                blur={blur}
                distance={distance}
                size={size}
            >
                <ShadowInsideNegative
                    style={[[ShadowInsidePositiveInterpolate]]}
                    borderRadius={borderRadius}
                    blur={blur}
                    distance={distance}
                    size={size}
                >

                </ShadowInsideNegative>
            </ShadowInsidePositive>
        </ShadowInsideContainer>
    );
}

ShadowInside.defaultProps = {
    distance: 100,
    blur: 50,
    isPressed: false,
    borderRadius: 30,
    children: <></>,
};

export default ShadowInside;
