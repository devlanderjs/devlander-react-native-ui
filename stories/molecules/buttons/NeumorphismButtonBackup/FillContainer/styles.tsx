
import styled from "styled-components/native";
import { Button, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Animated from 'react-native-reanimated'


export const FillInside = styled(Animated.View) <{
  size: number;
  borderRadius: number;
  backgroundColor: string;
  borderColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 20;
  /* border-width: 6px;
  border-color: ${({ borderColor }) => borderColor};
  position: absolute;
  z-index: 20; */
 
`
