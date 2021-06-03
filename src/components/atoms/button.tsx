import * as React from 'react'
import {Button, ButtonProps} from 'react-native-elements'
import styled from 'styled-components/native'

export const PrimaryButton = (props: ButtonProps) => {
  return <Button raised {...props} />
}

export const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`
