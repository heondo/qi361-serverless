import styled from 'styled-components/native'
import {colors, ThemeType} from '@constants'
import {BaseProps} from '@types'
import {TouchableOpacity} from './button'
import {View} from './container'

export const FlatList = styled.FlatList`
  background-color: ${(props: {theme: ThemeType}) => props.theme.colors.bg};
  padding: 0 10px;
  /* margin: auto; */
`

export const ListItemButton = styled(TouchableOpacity)`
  padding: 12px;
  width: auto;
`

export const ListItemContainer = styled(View)`
  margin: 8px 0;
  background-color: ${colors.gray['800']};
  border-radius: 8px;
`

// `

export const ListBadgeContainer = styled(View)`
  padding: 8px;
  width: 45px;
  height: 45px;
  margin: ${(props: BaseProps) =>
    props.position === 'right' ? '0 0 0 14px' : '0 14px 0 0'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.gray['700']};
`
