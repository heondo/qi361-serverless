import styled from 'styled-components/native'
import {ThemeType} from '../../constants/theme'

export const FlatList = styled.FlatList`
  background-color: ${(props: {theme: ThemeType}) => props.theme.colors.bg};
  padding: 0 10px;
  /* margin: auto; */
`

export const ListItem = styled.View`
  padding: 12px;
  margin: 8px 0px;
  width: auto;
  border-radius: 8px;
  background-color: ${(props: {theme: ThemeType}) =>
    props.theme.colors.primary};
`
