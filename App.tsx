import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title} > My List </Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title :{
    fontWeight :'800' ,
    fontSize : 32,
    color: '#fff',
  
  },
});




