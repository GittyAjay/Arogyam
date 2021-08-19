import { StyleSheet } from 'react-native'
import { WHITE, SHADE, PRIMARY } from '../../assets/colors';
import { BORDER_RADIUS, DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: SHADE
    },
    top: {
        backgroundColor: PRIMARY
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: INLINE_GAP,
        marginVertical: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE
    },
    promo__card: {
        height: 200,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBrands: {
        paddingVertical: DEFAUTL_SPACE,
        flexDirection: 'column'
    }
})