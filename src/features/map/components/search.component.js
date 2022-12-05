import React, { useContext, useState, useEffect } from 'react'
import { LocationContext } from '../../../services/location/location.context'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 30px;
`

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  const handleSubmit = () => {
    search(searchKeyword)
  }

  const handleChange = (search) => {
    setSearchKeyword(search)
  }

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search Location"
        elevation={2}
        icon="map"
        value={searchKeyword}
        onSubmitEditing={handleSubmit}
        onChangeText={handleChange}
      />
    </SearchContainer>
  )
}

export default SearchComponent
