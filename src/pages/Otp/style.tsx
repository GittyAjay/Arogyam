import { StyleSheet } from 'react-native'
import { GREY, WHITE } from '../../assets/colors';
import { BORDER_WIDTH, DEFAUTL_SPACE, FONT_LARGE, FONT_SMALL, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    otp__container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    form: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: INLINE_GAP
    },
    otp__form: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: INLINE_GAP
    },
    bottom: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})