import { View, Text, ScrollView } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';
interface Props{
    title?: string ; 
    back?: boolean ; 
    right?: ReactNode ; 
    children : ReactNode ; 
}
const container = (props :Props ) => {
    const{title , back ,right , children} = props ; 
  return (
    <ScrollView style ={[globalStyles.container]}>
        
      {
        children
      }
    </ScrollView>
  ) 
};

export default container