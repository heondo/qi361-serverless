import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {POINTS_DATA} from '../../static/data/pointData'

import {
  FlatList,
  Text,
  ThemeContainer,
  TouchableOpacity,
} from '../components/atoms'
import {ListItemContainer} from '../components/molecules'
import {MainStackParamList, RootTabParamList} from '../types/navigation'

type PointsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type PointsListScreenRouteProp = RouteProp<MainStackParamList, 'PointsList'>

type Props = {
  route: PointsListScreenRouteProp
  navigation: PointsScreenNavigationProp
}

export function PointsList({route, navigation}: Props) {
  const keyExtractor = (item: any, index: number) => item
  const {points} = route.params

  const renderItem = ({item}: {item: string | any}) => {
    const point = POINTS_DATA[item]
    return (
      <TouchableOpacity>
        <ListItemContainer>
          <Text>{point.name}</Text>
          <Text>{point.name}</Text>
        </ListItemContainer>
      </TouchableOpacity>
    )
  }

  return (
    <ThemeContainer>
      <FlatList
        keyExtractor={keyExtractor}
        data={points}
        renderItem={renderItem}
      />
    </ThemeContainer>
  )
}
