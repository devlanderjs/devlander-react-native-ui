import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import React, { useEffect } from "react";

import { ButtonIcon, ButtonContainer } from "./styles";
import ShadowOutside from "./ShadowOutside";
import ShadowInside from "./ShadowInside";
import FillContainer from "./FillContainer/FillContainer";
import FaceGradient from "./FaceGradient/FaceGradient";

export interface NeumorphismButtonProps {
    onPress: () => void;
    size: number;
    distance: number;
    pressed: boolean;

    iconName?: string;
    blur: number;
    borderRadius: number;
}


function NeumorphismButton(props: NeumorphismButtonProps) {
    const {
        onPress,
        iconName,
        size = 150,
        distance = 100,
        pressed = false,

        blur = 50,
        borderRadius = 30,
    } = props;

    const handleOnPress = () => {
        console.log("pressed");
        onPress();
        // shadowValue.value = withTiming(1000, {
        //     duration: 500,
        //     easing: Easing.out(Easing.exp),
        // });
    };

    return (
        <TouchableWithoutFeedback onPress={() => handleOnPress()}>
            <ButtonContainer size={size}>
                <ShadowOutside {...props}>
                    <ShadowInside {...props} />


                    <FillContainer {...props} >
                        <FaceGradient {...props}>
                            {iconName ? (
                                <ButtonIcon fontSize={size / 2} name={iconName} />
                            ) : null}
                        </FaceGradient>
                    </FillContainer>

                </ShadowOutside>
            </ButtonContainer>
        </TouchableWithoutFeedback>
    );
}

NeumorphismButton.defaultProps = {};

export default NeumorphismButton;
