import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'

// packages import
import { v4 as uuid } from 'uuid'
import AddItem from './components/AddItem'

// components import
import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {

  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Carrots' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Mughlai Chicken' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }])
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  textList: {
    color: 'black'
  }
})