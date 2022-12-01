import React, { useContext, useState } from 'react'
import { LocationContext } from '../../../services/location/location.context'
import { Searchbar } from 'react-native-paper'

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  return (
    <Searchbar placeholder="Search query" elevation={2} value={searchKeyword} />
  )
}

export default SearchComponent
