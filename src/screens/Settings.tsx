import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {Container, Text, ThemeContainer} from '../components/atoms'
import {RootTabParamList} from '../types/navigation'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  return (
    <ThemeContainer>
      <Container>
        <Text>Hello</Text>
      </Container>
    </ThemeContainer>
  )
}
