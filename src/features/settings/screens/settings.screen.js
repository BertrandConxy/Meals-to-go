import React, { useContext } from 'react'
import { List, Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
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
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Avatar.Icon size={150} icon="account" backgroundColor="#2182BD" />
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
