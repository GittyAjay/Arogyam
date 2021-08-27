import { StyleSheet } from 'react-native'
import { PRIMARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, FONT_LARGE, FONT_MID, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        paddingBottom: DEFAUTL_SPACE,
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE,
        marginVertical: DEFAUTL_SPACE
    },
    cartIcon: { width: 20, height: 20, borderRadius: BORDER_RADIUS_CIRCULAR, backgroundColor: 'red', position: 'absolute', bottom: -15, justifyContent: 'center', alignItems: 'center' },
    header: {
        fontSize: FONT_LARGE,
        color: WHITE,
        fontFamily: 'Nunito-SemiBold',
    },
    normal: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular',
        color: WHITE
    }
})