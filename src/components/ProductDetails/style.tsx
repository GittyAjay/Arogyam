import { StyleSheet } from 'react-native'
import { SECONDARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        overflow: 'hidden',
        elevation: 1,
        padding: DEFAUTL_SPACE
    },
    addToCart: { alignItems: 'center', height: 30, borderWidth: BORDER_WIDTH, borderColor: SECONDARY, borderStyle: 'solid', borderRadius: BORDER_RADIUS, justifyContent: 'center' },
    prodElement: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }
})