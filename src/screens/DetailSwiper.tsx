import React from 'react'
import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import {Container, Text, ThemeContainer} from '../components/atoms'
import {MainStackParamList, RootTabParamList} from '../types/navigation'

type DetailsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>
type DetailsListScreenRouteProp = RouteProp<MainStackParamList, 'DetailsSwiper'>

type Props = {
  route: DetailsListScreenRouteProp
  navigation: DetailsScreenNavigationProp
}

export function DetailsSwiper({navigation, route}: Props) {
  return (
    <ThemeContainer>
      <Container>
        <Text>Hello</Text>
      </Container>
    </ThemeContainer>
  )
}
