import styled from 'styled-components/native'

export const CardListView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  flex: 1;
  flex-grow: 1;
`
export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`

export const RowContainer = styled.View`
  flex-direction: row;
`
export const IconImage = styled.Image`
  width: 20px;
  height: 20px;
`
