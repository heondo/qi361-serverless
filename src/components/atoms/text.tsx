import styled from 'styled-components/native'
import {ThemeType, colors} from '@constants'

export const Text = styled.Text`
  color: ${(props: {theme: ThemeType}) => props.theme.text.primary};
`

export const ListItemText = styled(Text)`
  font-size: 18px;
`

export const ListBadgeText = styled(Text)`
  color: ${colors.whiteAlpha['700']};
  font-size: 14px;
  font-weight: bold;
`
