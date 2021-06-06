import {BaseProps} from '@types'
import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  font-size: ${(props: BaseProps) =>
    props.fontSize ? props.fontSize : '14px'};
  width: ${(props: BaseProps) => (props.w ? props.w : 'auto')};
  height: ${(props: BaseProps) => (props.h ? props.h : 'auto')};
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '0')};
  color: black;
`

export const OutlinedButton = styled(TouchableOpacity)`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 6px;
`
