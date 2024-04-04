
// de chua noi dung tung dong khac nhau mot khoang trang nhu hinh 
import { View, Text } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props  {
    children: ReactNode ,  
}
const Sectioncomponent = (props: Props) => {
    const{children} = props 
  return (
    <View style ={[globalStyles.section]}>
      {children}
    </View>
  )
}

export default Sectioncomponent