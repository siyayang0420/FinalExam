import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
// here to import your components



storiesOf('your components', module)
  .add('components', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('more components', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
