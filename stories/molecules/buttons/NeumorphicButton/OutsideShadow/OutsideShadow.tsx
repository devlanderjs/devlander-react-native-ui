import { View, Text } from 'react-native'
import React from 'react'
import { NeumorphicButtonProps } from '../NeumorphicButton';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

function OutsideShadow(props: NeumorphicButtonProps) {
    const { size } = props;

    const outsideShadowOffsetOneStyles = useAnimatedStyle(
        () => ({
            shadowColor: withTiming('#D8DCE6', {
                duration: 500,
            }),
            shadowRadius: 15,
            width: size / 1.15,
            height: size / 1.15,
            borderRadius: (size / 1.15) / 2,

            position: 'absolute',

            background: 'transparent',
            backgroundColor: 'transparent',
            shadowOffset: {
                width: withTiming(9, {
                    duration: 500,
                }),
                height: withTiming(9, {
                    duration: 500,
                }),
            },
            shadowOpacity: 1,
        }),
        [size]
    );

    const outsideShadowOffsetTwoStyles = useAnimatedStyle(
        () => ({
            shadowColor: withTiming('#F3F4F5', {
                duration: 500,
            }),
            shadowRadius: 15,
            borderRadius: size / 2,
            width: size,
            height: size,
            position: 'absolute',
            background: 'transparent',
            backgroundColor: 'transparent',
            shadowOffset: {
                width: withTiming(-9, {
                    duration: 500,
                }),
                height: withTiming(-9, {
                    duration: 500,
                }),
            },
            shadowOpacity: 1,
        }),
        [size]
    );
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: size / 2, position: 'absolute', backgroundColor: 'transparent', zIndex: 15 }}>
            <Animated.View style={outsideShadowOffsetOneStyles} >

            </Animated.View>
            <Animated.View style={outsideShadowOffsetTwoStyles} >

            </Animated.View>


        </View >
    )
}

export default OutsideShadow