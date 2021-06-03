import React from 'react'
import {Button} from 'react-native-elements'
import {StackNavigationProp} from '@react-navigation/stack'

import {Container} from '../components/atoms'
import {RootStackParamList} from '../types/navigation'

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>

type Props = {
  navigation: ProfileScreenNavigationProp
}

export function Profile({navigation}: Props) {
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
