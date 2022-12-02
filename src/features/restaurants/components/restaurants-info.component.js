import React from 'react'
import { Card } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import {
  CardListView,
  RatingContainer,
  RowContainer,
  IconImage,
} from './restaurants-info.styles'

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <CardListView>
      <Card elevation={2} mode="elevated">
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Text variant="title">{name}</Text>
          <RatingContainer>
            {rating && (
              <RowContainer>
                {ratingArray.map((_, index) => (
                  <SvgXml
                    xml={star}
                    key={`star-${placeId}-${index}`}
                    width={20}
                    height={20}
                  />
                ))}
              </RowContainer>
            )}
            <RowContainer>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="medium" />
              {icon && <IconImage source={{ uri: icon }} />}
            </RowContainer>
          </RatingContainer>
          <Text variant="label">{address}</Text>
        </Card.Content>
      </Card>
    </CardListView>
  )
}

export default RestaurantInfo
