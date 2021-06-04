import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {RootTabParamList} from '../../types/navigation'
import {Text, ThemeContainer, Container} from '../atoms'
import {POINTS_DATA} from '../../../static/data/pointData'

type LoggedOutDetailsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  pointID: string
  navigation: LoggedOutDetailsScreenNavigationProp
}

export function LoggedOutDetails({pointID}: Props) {
  const pointData = POINTS_DATA[pointID]
  return (
    <ThemeContainer>
      <Container>
        <Text>{pointData.depth}</Text>
        <Text>{pointData.action}</Text>
        <Text>{pointData.color}</Text>
      </Container>
    </ThemeContainer>
  )
}
