import { StyleSheet } from 'react-native'
import { BLACK, GREY, WHITE, YELLOW } from '../../assets/colors'
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
        backgroundColor: WHITE,
        overflow: 'hidden'
    }
})