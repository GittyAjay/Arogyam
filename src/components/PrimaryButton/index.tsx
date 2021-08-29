import React from 'react'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { WHITE } from '../../assets/colors'
import { globalstyles } from '../../globalcss'
import { styles } from './style'
interface props {
    title: string,
    onPress: () => void,
    button_style?: ViewStyle,
    text_style?: TextStyle
}
const index: React.FC<props> = ({ title, onPress, button_style, text_style }) => {
    return (
        <TouchableOpacity testID="btn" style={[styles.button, button_style]} onPress={onPress}>
            <Text testID="btn-text" style={[globalstyles.button__text, text_style, { color: WHITE }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index;

