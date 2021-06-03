import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/core'
import {Button} from 'react-native-elements'

import {RootStackParamList} from '../types/navigation'
import {Container} from '../components/atoms/layout'

type PointsListScreenRouteProp = RouteProp<RootStackParamList, 'Main'>
type PointsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>
type Props = {
  route: PointsListScreenRouteProp
  navigation: PointsListScreenNavigationProp
}

export function PointsList(props: Props) {
  const {navigation} = props
  return (
    <Container>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate('Settings')
        }}
      />
    </Container>
  )
}
