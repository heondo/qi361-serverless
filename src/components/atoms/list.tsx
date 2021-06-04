import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${props => props.theme.colors.bg};
`

export const ListItem = styled.View`
  padding: 12px;
  margin: 6px 8px;
  width: auto;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
`
