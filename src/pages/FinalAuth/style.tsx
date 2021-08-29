import { StyleSheet } from 'react-native'
import { BLACK, WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes';

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
        justifyContent: 'center',
        alignItems: 'center'
    },
})