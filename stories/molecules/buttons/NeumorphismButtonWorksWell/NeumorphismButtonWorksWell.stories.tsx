import React from "react";
import NeumorphismButton from "./NeumorphismButton";
import { View } from 'react-native'
import { useArgs } from '@storybook/client-api';
export const Basic = (args) => {
  const [argsFromUpdate, updateArgs] = useArgs();
  const { pressed } = args;
  return (
    <View style={{ height: 422.3226, width: 377.7742, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
      <NeumorphismButton {...args} onPress={() => updateArgs({ pressed: !pressed })} />
    </View>
  );
};


export default {
  title: "components/NeumorphismButtonWorksWell",
  component: Basic,
  args: {
    size: 80,
    distance: 5,
    borderRadius: 40,
    pressed: false,
    blur: 15,
    iconName: "power",
  },
  argTypes: {
    isPressed: false,
    onPress: { action: "pressed" },
    size: { control: { type: "range", min: 50, max: 200, step: 1 } },
    distance: { control: { type: "range", min: 0, max: 200, step: 1 } },
    blur: { control: { type: "range", min: 0, max: 200, step: 1 } },
    borderRadius: { control: { type: "range", min: 0, max: 200, step: 1 } },
    iconName: { control: { type: 'select', options: ['home', 'search', 'settings', 'user'] } }
  },
};




