import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, FONT_LARGE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { BLACK, GREY, PRIMARY, SHADE, WHITE } from '../../assets/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    options: {
        height: 100,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: PRIMARY,
        backgroundColor: PRIMARY,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnStyle: {

    },
    radio__box: {
        height: 80,
        borderRadius: BORDER_RADIUS,
        borderColor: SHADE,
        backgroundColor: SHADE,
        marginTop: DEFAUTL_SPACE,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    radio__btn: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: WHITE,
        width: 20,
        height: 20,
        marginHorizontal: DEFAUTL_SPACE,
        borderColor: PRIMARY,
        borderWidth: BORDER_WIDTH + 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner__radio__btn: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: PRIMARY,
        width: 12,
        height: 12,
        opacity: 0.8,
        marginHorizontal: DEFAUTL_SPACE
    }
})