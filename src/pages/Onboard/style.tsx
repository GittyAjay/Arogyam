import { View, Text, StyleSheet, Image, Button, Pressable, TouchableOpacity } from 'react-native'
import { PRIMARY, SECONDARY } from '../../assets/colors';
import { Dimension, DEFAUTL_SPACE, INLINE_GAP, BUTTON_HEIGHT, FONT_MID, FONT_LARGE, FONT_GLARGE, ICON_SIZE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    defaultTxt: {
        fontFamily: 'Museo700-Regular',
    },
    title: {
        fontSize: FONT_LARGE,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: PRIMARY
    },
    button_text: {
        color: 'white',
    }
})