import React from 'react'
import AccountBackground, {
  AccountContainer,
  AuthButton,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'

const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {}}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton icon="email" mode="contained" onPress={() => {}}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen
