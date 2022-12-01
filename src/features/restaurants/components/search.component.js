import React, { useContext, useState, useEffect } from 'react'
import { LocationContext } from '../../../services/location/location.context'
import { Searchbar } from 'react-native-paper'

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  const handleSubmit = () => {
    search(searchKeyword)
  }

  const handleChange = (search) => {
    setSearchKeyword(search)
  }

  useEffect(() => {
    search(searchKeyword)
  }, [])

  return (
    <Searchbar
      placeholder="Search Location"
      elevation={2}
      value={searchKeyword}
      onSubmitEditing={handleSubmit}
      onChangeText={handleChange}
    />
  )
}

export default SearchComponent
