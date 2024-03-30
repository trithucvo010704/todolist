import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : colors.bgColor,
    },
    text: {
        fontSize : 14 , 
        fontFamily: fontFamilies.bold ,
        color: colors.text ,
    }
})