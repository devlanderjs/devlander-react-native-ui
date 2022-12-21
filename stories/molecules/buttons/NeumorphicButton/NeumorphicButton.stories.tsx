import React from "react";
import { View } from 'react-native'
import { useArgs } from '@storybook/client-api';
import NeumorphicButton from './NeumorphicButton';
export const Basic = () => {
  const [args, updateArgs] = useArgs();
  console.log(args, 'this is args')
  return (
    <View style={{ height: 422.3226, width: 377.7742 }}>
      <NeumorphicButton
        onPress={() => updateArgs({ pressed: !args.pressed })}
        pressedText={'ON'}
        notPressedText={'OFF'}
        size={args.size}
        pressed={args.pressed}
      />
    </View >

  );
};


export default {
  title: "components/NeumorphicButton",
  component: Basic,
  args: {
    size: 80,
    distance: 5,
    borderRadius: 40,
    pressed: false,
    pressedText: 'OFF',
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




