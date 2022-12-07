import React from 'react'
import { colors } from '../../../infrastructure/theme/colors'
import styled from 'styled-components/native'
import { Button } from 'react-native-paper'

const ImageBg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  width: 100%;
  height: 100%;
`

const Cover = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`

const AccountBackground = ({ children }) => {
  return (
    <ImageBg source={require('../../../../assets/home_bg.jpg')}>
      <Cover />
      {children}
    </ImageBg>
  )
}

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`

export default AccountBackground