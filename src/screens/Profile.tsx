import React from 'react'
import {Button} from 'react-native-elements'
import {Container} from '../components/atoms'
import {RootStackParamList} from '../types/navigation'
import {StackNavigationProp} from '@react-navigation/stack'

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
