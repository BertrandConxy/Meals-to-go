import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log('user', user)
    return user
  } catch (error) {
    throw error
  }
}
