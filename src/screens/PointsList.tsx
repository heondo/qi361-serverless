import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {Button} from 'react-native-elements'

import {Container} from '../components/atoms/layout'
import {RootTabParamList} from '../types/navigation'

type PointsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: PointsScreenNavigationProp
}

export function PointsList(props: Props) {
  const {navigation} = props
  return (
    <Container>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate('Settings', {screen: 'Settings'})
        }}
      />
    </Container>
  )
}
