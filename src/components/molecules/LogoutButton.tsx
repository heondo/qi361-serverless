import React from 'react'
import {OutlinedButton, FadedText} from '@atoms'
import {thunkLogout, useAppDispatch} from '@store'

export function LogoutButton() {
  const dispatch = useAppDispatch()
  return (
    <OutlinedButton
      onPress={() => {
        dispatch(thunkLogout())
      }}>
      <FadedText>LOGOUT</FadedText>
    </OutlinedButton>
  )
}
