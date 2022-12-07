import React, { useState, useContext } from 'react'
import AccountBackground, {
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const LoginScreen = ({ navigation }) => {
  const { onLogin, error } = useContext(AuthenticationContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            onLogin(email, password)
          }}
        >
          Login
        </AuthButton>
        {error && (
          <ErrorContainer>
            <Text variant="error">Error: {error}</Text>
          </ErrorContainer>
        )}
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

export default LoginScreen
