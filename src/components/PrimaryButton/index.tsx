import React from 'react'
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID } from '../../assets/sizes';
interface props {
    title: string,
    onPress: () => void,
    button_style: {},
    text_style: {}
}
const index: React.FC<props> = ({ title, onPress, button_style, text_style }) => {
    return (
        <TouchableOpacity testID="btn" style={[styles.button, button_style]} onPress={onPress}>
            <Text testID="btn-text" style={[styles.text_style, text_style]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index;
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: DEFAUTL_SPACE
    },
    text_style: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: FONT_MID
    }
})
