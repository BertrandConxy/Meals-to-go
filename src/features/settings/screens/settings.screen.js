import React, { useContext, useEffect, useState } from 'react'
import { List, Avatar } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styled from 'styled-components/native'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

const AvatarContainer = styled.View`
  align-items: center;
`

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)
  const [photo, setPhoto] = useState(null)

  const getPhoto = async () => {
    const photo = await AsyncStorage.getItem(`@photo-${user.uid}`)
    setPhoto(photo)
  }

  useFocusEffect(() => {
    getPhoto()
  })

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {photo ? (
            <Avatar.Image size={180} source={{ uri: photo }} />
          ) : (
            <Avatar.Icon size={180} icon="account" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
        <Spacer position="bottom" size="large" />
      </AvatarContainer>
      <List.Section>
        <List.Item
          title="Favorites"
          titleStyle={{ fontWeight: 'bold' }}
          description="View your favorite restaurants"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <List.Item
          title="Logout"
          titleStyle={{ fontWeight: 'bold' }}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  )
}

export default SettingsScreen
