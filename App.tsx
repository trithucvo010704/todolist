import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { fontFamilies } from './src/constants/fontfamilies';

const App = () => {
  return (
    <View style = {styles.container}>
      <Text
        style = {{
          color: '#fafafa',
          fontSize : 18,
          fontFamily: fontFamilies.bold ,
        }}>
          Welcome to my first app 
      </Text>
      <Text style = {styles.title}> ToDo List </Text> 
      <Button title="HELLO" onPress ={() =>{}} />

    </View>
  );
};

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title :{
    fontFamily : fontFamilies.bold , 
    // fontWeight: '800',
    fontSize : 32,
    color: '#fff',
  
  },
});




