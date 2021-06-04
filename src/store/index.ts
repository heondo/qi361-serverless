import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './auth/authSlice'
import {counterReducer} from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
})

export * from './auth/authSlice'
export * from './counter/counterSlice'
export * from './hooks'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, auths: authsState}
export type AppDispatch = typeof store.dispatch
