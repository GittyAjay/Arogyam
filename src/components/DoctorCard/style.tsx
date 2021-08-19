import { StyleSheet, Text, View } from 'react-native'
import { GREY, BLUE_SHADE, YELLOW } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, Dimension, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: DEFAUTL_SPACE,
        alignItems: 'center',
        height: 100,
        borderRadius: BORDER_RADIUS,
        borderColor: BLUE_SHADE,
        borderWidth: BORDER_WIDTH,
        backgroundColor: BLUE_SHADE
    }
})