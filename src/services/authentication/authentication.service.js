import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    throw error
  }
}

export const register = async (email, password, confirmPassword) => {
  try {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match')
    }
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    throw error
  }
}
