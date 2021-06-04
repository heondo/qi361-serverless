import {createSlice} from '@reduxjs/toolkit'
import {User} from '../../types/auth'

export interface UserState {
  isLoading: boolean
  loadingMessage: boolean
  error: string | null
  user: null | User // TODO create user type
}

// Define the initial state using that type
const initialState: UserState = {
  isLoading: false,
  loadingMessage: false,
  error: null,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1
    },
    login: (state, action) => {
      console.log(state, action)
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, login, incrementByAmount} = userSlice.actions

export const userReducer = userSlice.reducer
