import { View } from 'react-native'
import styled, { useTheme } from 'styled-components'

const SizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
}

const PositionVariants = {
  top: 'margin-top',
  left: 'margin-left',
  right: 'margin-right',
  bottom: 'margin-bottom',
}

const getVariant = (position, size, theme) => {
  const sizeIndex = SizeVariants[size]
  const property = PositionVariants[position]
  const value = theme.space[sizeIndex]
  return `${property}:${value}`
}

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`

export const Spacer = ({ position, size, child }) => {
  const theme = useTheme()
  const variant = getVariant(position, size, theme)
  return <SpacerView variant={variant}>{child}</SpacerView>
}
