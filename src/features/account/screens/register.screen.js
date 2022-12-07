import React, { useState, useContext } from 'react'
import { Text } from '../../../components/typography/text.component'
import AccountBackground, {
  AccountContainer,
  ErrorContainer,
  AuthButton,
  AuthInput,
} from '../components/account.style'
import { Spacer } from '../../../components/spacer/spacer.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { onRegister, error } = useContext(AuthenticationContext)
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
        <AuthInput
          label="Confirm Password"
          value={confirmPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setConfirmPassword(p)}
        />
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            onRegister(email, password, confirmPassword)
          }}
        >
          Register
        </AuthButton>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
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

export default RegisterScreen
