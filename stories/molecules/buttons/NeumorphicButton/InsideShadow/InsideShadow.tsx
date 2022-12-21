import { View, Text } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { LinearGradient } from "expo-linear-gradient";
import { NeumorphicButtonProps } from '../NeumorphicButton';

export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);




function InsideShadow(props: NeumorphicButtonProps) {
    const { size } = props;

    const insideShadowOffsetOneStyles = useAnimatedStyle(
        () => ({
            shadowColor: withTiming('#F4F4F6', {
                duration: 500,
            }),
            shadowRadius: 50,
            overflow: 'hidden',

            margin: 10,
            width: size / 2.5,
            height: size / 2.5,

            position: 'absolute',
            zIndex: 25,
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
        <View style={{ width: '100%', height: '100%', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderRadius: size / 2, position: 'absolute', zIndex: 25 }}>
            <Animated.View style={insideShadowOffsetOneStyles} >

            </Animated.View>
            <Animated.View style={{ backgroundColor: '#eff0f5', width: '100%', height: '100%' }} >

            </Animated.View>

            <AnimatedLinearGradient colors={['#F4F5F6', 'rgba(244, 255, 234, 0.5)']} style={{ width: '100%', height: '100%', position: 'absolute', transform: [{ rotate: '-45deg' }], borderRadius: size / 2 }} >

            </AnimatedLinearGradient>
        </View >
    )
}

export default InsideShadow