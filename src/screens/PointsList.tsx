import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {POINTS_DATA} from '../../static/data/pointData'

import {
  FlatList,
  ListItemText,
  Row,
  Text,
  ThemeContainer,
  TouchableOpacity,
} from '../components/atoms'
import {ListBadge, ListItemContainer} from '../components/molecules'
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
      <ListItemContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings', {
              screen: 'Settings',
            })
          }}>
          <Row justifyContent="space-between">
            <Row>
              <ListBadge text={item.split('-')[1]} />
              <ListItemText>{point.english}</ListItemText>
            </Row>
          </Row>
        </TouchableOpacity>
      </ListItemContainer>
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
