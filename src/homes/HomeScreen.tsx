import { View, Text } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilies } from '../constants/fontFamilies'

const HomeScreen = () => {
  return ( 
    <Container >
      {/* <text style = {globalStyles.text}>fafa</text>
      <text style = {globalStyles.text}>fafa</text>
      <text style = {globalStyles.text}>fafa</text>
      <text style = {globalStyles.text}>fafa</text>
      <text style = {globalStyles.text}>fafa</text>
      <text style = {globalStyles.text}>fafa</text>  */}
    <view>
      <view
        style={{
          flex: 1,
          backgroundColor: 'coral'  , 
          margin :10, 
          width:'20%' , 
          height :20 , 

        }}  
      /> 
      <view
        style={{
          flex: 1,
          backgroundColor: 'coral'  , 
          margin :10, 
          width:'20%' , 
          height :20 , 

        }}  
      /> 
      <view
        style={{
          flex: 1,
          backgroundColor: 'coral'  , 
          margin :10, 
          width:'20%' , 
          height :20 , 

        }}  
      /> 
      <view
        style={{
          flex: 1,
          backgroundColor: 'coral'  , 
          margin :10, 
          width:'20%' , 
          height :20 , 

        }}  
      /> 
    </view>
    </Container>

  )
}

export default HomeScreen