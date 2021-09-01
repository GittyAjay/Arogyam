import { BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes';
import { BLACK, GREY, WHITE } from '../../assets/colors';
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        paddingVertical: DEFAUTL_SPACE
    },
    signup__form: {
        alignSelf: 'stretch',
    },
    bottom__text: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otp__form: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: INLINE_GAP
    },
    otp__box: {
        width: 50,
        height: 50,
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
        marginRight: DEFAUTL_SPACE,
        color: BLACK
    },
    bottom: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})