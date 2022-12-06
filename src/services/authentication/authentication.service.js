import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

export const login = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
  return user
}
