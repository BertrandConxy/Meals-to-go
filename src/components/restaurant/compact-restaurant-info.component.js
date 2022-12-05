import React from 'react'
import { Text } from '../typography/text.component'
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview'
import { Platform } from 'react-native'

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`
const CompactWebView = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`

const isAndroid = Platform.OS === 'android'

const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactImage : CompactWebView
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  )
}

export default CompactRestaurantInfo
