import { View, Text } from 'react-native'
import React from 'react'
interface Props  {
    width ?: number , 
    height ?: number
}
const SpaceComponent = (props :Props) => {

    const {height, width} = props 
  return (
    <View style = {{width,height}}/>
  )
}

export default SpaceComponent