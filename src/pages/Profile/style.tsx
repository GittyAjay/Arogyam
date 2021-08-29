import { StyleSheet } from 'react-native'
import { WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        paddingVertical: DEFAUTL_SPACE
    },
})