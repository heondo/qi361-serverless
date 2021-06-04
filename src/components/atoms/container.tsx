import styled from 'styled-components/native'
import {BaseProps} from '../../types/styled'
import {Col} from './layout'

export const View = styled.View`
  width: ${(props: BaseProps) => (props.width ? props.width : 'auto')};
  height: ${(props: BaseProps) => (props.height ? props.height : 'auto')};
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

export const SettingsContainer = styled(View)`
  height: 100%;
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props: BaseProps) => props.theme.colors.primary};
`
