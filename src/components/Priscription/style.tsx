import { StyleSheet, Text, View } from 'react-native'
import { GREY, BLUE_SHADE, YELLOW } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, Dimension, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    priscription: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: INLINE_GAP,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: GREY,
        overflow: 'hidden',
        marginBottom: INLINE_GAP
    },
})