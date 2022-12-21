import React, { useMemo, useEffect } from "react";
import { FillInside } from "./styles";
import { Animated } from "react-native";
import Reanimated, {
    useAnimatedStyle,
    withTiming,
    interpolateColors,
} from "react-native-reanimated";
import { NeumorphismButtonProps } from "../NeumorphismButton";

interface FillContainerProps extends NeumorphismButtonProps {
    size: number;
    borderRadius: number;
    pressed: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

function FillContainer(props: FillContainerProps) {
    const { size, borderRadius, pressed, children } = props;
    const borderInterpolatedColor = new Animated.Value(0);

    const borderColor = borderInterpolatedColor.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(0,0,0,0.1)", "#rgba(255,255,255,0.01)"],
    });

    useEffect(() => {
        Animated.timing(borderInterpolatedColor, {
            toValue: pressed ? 1 : 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [pressed]);

    const fillContainerStyles = useAnimatedStyle(
        () => ({
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: borderRadius,

            backgroundColor: "#E1E1EA",
        }),
        [pressed]
    );

    return (
        <Animated.View
            style={{
                borderColor,
                borderWidth: 1,
                borderRadius: borderRadius,
                height: size,
                width: size,
                overflow: "hidden",
            }}
        >
            <Reanimated.View testID={"FillContainer"} style={[fillContainerStyles]}>
                {children ? children : null}
            </Reanimated.View>
        </Animated.View>
    );
}

export default FillContainer;
