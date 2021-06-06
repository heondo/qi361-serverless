import styled from 'styled-components/native'
import {colors} from '@constants'
import {BaseProps} from '@types'

export const Text = styled.Text`
  color: ${(props: BaseProps) =>
    props.color ? props.color : props.theme.text.primary};
  font-size: ${(props: BaseProps) =>
    props.fontSize ? props.fontSize : '14px'};
  width: ${(props: BaseProps) => (props.w ? props.w : 'auto')};
  height: ${(props: BaseProps) => (props.h ? props.h : 'auto')};
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '0')};
`

export const ListHeader = styled(Text)`
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 6px;
  font-weight: bold;
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
