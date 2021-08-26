import { StyleSheet } from 'react-native'
import { BLACK, GREY, SECONDARY, WHITE, YELLOW } from '../../assets/colors'
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        overflow: 'hidden'
    },
    addToCart: { flex: 1, alignItems: 'center', height: 30, borderWidth: BORDER_WIDTH, borderColor: SECONDARY, borderStyle: 'solid', margin: DEFAUTL_SPACE / 2, borderRadius: BORDER_RADIUS, justifyContent: 'center' },
    prodElement: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }
})