import styled from 'styled-components/native'
import {ThemeType} from '../../constants/theme'

export const FlatList = styled.FlatList`
  background-color: ${(props: {theme: ThemeType}) => props.theme.colors.bg};
`

export const ListItem = styled.View`
  padding: 12px;
  margin: 6px 8px;
  width: auto;
  border-radius: 8px;
  background-color: ${(props: {theme: ThemeType}) =>
    props.theme.colors.primary};
`
