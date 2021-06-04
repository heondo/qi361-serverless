import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${props => props.theme.colors.primary};
`

export const ListItem = styled.View`
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
`
