import React from 'react'
import {ListItem} from 'react-native-elements'
import {StackNavigationProp} from '@react-navigation/stack'

import {RootTabParamList} from '../types/navigation'
import {
  FlatList,
  Text,
  ThemeContainer,
  TouchableOpacity,
} from '../components/atoms'
import {ListItemContainer} from '../components/molecules/list'
import GROUP_DATA, {MeridianDataType} from '../../static/data/groupData'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Home({navigation}: Props) {
  const keyExtractor = (item: any) => item.meridianID

  // TODO: cannot figure out, why this fials.
  // MeridianDataType is correct type but flatlist hates it

  const renderItem = ({item}: {item: MeridianDataType | any}) => (
    <ListItemContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main', {
            screen: 'PointsList',
            params: {
              id: item.meridianID,
              header: item.english,
              points: item.points,
            },
          })
        }}>
        <Text>{item.english}</Text>
      </TouchableOpacity>
    </ListItemContainer>
  )

  return (
    <ThemeContainer>
      <FlatList
        keyExtractor={keyExtractor}
        data={GROUP_DATA}
        renderItem={renderItem}
      />
    </ThemeContainer>
  )
}
