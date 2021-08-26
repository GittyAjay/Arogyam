import { StyleSheet } from 'react-native'
import { SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    imageThumbnail: {
        position: 'relative'
    },
    sliderNumber: {
        width: 50, height: 50, backgroundColor: WHITE, elevation: 5, justifyContent: 'center', alignItems: 'center', borderRadius: BORDER_RADIUS, position: 'absolute', bottom: 0, right: 0, margin: DEFAUTL_SPACE
    },
    summary: {
        flexDirection: 'column',
        padding: INLINE_GAP
    },
    heartSymbol: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
    heading: {
        fontWeight: 'bold',
        fontSize: FONT_MID
    },
    description: {
        flexDirection: 'column',
        padding: INLINE_GAP,
        backgroundColor: SHADE,
        margin: INLINE_GAP
    },
    reviews: {
        flexDirection: 'column',
        padding: INLINE_GAP,
    }
})
