import styled from 'styled-components/native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { Image, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'

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
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  const CardListView = styled.View`
    margin-top: ${(props) => props.theme.space[3]};
    flex: 1;
    flex-grow: 1;
  `

  const TitleText = styled(Title)`
    padding-top: ${(props) => props.theme.space[3]};
    font-family: ${(props) => props.theme.fonts.heading};
  `
  const ParagraphText = styled(Paragraph)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `

  const RatingContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
  `

  const RowContainer = styled.View`
    flex-direction: row;
  `
  const Spacer = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
  `

  const TextRed = styled.Text`
    color: ${(props) => props.theme.colors.ui.error};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `

  return (
    <CardListView>
      <Card elevation={2} mode="elevated">
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <TitleText>{name}</TitleText>
          <RatingContainer>
            {rating && (
              <RowContainer>
                {ratingArray.map((i, index) => (
                  <SvgXml xml={star} key={index} width={20} height={20} />
                ))}
              </RowContainer>
            )}
            <RowContainer>
              {isClosedTemporarily && <TextRed>CLOSED TEMPORARILY</TextRed>}
              <Spacer />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer />
              {icon && (
                <Image
                  source={{ uri: icon }}
                  style={{ width: 20, height: 20 }}
                />
              )}
            </RowContainer>
          </RatingContainer>
          <ParagraphText>{address}</ParagraphText>
        </Card.Content>
      </Card>
    </CardListView>
  )
}

export default RestaurantInfo
