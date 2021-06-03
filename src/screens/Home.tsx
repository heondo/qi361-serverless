import React from 'react'

import {StackNavigationProp} from '@react-navigation/stack'
// import {RouteProp} from '@react-navigation/core'
import {Button} from 'react-native-elements'
import {RootStackParamList} from '../types/navigation'
import {Container} from '../components/atoms/layout'

// type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
type Props = {
  // route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

export function Home(props: Props) {
  const {navigation} = props
  return (
    <Container>
      <Button
        title="View Point Group"
        onPress={() => {
          navigation.navigate('PointsList', {id: 'hello'})
        }}
      />
    </Container>
  )
}
