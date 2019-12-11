import React from 'react';
import { Text,Button,action } from 'react-native';
import { storiesOf } from '@storybook/react-native';
// here to import your components
import Animation_N from './Animation_N';
import Animation_Ang from './Animation_Ang';
import Animation_S from './Animation_S';
import PopUp from './PopUp';



storiesOf('component', module)
  .add('Animation_N', () => {
    return <Animation_N/>
})
  .add('Animation_Ang', ()=>{
    return <Animation_Ang/>
  })
  .add('Animation_S', ()=>{
    return <Animation_S/>
  })
  .add('PopUp', ()=>{
    return <PopUp/>
  })
