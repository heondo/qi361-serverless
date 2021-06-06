import styled from 'styled-components/native'
import {colors} from '@constants'
import {BaseProps} from '@types'

export const Text = styled.Text`
  color: ${(props: BaseProps) => props.theme.text.primary};
  font-size: ${(props: BaseProps) =>
    props.fontSize ? props.fontSize : '14px'};
`

export const Capitalized = styled(Text)`
  text-transform: capitalize;
`

export const ListItemText = styled(Text)`
  font-size: 18px;
`

export const ListBadgeText = styled(Text)`
  color: ${colors.whiteAlpha['700']};
  font-size: 14px;
  font-weight: bold;
`
