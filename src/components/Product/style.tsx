import { StyleSheet } from 'react-native'
import { BLACK, GREY, WHITE, YELLOW } from '../../assets/colors'
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    container: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        borderRadius: BORDER_RADIUS
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular'
    }
})