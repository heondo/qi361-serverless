import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {firebaseConfig} from '../../static/secrets/firebase'

GoogleSignin.configure({
  webClientId: firebaseConfig.webClientId,
})

export const onGoogleButtonPress = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    return auth().signInWithCredential(googleCredential)
  } catch (err) {
    console.error(err)
  }
}
