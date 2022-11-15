import React from "react";
import NeumorphismSimpleButton from "./NeumorphismSimpleButton";


export default {
  title: "components/NeumorphismSimpleButton",
  component: NeumorphismSimpleButton,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const Basic = (args) => <NeumorphismSimpleButton {...args} />;

Basic.args = {
  size: 300,
  distance: 5,
  borderRadius: 30,
  blur: 10,
};
