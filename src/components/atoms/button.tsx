import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  width: ${(props: {width?: string}) => (props.w ? props.w : '100%')};
  color: black;
`
