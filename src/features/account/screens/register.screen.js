import React from 'react'
import AccountBackground, {
  AccountContainer,
  AuthButton,
} from '../components/account.style'

const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountContainer>
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

export default RegisterScreen
