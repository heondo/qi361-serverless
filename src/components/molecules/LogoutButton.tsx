import React from 'react'
import {TouchableOpacity, Text} from '@atoms'
import styled from 'styled-components'
import {thunkLogout, useAppDispatch} from '@store'

const LogoutText = styled(Text)`
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.lightgray};
`

const Button = styled(TouchableOpacity)`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 6px;
`

export function LogoutButton() {
  const dispatch = useAppDispatch()
  return (
    <Button
      onPress={() => {
        dispatch(thunkLogout())
      }}>
      <LogoutText>LOGOUT</LogoutText>
    </Button>
  )
}
