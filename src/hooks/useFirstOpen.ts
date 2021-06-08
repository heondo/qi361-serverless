import AsyncStorage from '@react-native-community/async-storage'
import {useEffect, useState} from 'react'

export function useFirstLaunch() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false)

  useEffect(() => {
    // check storage, if first time no value found and set isFirstLaunch to true
    const checkFirst = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched')
      if (!hasLaunched) {
        setIsFirstLaunch(true)
      }
    }
    checkFirst()
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
