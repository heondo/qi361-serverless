import styled from 'styled-components/native'
import {BaseProps} from '@types'

export const Image = styled.Image`
  height: ${(props: BaseProps) => (props.h ? props.h : '48px')};
  width: ${(props: BaseProps) => (props.w ? props.w : '48px')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '4px')};
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0px')};
`

export const UserAvatar = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  margin-right: 12px;
`
