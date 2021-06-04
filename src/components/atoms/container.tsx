import styled from 'styled-components/native'
import colors from '../../constants/colors'
import {BaseProps} from '../../types/styled'

export const View = styled.View`
  width: ${(props: BaseProps) => (props.width ? props.width : 'auto')};
  height: ${(props: BaseProps) => (props.height ? props.height : 'auto')};
`

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: BaseProps) => props.theme.colors.primary};
`
