import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import React, { useEffect } from "react";
import {
    ButtonOuter,
    ButtonInner,
    ButtonFaceGradient,
} from "./styles";
import { useCallback, useState, useMemo } from "react";
import { useRef } from "react";
import { useAnimatedStyle, useSharedValue, withSpring, withTiming, Easing } from "react-native-reanimated";
type ButtonProps = {
    onPress: () => void;
    size: number;
    distance: number;
    blur: number;
    borderRadius: number;
}

// --positionX: 20px;
// --positionXOpposite: -20px;
// --positionY: 20px;
// --positionYOpposite: -20px;
// --angle: 145deg;
// --blur: 60px;
// --textColor: #001f3f;
// --textColorOpposite: #e0e0e0;
// --baseColor: #e0e0e0;
// --darkColor: #bebebe;
// --lightColor: #ffffff;
// --firstGradientColor: #e0e0e0;
// --secondGradientColor: #e0e0e0;
// --size: 300px;
// --radius: 50px

function NeumorphismSimpleButton(props: ButtonProps) {
    const { onPress, size = 150, distance = 100, blur = 50, borderRadius = 30 } = props;
    const shadowValue = useSharedValue(0);



    const [isDown, setIsDown] = useState(false);
    const shadowColorOneInterpolate = useAnimatedStyle(() => ({
        shadowColor: withTiming(isDown ? '#bebebe' : '#fff', {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }),
        elevation: withTiming(isDown ? 1 : 2, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })

    }), [isDown])

    const shadowColorTwoInterpolate = useAnimatedStyle(() => ({
        shadowColor: withTiming(isDown ? '#fff' : '#bebebe', {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })
    }), [isDown])





    const handleOnPress = () => {
        setIsDown(!isDown);
        // shadowValue.value = withTiming(1000, {
        //     duration: 500,
        //     easing: Easing.out(Easing.exp),
        // });
    }



    const gradientColors = useMemo(() => isDown ? ['#d1d9e6', '#ffffff'] : ['#ffffff', '#d1d9e6'], [isDown]);
    const gradientStart = useMemo(() => isDown ? ({ x: 145, y: 125 }) : ({ x: 145, y: 125 }), [isDown]);
    const gradientEnd = useMemo(() => isDown ? ({ x: 145, y: 145 }) : ({ x: 1, y: 145 }), [isDown]);

    const shadowColors = useMemo(() => isDown ? ['#bebebe', '#fff'] : ['#fff', '#bebebe'], [isDown]);
    return (
        <TouchableWithoutFeedback

            onPress={handleOnPress}
        >
            {/* <View style={{ width: size + distance, height: size + distance, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}> */}

            <ButtonOuter style={[[shadowColorOneInterpolate]]} borderRadius={borderRadius} blur={blur} distance={distance} size={size}>
                <ButtonInner
                    style={[[shadowColorTwoInterpolate]]}
                    borderRadius={borderRadius} blur={blur} distance={distance} size={size}>
                    <ButtonFaceGradient
                        borderRadius={borderRadius} distance={distance} size={size} colors={gradientColors}  >
                    </ButtonFaceGradient>
                </ButtonInner>
            </ButtonOuter>
            {/* </View> */}

        </TouchableWithoutFeedback >
    );
}

NeumorphismSimpleButton.defaultProps = {

}

export default NeumorphismSimpleButton;
