import AsyncStorage from '@react-native-community/async-storage'
import {useEffect, useState} from 'react'

export function useFirstLaunch() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true)

  useEffect(() => {
    const check = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched')
      if (hasLaunched) {
        setIsFirstLaunch(false)
      }
    }
    check()
  }, [])

  const setHasLaunched = () => {
    AsyncStorage.setItem('hasLaunched', 'true')
    setIsFirstLaunch(false)
  }

  return {
    isFirstLaunch,
    setHasLaunched,
  }
}
