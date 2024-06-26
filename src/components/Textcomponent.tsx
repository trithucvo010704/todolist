// de sua chu do phai moi lan minh goi view thi minh phai sua 
import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilies } from '../constants/fontFamilies';
import { colors } from '../constants/colors';
interface Props {
    text: string,
    size?: number,
    font?: string,
    color?: string,
    flex ?: number ,
    styles ?: StyleProp<TextStyle>
};
const TextComponent = (props: Props) => {
    const { text, size, font, color ,flex,styles } = props;


    return (
        <Text style={[globalStyles.text,{
            fontFamily : font ?? fontFamilies.semi_bold ,
            fontSize  :size ?? 14 , 
            color : color ?? colors.text ,
            flex : flex ?? 1 ,
        },
        styles,
        ]}>
            {text}
        </Text>
    )
}

export default TextComponent