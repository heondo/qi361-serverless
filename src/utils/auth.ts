import {User} from '@types'

export const cleanUserObject = (user: any): User | null => {
  if (!user) return null
  return {
    uid: user.uid,
    name: user.name,
    email: user.email,
    photoURL: user.photoURL,
    authProvider: user.providerData[0].providerId,
    creationDate: user.metadata.creationTime,
  }
}
