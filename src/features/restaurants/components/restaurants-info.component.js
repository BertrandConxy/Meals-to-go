import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant

  const CardListView = styled.View`
      marginTop: ${(props) => props.theme.space[3]};
      flex: 1;
      flex-grow: 1;
    `;

  const TitleText = styled(Title)`
      paddingTop: ${(props) => props.theme.space[3]};
      font-family: ${(props) => props.theme.fonts.heading};
    `;
  const ParagraphText = styled(Paragraph)`
      font-family: ${(props) => props.theme.fonts.body};
      font-size: ${(props) => props.theme.fontSizes.caption};
    `;

  return (
    <CardListView>
      <Card elevation={5} mode='contained' >
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <TitleText>{name}</TitleText>
          <ParagraphText>{address}</ParagraphText>
        </Card.Content>
      </Card>
    </CardListView>
  )
}

export default RestaurantInfo

