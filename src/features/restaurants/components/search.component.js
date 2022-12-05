import React, { useContext, useState } from 'react'
import { LocationContext } from '../../../services/location/location.context'
import { Searchbar } from 'react-native-paper'

const SearchComponent = ({ isToggled, handleToggle }) => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  const handleSubmit = () => {
    search(searchKeyword)
  }

  const handleChange = (search) => {
    setSearchKeyword(search)
  }

  return (
    <Searchbar
      icon={isToggled ? 'heart' : 'heart-outline'}
      onIconPress={() => handleToggle()}
      placeholder="Search Location"
      elevation={2}
      value={searchKeyword}
      onSubmitEditing={handleSubmit}
      onChangeText={handleChange}
    />
  )
}

export default SearchComponent
