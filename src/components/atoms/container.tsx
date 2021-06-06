import styled from 'styled-components/native'
import {BaseProps} from '@types'

export const View = styled.View`
  width: ${(props: BaseProps) => (props.w ? props.w : 'auto')};
  height: ${(props: BaseProps) => (props.h ? props.h : 'auto')};
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '0')};
`

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ScreenContainer = styled(Container)`
  background-color: ${(props: BaseProps) => props.theme.colors.primary};
`

export const MenuContainer = styled(View)`
  height: 100%;
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props: BaseProps) => props.theme.colors.primary};
`
