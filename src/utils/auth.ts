import {User} from '../types/auth'

export const cleanUserObject = (user: any): User | null => {
  //   console.log(user)
  if (!user) return null
  return {
    uid: user.uid,
    name: user.name,
    email: user.email,
    photoURL: user.photoURL,
    creationDate: user.metadata.creationTime,
  }
}
