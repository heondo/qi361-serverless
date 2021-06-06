import React from 'react'
import {default as RNVI} from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components/native'

import {BaseProps} from '@types'
import {IconProps} from 'react-native-vector-icons/Icon'

interface Props extends IconProps, BaseProps {
  name: string
}

export const Icon = function (props: Props) {
  return <Component {...props} />
}

const Component = styled(RNVI)`
  padding: ${(props: BaseProps) => (props.pd ? props.pd : '0')};
  margin: ${(props: BaseProps) => (props.mg ? props.mg : '0')};
`
