import React from 'react'
import {FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'
import {StackNavigationProp} from '@react-navigation/stack'

import GROUP_DATA, {MeridianDataType} from '../data/groupData'
import {RootTabParamList} from '../types/navigation'
import {ThemeContainer, TouchableOpacity} from '../components/atoms'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Home({navigation}: Props) {
  const keyExtractor = (item: any) => item.meridianID

  const renderItem = ({item}: {item: MeridianDataType}) => (
    <ListItem bottomDivider>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main', {
            screen: 'PointsList',
            params: {
              id: item.meridianID,
              header: item.english,
            },
          })
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.english}</ListItem.Title>
          <ListItem.Subtitle>{item.english}</ListItem.Subtitle>
        </ListItem.Content>
      </TouchableOpacity>
      {/* <ListItem.Chevron /> */}
    </ListItem>
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
