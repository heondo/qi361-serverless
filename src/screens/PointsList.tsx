import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {ListItem} from 'react-native-elements'
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

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity>
      <ListItemContainer>
        <Text>{item}</Text>
      </ListItemContainer>
    </TouchableOpacity>
  )

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
