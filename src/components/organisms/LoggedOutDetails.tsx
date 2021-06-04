import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {RootTabParamList} from '../../types/navigation'
import {Text, ThemeContainer, ScreenContainer} from '../atoms'
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
      <ScreenContainer>
        <Text>{pointData.depth}</Text>
        <Text>{pointData.action}</Text>
        <Text>{pointData.color}</Text>
      </ScreenContainer>
    </ThemeContainer>
  )
}
