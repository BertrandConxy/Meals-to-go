import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const FavoritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
export const NoFavoritesArea = styled.View`
  align-items: center;
  justify-content: center;
`

export const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``
