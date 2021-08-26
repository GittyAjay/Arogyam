import React from 'react'
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { PRIMARY } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID } from '../../assets/sizes';
import { styles } from './style'
interface props {
    title: string,
    onPress: () => void,
    button_style?: ViewStyle,
    text_style?: ViewStyle
}
const index: React.FC<props> = ({ title, onPress, button_style, text_style }) => {
    return (
        <TouchableOpacity testID="btn" style={[styles.button, button_style]} onPress={onPress}>
            <Text testID="btn-text" style={[styles.text_style, text_style]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index;

