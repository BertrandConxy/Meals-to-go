import React from 'react'
import AccountBackground, {
  AccountContainer,
  AuthButton,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'
import LottieView from 'lottie-react-native'

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            navigation.navigate('Login')
          }}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            navigation.navigate('Register')
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen
