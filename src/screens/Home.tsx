import React from 'react'
import {FlatList} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {ListItem, ThemeProvider} from 'react-native-elements'
import {useColorScheme} from 'react-native-appearance'

import {RootStackParamList} from '../types/navigation'
import {TouchableOpacity} from '../components/atoms/button'

import GROUP_DATA, {MeridianDataType} from '../data/groupData'
import {themes} from '../constants/theme'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
type Props = {
  navigation: MainScreenNavigationProp
}

export function Home(props: Props) {
  const {navigation} = props
  let colorScheme = useColorScheme()

  const keyExtractor = (item: any) => item.meridianID

  const renderItem = ({item}: {item: MeridianDataType}) => (
    <ThemeProvider useDark={colorScheme === 'dark'} theme={themes[colorScheme]}>
      <ListItem bottomDivider>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PointsList', {id: item.meridianID})
          }}>
          <ListItem.Content>
            <ListItem.Title>{item.english}</ListItem.Title>
            <ListItem.Subtitle>{item.english}</ListItem.Subtitle>
          </ListItem.Content>
        </TouchableOpacity>
        <ListItem.Chevron />
      </ListItem>
    </ThemeProvider>
  )

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={GROUP_DATA}
      renderItem={renderItem}
    />
  )
}
