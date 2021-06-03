import React from 'react'

import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/core'
import {RootStackParamList} from '../types/navigation'
import {Container} from '../components/atoms/layout'
import {PrimaryButton} from '../components/atoms'

type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
type Props = {
  route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

export function Home(props: Props) {
  const {navigation} = props
  return (
    <Container>
      <PrimaryButton
        title="hey"
        onPress={() => {
          navigation.navigate('Settings')
        }}
      />
    </Container>
  )
}
