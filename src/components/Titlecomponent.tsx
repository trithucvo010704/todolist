// component de luu title cho homescreen 


import { View, Text } from 'react-native' 
import React from 'react'
import TextComponent from './Textcomponent';
import { fontFamilies } from '../constants/fontFamilies';
import { colors } from '../constants/colors';

interface Props {
    text : string , 
    font ?: string , 
    size ?: number,
    color ?: string , 
}

const Titlecomponent = (props : Props) => {

    const{text ,font , size , color } = props ;
  return (
    <TextComponent 
        size = {size ?? 20} 
        font ={font ?? fontFamilies.semi_bold}
        color = {color ?? colors.desc } 
        text ={text}    
    />
  )
}

export default Titlecomponent