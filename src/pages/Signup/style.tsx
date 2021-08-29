import { DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes';
import { BLACK, WHITE } from '../../assets/colors';
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
    form: {
        alignSelf: 'stretch',
    },
    bottom__text: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})