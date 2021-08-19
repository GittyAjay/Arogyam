import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DEFAUTL_SPACE, FONT_MID } from '../../assets/sizes';
import { PRIMARY } from '../../assets/colors';

export const styles = StyleSheet.create({
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