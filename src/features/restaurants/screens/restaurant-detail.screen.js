import React from 'react'
import RestaurantInfo from '../components/restaurants-info.component'
import MenuList from '../components/menu-list.component'
import { SafeArea } from '../../../components/utils/safe-area.component'
import styled from 'styled-components'

const DetailsContainer = styled.ScrollView`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params
  return (
    <SafeArea>
      <DetailsContainer>
        <RestaurantInfo restaurant={restaurant} />
        <MenuList />
      </DetailsContainer>
    </SafeArea>
  )
}

export default RestaurantDetail
