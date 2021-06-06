import React from 'react'
import styled from 'styled-components/native'
import {IconProps} from 'react-native-vector-icons/Icon'
import {default as RNVI} from 'react-native-vector-icons/AntDesign'

import {BaseProps} from '@types'
import {ThemeContainer} from './layout'

interface Props extends IconProps {
  name: string
  w?: string
  h?: string
  mg?: string
  pd?: string
}

export const Icon = function (props: Props) {
  return <Component {...props} color={props.color ? props.color : 'white'} />
}

const Component = styled(RNVI)`
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '0')};
`
