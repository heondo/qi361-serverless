import React from 'react'
import styled from 'styled-components/native'
import {Container, Text} from '@atoms'
import {colors} from '@constants'

type Props = {
  message?: string | null
}

const Overlay = styled(Container)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray['900']};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 2;
`

const LoadingCircle = styled.ActivityIndicator`
  /* color: blue; */
  z-index: 3;
  /* background-color: white; */
`

export function LoadingOverlay({message = 'Loading...'}: Props) {
  return (
    <Overlay pos="absolute" h="100%" w="100%">
      <LoadingCircle size={60} color={colors.cyan['600']} />
      <Text>{message}</Text>
    </Overlay>
  )
}
