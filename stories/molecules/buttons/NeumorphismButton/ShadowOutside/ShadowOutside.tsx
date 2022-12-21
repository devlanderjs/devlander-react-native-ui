import React from "react";
import { View } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { NeumorphismButtonProps } from "../NeumorphismButton";
import { ShadowOutsidePositive, ShadowOutsideNegative } from "./styles";
interface ShadowOutsideProps extends NeumorphismButtonProps {
    pressed: boolean;
    distance: number;
    size: number;
    blur: number;
    borderRadius: number;
    children?: React.ReactNode | React.ReactNode[];
}
function ShadowOutside(props: ShadowOutsideProps) {
    const {
        pressed,
        blur,
        distance,
        children = <></>,
        size,
        borderRadius,
    } = props;

    const shadowOutSideNegativeInterpolate = useAnimatedStyle(
        () => ({
            // shadowColor: withTiming(pressed ? "#00000073" : "#fff", {
            //     duration: 500,
            // }),
            shadowColor: "#000",
            elevation: withTiming(distance, {
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
            // shadowOpacity: 0.6,
            // shadowOpacity: withTiming(pressed ? 0 : 0.15, {
            //     duration: 500,
            // }),
            shadowOpacity: 0.15
        }),
        [pressed, distance]
    );

    const shadowOutSidePositiveInterpolate = useAnimatedStyle(
        () => ({
            // shadowColor: withTiming(pressed ? "#fff" : "#00000073", {
            //     duration: 500,
            // }),
            shadowColor: '#fff',
            shadowRadius: 15,

            shadowOffset: {
                width: withTiming(pressed ? -5 : 5, {
                    duration: 500,
                }),
                height: withTiming(pressed ? -5 : 5, {
                    duration: 500,
                }),
            },
            // shadowOpacity: withTiming(pressed ? 0 : 0.40, {
            //     duration: 500,
            // }),
            shadowOpacity: 0.40
        }),
        [pressed]
    );

    return (
        <View style={{ borderWidth: 1, borderColor: 'red', width: size, height: size }}>

            <ShadowOutsidePositive
                style={[[shadowOutSideNegativeInterpolate]]}
                borderRadius={borderRadius}
                blur={blur}
                distance={distance}
                size={size}
            >
                <ShadowOutsideNegative
                    style={[[shadowOutSidePositiveInterpolate]]}
                    borderRadius={borderRadius}
                    blur={blur}
                    distance={distance}
                    size={size}
                >
                    {children ? children : null}
                </ShadowOutsideNegative>
            </ShadowOutsidePositive>
        </View>

    );
}

ShadowOutside.defaultProps = {
    distance: 100,
    blur: 50,
    pressed: false,
    borderRadius: 30,
    children: <></>,
};

export default ShadowOutside;
