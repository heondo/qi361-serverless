import * as React from 'react'
import {Button, ButtonProps} from 'react-native-elements'
import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  color: black;
`
