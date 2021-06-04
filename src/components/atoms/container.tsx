import styled from 'styled-components/native'
import colors from '../../constants/colors'
import {BaseProps} from '../../types/styled'

export const View = styled.View`
  width: ${(props: BaseProps) => (props.width ? props.width : 'auto')};
  height: ${(props: BaseProps) => (props.height ? props.height : 'auto')};
`

export const ListBadgeContainer = styled(View)`
  padding: 8px;
  width: 45px;
  height: 45px;
  margin: ${(props: BaseProps) =>
    props.position === 'right' ? '0 0 0 14px' : '0 14px 0 0'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.gray['700']};
`
