import React, { useState } from 'react'
import { List } from 'react-native-paper'

const MenuList = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(true)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  const handleExpanded = (expanded, setExpanded) => {
    setExpanded(!expanded)
  }
  return (
    <List.Section title="Menu">
      <List.Accordion
        title="Breakfast"
        titleStyle={{ color: 'tomato' }}
        left={(props) => (
          <List.Icon {...props} color="tomato" icon="bread-slice" />
        )}
        expanded={breakfastExpanded}
        onPress={() => handleExpanded(breakfastExpanded, setBreakfastExpanded)}
      >
        <List.Item title="Bibingka waffles" />
        <List.Item title="Doughnut muffins" />
        <List.Item title="French Toast waffles" />
        <List.Item title="Granola scones" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        titleStyle={{ color: 'tomato' }}
        left={(props) => (
          <List.Icon {...props} color="tomato" icon="food-fork-drink" />
        )}
        expanded={lunchExpanded}
        onPress={() => handleExpanded(lunchExpanded, setLunchExpanded)}
      >
        <List.Item title="Cheese burger" />
        <List.Item title="Creamy White Chili" />
        <List.Item title="Cool Beans Salad" />
        <List.Item title="Chicken Pasta Salad" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        titleStyle={{ color: 'tomato' }}
        left={(props) => (
          <List.Icon {...props} color="tomato" icon="food-turkey" />
        )}
        expanded={dinnerExpanded}
        onPress={() => handleExpanded(dinnerExpanded, setDinnerExpanded)}
      >
        <List.Item title="Garlic-Butter Salmon Bites" />
        <List.Item title="Pasta Napolitana" />
        <List.Item title="Zucchini Pizza Casserole" />
        <List.Item title="Classic Beef Stew" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        titleStyle={{ color: 'tomato' }}
        left={(props) => <List.Icon {...props} color="tomato" icon="cup" />}
        expanded={drinksExpanded}
        onPress={() => handleExpanded(drinksExpanded, setDrinksExpanded)}
      >
        <List.Item title="Mojito" />
        <List.Item title="Daiquiri" />
        <List.Item title="Smoothies" />
        <List.Item title="Coffee" />
      </List.Accordion>
    </List.Section>
  )
}

export default MenuList
