import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type ButtonTextProps = {
    pressed: boolean;
    pressedText: string;
    notPressedText: string;
    size: number;
}
function ButtonText(props: ButtonTextProps) {
    const { pressed, pressedText, notPressedText, size } = props;

    const offset = useSharedValue(0);

    useEffect(() => {
        offset.value = pressed ? 1 : 0, [pressed]
    }, [pressed])

    const toggledOnTextStyle = useAnimatedStyle(() => {
        return {
            fontSize: 20, fontFamily: 'Figtree', color: '#DADBDF',
            position: 'absolute',
            textAlign: 'center',
            opacity: withSpring(offset.value === 1 ? 1 : 0),

            transform: [{ translateX: withSpring(offset.value === 0 ? +size : size / 3.5) }],
        };
    }, [offset.value]);

    const toggledOffTextStyle = useAnimatedStyle(() => {
        return {
            fontSize: 20, fontFamily: 'Figtree', color: '#DADBDF',
            textAlign: 'center',
            position: 'absolute',
            opacity: withSpring(offset.value === 0 ? 1 : 0),

            transform: [{ translateX: withSpring(offset.value === 1 ? -size : size / 3.5) }],

        };
    }, [offset.value]);


    return (
        <View style={{ overflow: 'hidden', width: size, height: size, justifyContent: 'center', alignContent: 'center', borderRadius: size / 2 }}>

            <Animated.Text style={toggledOffTextStyle}>{notPressedText}</Animated.Text>
            <Animated.Text style={toggledOnTextStyle}>{pressedText}</Animated.Text>

        </View>
    )
}

export default ButtonText