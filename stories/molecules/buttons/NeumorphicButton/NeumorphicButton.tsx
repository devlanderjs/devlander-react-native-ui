import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OutsideShadow from './OutsideShadow'
import InsideShadow from './InsideShadow'

import { StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import ButtonText from './ButtonText';

export type NeumorphicButtonProps = {
    size?: number;
    onPress?: () => void;
    pressed?: boolean;
    pressedText?: string;
    notPressedText?: string;
}

function NeumorphicButton(props: NeumorphicButtonProps) {
    const { size, pressed, onPress, pressedText, notPressedText } = props;
    return (
        <Animated.View style={[{
            width: size,
            height: size,
            borderRadius: size / 2,

        }]}>
            <TouchableOpacity onPress={() => onPress()} style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 50 }} >
                <ButtonText size={size} pressed={pressed} pressedText={pressedText} notPressedText={notPressedText} />
            </TouchableOpacity>



            <InsideShadow size={size} />
            <OutsideShadow size={size} />
        </Animated.View>
    )
}

export default NeumorphicButton