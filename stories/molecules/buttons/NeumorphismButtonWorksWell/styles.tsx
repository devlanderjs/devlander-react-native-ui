import styled from "styled-components/native";
import {
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ButtonContainer = styled(View) <{ size: number, borderRadius: number }>`
  width: ${({ size }) => `${size}px`}
  height: ${({ size }) => `${size}px`}
  border-radius: ${({ borderRadius }) => `${borderRadius}px`}
`;

export const ButtonIcon = styled(Ionicons) <{
  fontSize: number;
  color: string;
}>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color = "#8E8E93" }) => color};
  font-size: ${({ fontSize = 20 }) => `${fontSize}px`};
`;
