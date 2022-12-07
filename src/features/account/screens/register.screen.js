import React from 'react'
import AccountBackground, {
  AccountContainer,
  AuthButton,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'

const RegisterScreen = ({ navigation }) => {
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
      <Spacer size="large" />
      <AuthButton
        icon="arrow-left-bold"
        mode="contained"
        onPress={() => {
          navigation.goBack()
        }}
      >
        Back
      </AuthButton>
    </AccountBackground>
  )
}

export default RegisterScreen
