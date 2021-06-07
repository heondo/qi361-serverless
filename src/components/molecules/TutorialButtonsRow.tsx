import React from 'react'
import styled from 'styled-components/native'
import {EmptySpace, Row, Text, TouchableOpacity} from '@atoms'

const BottomRow = styled(Row)`
  position: absolute;
  bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
`

type Props = {
  index: number
  maxIndex: number
  handleNext: () => void
  handlePrev: () => void
  handleClose: () => void
}

const Button = styled(TouchableOpacity)`
  padding: 6px;
`

export function TutorialButtonsRow({
  index,
  maxIndex,
  handleNext,
  handlePrev,
  handleClose,
}: Props) {
  return (
    <BottomRow>
      {!index ? null : (
        <Button onPress={handlePrev}>
          <Text>Prev</Text>
        </Button>
      )}
      <EmptySpace />
      {index === maxIndex ? (
        <Button onPress={handleClose}>
          <Text>Done</Text>
        </Button>
      ) : (
        <Button onPress={handleNext}>
          <Text>Next</Text>
        </Button>
      )}
    </BottomRow>
  )
}
