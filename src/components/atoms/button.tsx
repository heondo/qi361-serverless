import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  width: ${(props: {width?: string}) => (props.width ? props.width : '100%')};
  color: black;
`
