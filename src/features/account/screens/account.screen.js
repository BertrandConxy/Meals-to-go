import React from 'react'
import AccountBackground, {
  AccountContainer,
  AnimationContainer,
  AuthButton,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'
import LottieView from 'lottie-react-native'

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          style={{ width: 400, height: 400 }}
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationContainer>
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
