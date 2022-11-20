import React from "react";
import NeumorphismButton from "./NeumorphismButton";
import { View } from 'react-native'
import { useArgs } from '@storybook/client-api';
export const Basic = (args) => {
  const [{ pressed }, updateArgs] = useArgs();

  return (
    <View style={{ height: 422.3226, width: 377.7742 }}>

      <NeumorphismButton pressed={false} onPress={() => updateArgs({ pressed: !pressed })} {...args} />
    </View >

  );
};


export default {
  title: "components/NeumorphismButton",
  component: Basic,
  args: {
    size: 80,
    distance: 5,
    borderRadius: 40,
    pressed: false,
    blur: 15,
    iconName: "heart",
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




