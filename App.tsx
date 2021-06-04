import React from 'react'
import {Provider} from 'react-redux'

import {MainStackNavigator} from './src/navigations/AppNavigator'
import {store} from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  )
}
