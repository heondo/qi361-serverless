import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch} from '..'
import {signout} from '@api'
import {User} from '@types'

export interface UserState {
  isLoading: boolean
  loadingMessage: string
  error: string | null
  user: null | User // TODO create user type
}

// Define the initial state using that type
const initialState: UserState = {
  isLoading: false,
  loadingMessage: '',
  error: null,
  user: null,
}

type LoadingPayload = {
  status: boolean
  message?: string
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // redux auth loading state and message
    setAuthLoading: (state, action: PayloadAction<LoadingPayload>) => {
      const {status, message} = action.payload
      state.loadingMessage = message || ''
      if (!status) {
        state.loadingMessage = ''
      }
      state.isLoading = action.payload.status
    },
    setAuthError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    // login reducer
    login: (state, action: PayloadAction<any>) => {
      //   console.log(state, action)
      state.user = action.payload.user
    },
    logout: state => {
      state.user = null
    },
    setUser: (state, action: any) => {
      //   console.log(action.payload)
      state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const {setAuthLoading, setAuthError, login, logout, setUser} =
  authSlice.actions

export const authReducer = authSlice.reducer

// TODO what is the user object being passed in.
export const thunkLogin = (user: User) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAuthError(null))
    dispatch(
      setAuthLoading({
        status: true,
        message: 'logging in',
      }),
    )
    dispatch(login({user}))
    // dispatch(setUser({user}))
    // const userImages = await firebaseService.getUserImages(user.uid)
    // dispatch(
    //   initializeImages({
    //     userImages,
    //   }),
    // )
    dispatch(
      setAuthLoading({
        status: false,
      }),
    )
  } catch (err) {
    dispatch(setAuthError(err.message))
    console.error(err)
  } finally {
    dispatch(
      setAuthLoading({
        status: false,
      }),
    )
  }
}

export const thunkLogout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAuthError(null))
    dispatch(
      setAuthLoading({
        status: true,
        message: 'logging out',
      }),
    )
    await signout()
    dispatch(logout())
    // dispatch(setImagesNull())
    dispatch(
      setAuthLoading({
        status: false,
      }),
    )
  } catch (err) {
    dispatch(setAuthError(err.message))
    console.error(err)
  } finally {
    dispatch(
      setAuthLoading({
        status: false,
      }),
    )
  }
}
