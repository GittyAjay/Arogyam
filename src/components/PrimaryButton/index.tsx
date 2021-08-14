import React from 'react'
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONT_MID } from '../../assets/sizes';
interface props {
    title: string,
    onPress: () => void,
    button_style: {},
    text_style: {}
}
const index: React.FC<props> = ({ title, onPress, button_style, text_style }) => {
    return (
        <TouchableOpacity style={[styles.button, button_style]} onPress={onPress}>
            <Text style={[styles.text_style, text_style]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index;
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_style: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: FONT_MID
    }
})
