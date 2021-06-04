import styled from 'styled-components/native'
import colors from '../../constants/colors'
import {ThemeType} from '../../constants/theme'
import {BaseProps} from '../../types/styled'
import {View} from './container'

export const FlatList = styled.FlatList`
  background-color: ${(props: {theme: ThemeType}) => props.theme.colors.bg};
  padding: 0 10px;
  /* margin: auto; */
`

export const ListItem = styled(View)`
  padding: 12px;
  margin: 8px 0px;
  width: auto;
  border-radius: 8px;
  background-color: ${colors.gray['800']};
`

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
  background-color: ${colors.blackAlpha['300']};
`
