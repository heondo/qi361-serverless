import React from 'react'
import {Button} from 'react-native-elements'

import {Container} from '../components/atoms'

export function Profile({navigation}) {
  return (
    <Container>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Main', {screen: 'Home'})
        }}
      />
    </Container>
  )
}
